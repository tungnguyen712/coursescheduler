// Dữ liệu mẫu cho ứng dụng
const majors = [
    { id: "khql", name: "Khoa học quản lý" },
    { id: "cntt", name: "Công nghệ thông tin" },
    { id: "kt", name: "Kinh tế" }
];

// Thời gian tiết học
const periodTimes = {
    1: "7h00 - 7h50",
    2: "7h55 - 8h45",
    3: "8h50 - 9h40",
    4: "9h50 - 10h40",
    5: "10h45 - 11h35",
    6: "11h40 - 12h30",
    7: "12h45 - 13h35",
    8: "13h40 - 14h30",
    9: "14h35 - 15h25",
    10: "15h35 - 16h25",
    11: "16h30 - 17h20",
    12: "17h25 - 18h15"
};

// Danh sách môn học mẫu cho Khoa học quản lý
// Thời gian: day (2-8, 8 là CN), start (tiết bắt đầu), count (số tiết)
const subjectsData = {
    "khql": [
        {
            "id": "phi1006",
            "code": "PHI1006",
            "name": "Triết học Mác - Lê nin",
            "credits": 3,
            "lecturer": "Giảng viên 001",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 1
        },
        {
            "id": "pec1008",
            "code": "PEC1008",
            "name": "Kinh tế chính trị Mác - Lê nin",
            "credits": 2,
            "lecturer": "Giảng viên 002",
            "time": {
                "day": 3,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 2
        },
        {
            "id": "phi1002",
            "code": "PHI1002",
            "name": "Chủ nghĩa xã hội khoa học",
            "credits": 2,
            "lecturer": "Giảng viên 003",
            "time": {
                "day": 4,
                "start": 5,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 3
        },
        {
            "id": "his1001",
            "code": "HIS1001",
            "name": "Lịch sử Đảng Cộng sản Việt Nam",
            "credits": 2,
            "lecturer": "Giảng viên 004",
            "time": {
                "day": 5,
                "start": 7,
                "count": 2
            },
            "info": "History of Vietnamese Communist Party",
            "prerequisites": [],
            "stt": 4
        },
        {
            "id": "pol1001",
            "code": "POL1001",
            "name": "Tư tưởng Hồ Chí Minh",
            "credits": 2,
            "lecturer": "Giảng viên 005",
            "time": {
                "day": 6,
                "start": 9,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 5
        },
        {
            "id": "thl1057",
            "code": "THL1057",
            "name": "Nhà nước và Pháp luật đại cương",
            "credits": 2,
            "lecturer": "Giảng viên 006",
            "time": {
                "day": 7,
                "start": 11,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 6
        },
        {
            "id": "flf1107-flf1407",
            "code": "FLF1107/FLF1407",
            "name": "Ngoại ngữ B1",
            "credits": 5,
            "lecturer": "Giảng viên 007",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "FLF1107 Tiếng Anh B1 FLF1407 Tiếng Trung Quốc B1",
            "prerequisites": [],
            "stt": 7
        },
        {
            "id": "int1226",
            "code": "INT1226",
            "name": "Tin học cơ sở",
            "credits": 3,
            "lecturer": "Giảng viên 008",
            "time": {
                "day": 3,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 8
        },
        {
            "id": "stt009",
            "code": "STT009",
            "name": "Kĩ năng bổ trợ",
            "credits": 3,
            "lecturer": "Giảng viên 009",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 9
        },
        {
            "id": "stt010",
            "code": "STT010",
            "name": "Giáo dục thể chất",
            "credits": 4,
            "lecturer": "Giảng viên 010",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 10
        },
        {
            "id": "stt011",
            "code": "STT011",
            "name": "Giáo dục quốc phòng - an ninh",
            "credits": 8,
            "lecturer": "Giảng viên 011",
            "time": {
                "day": 6,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 11
        },
        {
            "id": "mns1053",
            "code": "MNS1053",
            "name": "Các phương pháp nghiên cứu",
            "credits": 3,
            "lecturer": "Giảng viên 012",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "khoa học Scientific Research Methods",
            "prerequisites": [],
            "stt": 12
        },
        {
            "id": "his1053",
            "code": "HIS1053",
            "name": "Lịch sử văn minh thế giới",
            "credits": 3,
            "lecturer": "Giảng viên 013",
            "time": {
                "day": 2,
                "start": 5,
                "count": 3
            },
            "info": "STT Mã học phần Học phần Số tín chỉ Số giờ học tập Mã số học phần tiên quyết Lí thuy t1 Thực hành2 Tự học3 History of Worlds Civilizations",
            "prerequisites": [],
            "stt": 13
        },
        {
            "id": "his1056",
            "code": "HIS1056",
            "name": "Cơ sở văn hoá Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 014",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 14
        },
        {
            "id": "soc1051",
            "code": "SOC1051",
            "name": "Xã hội học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 015",
            "time": {
                "day": 4,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 15
        },
        {
            "id": "psy1051",
            "code": "PSY1051",
            "name": "Tâm lí học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 016",
            "time": {
                "day": 5,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 16
        },
        {
            "id": "phi1054",
            "code": "PHI1054",
            "name": "Lôgic học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 017",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "II.2 Các học phần tự chọn 6/18",
            "prerequisites": [],
            "stt": 17
        },
        {
            "id": "ine1014",
            "code": "INE1014",
            "name": "Kinh tế học đại cương",
            "credits": 2,
            "lecturer": "Giảng viên 018",
            "time": {
                "day": 7,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 18
        },
        {
            "id": "evs1001",
            "code": "EVS1001",
            "name": "Môi trường và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 019",
            "time": {
                "day": 2,
                "start": 4,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 19
        },
        {
            "id": "mat1078",
            "code": "MAT1078",
            "name": "Thống kê cho khoa học xã hội",
            "credits": 2,
            "lecturer": "Giảng viên 020",
            "time": {
                "day": 3,
                "start": 6,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 20
        },
        {
            "id": "lin1050",
            "code": "LIN1050",
            "name": "Thực hành văn bản tiếng Việt",
            "credits": 2,
            "lecturer": "Giảng viên 021",
            "time": {
                "day": 4,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 21
        },
        {
            "id": "lib1050",
            "code": "LIB1050",
            "name": "Nhập môn năng lực thông tin",
            "credits": 2,
            "lecturer": "Giảng viên 022",
            "time": {
                "day": 5,
                "start": 10,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 22
        },
        {
            "id": "lit1053",
            "code": "LIT1053",
            "name": "Viết học thuật",
            "credits": 2,
            "lecturer": "Giảng viên 023",
            "time": {
                "day": 6,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 23
        },
        {
            "id": "lit1054",
            "code": "LIT1054",
            "name": "Tư duy sáng tạo và thiết kế ý tưởng",
            "credits": 2,
            "lecturer": "Giảng viên 024",
            "time": {
                "day": 7,
                "start": 3,
                "count": 2
            },
            "info": "Creative thinking and design thinking",
            "prerequisites": [],
            "stt": 24
        },
        {
            "id": "its1051",
            "code": "ITS1051",
            "name": "Hội nhập Quốc tế và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 025",
            "time": {
                "day": 2,
                "start": 5,
                "count": 2
            },
            "info": "International Integration and Development",
            "prerequisites": [],
            "stt": 25
        },
        {
            "id": "pol1053",
            "code": "POL1053",
            "name": "Hệ thống chính trị Việt Nam",
            "credits": 2,
            "lecturer": "Giảng viên 026",
            "time": {
                "day": 3,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 26
        },
        {
            "id": "mns1054",
            "code": "MNS1054",
            "name": "Khởi nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 027",
            "time": {
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 27
        },
        {
            "id": "mns1107",
            "code": "MNS1107",
            "name": "Niên luận",
            "credits": 2,
            "lecturer": "Giảng viên 028",
            "time": {
                "day": 5,
                "start": 11,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 28
        },
        {
            "id": "mns1100",
            "code": "MNS1100",
            "name": "Khoa học quản lí đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 029",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "STT Mã học phần Học phần Số tín chỉ Số giờ học tập Mã số học phần tiên quyết Lí thuy t1 Thực hành2 Tự học3",
            "prerequisites": [],
            "stt": 29
        },
        {
            "id": "mns1105",
            "code": "MNS1105",
            "name": "Lý thuyết hệ thống",
            "credits": 3,
            "lecturer": "Giảng viên 030",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "III.2 Các học phần tự chọn 9/37",
            "prerequisites": [],
            "stt": 30
        },
        {
            "id": "mns3038",
            "code": "MNS3038",
            "name": "Kỹ năng quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 031",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 31
        },
        {
            "id": "psy2031",
            "code": "PSY2031",
            "name": "Tâm lý học quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 032",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PSY1051"
            ],
            "stt": 32
        },
        {
            "id": "tou1100",
            "code": "TOU1100",
            "name": "Đại cương về quản trị kinh doanh",
            "credits": 3,
            "lecturer": "Giảng viên 033",
            "time": {
                "day": 4,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 33
        },
        {
            "id": "pol1052",
            "code": "POL1052",
            "name": "Chính trị học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 034",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 34
        },
        {
            "id": "aro1151",
            "code": "ARO1151",
            "name": "Nhập môn Quản trị văn phòng",
            "credits": 3,
            "lecturer": "Giảng viên 035",
            "time": {
                "day": 6,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 35
        },
        {
            "id": "lib1102",
            "code": "LIB1102",
            "name": "Thông tin phục vụ lãnh đạo và",
            "credits": 3,
            "lecturer": "Giảng viên 036",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "quản lý Information for Leaders and Managers",
            "prerequisites": [],
            "stt": 36
        },
        {
            "id": "soc3006",
            "code": "SOC3006",
            "name": "Xã hội học truyền thông đại",
            "credits": 3,
            "lecturer": "Giảng viên 037",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "chúng và dư luận xã hội Sociology of Mass Communication and Public Opinion",
            "prerequisites": [],
            "stt": 37
        },
        {
            "id": "mns2064",
            "code": "MNS2064",
            "name": "Hành chính học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 038",
            "time": {
                "day": 3,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 38
        },
        {
            "id": "mns3002",
            "code": "MNS3002",
            "name": "Lý thuyết quyết định",
            "credits": 3,
            "lecturer": "Giảng viên 039",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1105"
            ],
            "stt": 39
        },
        {
            "id": "mns1108",
            "code": "MNS1108",
            "name": "Thiết kế tổ chức",
            "credits": 3,
            "lecturer": "Giảng viên 040",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 40
        },
        {
            "id": "mns1109",
            "code": "MNS1109",
            "name": "Chuyển đổi số trong quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 041",
            "time": {
                "day": 6,
                "start": 1,
                "count": 3
            },
            "info": "Digital transformation in management",
            "prerequisites": [],
            "stt": 41
        },
        {
            "id": "flh1155-flh1156",
            "code": "FLH1155/FLH1156",
            "name": "Ngoại ngữ Khoa học Xã hội và",
            "credits": 1,
            "lecturer": "Giảng viên 042",
            "time": {
                "day": 7,
                "start": 6,
                "count": 2
            },
            "info": "FLH1155 Tiếng Anh Khoa học Xã hội và English for Humanities and FLH1156 Tiếng Trung Khoa học Xã hội Chinese Humanities and Social STT Mã học phần Học phần Số tín chỉ Số giờ học tập Mã số học phần tiên quyết Lí thuy t1 Thực hành2 Tự học3",
            "prerequisites": [],
            "stt": 42
        },
        {
            "id": "mns3037",
            "code": "MNS3037",
            "name": "Khoa học tổ chức",
            "credits": 3,
            "lecturer": "Giảng viên 043",
            "time": {
                "day": 2,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 43
        },
        {
            "id": "mns1158",
            "code": "MNS1158",
            "name": "Thực tập thực tế (1)",
            "credits": 3,
            "lecturer": "Giảng viên 044",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "MNS1105",
            "prerequisites": [
                "MNS1100"
            ],
            "stt": 44
        },
        {
            "id": "mns3096",
            "code": "MNS3096",
            "name": "Lịch sử tư tưởng quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 045",
            "time": {
                "day": 4,
                "start": 9,
                "count": 3
            },
            "info": "IV.2.1 Định hướng kiến thức chuyên sâu của ngành 6/21",
            "prerequisites": [],
            "stt": 45
        },
        {
            "id": "mns1157",
            "code": "MNS1157",
            "name": "Quản trị xung đột",
            "credits": 3,
            "lecturer": "Giảng viên 046",
            "time": {
                "day": 5,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 46
        },
        {
            "id": "mns3039",
            "code": "MNS3039",
            "name": "Quản lý biến đổi",
            "credits": 3,
            "lecturer": "Giảng viên 047",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1100"
            ],
            "stt": 47
        },
        {
            "id": "mns1159",
            "code": "MNS1159",
            "name": "Quản trị hiệu suất",
            "credits": 3,
            "lecturer": "Giảng viên 048",
            "time": {
                "day": 7,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 48
        },
        {
            "id": "mns1160",
            "code": "MNS1160",
            "name": "Quản lý chất lượng",
            "credits": 3,
            "lecturer": "Giảng viên 049",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1100"
            ],
            "stt": 49
        },
        {
            "id": "mns3040",
            "code": "MNS3040",
            "name": "Quản lý dự án",
            "credits": 3,
            "lecturer": "Giảng viên 050",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1100"
            ],
            "stt": 50
        },
        {
            "id": "mns1156",
            "code": "MNS1156",
            "name": "Kỹ năng đàm phán",
            "credits": 3,
            "lecturer": "Giảng viên 051",
            "time": {
                "day": 4,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 51
        },
        {
            "id": "mns1101",
            "code": "MNS1101",
            "name": "Văn hoá tổ chức",
            "credits": 3,
            "lecturer": "Giảng viên 052",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "IV.2.2 Định hướng kiến thức liên ngành 6/12",
            "prerequisites": [],
            "stt": 52
        },
        {
            "id": "soc1101",
            "code": "SOC1101",
            "name": "Nhập môn xử lý dữ liệu định lượng",
            "credits": 3,
            "lecturer": "Giảng viên 053",
            "time": {
                "day": 6,
                "start": 5,
                "count": 3
            },
            "info": "Introduction to quantitative data processing MNS1053",
            "prerequisites": [
                "SOC1051"
            ],
            "stt": 53
        },
        {
            "id": "aro1166",
            "code": "ARO1166",
            "name": "Đạo đức công vụ",
            "credits": 3,
            "lecturer": "Giảng viên 054",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 54
        },
        {
            "id": "soc3009",
            "code": "SOC3009",
            "name": "Xã hội học quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 055",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "SOC1051"
            ],
            "stt": 55
        },
        {
            "id": "its3121",
            "code": "ITS3121",
            "name": "Các vấn đề toàn cầu",
            "credits": 3,
            "lecturer": "Giảng viên 056",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "STT Mã học phần Học phần Số tín chỉ Số giờ học tập Mã số học phần tiên quyết Lí thuy t1 Thực hành2 Tự học3",
            "prerequisites": [],
            "stt": 56
        },
        {
            "id": "mns3036",
            "code": "MNS3036",
            "name": "Văn hoá và đạo đức quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 057",
            "time": {
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1100"
            ],
            "stt": 57
        },
        {
            "id": "mns3053",
            "code": "MNS3053",
            "name": "Khoa học và công nghệ luận",
            "credits": 3,
            "lecturer": "Giảng viên 058",
            "time": {
                "day": 5,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1053"
            ],
            "stt": 58
        },
        {
            "id": "mns1104",
            "code": "MNS1104",
            "name": "Quản lý nguồn nhân lực",
            "credits": 3,
            "lecturer": "Giảng viên 059",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 59
        },
        {
            "id": "mns2065",
            "code": "MNS2065",
            "name": "Khoa học chính sách",
            "credits": 3,
            "lecturer": "Giảng viên 060",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 60
        },
        {
            "id": "mns1150",
            "code": "MNS1150",
            "name": "Đại cương về sở hữu trí tuệ",
            "credits": 3,
            "lecturer": "Giảng viên 061",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "V.2 Các hƣớng chuyên ngành chuyên ngành) V.2.1 Hướng chuyên ngành Quản lý",
            "prerequisites": [],
            "stt": 61
        },
        {
            "id": "mns3057",
            "code": "MNS3057",
            "name": "Phân cấp quản lý hành chính",
            "credits": 3,
            "lecturer": "Giảng viên 062",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "State administrative decentralization",
            "prerequisites": [
                "MNS1100"
            ],
            "stt": 62
        },
        {
            "id": "mns3061",
            "code": "MNS3061",
            "name": "Quản lý cấp cơ sở",
            "credits": 3,
            "lecturer": "Giảng viên 063",
            "time": {
                "day": 4,
                "start": 5,
                "count": 3
            },
            "info": "State management at commune level",
            "prerequisites": [],
            "stt": 63
        },
        {
            "id": "mns3083",
            "code": "MNS3083",
            "name": "Quản lý cấp cơ sở về kinh tế",
            "credits": 3,
            "lecturer": "Giảng viên 064",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "Economic management at commune level",
            "prerequisites": [],
            "stt": 64
        },
        {
            "id": "mns3106",
            "code": "MNS3106",
            "name": "Chính sách văn hóa",
            "credits": 3,
            "lecturer": "Giảng viên 065",
            "time": {
                "day": 6,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 65
        },
        {
            "id": "mns3067",
            "code": "MNS3067",
            "name": "Chính sách giảm nghèo bền vững",
            "credits": 3,
            "lecturer": "Giảng viên 066",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "Sustainable Poverty Reduction Policy",
            "prerequisites": [],
            "stt": 66
        },
        {
            "id": "mns3066",
            "code": "MNS3066",
            "name": "Chính sách trợ giúp xã hội",
            "credits": 3,
            "lecturer": "Giảng viên 067",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 67
        },
        {
            "id": "mns3110",
            "code": "MNS3110",
            "name": "Chính sách giáo dục",
            "credits": 3,
            "lecturer": "Giảng viên 068",
            "time": {
                "day": 3,
                "start": 5,
                "count": 3
            },
            "info": "V.2.2 Hướng chuyên ngành Quản lý",
            "prerequisites": [],
            "stt": 68
        },
        {
            "id": "mns3062",
            "code": "MNS3062",
            "name": "Pháp luật về lao động và việc làm",
            "credits": 3,
            "lecturer": "Giảng viên 069",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 69
        },
        {
            "id": "mns3063",
            "code": "MNS3063",
            "name": "Bảo hiểm xã hội",
            "credits": 3,
            "lecturer": "Giảng viên 070",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "STT Mã học phần Học phần Số tín chỉ Số giờ học tập Mã số học phần tiên quyết Lí thuy t1 Thực hành2 Tự học3 Social insurance",
            "prerequisites": [],
            "stt": 70
        },
        {
            "id": "mns3111",
            "code": "MNS3111",
            "name": "Định mức lao động",
            "credits": 3,
            "lecturer": "Giảng viên 071",
            "time": {
                "day": 6,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1104"
            ],
            "stt": 71
        },
        {
            "id": "mns3065",
            "code": "MNS3065",
            "name": "Tuyển dụng nhân lực",
            "credits": 3,
            "lecturer": "Giảng viên 072",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1104"
            ],
            "stt": 72
        },
        {
            "id": "mns3103",
            "code": "MNS3103",
            "name": "Tổ chức lao động khoa học",
            "credits": 3,
            "lecturer": "Giảng viên 073",
            "time": {
                "day": 2,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1104"
            ],
            "stt": 73
        },
        {
            "id": "mns3112",
            "code": "MNS3112",
            "name": "Đào tạo và phát triển nguồn",
            "credits": 3,
            "lecturer": "Giảng viên 074",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "nhân lực Human resource training and development",
            "prerequisites": [
                "MNS1104"
            ],
            "stt": 74
        },
        {
            "id": "mns3113",
            "code": "MNS3113",
            "name": "Tổ chức tiền lương",
            "credits": 3,
            "lecturer": "Giảng viên 075",
            "time": {
                "day": 4,
                "start": 9,
                "count": 3
            },
            "info": "V.2.3 Hướng chuyên ngành Quản lý",
            "prerequisites": [],
            "stt": 75
        },
        {
            "id": "mns3071",
            "code": "MNS3071",
            "name": "Quyền tác giả và quyền liên quan",
            "credits": 3,
            "lecturer": "Giảng viên 076",
            "time": {
                "day": 5,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1150"
            ],
            "stt": 76
        },
        {
            "id": "mns3072",
            "code": "MNS3072",
            "name": "Sáng chế và giải pháp hữu ích",
            "credits": 3,
            "lecturer": "Giảng viên 077",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1150"
            ],
            "stt": 77
        },
        {
            "id": "mns3073",
            "code": "MNS3073",
            "name": "Kiểu dáng công nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 078",
            "time": {
                "day": 7,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1150"
            ],
            "stt": 78
        },
        {
            "id": "mns3074",
            "code": "MNS3074",
            "name": "Nhãn hiệu và các chỉ dẫn",
            "credits": 3,
            "lecturer": "Giảng viên 079",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "thương mại khác Trademarks and other Trade Indications",
            "prerequisites": [
                "MNS1150"
            ],
            "stt": 79
        },
        {
            "id": "mns3075",
            "code": "MNS3075",
            "name": "Quản lý sở hữu trí tuệ trong",
            "credits": 3,
            "lecturer": "Giảng viên 080",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "doanh nghiệp Intellectual Property Management in Enterprises",
            "prerequisites": [
                "MNS1150"
            ],
            "stt": 80
        },
        {
            "id": "mns3114",
            "code": "MNS3114",
            "name": "Thương mại hóa quyền sở hữu",
            "credits": 3,
            "lecturer": "Giảng viên 081",
            "time": {
                "day": 4,
                "start": 1,
                "count": 3
            },
            "info": "trí tuệ Commercialisation of Intellectual Property Rights",
            "prerequisites": [
                "MNS1150"
            ],
            "stt": 81
        },
        {
            "id": "mns3115",
            "code": "MNS3115",
            "name": "Thực thi quyền sở hữu trí tuệ",
            "credits": 3,
            "lecturer": "Giảng viên 082",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "Enforcement of Intellectual Property Rights V.2.4 Hướng chuyên ngành Quản lý",
            "prerequisites": [],
            "stt": 82
        },
        {
            "id": "mns3076",
            "code": "MNS3076",
            "name": "Pháp luật về Khoa học và công nghệ",
            "credits": 3,
            "lecturer": "Giảng viên 083",
            "time": {
                "day": 6,
                "start": 5,
                "count": 3
            },
            "info": "STT Mã học phần Học phần Số tín chỉ Số giờ học tập Mã số học phần tiên quyết Lí thuy t1 Thực hành2 Tự học3 Science and Technology Law",
            "prerequisites": [],
            "stt": 83
        },
        {
            "id": "mns3077",
            "code": "MNS3077",
            "name": "Nghiên cứu xã hội về khoa học,",
            "credits": 3,
            "lecturer": "Giảng viên 084",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "công nghệ và môi trường Social Studies of Science, Technology and Environment",
            "prerequisites": [
                "MNS3053"
            ],
            "stt": 84
        },
        {
            "id": "mns3098",
            "code": "MNS3098",
            "name": "Chính sách khoa học, công nghệ",
            "credits": 3,
            "lecturer": "Giảng viên 085",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "và đổi mới Science, Technology and Innovation Policy",
            "prerequisites": [
                "MNS3053"
            ],
            "stt": 85
        },
        {
            "id": "mns3079",
            "code": "MNS3079",
            "name": "Hệ thống đổi mới quốc gia",
            "credits": 3,
            "lecturer": "Giảng viên 086",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS3053"
            ],
            "stt": 86
        },
        {
            "id": "mns3080",
            "code": "MNS3080",
            "name": "Doanh nghiệp khoa học và công nghệ",
            "credits": 3,
            "lecturer": "Giảng viên 087",
            "time": {
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS3053"
            ],
            "stt": 87
        },
        {
            "id": "mns3116",
            "code": "MNS3116",
            "name": "Quản lý khoa học và công nghệ",
            "credits": 3,
            "lecturer": "Giảng viên 088",
            "time": {
                "day": 5,
                "start": 5,
                "count": 3
            },
            "info": "Science and Technology Management MNS1105",
            "prerequisites": [],
            "stt": 88
        },
        {
            "id": "mns3117",
            "code": "MNS3117",
            "name": "Kĩ năng viết đề xuất dự án",
            "credits": 3,
            "lecturer": "Giảng viên 089",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "nghiên cứu Research Proposal Writing Skills V.2.5 Hướng chuyên ngành Văn hóa",
            "prerequisites": [],
            "stt": 89
        },
        {
            "id": "mns3099",
            "code": "MNS3099",
            "name": "Văn hóa khởi nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 090",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 90
        },
        {
            "id": "mns3100",
            "code": "MNS3100",
            "name": "Đạo đức kinh doanh",
            "credits": 3,
            "lecturer": "Giảng viên 091",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 91
        },
        {
            "id": "mns3118",
            "code": "MNS3118",
            "name": "Đánh giá và phát triển văn hóa",
            "credits": 3,
            "lecturer": "Giảng viên 092",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "quản lý Evaluation and development of management culture",
            "prerequisites": [],
            "stt": 92
        },
        {
            "id": "mns3102",
            "code": "MNS3102",
            "name": "Xây dựng văn hóa doanh nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 093",
            "time": {
                "day": 4,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 93
        },
        {
            "id": "mns3092",
            "code": "MNS3092",
            "name": "Trách nhiệm xã hội của doanh nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 094",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 94
        },
        {
            "id": "mns3119",
            "code": "MNS3119",
            "name": "Truyền thông văn hóa quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 095",
            "time": {
                "day": 6,
                "start": 9,
                "count": 3
            },
            "info": "Management of communication culture",
            "prerequisites": [],
            "stt": 95
        },
        {
            "id": "mns3120",
            "code": "MNS3120",
            "name": "Quản lý tổ chức đa văn hóa",
            "credits": 3,
            "lecturer": "Giảng viên 096",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "Multicultural organization management STT Mã học phần Học phần Số tín chỉ Số giờ học tập Mã số học phần tiên quyết Lí thuy t1 Thực hành2 Tự học3 V.3 Thực tập, Khóa luận tốt nghiệp/các học phần thay th khóa luận tốt nghiệp",
            "prerequisites": [],
            "stt": 96
        },
        {
            "id": "mns4067",
            "code": "MNS4067",
            "name": "Thực tập thực tế (2)",
            "credits": 3,
            "lecturer": "Giảng viên 097",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1158"
            ],
            "stt": 97
        },
        {
            "id": "mns4066",
            "code": "MNS4066",
            "name": "Thực tập tốt nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 098",
            "time": {
                "day": 3,
                "start": 5,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS4067"
            ],
            "stt": 98
        },
        {
            "id": "mns4052",
            "code": "MNS4052",
            "name": "Khóa luận tốt nghiệp",
            "credits": 5,
            "lecturer": "Giảng viên 099",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "Học phần thay thế khoá luận tốt",
            "prerequisites": [],
            "stt": 99
        },
        {
            "id": "mns4059",
            "code": "MNS4059",
            "name": "Lý luận và phương pháp quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 100",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "Theoretical and methodical management",
            "prerequisites": [
                "MNS4066"
            ],
            "stt": 100
        },
        {
            "id": "mns4064",
            "code": "MNS4064",
            "name": "Các vấn đề đương đại trong",
            "credits": 2,
            "lecturer": "Giảng viên 101",
            "time": {
                "day": 6,
                "start": 3,
                "count": 2
            },
            "info": "quản lý Comtemporaty issues in management bao gồm cả thời gian dự giờ giảng, giờ học có hướng dẫn, tự học, nghiên cứu, trải nghiệm và dự kiểm tra, đánh giá; đối với hoạt động dạy trên lớp, một tín chỉ yêu cầu (1): Lí thuyết. (2): Thực hành, thí nghiệm, thảo luận. (3): Thực tập, nghiên cứu, tự học có kiểm tra đánh giá.",
            "prerequisites": [],
            "stt": 101
        }
    ]
};

// Mapping thứ
const dayMapping = {
    2: "Thứ 2",
    3: "Thứ 3",
    4: "Thứ 4",
    5: "Thứ 5",
    6: "Thứ 6",
    7: "Thứ 7",
    8: "Chủ nhật"
};
