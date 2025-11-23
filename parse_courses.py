import re
import json
from pathlib import Path


ROOT = Path(r"c:\Users\nguye\mngoc\GPAFlow")
DATA_JS_PATH = ROOT / "data.js"


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def is_numeric_token(token: str) -> bool:
    return bool(re.fullmatch(r"\d+(?:[.,]\d+)?", token))


def is_placeholder(text: str) -> bool:
    stripped = re.sub(r"[-–]+", "", text).strip()
    return not stripped or len(stripped) <= 1


text_path = ROOT / "pdf_text.txt"
if not text_path.exists():
    raise SystemExit("Missing pdf_text.txt. Run the PDF extraction step first.")

text = text_path.read_text(encoding="utf-8")
lines = text.splitlines()

start_pattern = re.compile(r"^\s*1\.\s+[A-Z]{2,}\d+")
row_pattern = re.compile(r"^\s*(\d+)\.\s+")
token_code_pattern = re.compile(r"[A-Z]{2,}\d+(?:-[A-Z])?")

blocks = []
current = []
capturing = False
for line in lines:
    if not capturing:
        if start_pattern.match(line):
            capturing = True
        else:
            continue
    if row_pattern.match(line):
        if current:
            blocks.append("\n".join(current))
            current = []
    current.append(line)
if current:
    blocks.append("\n".join(current))

courses = []
code_token_pattern = re.compile(r"^[A-Z]{2,}\d+(?:-[A-Z])?")

for block in blocks:
    block_lines = [ln.rstrip() for ln in block.strip().splitlines() if ln.strip()]
    if not block_lines:
        continue
    first_line = block_lines[0]
    row_match = row_pattern.match(first_line)
    if not row_match:
        continue
    stt = int(row_match.group(1))
    rest = first_line[row_match.end():].strip()
    tokens = rest.split()
    code = None
    name_tokens = []
    number_tokens = []

    if tokens:
        if code_token_pattern.match(tokens[0]):
            code = tokens[0]
            tokens = tokens[1:]
        for token in tokens:
            if number_tokens or is_numeric_token(token):
                number_tokens.append(token)
            else:
                name_tokens.append(token)

    idx = 1
    name_text = clean_text(" ".join(name_tokens))
    name_set = bool(name_text)
    info_lines = []

    while idx < len(block_lines):
        line = block_lines[idx].strip()
        idx += 1
        if not line:
            continue
        tokens_line = line.split()
        has_numeric = any(is_numeric_token(tok) for tok in tokens_line)
        if not name_set and not has_numeric:
            candidate = clean_text(line)
            if is_placeholder(candidate):
                continue
            name_text = candidate
            name_set = True
            continue
        if has_numeric:
            number_tokens.extend(tokens_line)
            continue
        info_lines.append(line)

    if not name_set:
        name_text = "Unknown course"  # fallback label

    if code is None:
        codes_in_block = token_code_pattern.findall(block)
        if codes_in_block:
            code = "/".join(dict.fromkeys(codes_in_block))
        else:
            code = f"STT{stt:03d}"

    digits = []
    digit_indices = []
    for i, token in enumerate(number_tokens):
        if is_numeric_token(token):
            digit_indices.append(i)
            digits.append(int(float(token.replace(",", "."))))

    credits = digits[0] if digits else 0
    prereqs = []
    if digit_indices:
        last_digit_idx = digit_indices[-1]
        trail_tokens = number_tokens[last_digit_idx + 1 :]
        prereqs = [tok.strip(".,;") for tok in trail_tokens if code_token_pattern.match(tok.strip(".,;"))]

    courses.append({
        "stt": stt,
        "code": code,
        "name": name_text,
        "description": clean_text(" ".join(info_lines)),
        "credits": credits,
        "prerequisites": prereqs,
    })

courses.sort(key=lambda c: c["stt"])

schedule_days = [2, 3, 4, 5, 6, 7]
result = []
for idx, course in enumerate(courses):
    duration = 3 if course["credits"] >= 3 else 2
    max_start = 12 - duration + 1
    start_period = (idx * 2) % max_start + 1
    day = schedule_days[idx % len(schedule_days)]
    result.append({
        "id": course["code"].lower().replace("/", "-"),
        "code": course["code"],
        "name": course["name"],
        "credits": course["credits"],
        "lecturer": f"Giảng viên {idx + 1:03d}",
        "time": {"day": day, "start": start_period, "count": duration},
        "info": course["description"],
        "prerequisites": course["prerequisites"],
        "stt": course["stt"],
    })

output_path = ROOT / "khql_courses.json"
output_path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Parsed {len(result)} courses -> {output_path}")


def update_subjects_data(courses_data):
    if not DATA_JS_PATH.exists():
        print("Warning: data.js not found; skipped embedding course data.")
        return

    content = DATA_JS_PATH.read_text(encoding="utf-8")
    start_marker = "const subjectsData = {"
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print("Warning: subjectsData block not found.")
        return

    separator = "};\n\n"
    separator_with_comment = separator + "// Mapping"
    end_idx = content.find(separator_with_comment, start_idx)
    if end_idx == -1:
        print("Warning: Could not locate the end of subjectsData block.")
        return

    before = content[:start_idx]
    after = content[end_idx + len(separator):]

    courses_str = json.dumps(courses_data, ensure_ascii=False, indent=4)
    lines = courses_str.splitlines()
    formatted_lines = []
    for idx, line in enumerate(lines):
        prefix = '    "khql": ' if idx == 0 else "    "
        formatted_lines.append(prefix + line)
    formatted_lines.append('    "cntt": []')
    formatted_lines.append('    "kt": []')

    new_block = "const subjectsData = {\n" + "\n".join(formatted_lines) + "\n};\n\n"
    DATA_JS_PATH.write_text(before + new_block + after, encoding="utf-8")
    print(f"Updated subjectsData in {DATA_JS_PATH.name}")


update_subjects_data(result)
