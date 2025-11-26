// State
let currentMajor = "";
let mySchedule = []; // Array of subject objects

// DOM Elements
const majorSelect = document.getElementById('majorSelect');
const subjectList = document.getElementById('subjectList');
const searchSubject = document.getElementById('searchSubject');
const scheduleGrid = document.getElementById('scheduleGrid');
const creditCount = document.getElementById('creditCount');
const clearScheduleBtn = document.getElementById('clearScheduleBtn');
const scheduleAlert = document.getElementById('scheduleAlert');
const gpaTableBody = document.getElementById('gpaTableBody');
const calculateGPABtn = document.getElementById('calculateGPABtn');
const gpaResult = document.getElementById('gpaResult');
const targetSemesterGPAInput = document.getElementById('targetSemesterGPA');

// --- Initialization ---
function init() {
    // Populate Majors
    majors.forEach(m => {
        const option = document.createElement('option');
        option.value = m.id;
        option.textContent = m.name;
        majorSelect.appendChild(option);
    });

    // Generate Grid Rows (Time slots)
    for (let i = 1; i <= 12; i++) {
        // Label cell
        const label = document.createElement('div');
        label.className = 'schedule-cell flex items-center justify-center text-xs text-gray-500 font-semibold border-r border-b';
        label.textContent = `Tiết ${i}`;
        label.style.gridColumn = '1';
        label.style.gridRow = `${i + 1}`;
        scheduleGrid.appendChild(label);

        // Empty cells for days
        for (let d = 2; d <= 8; d++) {
            const cell = document.createElement('div');
            cell.className = 'schedule-cell border-r border-b';
            cell.style.gridColumn = `${d}`;
            cell.style.gridRow = `${i + 1}`;
            scheduleGrid.appendChild(cell);
        }
    }

    // Event Listeners
    majorSelect.addEventListener('change', handleMajorChange);
    searchSubject.addEventListener('input', filterSubjects);
    clearScheduleBtn.addEventListener('click', clearSchedule);
    calculateGPABtn.addEventListener('click', calculateGPA);
}

// --- Logic ---

function handleMajorChange(e) {
    currentMajor = e.target.value;
    mySchedule = []; // Reset schedule when changing major? Or keep? Let's reset for safety.
    updateScheduleUI();
    renderSubjectList();
}

function renderSubjectList() {
    subjectList.innerHTML = '';
    if (!currentMajor) {
        subjectList.innerHTML = '<p class="text-gray-500 text-center mt-4">Vui lòng chọn ngành.</p>';
        return;
    }

    const subjects = subjectsData[currentMajor] || [];
    const term = searchSubject.value.toLowerCase();

    const filtered = subjects.filter(s => 
        s.name.toLowerCase().includes(term) || 
        s.code.toLowerCase().includes(term)
    );

    if (filtered.length === 0) {
        subjectList.innerHTML = '<p class="text-gray-500 text-center mt-4">Không tìm thấy môn học.</p>';
        return;
    }

    filtered.forEach(sub => {
        const isAdded = mySchedule.some(s => s.id === sub.id);
        const div = document.createElement('div');
        div.className = `p-3 border rounded-md bg-white shadow-sm hover:shadow-md transition flex justify-between items-start ${isAdded ? 'opacity-50 bg-gray-100' : ''}`;
        div.innerHTML = `
            <div>
                <div class="font-bold text-blue-700">${sub.name}</div>
                <div class="text-xs text-gray-500">Mã: ${sub.code} | ${sub.credits} TC</div>
                <div class="text-xs text-gray-600 mt-1"><i class="far fa-clock"></i> ${dayMapping[sub.time.day]}, Tiết ${sub.time.start}-${sub.time.start + sub.time.count - 1} (${getPeriodTime(sub.time.start)}-${getPeriodTime(sub.time.start + sub.time.count - 1)})</div>
                <div class="text-xs text-gray-500 italic mt-1">${sub.lecturer}</div>
            </div>
            <button onclick="addSubject('${sub.id}')" ${isAdded ? 'disabled' : ''} class="text-blue-600 hover:text-blue-800 p-1 disabled:text-gray-400">
                <i class="fas fa-plus-circle fa-lg"></i>
            </button>
        `;
        subjectList.appendChild(div);
    });
}

function filterSubjects() {
    renderSubjectList();
}

window.addSubject = function(subjectId) {
    if (!currentMajor) return;
    const subject = subjectsData[currentMajor].find(s => s.id === subjectId);
    if (subject && !mySchedule.some(s => s.id === subject.id)) {
        mySchedule.push(subject);
        updateScheduleUI();
        renderSubjectList(); // Re-render to disable button
    }
};

window.removeSubject = function(subjectId) {
    mySchedule = mySchedule.filter(s => s.id !== subjectId);
    updateScheduleUI();
    renderSubjectList(); // Re-render to enable button
};

function clearSchedule() {
    if (confirm("Bạn có chắc chắn muốn xóa hết lịch không?")) {
        mySchedule = [];
        updateScheduleUI();
        renderSubjectList();
    }
}

function updateScheduleUI() {
    // 1. Clear existing subject blocks from grid (keep base cells)
    const existingBlocks = document.querySelectorAll('.subject-block');
    existingBlocks.forEach(b => b.remove());

    // 2. Check Conflicts
    const conflicts = checkConflicts();
    
    // 3. Render Schedule Blocks
    mySchedule.forEach(sub => {
        const isConflict = conflicts.includes(sub.id);
        const block = document.createElement('div');
        block.className = `subject-block rounded p-1 text-xs font-semibold text-white overflow-hidden cursor-pointer shadow-sm transition transform hover:scale-105 z-10 flex flex-col justify-center items-center text-center leading-tight ${isConflict ? 'bg-red-500 ring-2 ring-red-700' : 'bg-blue-500 hover:bg-blue-600'}`;
        
        // Grid positioning (no absolute positioning - let grid handle it)
        block.style.gridColumn = `${sub.time.day}`;
        block.style.gridRow = `${sub.time.start + 1} / span ${sub.time.count}`;
        
        block.innerHTML = `
            <span>${sub.name}</span>
            <span class="font-normal text-[10px]">${sub.lecturer}</span>
        `;
        block.title = "Nhấn để xóa";
        block.onclick = () => {
            if(confirm(`Xóa môn ${sub.name} khỏi lịch?`)) {
                removeSubject(sub.id);
            }
        };

        scheduleGrid.appendChild(block);
    });

    // 4. Update Credits
    const totalCredits = mySchedule.reduce((sum, s) => sum + s.credits, 0);
    creditCount.textContent = `${totalCredits} Tín chỉ`;
    if (totalCredits < 15 && totalCredits > 0) {
        creditCount.className = "bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded";
        creditCount.textContent += " (Thiếu TC)";
    } else if (totalCredits > 25) { // Example limit
        creditCount.className = "bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded";
        creditCount.textContent += " (Quá tải)";
    } else {
        creditCount.className = "bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded";
    }

    // 5. Update Alerts
    if (conflicts.length > 0) {
        scheduleAlert.className = "mb-2 p-3 rounded text-sm bg-red-100 text-red-700 border border-red-200 block";
        scheduleAlert.innerHTML = `<i class="fas fa-exclamation-triangle"></i> <strong>Cảnh báo:</strong> Có môn học bị trùng lịch! Vui lòng kiểm tra các ô màu đỏ.`;
    } else {
        scheduleAlert.className = "hidden";
    }

    // 6. Update GPA Table
    renderGPATable();
}

function checkConflicts() {
    const conflictIds = new Set();
    for (let i = 0; i < mySchedule.length; i++) {
        for (let j = i + 1; j < mySchedule.length; j++) {
            const s1 = mySchedule[i];
            const s2 = mySchedule[j];

            if (s1.time.day === s2.time.day) {
                // Check overlap
                const start1 = s1.time.start;
                const end1 = s1.time.start + s1.time.count;
                const start2 = s2.time.start;
                const end2 = s2.time.start + s2.time.count;

                if (start1 < end2 && start2 < end1) {
                    conflictIds.add(s1.id);
                    conflictIds.add(s2.id);
                }
            }
        }
    }
    return Array.from(conflictIds);
}

function renderGPATable() {
    gpaTableBody.innerHTML = '';
    if (mySchedule.length === 0) {
        gpaTableBody.innerHTML = `
            <tr class="bg-white border-b">
                <td colspan="8" class="px-6 py-4 text-center text-gray-400">
                    Chưa có môn học nào được chọn từ TKB.
                </td>
            </tr>`;
        return;
    }

    mySchedule.forEach(sub => {
        const tr = document.createElement('tr');
        tr.className = "bg-white border-b hover:bg-gray-50";
        tr.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                ${sub.name}
            </td>
            <td class="px-6 py-4 text-center">
                ${sub.credits}
            </td>
            <td class="px-6 py-4 text-center">
                <input type="number" step="0.1" min="0" max="10" placeholder="0-10" class="subject-cc-input w-16 p-1 border rounded text-center text-xs [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" style="appearance: textfield;" data-id="${sub.id}" title="Điểm CC (0-10)">
            </td>
            <td class="px-6 py-4 text-center">
                <input type="number" step="0.1" min="0" max="10" placeholder="0-10" class="subject-gk-input w-16 p-1 border rounded text-center text-xs [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" style="appearance: textfield;" data-id="${sub.id}" title="Điểm GK (0-10)">
            </td>
            <td class="px-6 py-4 text-center">
                <input type="number" step="0.1" min="0" max="10" placeholder="0-10" class="subject-ck-input w-16 p-1 border rounded text-center text-xs [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" style="appearance: textfield;" data-id="${sub.id}" title="Điểm CK (0-10)">
            </td>
            <td class="px-6 py-4 text-center" id="target-${sub.id}">
                <select class="subject-target-input w-24 p-1 border rounded text-xs" data-id="${sub.id}">
                    <option value="9.0">A+ (9.0-10)</option>
                    <option value="8.5" selected>A (8.5-8.9)</option>
                    <option value="8.0">B+ (8.0-8.4)</option>
                    <option value="7.0">B (7.0-7.9)</option>
                    <option value="6.5">C+ (6.5-6.9)</option>
                    <option value="5.5">C (5.5-6.4)</option>
                    <option value="5.0">D+ (5.0-5.4)</option>
                    <option value="4.0">D (4.0-4.9)</option>
                </select>
            </td>
            <td class="px-6 py-4 text-center" id="status-${sub.id}">
                <span class="text-gray-400 text-xs">-</span>
            </td>
        `;
        gpaTableBody.appendChild(tr);
    });
}

function calculateGPA() {
    let totalCredits = 0;
    let totalWeightedScore = 0;
    let results = [];
    const weights = { cc: 0.1, gk: 0.3, ck: 0.6 }; // Trọng số: CC 10%, GK 30%, CK 60%

    // Collect data
    mySchedule.forEach(sub => {
        const ccInput = document.querySelector(`.subject-cc-input[data-id="${sub.id}"]`);
        const gkInput = document.querySelector(`.subject-gk-input[data-id="${sub.id}"]`);
        const ckInput = document.querySelector(`.subject-ck-input[data-id="${sub.id}"]`);
        const targetInput = document.querySelector(`.subject-target-input[data-id="${sub.id}"]`);
        
        const cc = ccInput?.value ? parseFloat(ccInput.value) : null;
        const gk = gkInput?.value ? parseFloat(gkInput.value) : null;
        const ck = ckInput?.value ? parseFloat(ckInput.value) : null;
        // Target is already in 10-scale (8.5 for A, 9.0 for A+, etc.)
        const targetScore10 = targetInput ? parseFloat(targetInput.value) : 8.5;

        // Calculate: If user entered CC & GK, calculate required CK
        let prediction = null;
        let requiredCK = null;
        
        if (cc !== null && !isNaN(cc) && gk !== null && !isNaN(gk)) {
            // targetScore10 is already in 10-scale
            // targetScore10 = cc * 0.1 + gk * 0.3 + ck * 0.6
            // ck = (targetScore10 - cc*0.1 - gk*0.3) / 0.6
            const needed = (targetScore10 - cc * weights.cc - gk * weights.gk);
            requiredCK = (needed / weights.ck);
            
            prediction = {
                cc: cc,
                gk: gk,
                requiredCK: Math.max(0, requiredCK).toFixed(1)
            };
        } else if (cc !== null && !isNaN(cc)) {
            // Only CC entered: suggest GK = CK
            const needed = (targetScore10 - cc * weights.cc);
            const ifEqual = needed / (weights.gk + weights.ck);
            
            prediction = {
                cc: cc,
                ifEqual: Math.max(0, ifEqual).toFixed(1)
            };
        }

        // If all three are filled, calculate final score
        let finalScore = null;
        if (cc !== null && gk !== null && ck !== null) {
            finalScore = cc * weights.cc + gk * weights.gk + ck * weights.ck;
            totalCredits += sub.credits;
            totalWeightedScore += (finalScore * sub.credits);
        }

        results.push({
            subject: sub,
            cc,
            gk,
            ck,
            targetScore10,
            prediction,
            requiredCK,
            finalScore
        });
    });

    // Update status cells with predictions
    results.forEach(result => {
        const statusCell = document.getElementById(`status-${result.subject.id}`);
        if (result.requiredCK !== null) {
            // CC and GK provided - show required CK
            statusCell.innerHTML = `<div class="text-xs bg-blue-50 p-2 rounded border border-blue-200">
                <strong>Cần CK ≥</strong><br/>
                <strong>${result.prediction.requiredCK}/10</strong>
            </div>`;
        } else if (result.prediction && result.prediction.ifEqual) {
            // Only CC provided - show GK = CK option
            statusCell.innerHTML = `<div class="text-xs bg-blue-50 p-2 rounded border border-blue-200">
                <strong>Nếu GK = CK:</strong><br/>
                <strong>${result.prediction.ifEqual}/10</strong>
            </div>`;
        } else if (result.finalScore !== null) {
            // All provided - show result
            const finalScore10 = result.finalScore;
            if (finalScore10 >= result.targetScore10) {
                statusCell.innerHTML = `<span class="text-green-600 font-bold text-xs"><i class="fas fa-check"></i> ${finalScore10.toFixed(1)}/10</span>`;
            } else {
                statusCell.innerHTML = `<span class="text-red-600 font-bold text-xs"><i class="fas fa-times"></i> ${finalScore10.toFixed(1)}/10</span>`;
            }
        } else {
            statusCell.innerHTML = '<span class="text-gray-400 text-xs">-</span>';
        }
    });

    // Display Overall Result
    gpaResult.classList.remove('hidden');
    
    // Check if any predictions were made
    const hasAnyPrediction = results.some(r => r.prediction !== null);
    
    if (totalCredits > 0) {
        const calculatedGPA = totalWeightedScore / totalCredits;
        const calcScore4 = (calculatedGPA / 10 * 4);
        
        gpaResult.className = "mt-6 p-4 rounded-lg bg-blue-100 border border-blue-300 text-blue-800";
        gpaResult.innerHTML = `
            <h3 class="font-bold text-lg mb-2"><i class="fas fa-chart-line"></i> Kết quả</h3>
            <p>GPA của bạn là <strong>${calcScore4.toFixed(2)}</strong> (hệ 4) / <strong>${calculatedGPA.toFixed(1)}</strong> (hệ 10).</p>
        `;
    } else if (hasAnyPrediction) {
        gpaResult.className = "mt-6 p-4 rounded-lg bg-blue-100 border border-blue-300 text-blue-800";
        gpaResult.innerHTML = `
            <h3 class="font-bold text-lg mb-2"><i class="fas fa-chart-line"></i> Dự báo</h3>
            <p>Xem các dự báo điểm từng môn ở bên trên.</p>
        `;
    } else {
        gpaResult.className = "mt-6 p-4 rounded-lg bg-yellow-100 border border-yellow-300 text-yellow-800";
        gpaResult.innerHTML = `
            <h3 class="font-bold text-lg mb-2"><i class="fas fa-info-circle"></i> Thông tin</h3>
            <p>Vui lòng nhập ít nhất điểm CC của một môn để dự báo, hoặc nhập đầy đủ CC, GK, CK để tính toán GPA chính xác.</p>
        `;
    }
}

// Convert 10-scale to 4-scale
function convertScore10to4(score10) {
    if (score10 >= 9.0) return 4.0;
    if (score10 >= 8.5) return 4.0;
    if (score10 >= 8.0) return 3.5;
    if (score10 >= 7.0) return 3.0;
    if (score10 >= 6.5) return 2.5;
    if (score10 >= 5.5) return 2.0;
    if (score10 >= 5.0) return 1.5;
    if (score10 >= 4.0) return 1.0;
    return 0;
}

// Get time display for a period
function getPeriodTime(period) {
    if (period >= 1 && period <= 12) {
        const time = periodTimes[period];
        return time.split(' - ')[1]; // Return end time
    }
    return '';
}

// Run init
init();
