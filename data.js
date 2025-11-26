// Dữ liệu mẫu cho ứng dụng
const majors = [
    { id: "khql", name: "Khoa học quản lý" },
    { id: "tlh", name: "Tâm lý học"},
    { id: "qhcc", name: "Quản trị công chúng"},
    { id: "qtdvdllh", name: "Quản trị dịch vụ du lịch và lữ hành" },
    { id: "bc", name: "Báo chí" },
    { id: "da", name: "Điện ảnh và Nghệ thuật đại chúng"}
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
      "name": "Triết học Mác - Lênin",
      "credits": 3,
      "lecturer": "Giảng viên 001",
      "time": { "day": 2, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 1
    },
    {
      "id": "pec1008",
      "code": "PEC1008",
      "name": "Kinh tế chính trị Mác - Lênin",
      "credits": 2,
      "lecturer": "Giảng viên 002",
      "time": { "day": 3, "start": 4, "count": 2 },
      "info": "",
      "prerequisites": ["PHI1006"],
      "stt": 2
    },
    {
      "id": "phi1002",
      "code": "PHI1002",
      "name": "Chủ nghĩa xã hội khoa học",
      "credits": 2,
      "lecturer": "Giảng viên 003",
      "time": { "day": 5, "start": 2, "count": 2 },
      "info": "",
      "prerequisites": ["PHI1006"],
      "stt": 3
    },
    {
      "id": "his1001",
      "code": "HIS1001",
      "name": "Lịch sử Đảng Cộng sản Việt Nam",
      "credits": 2,
      "lecturer": "Giảng viên 004",
      "time": { "day": 4, "start": 7, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 4
    },
    {
      "id": "pol1001",
      "code": "POL1001",
      "name": "Tư tưởng Hồ Chí Minh",
      "credits": 2,
      "lecturer": "Giảng viên 005",
      "time": { "day": 6, "start": 3, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 5
    },
    {
      "id": "thl1057",
      "code": "THL1057",
      "name": "Nhà nước và pháp luật đại cương",
      "credits": 2,
      "lecturer": "Giảng viên 006",
      "time": { "day": 7, "start": 5, "count": 2 },
      "info": "",
      "prerequisites": ["PHI1006"],
      "stt": 6
    },
    {
      "id": "flf1107-flf1407",
      "code": "FLF1107/FLF1407",
      "name": "Ngoại ngữ B1 (FLF1107 Tiếng Anh B1, FLF1407 Tiếng Trung Quốc B1)",
      "credits": 5,
      "lecturer": "Giảng viên 007",
      "time": { "day": 2, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 7
    },
    {
      "id": "evs1001",
      "code": "EVS1001",
      "name": "Môi trường và phát triển",
      "credits": 2,
      "lecturer": "Giảng viên 008",
      "time": { "day": 3, "start": 6, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 8
    },
    {
      "id": "mat1078",
      "code": "MAT1078",
      "name": "Thống kê cho khoa học xã hội",
      "credits": 2,
      "lecturer": "Giảng viên 009",
      "time": { "day": 5, "start": 8, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 9
    },
    {
      "id": "lin1050",
      "code": "LIN1050",
      "name": "Thực hành văn bản tiếng Việt",
      "credits": 2,
      "lecturer": "Giảng viên 010",
      "time": { "day": 4, "start": 9, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 10
    },
    {
      "id": "lib1050",
      "code": "LIB1050",
      "name": "Nhập môn năng lực thông tin",
      "credits": 2,
      "lecturer": "Giảng viên 011",
      "time": { "day": 6, "start": 10, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 11
    },
    {
      "id": "flh1164",
      "code": "FLH1164",
      "name": "Ngoại ngữ Khoa học Xã hội và Nhân văn 1 (English for Humanities and Social Sciences 1)",
      "credits": 3,
      "lecturer": "Giảng viên 012",
      "time": { "day": 7, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["FLF1107/FLF1407"],
      "stt": 12
    },
    {
      "id": "flh1167",
      "code": "FLH1167",
      "name": "Ngoại ngữ Khoa học Xã hội và Nhân văn 2 (English for Humanities and Social Sciences 2)",
      "credits": 3,
      "lecturer": "Giảng viên 013",
      "time": { "day": 2, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["FLH1164"],
      "stt": 13
    },
    {
      "id": "lit1170",
      "code": "LIT1170",
      "name": "Tư duy sáng tạo và tư duy thiết kế",
      "credits": 3,
      "lecturer": "Giảng viên 014",
      "time": { "day": 3, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 14
    },
    {
      "id": "inf1151",
      "code": "INF1151",
      "name": "Ứng dụng AI trong dạy học và nghiên cứu",
      "credits": 3,
      "lecturer": "Giảng viên 015",
      "time": { "day": 5, "start": 11, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 15
    },
    {
      "id": "mns2101",
      "code": "MNS2101",
      "name": "Đổi mới sáng tạo và khởi nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 016",
      "time": { "day": 4, "start": 4, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 16
    },
    {
      "id": "his1160",
      "code": "HIS1160",
      "name": "Văn hoá Việt Nam trong tiến trình hội nhập",
      "credits": 3,
      "lecturer": "Giảng viên 017",
      "time": { "day": 6, "start": 5, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 17
    },
    {
      "id": "psy1154",
      "code": "PSY1154",
      "name": "Tâm lý học truyền thông",
      "credits": 3,
      "lecturer": "Giảng viên 018",
      "time": { "day": 7, "start": 6, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 18
    },

    /*  --------  PHẦN CƠ SỞ NGÀNH + NGÀNH + CHUYÊN NGÀNH  -------- */

    {
      "id": "ush2001",
      "code": "USH2001",
      "name": "Nhập môn Khoa học Xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 019",
      "time": { "day": 2, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 19
    },
    {
      "id": "jou2002",
      "code": "JOU2002",
      "name": "Nhập môn Báo chí và Truyền thông",
      "credits": 3,
      "lecturer": "Giảng viên 020",
      "time": { "day": 3, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 20
    },
    {
      "id": "mns2008",
      "code": "MNS2008",
      "name": "Nhập môn Quản lý",
      "credits": 3,
      "lecturer": "Giảng viên 021",
      "time": { "day": 5, "start": 5, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 21
    },
    {
      "id": "tou2101",
      "code": "TOU2101",
      "name": "Nhập môn Quản trị kinh doanh",
      "credits": 3,
      "lecturer": "Giảng viên 022",
      "time": { "day": 4, "start": 6, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 22
    },
    {
      "id": "mns2009",
      "code": "MNS2009",
      "name": "Lịch sử tư tưởng quản lý",
      "credits": 4,
      "lecturer": "Giảng viên 023",
      "time": { "day": 6, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 23
    },

    {
      "id": "psy2038",
      "code": "PSY2038",
      "name": "Tâm lý học với đời sống",
      "credits": 4,
      "lecturer": "Giảng viên 024",
      "time": { "day": 7, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 24
    },
    {
      "id": "soc2001",
      "code": "SOC2001",
      "name": "Xã hội học các vấn đề xã hội đương đại",
      "credits": 4,
      "lecturer": "Giảng viên 025",
      "time": { "day": 2, "start": 10, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 25
    },
    {
      "id": "phi2005",
      "code": "PHI2005",
      "name": "Lôgic học và tư duy phản biện",
      "credits": 4,
      "lecturer": "Giảng viên 026",
      "time": { "day": 3, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 26
    },
    {
      "id": "his2023",
      "code": "HIS2023",
      "name": "Văn minh thế giới và sự tiến hoá nhân loại",
      "credits": 4,
      "lecturer": "Giảng viên 027",
      "time": { "day": 5, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 27
    },
    {
        "id": "mns2056",
        "code": "MNS2056",
        "name": "Khoa học chính sách (Policy Science)",
        "credits": 4,
        "lecturer": "Giảng viên 028",
        "time": {
            "day": 7,
            "start": 2,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 28
    },
    {
        "id": "mns3129",
        "code": "MNS3129",
        "name": "Quản lý khoa học, công nghệ và đổi mới sáng tạo (Science, Technology and Innovation Management)",
        "credits": 4,
        "lecturer": "Giảng viên 029",
        "time": {
            "day": 3,
            "start": 2,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 29
    },
    {
        "id": "mns3130",
        "code": "MNS3130",
        "name": "Quản lý tài sản trí tuệ (Intellectual Property Management)",
        "credits": 4,
        "lecturer": "Giảng viên 030",
        "time": {
            "day": 3,
            "start": 1,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 30
    },
    {
        "id": "mns3131",
        "code": "MNS3131",
        "name": "Quản lý nguồn nhân lực (Human Resource Management)",
        "credits": 4,
        "lecturer": "Giảng viên 031",
        "time": {
            "day": 4,
            "start": 9,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 31
    },
    {
        "id": "mns3132",
        "code": "MNS3132",
        "name": "Văn hoá tổ chức (Organizational Culture)",
        "credits": 4,
        "lecturer": "Giảng viên 032",
        "time": {
            "day": 4,
            "start": 1,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 32
    },
    {
        "id": "mns3133",
        "code": "MNS3133",
        "name": "Kinh tế học quản lý (Managerial Economics)",
        "credits": 4,
        "lecturer": "Giảng viên 033",
        "time": {
            "day": 5,
            "start": 9,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 33
    },
    {
        "id": "mns3134",
        "code": "MNS3134",
        "name": "Quản trị tổ chức (Organizational Management)",
        "credits": 4,
        "lecturer": "Giảng viên 034",
        "time": {
            "day": 7,
            "start": 8,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 34
    },
    {
        "id": "mns3135",
        "code": "MNS3135",
        "name": "Lý thuyết hệ thống và thông tin quản lý (Systems Theory and Management Information)",
        "credits": 4,
        "lecturer": "Giảng viên 035",
        "time": {
            "day": 5,
            "start": 7,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 35
    },
    {
        "id": "mns3136",
        "code": "MNS3136",
        "name": "Quản trị hiệu suất (Performance Management)",
        "credits": 4,
        "lecturer": "Giảng viên 036",
        "time": {
            "day": 4,
            "start": 1,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 36
    },
    {
        "id": "mns3137",
        "code": "MNS3137",
        "name": "Chuyển đổi số trong quản lý (Digital Transformation in Management)",
        "credits": 4,
        "lecturer": "Giảng viên 037",
        "time": {
            "day": 7,
            "start": 8,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 37
    },
    {
        "id": "mns3057",
        "code": "MNS3057",
        "name": "Chính sách văn hóa (Cultural Policy)",
        "credits": 3,
        "lecturer": "Giảng viên 038",
        "time": {
            "day": 3,
            "start": 3,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 38
    },
    {
        "id": "mns3061",
        "code": "MNS3061",
        "name": "Chính sách giáo dục và đào tạo (Education and Training Policy)",
        "credits": 3,
        "lecturer": "Giảng viên 039",
        "time": {
            "day": 5,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 39
    },
    {
        "id": "mns3083",
        "code": "MNS3083",
        "name": "Chính sách giảm nghèo bền vững (Sustainable Poverty Reduction Policy)",
        "credits": 3,
        "lecturer": "Giảng viên 040",
        "time": {
            "day": 6,
            "start": 3,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 40
    },
    {
        "id": "mns3106",
        "code": "MNS3106",
        "name": "Chính sách trợ giúp xã hội (Social Assistance Policy)",
        "credits": 3,
        "lecturer": "Giảng viên 041",
        "time": {
            "day": 6,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 41
    },
    {
        "id": "mns3067",
        "code": "MNS3067",
        "name": "Phân cấp quản lý hành chính (Administrative Decentralization)",
        "credits": 3,
        "lecturer": "Giảng viên 042",
        "time": {
            "day": 3,
            "start": 3,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 42
    },
    {
        "id": "mns3066",
        "code": "MNS3066",
        "name": "Quản lý cấp cơ sở về kinh tế (Grassroots Economic Management)",
        "credits": 3,
        "lecturer": "Giảng viên 043",
        "time": {
            "day": 3,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 43
    },
    {
        "id": "mns3110",
        "code": "MNS3110",
        "name": "Quản lý cấp cơ sở về văn hoá và xã hội (Grassroots Cultural and Social Management)",
        "credits": 3,
        "lecturer": "Giảng viên 044",
        "time": {
            "day": 5,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 44
    },
    {
        "id": "mns3062",
        "code": "MNS3062",
        "name": "Pháp luật về lao động và việc làm (Labor and Employment Law)",
        "credits": 3,
        "lecturer": "Giảng viên 045",
        "time": {
            "day": 7,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 45
    },
    {
        "id": "mns3063",
        "code": "MNS3063",
        "name": "Bảo hiểm xã hội (Social Insurance)",
        "credits": 3,
        "lecturer": "Giảng viên 046",
        "time": {
            "day": 2,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 46
    },
    {
        "id": "mns3111",
        "code": "MNS3111",
        "name": "Định mức lao động (Labor Standards)",
        "credits": 3,
        "lecturer": "Giảng viên 047",
        "time": {
            "day": 7,
            "start": 1,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 47
    },
    {
        "id": "mns3065",
        "code": "MNS3065",
        "name": "Tuyển dụng nhân lực (Human Resource Recruitment)",
        "credits": 3,
        "lecturer": "Giảng viên 048",
        "time": {
            "day": 5,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 48
    },
    {
        "id": "mns3103",
        "code": "MNS3103",
        "name": "Tổ chức lao động khoa học (Scientific Labor Organization)",
        "credits": 3,
        "lecturer": "Giảng viên 049",
        "time": {
            "day": 2,
            "start": 3,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 49
    },
    {
        "id": "mns3112",
        "code": "MNS3112",
        "name": "Đào tạo và phát triển nguồn nhân lực (Human Resource Training and Development)",
        "credits": 3,
        "lecturer": "Giảng viên 050",
        "time": {
            "day": 6,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 50
    },
    {
        "id": "mns3138",
        "code": "MNS3138",
        "name": "Đãi ngộ toàn diện (Total Rewards)",
        "credits": 3,
        "lecturer": "Giảng viên 051",
        "time": {
            "day": 5,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 51
    },
    {
        "id": "mns3071",
        "code": "MNS3071",
        "name": "Quyền tác giả và quyền liên quan (Copyright and Related Rights)",
        "credits": 3,
        "lecturer": "Giảng viên 052",
        "time": {
            "day": 7,
            "start": 1,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 52
    },
    {
        "id": "mns3072",
        "code": "MNS3072",
        "name": "Sáng chế và giải pháp hữu ích (Patents and Utility Solutions)",
        "credits": 3,
        "lecturer": "Giảng viên 053",
        "time": {
            "day": 7,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 53
    },
    {
        "id": "mns3073",
        "code": "MNS3073",
        "name": "Kiểu dáng công nghiệp (Industrial Design)",
        "credits": 3,
        "lecturer": "Giảng viên 054",
        "time": {
            "day": 3,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 54
    },
    {
        "id": "mns3074",
        "code": "MNS3074",
        "name": "Nhãn hiệu và các chỉ dẫn thương mại khác (Trademarks and Other Commercial Indications)",
        "credits": 3,
        "lecturer": "Giảng viên 055",
        "time": {
            "day": 5,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 55
    },
    {
        "id": "mns3075",
        "code": "MNS3075",
        "name": "Quản lý sở hữu trí tuệ trong doanh nghiệp (Intellectual Property Management in Enterprises)",
        "credits": 3,
        "lecturer": "Giảng viên 056",
        "time": {
            "day": 3,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 56
    },
    {
        "id": "mns3114",
        "code": "MNS3114",
        "name": "Thương mại hóa quyền sở hữu trí tuệ (Commercialization of Intellectual Property Rights)",
        "credits": 3,
        "lecturer": "Giảng viên 057",
        "time": {
            "day": 2,
            "start": 8,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 57
    },
    {
        "id": "mns3115",
        "code": "MNS3115",
        "name": "Thực thi quyền sở hữu trí tuệ (Enforcement of Intellectual Property Rights)",
        "credits": 3,
        "lecturer": "Giảng viên 058",
        "time": {
            "day": 7,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 58
    },
    {
        "id": "mns3139",
        "code": "MNS3139",
        "name": "Pháp luật về khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số (Law on Science, Technology, Innovation and Digital Transformation)",
        "credits": 3,
        "lecturer": "Giảng viên 059",
        "time": {
            "day": 7,
            "start": 1,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 59
    },
    {
        "id": "mns3140",
        "code": "MNS3140",
        "name": "Khoa học, công nghệ và chuyển đổi số với phát triển bền vững (Science, Technology and Digital Transformation for Sustainable Development)",
        "credits": 3,
        "lecturer": "Giảng viên 060",
        "time": {
            "day": 2,
            "start": 8,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 60
    },
    {
        "id": "mns3098",
        "code": "MNS3098",
        "name": "Chính sách khoa học, công nghệ và đổi mới (Science, Technology and Innovation Policy)",
        "credits": 3,
        "lecturer": "Giảng viên 061",
        "time": {
            "day": 6,
            "start": 3,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 61
    },
    {
        "id": "mns3079",
        "code": "MNS3079",
        "name": "Hệ thống đổi mới quốc gia (National Innovation System)",
        "credits": 3,
        "lecturer": "Giảng viên 062",
        "time": {
            "day": 7,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 62
    },
    {
        "id": "mns3080",
        "code": "MNS3080",
        "name": "Doanh nghiệp khoa học và công nghệ (Science and Technology Enterprises)",
        "credits": 3,
        "lecturer": "Giảng viên 063",
        "time": {
            "day": 6,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 63
    },
    {
        "id": "mns3141",
        "code": "MNS3141",
        "name": "Huy động và phát triển các nguồn lực khoa học, công nghệ và đổi mới sáng tạo (Mobilizing and Developing Science, Technology and Innovation Resources)",
        "credits": 3,
        "lecturer": "Giảng viên 064",
        "time": {
            "day": 3,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 64
    },
    {
        "id": "mns3142",
        "code": "MNS3142",
        "name": "Thiết kế và phát triển dự án khoa học, công nghệ và đổi mới sáng tạo (Design and Development of Science, Technology and Innovation Projects)",
        "credits": 3,
        "lecturer": "Giảng viên 065",
        "time": {
            "day": 2,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 65
    },
    {
        "id": "mns3099",
        "code": "MNS3099",
        "name": "Văn hóa khởi nghiệp (Startup Culture)",
        "credits": 3,
        "lecturer": "Giảng viên 066",
        "time": {
            "day": 7,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 66
    },
    {
        "id": "mns3100",
        "code": "MNS3100",
        "name": "Đạo đức kinh doanh (Business Ethics)",
        "credits": 3,
        "lecturer": "Giảng viên 067",
        "time": {
            "day": 2,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 67
    },
    {
        "id": "mns3118",
        "code": "MNS3118",
        "name": "Đánh giá và phát triển văn hóa quản lý (Evaluation and Development of Management Culture)",
        "credits": 3,
        "lecturer": "Giảng viên 068",
        "time": {
            "day": 4,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 68
    },
    {
        "id": "mns3102",
        "code": "MNS3102",
        "name": "Xây dựng văn hóa doanh nghiệp (Building Corporate Culture)",
        "credits": 3,
        "lecturer": "Giảng viên 069",
        "time": {
            "day": 4,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 69
    },
    {
        "id": "mns3092",
        "code": "MNS3092",
        "name": "Trách nhiệm xã hội của doanh nghiệp (Corporate Social Responsibility)",
        "credits": 3,
        "lecturer": "Giảng viên 070",
        "time": {
            "day": 2,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 70
    },
    {
        "id": "mns3119",
        "code": "MNS3119",
        "name": "Truyền thông văn hóa quản lý (Management Culture Communication)",
        "credits": 3,
        "lecturer": "Giảng viên 071",
        "time": {
            "day": 2,
            "start": 3,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 71
    },
    {
        "id": "mns3120",
        "code": "MNS3120",
        "name": "Quản lý tổ chức đa văn hóa (Multicultural Organization Management)",
        "credits": 3,
        "lecturer": "Giảng viên 072",
        "time": {
            "day": 4,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 72
    },
    {
        "id": "mns3143",
        "code": "MNS3143",
        "name": "Quản lý kinh tế số (Digital Economy Management)",
        "credits": 3,
        "lecturer": "Giảng viên 073",
        "time": {
            "day": 5,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 73
    },
    {
        "id": "mns3144",
        "code": "MNS3144",
        "name": "Kinh tế xanh và phát triển bền vững (Green Economy and Sustainable Development)",
        "credits": 3,
        "lecturer": "Giảng viên 074",
        "time": {
            "day": 4,
            "start": 1,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 74
    },
    {
        "id": "mns3145",
        "code": "MNS3145",
        "name": "Pháp luật trong quản lý kinh tế (Law in Economic Management)",
        "credits": 3,
        "lecturer": "Giảng viên 075",
        "time": {
            "day": 3,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 75
    },
    {
        "id": "mns3146",
        "code": "MNS3146",
        "name": "Quản trị doanh nghiệp số (Digital Enterprise Management)",
        "credits": 3,
        "lecturer": "Giảng viên 076",
        "time": {
            "day": 2,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 76
    },
    {
        "id": "mns3147",
        "code": "MNS3147",
        "name": "Thương mại điện tử và quản trị chuỗi cung ứng bền vững (E-commerce and Sustainable Supply Chain Management)",
        "credits": 3,
        "lecturer": "Giảng viên 077",
        "time": {
            "day": 4,
            "start": 7,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 77
    },
    {
        "id": "mns3148",
        "code": "MNS3148",
        "name": "Đạo đức kinh doanh, văn hóa doanh nghiệp và trách nhiệm xã hội của doanh nghiệp (Business Ethics, Corporate Culture and Corporate Social Responsibility)",
        "credits": 3,
        "lecturer": "Giảng viên 078",
        "time": {
            "day": 7,
            "start": 1,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 78
    },
    {
        "id": "mns3149",
        "code": "MNS3149",
        "name": "Công nghệ Tài chính (Financial Technology)",
        "credits": 3,
        "lecturer": "Giảng viên 079",
        "time": {
            "day": 2,
            "start": 2,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 79
    },
    {
        "id": "mns4052",
        "code": "MNS4052",
        "name": "Khóa luận tốt nghiệp (Graduation Thesis)",
        "credits": 5,
        "lecturer": "Giảng viên 080",
        "time": {
            "day": 7,
            "start": 7,
            "count": 5
        },
        "info": "",
        "prerequisites": [],
        "stt": 80
    },
    {
        "id": "mns4073",
        "code": "MNS4073",
        "name": "Các vấn đề đương đại trong quản lý (Contemporary Issues in Management)",
        "credits": 5,
        "lecturer": "Giảng viên 081",
        "time": {
            "day": 5,
            "start": 2,
            "count": 5
        },
        "info": "",
        "prerequisites": [],
        "stt": 81
    },
    {
        "id": "mns4057",
        "code": "MNS4057",
        "name": "Thực tập thực tế (Practical Internship)",
        "credits": 3,
        "lecturer": "Giảng viên 082",
        "time": {
            "day": 2,
            "start": 9,
            "count": 3
        },
        "info": "",
        "prerequisites": [],
        "stt": 82
    },
    {
        "id": "mns4054",
        "code": "MNS4054",
        "name": "Thực tập tốt nghiệp (Graduation Internship)",
        "credits": 4,
        "lecturer": "Giảng viên 083",
        "time": {
            "day": 5,
            "start": 8,
            "count": 4
        },
        "info": "",
        "prerequisites": [],
        "stt": 83
    }
    ],
  "tlh": [
    {
      "id": "phi1006",
      "code": "PHI1006",
      "name": "Triết học Mác - Lênin",
      "credits": 3,
      "lecturer": "Giảng viên 001",
      "time": { "day": 2, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 1
    },
    {
      "id": "pec1008",
      "code": "PEC1008",
      "name": "Kinh tế chính trị Mác - Lênin",
      "credits": 2,
      "lecturer": "Giảng viên 002",
      "time": { "day": 3, "start": 7, "count": 2 },
      "info": "",
      "prerequisites": ["PHI1006"],
      "stt": 2
    },
    {
      "id": "phi1002",
      "code": "PHI1002",
      "name": "Chủ nghĩa xã hội khoa học",
      "credits": 2,
      "lecturer": "Giảng viên 003",
      "time": { "day": 4, "start": 2, "count": 2 },
      "info": "",
      "prerequisites": ["PHI1006"],
      "stt": 3
    },
    {
      "id": "pol1001",
      "code": "POL1001",
      "name": "Tư tưởng Hồ Chí Minh",
      "credits": 2,
      "lecturer": "Giảng viên 004",
      "time": { "day": 5, "start": 8, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 4
    },
    {
      "id": "his1001",
      "code": "HIS1001",
      "name": "Lịch sử Đảng Cộng sản Việt Nam",
      "credits": 2,
      "lecturer": "Giảng viên 005",
      "time": { "day": 6, "start": 1, "count": 2 },
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
      "time": { "day": 2, "start": 9, "count": 2 },
      "info": "",
      "prerequisites": ["PHI1006"],
      "stt": 6
    },
    {
      "id": "flf1107",
      "code": "FLF1107",
      "name": "Tiếng Anh B1",
      "credits": 5,
      "lecturer": "Giảng viên 007",
      "time": { "day": 3, "start": 1, "count": 5 },
      "info": "",
      "prerequisites": [],
      "stt": 7
    },
    {
      "id": "flf1407",
      "code": "FLF1407",
      "name": "Tiếng Trung B1",
      "credits": 5,
      "lecturer": "Giảng viên 008",
      "time": { "day": 3, "start": 1, "count": 5 },
      "info": "Học phần thay thế Tiếng Anh B1",
      "prerequisites": [],
      "stt": 8
    },
    {
      "id": "int1226",
      "code": "INT1226",
      "name": "Tin học cơ sở",
      "credits": 3,
      "lecturer": "Giảng viên 009",
      "time": { "day": 4, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 9
    },
    {
      "id": "mns1053",
      "code": "MNS1053",
      "name": "Các phương pháp nghiên cứu khoa học",
      "credits": 3,
      "lecturer": "Giảng viên 010",
      "time": { "day": 5, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 10
    },
    {
      "id": "his1056",
      "code": "HIS1056",
      "name": "Cơ sở văn hoá Việt Nam",
      "credits": 3,
      "lecturer": "Giảng viên 011",
      "time": { "day": 6, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 11
    },
    {
      "id": "his1053",
      "code": "HIS1053",
      "name": "Lịch sử văn minh thế giới",
      "credits": 3,
      "lecturer": "Giảng viên 012",
      "time": { "day": 2, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 12
    },
    {
      "id": "phi1054",
      "code": "PHI1054",
      "name": "Logic học đại cương",
      "credits": 3,
      "lecturer": "Giảng viên 013",
      "time": { "day": 7, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 13
    },
    {
      "id": "psy1051",
      "code": "PSY1051",
      "name": "Tâm lý học đại cương",
      "credits": 3,
      "lecturer": "Giảng viên 014",
      "time": { "day": 3, "start": 2, "count": 3 },
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
      "time": { "day": 4, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 15
    },
    {
      "id": "ine1014",
      "code": "INE1014",
      "name": "Kinh tế học đại cương",
      "credits": 2,
      "lecturer": "Giảng viên 016",
      "time": { "day": 5, "start": 7, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 16
    },
    {
      "id": "evs1001",
      "code": "EVS1001",
      "name": "Môi trường và phát triển",
      "credits": 2,
      "lecturer": "Giảng viên 017",
      "time": { "day": 2, "start": 2, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 17
    },
    {
      "id": "mat1078",
      "code": "MAT1078",
      "name": "Thống kê cho khoa học xã hội",
      "credits": 2,
      "lecturer": "Giảng viên 018",
      "time": { "day": 6, "start": 3, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 18
    },
    {
      "id": "lin1050",
      "code": "LIN1050",
      "name": "Thực hành văn bản tiếng Việt",
      "credits": 2,
      "lecturer": "Giảng viên 019",
      "time": { "day": 7, "start": 8, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 19
    },
    {
      "id": "lib1050",
      "code": "LIB1050",
      "name": "Nhập môn năng lực thông tin",
      "credits": 2,
      "lecturer": "Giảng viên 020",
      "time": { "day": 3, "start": 9, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 20
    },
    {
      "id": "lit1053",
      "code": "LIT1053",
      "name": "Viết học thuật",
      "credits": 2,
      "lecturer": "Giảng viên 021",
      "time": { "day": 4, "start": 1, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 21
    },
    {
      "id": "lit1054",
      "code": "LIT1054",
      "name": "Tư duy sáng tạo và thiết kế ý tưởng",
      "credits": 2,
      "lecturer": "Giảng viên 022",
      "time": { "day": 5, "start": 2, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 22
    },
    {
      "id": "its1051",
      "code": "ITS1051",
      "name": "Hội nhập quốc tế và phát triển",
      "credits": 2,
      "lecturer": "Giảng viên 023",
      "time": { "day": 2, "start": 8, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 23
    },
    {
      "id": "pol1053",
      "code": "POL1053",
      "name": "Hệ thống chính trị Việt Nam",
      "credits": 2,
      "lecturer": "Giảng viên 024",
      "time": { "day": 6, "start": 7, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 24
    },
    {
      "id": "psy1107",
      "code": "PSY1107",
      "name": "Niên luận",
      "credits": 2,
      "lecturer": "Giảng viên 025",
      "time": { "day": 7, "start": 2, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 25
    },
    {
      "id": "mns1054",
      "code": "MNS1054",
      "name": "Khởi nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 026",
      "time": { "day": 3, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 26
    },
    {
      "id": "psy2023",
      "code": "PSY2023",
      "name": "Tâm lý học xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 027",
      "time": { "day": 4, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 27
    },
    {
      "id": "psy1103",
      "code": "PSY1103",
      "name": "Những vấn đề cơ bản của tâm lý học",
      "credits": 3,
      "lecturer": "Giảng viên 028",
      "time": { "day": 5, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 28
    },
    {
      "id": "psy1104",
      "code": "PSY1104",
      "name": "Tâm lý học nhận thức",
      "credits": 3,
      "lecturer": "Giảng viên 029",
      "time": { "day": 2, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 29
    },
    {
      "id": "psy1153",
      "code": "PSY1153",
      "name": "Tâm lý học giao tiếp",
      "credits": 3,
      "lecturer": "Giảng viên 030",
      "time": { "day": 6, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 30
    },
    {
      "id": "psy1155",
      "code": "PSY1155",
      "name": "Tâm lý học tình dục",
      "credits": 3,
      "lecturer": "Giảng viên 031",
      "time": { "day": 3, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 31
    },
    {
      "id": "sow1101",
      "code": "SOW1101",
      "name": "Dân số học đại cương",
      "credits": 3,
      "lecturer": "Giảng viên 032",
      "time": { "day": 4, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 32
    },
    {
      "id": "sow1103",
      "code": "SOW1103",
      "name": "Gia đình học",
      "credits": 3,
      "lecturer": "Giảng viên 033",
      "time": { "day": 7, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 33
    },
    {
      "id": "soc1101",
      "code": "SOC1101",
      "name": "Nhập môn xử lý dữ liệu định lượng",
      "credits": 3,
      "lecturer": "Giảng viên 034",
      "time": { "day": 2, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": ["SOC1051", "MNS1053"],
      "stt": 34
    },
    {
      "id": "rel1100",
      "code": "REL1100",
      "name": "Tôn giáo học đại cương",
      "credits": 3,
      "lecturer": "Giảng viên 035",
      "time": { "day": 5, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 35
    },
    {
      "id": "ant1100",
      "code": "ANT1100",
      "name": "Nhân học đại cương",
      "credits": 3,
      "lecturer": "Giảng viên 036",
      "time": { "day": 6, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 36
    },
    {
      "id": "sow1105",
      "code": "SOW1105",
      "name": "Nhập môn Công tác xã hội và An sinh xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 037",
      "time": { "day": 3, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 37
    },
    {
      "id": "flh1155",
      "code": "FLH1155",
      "name": "Tiếng Anh Khoa học xã hội và Nhân văn 1",
      "credits": 4,
      "lecturer": "Giảng viên 038",
      "time": { "day": 4, "start": 1, "count": 4 },
      "info": "",
      "prerequisites": [],
      "stt": 38
    },
    {
      "id": "flh1156",
      "code": "FLH1156",
      "name": "Tiếng Trung Khoa học xã hội và Nhân văn 1",
      "credits": 4,
      "lecturer": "Giảng viên 039",
      "time": { "day": 4, "start": 1, "count": 4 },
      "info": "Học phần thay thế Tiếng Anh KHXH&NV 1",
      "prerequisites": [],
      "stt": 39
    },
    {
      "id": "psy1150",
      "code": "PSY1150",
      "name": "Tâm lý học phát triển",
      "credits": 3,
      "lecturer": "Giảng viên 040",
      "time": { "day": 2, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 40
    },
    {
      "id": "psy2031",
      "code": "PSY2031",
      "name": "Tâm lý học quản lý",
      "credits": 3,
      "lecturer": "Giảng viên 041",
      "time": { "day": 5, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 41
    },
    {
      "id": "psy3059",
      "code": "PSY3059",
      "name": "Phương pháp nghiên cứu tâm lý học",
      "credits": 3,
      "lecturer": "Giảng viên 042",
      "time": { "day": 7, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["MNS1053"],
      "stt": 42
    },
    {
      "id": "psy1156",
      "code": "PSY1156",
      "name": "Tâm lý học hành vi lệch chuẩn",
      "credits": 3,
      "lecturer": "Giảng viên 043",
      "time": { "day": 6, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 43
    },
    {
      "id": "psy1157",
      "code": "PSY1157",
      "name": "Tâm lý học thể thao",
      "credits": 3,
      "lecturer": "Giảng viên 044",
      "time": { "day": 3, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 44
    },
    {
      "id": "psy1161",
      "code": "PSY1161",
      "name": "Tâm lý học học đường",
      "credits": 3,
      "lecturer": "Giảng viên 045",
      "time": { "day": 2, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 45
    },
    {
      "id": "psy1162",
      "code": "PSY1162",
      "name": "Tiếng Anh chuyên ngành Tâm lý học",
      "credits": 3,
      "lecturer": "Giảng viên 046",
      "time": { "day": 4, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["FLF1107", "PSY1103"],
      "stt": 46
    },
    {
      "id": "psy3042",
      "code": "PSY3042",
      "name": "Tâm lý học gia đình",
      "credits": 3,
      "lecturer": "Giảng viên 047",
      "time": { "day": 5, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 47
    },
    {
      "id": "soc3006",
      "code": "SOC3006",
      "name": "Xã hội học truyền thông đại chúng và dư luận xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 048",
      "time": { "day": 7, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 48
    },
    {
      "id": "soc1151",
      "code": "SOC1151",
      "name": "Chính sách xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 049",
      "time": { "day": 2, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 49
    },
    {
      "id": "sow2004",
      "code": "SOW2004",
      "name": "Hành vi con người và môi trường xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 050",
      "time": { "day": 3, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 50
    },
    {
      "id": "sow3045",
      "code": "SOW3045",
      "name": "Công tác xã hội với người nghèo",
      "credits": 3,
      "lecturer": "Giảng viên 051",
      "time": { "day": 4, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["SOW1105"],
      "stt": 51
    },
    {
      "id": "sow1102",
      "code": "SOW1102",
      "name": "Phát triển cộng đồng",
      "credits": 3,
      "lecturer": "Giảng viên 052",
      "time": { "day": 5, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 52
    },
    {
      "id": "psy1163",
      "code": "PSY1163",
      "name": "Tâm lý học sáng tạo",
      "credits": 3,
      "lecturer": "Giảng viên 053",
      "time": { "day": 6, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 53
    },
    {
      "id": "psy2034",
      "code": "PSY2034",
      "name": "Giải phẫu và sinh lý hệ thần kinh",
      "credits": 2,
      "lecturer": "Giảng viên 054",
      "time": { "day": 2, "start": 2, "count": 2 },
      "info": "",
      "prerequisites": [],
      "stt": 54
    },
    {
      "id": "psy3058",
      "code": "PSY3058",
      "name": "Sinh lý học hoạt động thần kinh cấp cao",
      "credits": 3,
      "lecturer": "Giảng viên 055",
      "time": { "day": 3, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2034"],
      "stt": 55
    },
    {
      "id": "psy1154",
      "code": "PSY1154",
      "name": "Tâm lý học sức khỏe",
      "credits": 3,
      "lecturer": "Giảng viên 056",
      "time": { "day": 4, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 56
    },
    {
      "id": "psy2030",
      "code": "PSY2030",
      "name": "Tâm lý học tham vấn",
      "credits": 3,
      "lecturer": "Giảng viên 057",
      "time": { "day": 7, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 57
    },
    {
      "id": "psy2032",
      "code": "PSY2032",
      "name": "Tâm lý học nhân cách",
      "credits": 3,
      "lecturer": "Giảng viên 058",
      "time": { "day": 5, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1150"],
      "stt": 58
    },
    {
      "id": "psy2014",
      "code": "PSY2014",
      "name": "Tâm lý học lâm sàng đại cương",
      "credits": 3,
      "lecturer": "Giảng viên 059",
      "time": { "day": 6, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 59
    },
    {
      "id": "psy3060",
      "code": "PSY3060",
      "name": "Đánh giá tâm lý",
      "credits": 3,
      "lecturer": "Giảng viên 060",
      "time": { "day": 2, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2032"],
      "stt": 60
    },
    {
      "id": "psy2012",
      "code": "PSY2012",
      "name": "Tâm bệnh học đại cương",
      "credits": 3,
      "lecturer": "Giảng viên 061",
      "time": { "day": 3, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2014"],
      "stt": 61
    },
    {
      "id": "psy3070",
      "code": "PSY3070",
      "name": "Tâm lý học cộng đồng",
      "credits": 3,
      "lecturer": "Giảng viên 062",
      "time": { "day": 4, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 62
    },
    {
      "id": "psy3014",
      "code": "PSY3014",
      "name": "Tâm lý học giới",
      "credits": 2,
      "lecturer": "Giảng viên 063",
      "time": { "day": 5, "start": 8, "count": 2 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 63
    },
    {
      "id": "psy3071",
      "code": "PSY3071",
      "name": "Tâm lý học văn hoá",
      "credits": 3,
      "lecturer": "Giảng viên 064",
      "time": { "day": 7, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 64
    },
    {
      "id": "psy3043",
      "code": "PSY3043",
      "name": "Tâm lý học dân tộc",
      "credits": 3,
      "lecturer": "Giảng viên 065",
      "time": { "day": 2, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 65
    },
    {
      "id": "psy3072",
      "code": "PSY3072",
      "name": "Tâm lý học tôn giáo",
      "credits": 3,
      "lecturer": "Giảng viên 066",
      "time": { "day": 6, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 66
    },
    {
      "id": "psy2016",
      "code": "PSY2016",
      "name": "Tâm lý học pháp lý",
      "credits": 3,
      "lecturer": "Giảng viên 067",
      "time": { "day": 3, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 67
    },
    {
      "id": "psy3073",
      "code": "PSY3073",
      "name": "Thực hành tâm lý học xã hội",
      "credits": 4,
      "lecturer": "Giảng viên 068",
      "time": { "day": 4, "start": 7, "count": 4 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 68
    },
    {
      "id": "psy3074",
      "code": "PSY3074",
      "name": "Tâm lý học tiêu dùng",
      "credits": 3,
      "lecturer": "Giảng viên 069",
      "time": { "day": 5, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 69
    },
    {
      "id": "psy3075",
      "code": "PSY3075",
      "name": "Tâm lý học du lịch",
      "credits": 3,
      "lecturer": "Giảng viên 070",
      "time": { "day": 2, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 70
    },
    {
      "id": "psy3061",
      "code": "PSY3061",
      "name": "Tâm lý học công nghiệp và tổ chức",
      "credits": 3,
      "lecturer": "Giảng viên 071",
      "time": { "day": 3, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 71
    },
    {
      "id": "psy3076",
      "code": "PSY3076",
      "name": "Tâm lý học hướng nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 072",
      "time": { "day": 7, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051"],
      "stt": 72
    },
    {
      "id": "psy3077",
      "code": "PSY3077",
      "name": "Tâm lý học quảng cáo",
      "credits": 3,
      "lecturer": "Giảng viên 073",
      "time": { "day": 6, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2023"],
      "stt": 73
    },
    {
      "id": "psy3078",
      "code": "PSY3078",
      "name": "Sức khỏe tâm thần người lao động",
      "credits": 3,
      "lecturer": "Giảng viên 074",
      "time": { "day": 4, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["PSY3060", "PSY2012", "PSY2031"],
      "stt": 74
    },
    {
      "id": "psy3007",
      "code": "PSY3007",
      "name": "Thực hành tâm lý học quản lý - kinh doanh tại cơ sở",
      "credits": 3,
      "lecturer": "Giảng viên 075",
      "time": { "day": 5, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 75
    },
    {
      "id": "psy3064",
      "code": "PSY3064",
      "name": "Tâm bệnh học trẻ em và thanh thiếu niên",
      "credits": 3,
      "lecturer": "Giảng viên 076",
      "time": { "day": 2, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2012"],
      "stt": 76
    },
    {
      "id": "psy3079",
      "code": "PSY3079",
      "name": "Đánh giá và can thiệp rối loạn phát triển",
      "credits": 3,
      "lecturer": "Giảng viên 077",
      "time": { "day": 3, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2014", "PSY1150", "PSY3064"],
      "stt": 77
    },
    {
      "id": "psy3080",
      "code": "PSY3080",
      "name": "Tâm lý trị liệu",
      "credits": 4,
      "lecturer": "Giảng viên 078",
      "time": { "day": 7, "start": 3, "count": 4 },
      "info": "",
      "prerequisites": ["PSY2014"],
      "stt": 78
    },
    {
      "id": "psy3081",
      "code": "PSY3081",
      "name": "Đánh giá trong tâm lý học lâm sàng",
      "credits": 3,
      "lecturer": "Giảng viên 079",
      "time": { "day": 4, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2014"],
      "stt": 79
    },
    {
      "id": "psy3094",
      "code": "PSY3094",
      "name": "Não bộ, hành vi và sức khỏe tâm thần",
      "credits": 3,
      "lecturer": "Giảng viên 080",
      "time": { "day": 5, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1051", "PSY1103", "PSY1154"],
      "stt": 80
    },
    {
      "id": "psy3082",
      "code": "PSY3082",
      "name": "Thực hành tâm lý học lâm sàng tại cơ sở",
      "credits": 5,
      "lecturer": "Giảng viên 081",
      "time": { "day": 6, "start": 7, "count": 5 },
      "info": "",
      "prerequisites": ["PSY2014"],
      "stt": 81
    },
    {
      "id": "psy3083",
      "code": "PSY3083",
      "name": "Tham vấn cho trẻ em và thanh thiếu niên",
      "credits": 3,
      "lecturer": "Giảng viên 082",
      "time": { "day": 2, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2030"],
      "stt": 82
    },
    {
      "id": "psy3084",
      "code": "PSY3084",
      "name": "Đạo đức nghề tham vấn",
      "credits": 3,
      "lecturer": "Giảng viên 083",
      "time": { "day": 3, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2030"],
      "stt": 83
    },
    {
      "id": "psy3067",
      "code": "PSY3067",
      "name": "Tham vấn hôn nhân và gia đình",
      "credits": 3,
      "lecturer": "Giảng viên 084",
      "time": { "day": 4, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2030"],
      "stt": 84
    },
    {
      "id": "psy3035",
      "code": "PSY3035",
      "name": "Tham vấn học đường",
      "credits": 3,
      "lecturer": "Giảng viên 085",
      "time": { "day": 7, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2030"],
      "stt": 85
    },
    {
      "id": "psy3085",
      "code": "PSY3085",
      "name": "Tham vấn nhóm",
      "credits": 3,
      "lecturer": "Giảng viên 086",
      "time": { "day": 5, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2030"],
      "stt": 86
    },
    {
      "id": "psy3086",
      "code": "PSY3086",
      "name": "Tham vấn trực tuyến",
      "credits": 3,
      "lecturer": "Giảng viên 087",
      "time": { "day": 2, "start": 3, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2030"],
      "stt": 87
    },
    {
      "id": "psy3056",
      "code": "PSY3056",
      "name": "Thực hành tham vấn tâm lý",
      "credits": 3,
      "lecturer": "Giảng viên 088",
      "time": { "day": 6, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY2030"],
      "stt": 88
    },
    {
      "id": "psy3087",
      "code": "PSY3087",
      "name": "Phát triển nhận thức và ngôn ngữ",
      "credits": 3,
      "lecturer": "Giảng viên 089",
      "time": { "day": 3, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1150"],
      "stt": 89
    },
    {
      "id": "psy3088",
      "code": "PSY3088",
      "name": "Phát triển cảm xúc - xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 090",
      "time": { "day": 4, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1150"],
      "stt": 90
    },
    {
      "id": "psy3089",
      "code": "PSY3089",
      "name": "Đánh giá và phòng ngừa trong tâm lý học phát triển",
      "credits": 3,
      "lecturer": "Giảng viên 091",
      "time": { "day": 5, "start": 9, "count": 3 },
      "info": "",
      "prerequisites": ["PSY3060"],
      "stt": 91
    },
    {
      "id": "psy3090",
      "code": "PSY3090",
      "name": "Phát triển tâm lý trẻ em",
      "credits": 3,
      "lecturer": "Giảng viên 092",
      "time": { "day": 7, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1150"],
      "stt": 92
    },
    {
      "id": "psy3091",
      "code": "PSY3091",
      "name": "Phát triển tâm lý vị thành niên",
      "credits": 3,
      "lecturer": "Giảng viên 093",
      "time": { "day": 2, "start": 7, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1150"],
      "stt": 93
    },
    {
      "id": "psy3092",
      "code": "PSY3092",
      "name": "Tâm lý học người cao tuổi",
      "credits": 3,
      "lecturer": "Giảng viên 094",
      "time": { "day": 3, "start": 2, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 94
    },
    {
      "id": "psy3093",
      "code": "PSY3093",
      "name": "Thực hành Tâm lý học phát triển",
      "credits": 3,
      "lecturer": "Giảng viên 095",
      "time": { "day": 4, "start": 8, "count": 3 },
      "info": "",
      "prerequisites": ["PSY1150"],
      "stt": 95
    },
    {
      "id": "psy4051",
      "code": "PSY4051",
      "name": "Thực tập tổng hợp",
      "credits": 3,
      "lecturer": "Giảng viên 096",
      "time": { "day": 5, "start": 1, "count": 3 },
      "info": "",
      "prerequisites": [],
      "stt": 96
    },
    {
      "id": "psy4052",
      "code": "PSY4052",
      "name": "Khoá luận tốt nghiệp",
      "credits": 5,
      "lecturer": "Giảng viên 097",
      "time": { "day": 6, "start": 7, "count": 5 },
      "info": "",
      "prerequisites": [],
      "stt": 97
    },
    {
      "id": "psy4054",
      "code": "PSY4054",
      "name": "Tâm lý học nhóm",
      "credits": 2,
      "lecturer": "Giảng viên 098",
      "time": { "day": 2, "start": 2, "count": 2 },
      "info": "Học phần thay thế Khóa luận tốt nghiệp",
      "prerequisites": ["PSY2023"],
      "stt": 98
    },
    {
      "id": "psy4055",
      "code": "PSY4055",
      "name": "Tâm lý học khác biệt",
      "credits": 3,
      "lecturer": "Giảng viên 099",
      "time": { "day": 3, "start": 8, "count": 3 },
      "info": "Học phần thay thế Khóa luận tốt nghiệp",
      "prerequisites": ["PSY2032"],
      "stt": 99
    },
    {
      "id": "skill001",
      "code": "SKILL001",
      "name": "Kỹ năng bổ trợ",
      "credits": 3,
      "lecturer": "Giảng viên 100",
      "time": { "day": 7, "start": 1, "count": 3 },
      "info": "Học phần điều kiện",
      "prerequisites": [],
      "stt": 100
    }
  ],
    "qhcc": [
        {
            "id": "phi1006",
            "code": "PHI1006",
            "name": "Triết học Mác - Lê nin",
            "credits": 3,
            "lecturer": "Giảng viên 001",
            "time": {
                "day": 4,
                "start": 9,
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
                "day": 5,
                "start": 8,
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
                "start": 9,
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
                "start": 3,
                "count": 2
            },
            "info": "",
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
                "day": 7,
                "start": 1,
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
                "day": 6,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 6
        },
        {
            "id": "flf1107",
            "code": "FLF1107",
            "name": "Tiếng Anh B1",
            "credits": 5,
            "lecturer": "Giảng viên 007",
            "time": {
                "day": 6,
                "start": 7,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 7
        },
        {
            "id": "flf1407",
            "code": "FLF1407",
            "name": "Tiếng Trung Quốc B1",
            "credits": 5,
            "lecturer": "Giảng viên 008",
            "time": {
                "day": 6,
                "start": 7,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 8
        },
        {
            "id": "int1226",
            "code": "INT1226",
            "name": "Tin học cơ sở",
            "credits": 3,
            "lecturer": "Giảng viên 009",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 9
        },
        {
            "id": "skill001",
            "code": "SKILL001",
            "name": "Kỹ năng bổ trợ",
            "credits": 3,
            "lecturer": "Giảng viên 010",
            "time": {
                "day": 6,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 10
        },
        {
            "id": "edu001",
            "code": "EDU001",
            "name": "Giáo dục thể chất",
            "credits": 4,
            "lecturer": "Giảng viên 011",
            "time": {
                "day": 7,
                "start": 8,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 11
        },
        {
            "id": "def001",
            "code": "DEF001",
            "name": "Giáo dục quốc phòng - an ninh",
            "credits": 8,
            "lecturer": "Giảng viên 012",
            "time": {
                "day": 6,
                "start": 3,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 12
        },
        {
            "id": "mns1053",
            "code": "MNS1053",
            "name": "Các phương pháp nghiên cứu khoa học",
            "credits": 3,
            "lecturer": "Giảng viên 013",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
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
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 14
        },
        {
            "id": "his1053",
            "code": "HIS1053",
            "name": "Lịch sử văn minh thế giới",
            "credits": 3,
            "lecturer": "Giảng viên 015",
            "time": {
                "day": 4,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 15
        },
        {
            "id": "phi1054",
            "code": "PHI1054",
            "name": "Logic học đại cương",
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
            "id": "psy1051",
            "code": "PSY1051",
            "name": "Tâm lý học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 017",
            "time": {
                "day": 4,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 17
        },
        {
            "id": "soc1051",
            "code": "SOC1051",
            "name": "Xã hội học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 018",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 18
        },
        {
            "id": "ine1014",
            "code": "INE1014",
            "name": "Kinh tế học đại cương",
            "credits": 2,
            "lecturer": "Giảng viên 019",
            "time": {
                "day": 2,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 19
        },
        {
            "id": "pol1053",
            "code": "POL1053",
            "name": "Hệ thống chính trị Việt Nam",
            "credits": 2,
            "lecturer": "Giảng viên 020",
            "time": {
                "day": 5,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 20
        },
        {
            "id": "its1051",
            "code": "ITS1051",
            "name": "Hội nhập quốc tế và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 021",
            "time": {
                "day": 3,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 21
        },
        {
            "id": "evs1001",
            "code": "EVS1001",
            "name": "Môi trường và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 022",
            "time": {
                "day": 6,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 22
        },
        {
            "id": "lib1050",
            "code": "LIB1050",
            "name": "Nhập môn năng lực thông tin",
            "credits": 2,
            "lecturer": "Giảng viên 023",
            "time": {
                "day": 4,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 23
        },
        {
            "id": "mat1078",
            "code": "MAT1078",
            "name": "Thống kê cho khoa học xã hội",
            "credits": 2,
            "lecturer": "Giảng viên 024",
            "time": {
                "day": 4,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 24
        },
        {
            "id": "lin1050",
            "code": "LIN1050",
            "name": "Thực hành văn bản tiếng Việt",
            "credits": 2,
            "lecturer": "Giảng viên 025",
            "time": {
                "day": 5,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 25
        },
        {
            "id": "lit1054",
            "code": "LIT1054",
            "name": "Tư duy sáng tạo và thiết kế ý tưởng",
            "credits": 2,
            "lecturer": "Giảng viên 026",
            "time": {
                "day": 6,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 26
        },
        {
            "id": "lit1053",
            "code": "LIT1053",
            "name": "Viết học thuật",
            "credits": 2,
            "lecturer": "Giảng viên 027",
            "time": {
                "day": 5,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 27
        },
        {
            "id": "mns1054",
            "code": "MNS1054",
            "name": "Khởi nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 028",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 28
        },
        {
            "id": "prs1101",
            "code": "PRS1101",
            "name": "Niên luận",
            "credits": 2,
            "lecturer": "Giảng viên 029",
            "time": {
                "day": 5,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 29
        },
        {
            "id": "jou1051",
            "code": "JOU1051",
            "name": "Báo chí truyền thông đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 030",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 30
        },
        {
            "id": "prs1100",
            "code": "PRS1100",
            "name": "Quan hệ công chúng đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 031",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 31
        },
        {
            "id": "pol1052",
            "code": "POL1052",
            "name": "Chính trị học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 032",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 32
        },
        {
            "id": "mns1100",
            "code": "MNS1100",
            "name": "Khoa học quản lý đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 033",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 33
        },
        {
            "id": "lin2033",
            "code": "LIN2033",
            "name": "Dẫn luận ngôn ngữ học",
            "credits": 3,
            "lecturer": "Giảng viên 034",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 34
        },
        {
            "id": "phi1100",
            "code": "PHI1100",
            "name": "Mỹ học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 035",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 35
        },
        {
            "id": "lin2039",
            "code": "LIN2039",
            "name": "Ngữ dụng học",
            "credits": 3,
            "lecturer": "Giảng viên 036",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIN2033"
            ],
            "stt": 36
        },
        {
            "id": "tou1100",
            "code": "TOU1100",
            "name": "Đại cương về quản trị kinh doanh",
            "credits": 3,
            "lecturer": "Giảng viên 037",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 37
        },
        {
            "id": "aro1151",
            "code": "ARO1151",
            "name": "Nhập môn Quản trị văn phòng",
            "credits": 3,
            "lecturer": "Giảng viên 038",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 38
        },
        {
            "id": "lit1100",
            "code": "LIT1100",
            "name": "Nghệ thuật học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 039",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 39
        },
        {
            "id": "its1100",
            "code": "ITS1100",
            "name": "Nhập môn Quan hệ quốc tế",
            "credits": 3,
            "lecturer": "Giảng viên 040",
            "time": {
                "day": 4,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 40
        },
        {
            "id": "ors2005",
            "code": "ORS2005",
            "name": "Văn hoá, văn minh phương Đông",
            "credits": 3,
            "lecturer": "Giảng viên 041",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 41
        },
        {
            "id": "its3121",
            "code": "ITS3121",
            "name": "Các vấn đề toàn cầu",
            "credits": 3,
            "lecturer": "Giảng viên 042",
            "time": {
                "day": 3,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 42
        },
        {
            "id": "flh1155",
            "code": "FLH1155",
            "name": "Tiếng Anh Khoa học Xã hội và Nhân văn 1",
            "credits": 4,
            "lecturer": "Giảng viên 043",
            "time": {
                "day": 6,
                "start": 3,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 43
        },
        {
            "id": "flh1156",
            "code": "FLH1156",
            "name": "Tiếng Trung Khoa học Xã hội và Nhân văn 1",
            "credits": 4,
            "lecturer": "Giảng viên 044",
            "time": {
                "day": 5,
                "start": 7,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 44
        },
        {
            "id": "jou1150",
            "code": "JOU1150",
            "name": "Lý luận báo chí truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 045",
            "time": {
                "day": 4,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 45
        },
        {
            "id": "jou2019",
            "code": "JOU2019",
            "name": "Pháp luật và đạo đức báo chí truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 046",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "JOU1051"
            ],
            "stt": 46
        },
        {
            "id": "prs3005",
            "code": "PRS3005",
            "name": "Đại cương về quảng cáo",
            "credits": 3,
            "lecturer": "Giảng viên 047",
            "time": {
                "day": 3,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 47
        },
        {
            "id": "prs1150",
            "code": "PRS1150",
            "name": "Truyền thông Marketing",
            "credits": 3,
            "lecturer": "Giảng viên 048",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 48
        },
        {
            "id": "prs2002",
            "code": "PRS2002",
            "name": "Thuyết trình và phát ngôn",
            "credits": 3,
            "lecturer": "Giảng viên 049",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 49
        },
        {
            "id": "prs2001",
            "code": "PRS2001",
            "name": "Nhiếp ảnh",
            "credits": 3,
            "lecturer": "Giảng viên 050",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 50
        },
        {
            "id": "jou3089",
            "code": "JOU3089",
            "name": "Ứng dụng truyền thông đa phương tiện",
            "credits": 3,
            "lecturer": "Giảng viên 051",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 51
        },
        {
            "id": "jou3086",
            "code": "JOU3086",
            "name": "Công nghệ phát thanh và truyền hình",
            "credits": 3,
            "lecturer": "Giảng viên 052",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 52
        },
        {
            "id": "jou3085",
            "code": "JOU3085",
            "name": "Kỹ năng viết cho báo in và báo điện tử",
            "credits": 3,
            "lecturer": "Giảng viên 053",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 53
        },
        {
            "id": "mns1156",
            "code": "MNS1156",
            "name": "Kỹ năng đàm phán",
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
            "id": "soc3006",
            "code": "SOC3006",
            "name": "Xã hội học truyền thông đại chúng và dư luận xã hội",
            "credits": 3,
            "lecturer": "Giảng viên 055",
            "time": {
                "day": 6,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 55
        },
        {
            "id": "prs3000",
            "code": "PRS3000",
            "name": "Lý luận về quan hệ công chúng",
            "credits": 3,
            "lecturer": "Giảng viên 056",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PRS1100"
            ],
            "stt": 56
        },
        {
            "id": "prs3002",
            "code": "PRS3002",
            "name": "Các chương trình quan hệ công chúng",
            "credits": 3,
            "lecturer": "Giảng viên 057",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PRS1100"
            ],
            "stt": 57
        },
        {
            "id": "prs3003",
            "code": "PRS3003",
            "name": "Kỹ năng viết cho quan hệ công chúng",
            "credits": 3,
            "lecturer": "Giảng viên 058",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PRS1100"
            ],
            "stt": 58
        },
        {
            "id": "prs3004",
            "code": "PRS3004",
            "name": "Tổ chức sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 059",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PRS1100"
            ],
            "stt": 59
        },
        {
            "id": "prs3008",
            "code": "PRS3008",
            "name": "Xây dựng kế hoạch truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 060",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PRS1100"
            ],
            "stt": 60
        },
        {
            "id": "prs3010",
            "code": "PRS3010",
            "name": "Chiến dịch quan hệ công chúng",
            "credits": 3,
            "lecturer": "Giảng viên 061",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PRS1100"
            ],
            "stt": 61
        },
        {
            "id": "prs3007",
            "code": "PRS3007",
            "name": "Quan hệ báo chí",
            "credits": 3,
            "lecturer": "Giảng viên 062",
            "time": {
                "day": 7,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 62
        },
        {
            "id": "prs3001",
            "code": "PRS3001",
            "name": "Xây dựng và phát triển thương hiệu",
            "credits": 3,
            "lecturer": "Giảng viên 063",
            "time": {
                "day": 6,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PRS1100"
            ],
            "stt": 63
        },
        {
            "id": "prs3009",
            "code": "PRS3009",
            "name": "Văn hoá tổ chức và truyền thông nội bộ",
            "credits": 3,
            "lecturer": "Giảng viên 064",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 64
        },
        {
            "id": "prs3011",
            "code": "PRS3011",
            "name": "Truyền thông về các tác phẩm văn học, nghệ thuật",
            "credits": 3,
            "lecturer": "Giảng viên 065",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 65
        },
        {
            "id": "jou3092",
            "code": "JOU3092",
            "name": "Quản trị nội dung số",
            "credits": 3,
            "lecturer": "Giảng viên 066",
            "time": {
                "day": 5,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 66
        },
        {
            "id": "prs3012",
            "code": "PRS3012",
            "name": "Quản trị khủng hoảng",
            "credits": 3,
            "lecturer": "Giảng viên 067",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 67
        },
        {
            "id": "prs3013",
            "code": "PRS3013",
            "name": "Thiết kế bài thuyết trình multimedia",
            "credits": 3,
            "lecturer": "Giảng viên 068",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 68
        },
        {
            "id": "jou2017",
            "code": "JOU2017",
            "name": "Ngôn ngữ báo chí",
            "credits": 3,
            "lecturer": "Giảng viên 069",
            "time": {
                "day": 2,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 69
        },
        {
            "id": "prs4001",
            "code": "PRS4001",
            "name": "Thực tập thực tế",
            "credits": 3,
            "lecturer": "Giảng viên 070",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 70
        },
        {
            "id": "prs4003",
            "code": "PRS4003",
            "name": "Thực tập tốt nghiệp 1",
            "credits": 4,
            "lecturer": "Giảng viên 071",
            "time": {
                "day": 7,
                "start": 8,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 71
        },
        {
            "id": "prs4004",
            "code": "PRS4004",
            "name": "Thực tập tốt nghiệp 2",
            "credits": 5,
            "lecturer": "Giảng viên 072",
            "time": {
                "day": 6,
                "start": 8,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 72
        },
        {
            "id": "prs4050",
            "code": "PRS4050",
            "name": "Khoá luận tốt nghiệp",
            "credits": 5,
            "lecturer": "Giảng viên 073",
            "time": {
                "day": 5,
                "start": 2,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 73
        },
        {
            "id": "prs4051",
            "code": "PRS4051",
            "name": "Lý luận và thực tiễn quan hệ công chúng",
            "credits": 3,
            "lecturer": "Giảng viên 074",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 74
        },
        {
            "id": "prs4052",
            "code": "PRS4052",
            "name": "Quan hệ công chúng ứng dụng",
            "credits": 2,
            "lecturer": "Giảng viên 075",
            "time": {
                "day": 3,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 75
        }
    ],
    "qtdvdllh": [
        {
            "id": "phi1006",
            "code": "PHI1006",
            "name": "Triết học Mác - Lê nin",
            "credits": 3,
            "lecturer": "Giảng viên 001",
            "time": {
                "day": 7,
                "start": 2,
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
                "day": 2,
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
                "day": 2,
                "start": 1,
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
                "day": 3,
                "start": 8,
                "count": 2
            },
            "info": "",
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
                "day": 4,
                "start": 7,
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
                "day": 6,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 6
        },
        {
            "id": "flf1107",
            "code": "FLF1107",
            "name": "Tiếng Anh B1",
            "credits": 5,
            "lecturer": "Giảng viên 007",
            "time": {
                "day": 3,
                "start": 3,
                "count": 5
            },
            "info": "",
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
                "day": 7,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 8
        },
        {
            "id": "skill001",
            "code": "SKILL001",
            "name": "Kỹ năng bổ trợ",
            "credits": 3,
            "lecturer": "Giảng viên 009",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 9
        },
        {
            "id": "edu001",
            "code": "EDU001",
            "name": "Giáo dục thể chất",
            "credits": 4,
            "lecturer": "Giảng viên 010",
            "time": {
                "day": 6,
                "start": 7,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 10
        },
        {
            "id": "def001",
            "code": "DEF001",
            "name": "Giáo dục Quốc phòng - An ninh",
            "credits": 8,
            "lecturer": "Giảng viên 011",
            "time": {
                "day": 5,
                "start": 8,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 11
        },
        {
            "id": "mns1053",
            "code": "MNS1053",
            "name": "Các phương pháp nghiên cứu khoa học",
            "credits": 3,
            "lecturer": "Giảng viên 012",
            "time": {
                "day": 6,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 12
        },
        {
            "id": "his1056",
            "code": "HIS1056",
            "name": "Cơ sở văn hoá Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 013",
            "time": {
                "day": 2,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 13
        },
        {
            "id": "his1053",
            "code": "HIS1053",
            "name": "Lịch sử văn minh thế giới",
            "credits": 3,
            "lecturer": "Giảng viên 014",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 14
        },
        {
            "id": "phi1054",
            "code": "PHI1054",
            "name": "Lôgic học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 015",
            "time": {
                "day": 2,
                "start": 1,
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
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 16
        },
        {
            "id": "soc1051",
            "code": "SOC1051",
            "name": "Xã hội học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 017",
            "time": {
                "day": 4,
                "start": 2,
                "count": 3
            },
            "info": "",
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
                "day": 3,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 18
        },
        {
            "id": "pol1053",
            "code": "POL1053",
            "name": "Hệ thống chính trị Việt Nam",
            "credits": 2,
            "lecturer": "Giảng viên 019",
            "time": {
                "day": 3,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 19
        },
        {
            "id": "its1051",
            "code": "ITS1051",
            "name": "Hội nhập quốc tế và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 020",
            "time": {
                "day": 4,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 20
        },
        {
            "id": "evs1001",
            "code": "EVS1001",
            "name": "Môi trường và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 021",
            "time": {
                "day": 5,
                "start": 3,
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
                "day": 6,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 22
        },
        {
            "id": "mat1078",
            "code": "MAT1078",
            "name": "Thống kê cho khoa học xã hội",
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
            "id": "lin1050",
            "code": "LIN1050",
            "name": "Thực hành văn bản tiếng Việt",
            "credits": 2,
            "lecturer": "Giảng viên 024",
            "time": {
                "day": 4,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 24
        },
        {
            "id": "lit1054",
            "code": "LIT1054",
            "name": "Tư duy sáng tạo và thiết kế ý tưởng",
            "credits": 2,
            "lecturer": "Giảng viên 025",
            "time": {
                "day": 7,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 25
        },
        {
            "id": "lit1053",
            "code": "LIT1053",
            "name": "Viết học thuật",
            "credits": 2,
            "lecturer": "Giảng viên 026",
            "time": {
                "day": 4,
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
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 27
        },
        {
            "id": "tou2013",
            "code": "TOU2013",
            "name": "Niên luận",
            "credits": 2,
            "lecturer": "Giảng viên 028",
            "time": {
                "day": 5,
                "start": 9,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "MNS1053"
            ],
            "stt": 28
        },
        {
            "id": "tou1100",
            "code": "TOU1100",
            "name": "Đại cương về quản trị kinh doanh",
            "credits": 3,
            "lecturer": "Giảng viên 029",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 29
        },
        {
            "id": "tou1102",
            "code": "TOU1102",
            "name": "Nhập môn du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 030",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 30
        },
        {
            "id": "geo1001",
            "code": "GEO1001",
            "name": "Địa lý thế giới",
            "credits": 3,
            "lecturer": "Giảng viên 031",
            "time": {
                "day": 5,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 31
        },
        {
            "id": "cal2004",
            "code": "CAL2004",
            "name": "Luật hành chính Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 032",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 32
        },
        {
            "id": "lib2001",
            "code": "LIB2001",
            "name": "Thông tin học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 033",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 33
        },
        {
            "id": "mns1101",
            "code": "MNS1101",
            "name": "Văn hoá tổ chức",
            "credits": 3,
            "lecturer": "Giảng viên 034",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 34
        },
        {
            "id": "prs1100",
            "code": "PRS1100",
            "name": "Quan hệ công chúng đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 035",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 35
        },
        {
            "id": "mns1100",
            "code": "MNS1100",
            "name": "Khoa học quản lý đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 036",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 36
        },
        {
            "id": "ant1100",
            "code": "ANT1100",
            "name": "Nhân học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 037",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 37
        },
        {
            "id": "psy2031",
            "code": "PSY2031",
            "name": "Tâm lý học quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 038",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PSY1051"
            ],
            "stt": 38
        },
        {
            "id": "rel1100",
            "code": "REL1100",
            "name": "Tôn giáo học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 039",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 39
        },
        {
            "id": "tou2003",
            "code": "TOU2003",
            "name": "Kinh tế du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 040",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 40
        },
        {
            "id": "tou1150",
            "code": "TOU1150",
            "name": "Văn hoá du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 041",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 41
        },
        {
            "id": "tou2002",
            "code": "TOU2002",
            "name": "Địa lí du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 042",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 42
        },
        {
            "id": "tou1152",
            "code": "TOU1152",
            "name": "Hành vi tiêu dùng du lịch",
            "credits": 2,
            "lecturer": "Giảng viên 043",
            "time": {
                "day": 6,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 43
        },
        {
            "id": "tou1153",
            "code": "TOU1153",
            "name": "Thanh toán quốc tế trong du lịch",
            "credits": 2,
            "lecturer": "Giảng viên 044",
            "time": {
                "day": 3,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "TOU2003"
            ],
            "stt": 44
        },
        {
            "id": "tou2012",
            "code": "TOU2012",
            "name": "Thống kê du lịch",
            "credits": 2,
            "lecturer": "Giảng viên 045",
            "time": {
                "day": 5,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "TOU2003"
            ],
            "stt": 45
        },
        {
            "id": "tou1155",
            "code": "TOU1155",
            "name": "Du lịch tôn giáo - tín ngưỡng",
            "credits": 2,
            "lecturer": "Giảng viên 046",
            "time": {
                "day": 7,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "TOU1150"
            ],
            "stt": 46
        },
        {
            "id": "tou2005",
            "code": "TOU2005",
            "name": "Pháp luật du lịch",
            "credits": 2,
            "lecturer": "Giảng viên 047",
            "time": {
                "day": 6,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 47
        },
        {
            "id": "tou1156",
            "code": "TOU1156",
            "name": "Du lịch lễ hội",
            "credits": 2,
            "lecturer": "Giảng viên 048",
            "time": {
                "day": 7,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "TOU1150"
            ],
            "stt": 48
        },
        {
            "id": "sin1001",
            "code": "SIN1001",
            "name": "Hán Nôm cơ sở",
            "credits": 3,
            "lecturer": "Giảng viên 049",
            "time": {
                "day": 4,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 49
        },
        {
            "id": "mns1104",
            "code": "MNS1104",
            "name": "Quản lý nguồn nhân lực",
            "credits": 3,
            "lecturer": "Giảng viên 050",
            "time": {
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 50
        },
        {
            "id": "mns3036",
            "code": "MNS3036",
            "name": "Văn hoá và đạo đức quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 051",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "MNS1100"
            ],
            "stt": 51
        },
        {
            "id": "ors2005",
            "code": "ORS2005",
            "name": "Văn hoá, văn minh phương Đông",
            "credits": 3,
            "lecturer": "Giảng viên 052",
            "time": {
                "day": 6,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 52
        },
        {
            "id": "tou1101",
            "code": "TOU1101",
            "name": "Kiến tập tổng hợp",
            "credits": 3,
            "lecturer": "Giảng viên 053",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU1102"
            ],
            "stt": 53
        },
        {
            "id": "tou2016",
            "code": "TOU2016",
            "name": "Thực tập tổng hợp",
            "credits": 3,
            "lecturer": "Giảng viên 054",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU1101"
            ],
            "stt": 54
        },
        {
            "id": "flh1149",
            "code": "FLH1149",
            "name": "Tiếng Anh du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 055",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "FLF1107"
            ],
            "stt": 55
        },
        {
            "id": "tou1151",
            "code": "TOU1151",
            "name": "Marketing du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 056",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU1102"
            ],
            "stt": 56
        },
        {
            "id": "tou3017",
            "code": "TOU3017",
            "name": "Giao tiếp và lễ tân ngoại giao",
            "credits": 3,
            "lecturer": "Giảng viên 057",
            "time": {
                "day": 6,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 57
        },
        {
            "id": "tou3012",
            "code": "TOU3012",
            "name": "Điểm tuyến du lịch Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 058",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 58
        },
        {
            "id": "tou3041",
            "code": "TOU3041",
            "name": "Hướng dẫn du lịch",
            "credits": 4,
            "lecturer": "Giảng viên 059",
            "time": {
                "day": 6,
                "start": 7,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 59
        },
        {
            "id": "tou3014",
            "code": "TOU3014",
            "name": "Nghiệp vụ lữ hành",
            "credits": 3,
            "lecturer": "Giảng viên 060",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 60
        },
        {
            "id": "tou2009",
            "code": "TOU2009",
            "name": "Quản trị kinh doanh lữ hành",
            "credits": 3,
            "lecturer": "Giảng viên 061",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU3014",
                "TOU1100"
            ],
            "stt": 61
        },
        {
            "id": "flf1150",
            "code": "FLF1150",
            "name": "Tiếng Anh chuyên ngành lữ hành",
            "credits": 3,
            "lecturer": "Giảng viên 062",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "FLF1149"
            ],
            "stt": 62
        },
        {
            "id": "tou3035",
            "code": "TOU3035",
            "name": "Thực tập chuyên ngành 1 (lữ hành)",
            "credits": 3,
            "lecturer": "Giảng viên 063",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU3014"
            ],
            "stt": 63
        },
        {
            "id": "tou3036",
            "code": "TOU3036",
            "name": "Thực tập chuyên ngành 2 (hướng dẫn)",
            "credits": 3,
            "lecturer": "Giảng viên 064",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU3041"
            ],
            "stt": 64
        },
        {
            "id": "tou3043",
            "code": "TOU3043",
            "name": "Tổng quan sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 065",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 65
        },
        {
            "id": "tou3024",
            "code": "TOU3024",
            "name": "Thiết kế và tổ chức sản xuất sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 066",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 66
        },
        {
            "id": "tou3034",
            "code": "TOU3034",
            "name": "Quản trị sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 067",
            "time": {
                "day": 5,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU3043"
            ],
            "stt": 67
        },
        {
            "id": "tou3042",
            "code": "TOU3042",
            "name": "Thực hành dự án sự kiện",
            "credits": 4,
            "lecturer": "Giảng viên 068",
            "time": {
                "day": 4,
                "start": 2,
                "count": 4
            },
            "info": "",
            "prerequisites": [
                "TOU3024"
            ],
            "stt": 68
        },
        {
            "id": "tou3025",
            "code": "TOU3025",
            "name": "PR và truyền thông cho sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 069",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 69
        },
        {
            "id": "tou3037",
            "code": "TOU3037",
            "name": "Thực tập chuyên ngành sự kiện 1",
            "credits": 3,
            "lecturer": "Giảng viên 070",
            "time": {
                "day": 5,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU3043"
            ],
            "stt": 70
        },
        {
            "id": "tou3038",
            "code": "TOU3038",
            "name": "Thực tập chuyên ngành sự kiện 2",
            "credits": 3,
            "lecturer": "Giảng viên 071",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU3037"
            ],
            "stt": 71
        },
        {
            "id": "tou3015",
            "code": "TOU3015",
            "name": "Du lịch sinh thái",
            "credits": 3,
            "lecturer": "Giảng viên 072",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU2002"
            ],
            "stt": 72
        },
        {
            "id": "tou3016",
            "code": "TOU3016",
            "name": "Du lịch văn hoá",
            "credits": 3,
            "lecturer": "Giảng viên 073",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU1150"
            ],
            "stt": 73
        },
        {
            "id": "tou3018",
            "code": "TOU3018",
            "name": "Xúc tiến du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 074",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU1151"
            ],
            "stt": 74
        },
        {
            "id": "tou3020",
            "code": "TOU3020",
            "name": "Diễn giảng công cộng",
            "credits": 3,
            "lecturer": "Giảng viên 075",
            "time": {
                "day": 4,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 75
        },
        {
            "id": "tou3003",
            "code": "TOU3003",
            "name": "Kinh doanh dịch vụ bổ sung",
            "credits": 3,
            "lecturer": "Giảng viên 076",
            "time": {
                "day": 6,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU1100"
            ],
            "stt": 76
        },
        {
            "id": "tou3028",
            "code": "TOU3028",
            "name": "Ý tưởng và kịch bản sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 077",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 77
        },
        {
            "id": "tou3029",
            "code": "TOU3029",
            "name": "Tài trợ và gây quỹ cho sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 078",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 78
        },
        {
            "id": "tou3022",
            "code": "TOU3022",
            "name": "Quản trị thực phẩm đồ uống",
            "credits": 3,
            "lecturer": "Giảng viên 079",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU1100"
            ],
            "stt": 79
        },
        {
            "id": "tou3044",
            "code": "TOU3044",
            "name": "Phát triển sản phẩm du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 080",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 80
        },
        {
            "id": "tou4050",
            "code": "TOU4050",
            "name": "Thực tập tốt nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 081",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "TOU3035/TOU3036/TOU3037/TOU3038"
            ],
            "stt": 81
        },
        {
            "id": "tou4051",
            "code": "TOU4051",
            "name": "Khoá luận tốt nghiệp",
            "credits": 5,
            "lecturer": "Giảng viên 082",
            "time": {
                "day": 6,
                "start": 8,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 82
        },
        {
            "id": "tou4052",
            "code": "TOU4052",
            "name": "Tài nguyên du lịch",
            "credits": 2,
            "lecturer": "Giảng viên 083",
            "time": {
                "day": 7,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 83
        },
        {
            "id": "tou4053",
            "code": "TOU4053",
            "name": "Kinh doanh du lịch",
            "credits": 3,
            "lecturer": "Giảng viên 084",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 84
        },
        {
            "id": "tou4064",
            "code": "TOU4064",
            "name": "Kinh doanh sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 085",
            "time": {
                "day": 6,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 85
        }
    ],
    "bc": [
        {
            "id": "phi1006",
            "code": "PHI1006",
            "name": "Triết học Mác - Lênin",
            "credits": 3,
            "lecturer": "Giảng viên 001",
            "time": {
                "day": 7,
                "start": 8,
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
                "day": 6,
                "start": 9,
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
                "day": 3,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 3
        },
        {
            "id": "pol1001",
            "code": "POL1001",
            "name": "Tư tưởng Hồ Chí Minh",
            "credits": 2,
            "lecturer": "Giảng viên 004",
            "time": {
                "day": 6,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 4
        },
        {
            "id": "his1001",
            "code": "HIS1001",
            "name": "Lịch sử Đảng cộng sản Việt Nam",
            "credits": 2,
            "lecturer": "Giảng viên 005",
            "time": {
                "day": 6,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 5
        },
        {
            "id": "thl1057",
            "code": "THL1057",
            "name": "Nhà nước và pháp luật đại cương",
            "credits": 2,
            "lecturer": "Giảng viên 006",
            "time": {
                "day": 2,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 6
        },
        {
            "id": "flf1107",
            "code": "FLF1107",
            "name": "Tiếng Anh B1",
            "credits": 5,
            "lecturer": "Giảng viên 007",
            "time": {
                "day": 3,
                "start": 9,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 7
        },
        {
            "id": "flf1407",
            "code": "FLF1407",
            "name": "Tiếng Trung Quốc B1",
            "credits": 5,
            "lecturer": "Giảng viên 008",
            "time": {
                "day": 6,
                "start": 8,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 8
        },
        {
            "id": "int1226",
            "code": "INT1226",
            "name": "Tin học cơ sở",
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
            "id": "skill001",
            "code": "SKILL001",
            "name": "Kỹ năng bổ trợ",
            "credits": 3,
            "lecturer": "Giảng viên 010",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 10
        },
        {
            "id": "edu001",
            "code": "EDU001",
            "name": "Giáo dục thể chất",
            "credits": 4,
            "lecturer": "Giảng viên 011",
            "time": {
                "day": 4,
                "start": 1,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 11
        },
        {
            "id": "def001",
            "code": "DEF001",
            "name": "Giáo dục quốc phòng - an ninh",
            "credits": 8,
            "lecturer": "Giảng viên 012",
            "time": {
                "day": 6,
                "start": 2,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 12
        },
        {
            "id": "mns1053",
            "code": "MNS1053",
            "name": "Các phương pháp nghiên cứu khoa học",
            "credits": 3,
            "lecturer": "Giảng viên 013",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 13
        },
        {
            "id": "his1053",
            "code": "HIS1053",
            "name": "Lịch sử văn minh thế giới",
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
            "id": "his1056",
            "code": "HIS1056",
            "name": "Cơ sở văn hoá Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 015",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 15
        },
        {
            "id": "soc1051",
            "code": "SOC1051",
            "name": "Xã hội học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 016",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 16
        },
        {
            "id": "psy1051",
            "code": "PSY1051",
            "name": "Tâm lý học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 017",
            "time": {
                "day": 4,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 17
        },
        {
            "id": "phi1054",
            "code": "PHI1054",
            "name": "Lôgic học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 018",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 18
        },
        {
            "id": "ine1014",
            "code": "INE1014",
            "name": "Kinh tế học đại cương",
            "credits": 2,
            "lecturer": "Giảng viên 019",
            "time": {
                "day": 2,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 19
        },
        {
            "id": "pol1053",
            "code": "POL1053",
            "name": "Hệ thống chính trị Việt Nam",
            "credits": 2,
            "lecturer": "Giảng viên 020",
            "time": {
                "day": 3,
                "start": 7,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 20
        },
        {
            "id": "its1051",
            "code": "ITS1051",
            "name": "Hội nhập quốc tế và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 021",
            "time": {
                "day": 6,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 21
        },
        {
            "id": "evs1001",
            "code": "EVS1001",
            "name": "Môi trường và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 022",
            "time": {
                "day": 7,
                "start": 9,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 22
        },
        {
            "id": "lib1050",
            "code": "LIB1050",
            "name": "Nhập môn Năng lực thông tin",
            "credits": 2,
            "lecturer": "Giảng viên 023",
            "time": {
                "day": 3,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 23
        },
        {
            "id": "mat1078",
            "code": "MAT1078",
            "name": "Thống kê cho khoa học xã hội",
            "credits": 2,
            "lecturer": "Giảng viên 024",
            "time": {
                "day": 4,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 24
        },
        {
            "id": "lin1050",
            "code": "LIN1050",
            "name": "Thực hành văn bản tiếng Việt",
            "credits": 2,
            "lecturer": "Giảng viên 025",
            "time": {
                "day": 2,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 25
        },
        {
            "id": "lit1054",
            "code": "LIT1054",
            "name": "Tư duy sáng tạo và thiết kế ý tưởng",
            "credits": 2,
            "lecturer": "Giảng viên 026",
            "time": {
                "day": 3,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 26
        },
        {
            "id": "lit1053",
            "code": "LIT1053",
            "name": "Viết học thuật",
            "credits": 2,
            "lecturer": "Giảng viên 027",
            "time": {
                "day": 6,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 27
        },
        {
            "id": "mns1054",
            "code": "MNS1054",
            "name": "Khởi nghiệp",
            "credits": 3,
            "lecturer": "Giảng viên 028",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 28
        },
        {
            "id": "jou3021",
            "code": "JOU3021",
            "name": "Niên luận",
            "credits": 2,
            "lecturer": "Giảng viên 029",
            "time": {
                "day": 6,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 29
        },
        {
            "id": "jou1051",
            "code": "JOU1051",
            "name": "Báo chí Truyền thông đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 030",
            "time": {
                "day": 6,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 30
        },
        {
            "id": "prs1100",
            "code": "PRS1100",
            "name": "Quan hệ công chúng đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 031",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 31
        },
        {
            "id": "pol1052",
            "code": "POL1052",
            "name": "Chính trị học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 032",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 32
        },
        {
            "id": "mns1100",
            "code": "MNS1100",
            "name": "Khoa học quản lý đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 033",
            "time": {
                "day": 4,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 33
        },
        {
            "id": "phi1100",
            "code": "PHI1100",
            "name": "Mỹ học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 034",
            "time": {
                "day": 6,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 34
        },
        {
            "id": "ant1100",
            "code": "ANT1100",
            "name": "Nhân học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 035",
            "time": {
                "day": 3,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 35
        },
        {
            "id": "tou1100",
            "code": "TOU1100",
            "name": "Đại cương về quản trị kinh doanh",
            "credits": 3,
            "lecturer": "Giảng viên 036",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 36
        },
        {
            "id": "aro1151",
            "code": "ARO1151",
            "name": "Nhập môn Quản trị văn phòng",
            "credits": 3,
            "lecturer": "Giảng viên 037",
            "time": {
                "day": 6,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 37
        },
        {
            "id": "lin2033",
            "code": "LIN2033",
            "name": "Dẫn luận ngôn ngữ học",
            "credits": 3,
            "lecturer": "Giảng viên 038",
            "time": {
                "day": 6,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 38
        },
        {
            "id": "phi1104",
            "code": "PHI1104",
            "name": "Đạo đức học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 039",
            "time": {
                "day": 4,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 39
        },
        {
            "id": "lit1100",
            "code": "LIT1100",
            "name": "Nghệ thuật học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 040",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 40
        },
        {
            "id": "mns1105",
            "code": "MNS1105",
            "name": "Lý thuyết hệ thống",
            "credits": 3,
            "lecturer": "Giảng viên 041",
            "time": {
                "day": 7,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 41
        },
        {
            "id": "psy2023",
            "code": "PSY2023",
            "name": "Tâm lý học xã hội",
            "credits": 3,
            "lecturer": "Giảng viên 042",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 42
        },
        {
            "id": "its1100",
            "code": "ITS1100",
            "name": "Nhập môn Quan hệ quốc tế",
            "credits": 3,
            "lecturer": "Giảng viên 043",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 43
        },
        {
            "id": "flh1155",
            "code": "FLH1155",
            "name": "Tiếng Anh Khoa học Xã hội và Nhân văn 1",
            "credits": 4,
            "lecturer": "Giảng viên 044",
            "time": {
                "day": 7,
                "start": 9,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 44
        },
        {
            "id": "flh1156",
            "code": "FLH1156",
            "name": "Tiếng Trung Khoa học Xã hội và Nhân văn 1",
            "credits": 4,
            "lecturer": "Giảng viên 045",
            "time": {
                "day": 3,
                "start": 2,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 45
        },
        {
            "id": "jou1150",
            "code": "JOU1150",
            "name": "Lý luận báo chí truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 046",
            "time": {
                "day": 6,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 46
        },
        {
            "id": "jou2019",
            "code": "JOU2019",
            "name": "Pháp luật và đạo đức báo chí truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 047",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 47
        },
        {
            "id": "jou2018",
            "code": "JOU2018",
            "name": "Lịch sử báo chí",
            "credits": 3,
            "lecturer": "Giảng viên 048",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 48
        },
        {
            "id": "jou2020",
            "code": "JOU2020",
            "name": "Ứng dụng truyền thông thị giác",
            "credits": 3,
            "lecturer": "Giảng viên 049",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 49
        },
        {
            "id": "jou2021",
            "code": "JOU2021",
            "name": "Thiết kế tương tác và animation đa phương tiện",
            "credits": 3,
            "lecturer": "Giảng viên 050",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 50
        },
        {
            "id": "jou2022",
            "code": "JOU2022",
            "name": "Tác nghiệp báo chí trong tình huống khẩn cấp",
            "credits": 3,
            "lecturer": "Giảng viên 051",
            "time": {
                "day": 4,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 51
        },
        {
            "id": "jou2023",
            "code": "JOU2023",
            "name": "Quản trị cơ quan báo chí truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 052",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 52
        },
        {
            "id": "jou1151",
            "code": "JOU1151",
            "name": "Phương pháp cơ bản trong nghiên cứu truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 053",
            "time": {
                "day": 5,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 53
        },
        {
            "id": "jou2017",
            "code": "JOU2017",
            "name": "Ngôn ngữ báo chí",
            "credits": 3,
            "lecturer": "Giảng viên 054",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 54
        },
        {
            "id": "aro1160",
            "code": "ARO1160",
            "name": "Các lý thuyết quản trị",
            "credits": 3,
            "lecturer": "Giảng viên 055",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 55
        },
        {
            "id": "lin2039",
            "code": "LIN2039",
            "name": "Ngữ dụng học",
            "credits": 3,
            "lecturer": "Giảng viên 056",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIN2033"
            ],
            "stt": 56
        },
        {
            "id": "soc3006",
            "code": "SOC3006",
            "name": "Xã hội học truyền thông đại chúng và dư luận xã hội",
            "credits": 3,
            "lecturer": "Giảng viên 057",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 57
        },
        {
            "id": "ors2005",
            "code": "ORS2005",
            "name": "Văn hóa, văn minh phương Đông",
            "credits": 3,
            "lecturer": "Giảng viên 058",
            "time": {
                "day": 6,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 58
        },
        {
            "id": "its3121",
            "code": "ITS3121",
            "name": "Các vấn đề toàn cầu",
            "credits": 3,
            "lecturer": "Giảng viên 059",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 59
        },
        {
            "id": "lin1102",
            "code": "LIN1102",
            "name": "Phong cách học tiếng Việt",
            "credits": 3,
            "lecturer": "Giảng viên 060",
            "time": {
                "day": 7,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIN2033"
            ],
            "stt": 60
        },
        {
            "id": "ors1104",
            "code": "ORS1104",
            "name": "Lịch sử tư tưởng phương Đông",
            "credits": 3,
            "lecturer": "Giảng viên 061",
            "time": {
                "day": 4,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 61
        },
        {
            "id": "jou3085",
            "code": "JOU3085",
            "name": "Kỹ năng viết cho báo in và báo điện tử",
            "credits": 3,
            "lecturer": "Giảng viên 062",
            "time": {
                "day": 3,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 62
        },
        {
            "id": "jou3058",
            "code": "JOU3058",
            "name": "Ảnh báo chí",
            "credits": 3,
            "lecturer": "Giảng viên 063",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 63
        },
        {
            "id": "jou3086",
            "code": "JOU3086",
            "name": "Công nghệ phát thanh và truyền hình",
            "credits": 3,
            "lecturer": "Giảng viên 064",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 64
        },
        {
            "id": "jou3087",
            "code": "JOU3087",
            "name": "Công nghệ truyền thông số",
            "credits": 3,
            "lecturer": "Giảng viên 065",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 65
        },
        {
            "id": "jou3088",
            "code": "JOU3088",
            "name": "Kỹ năng viết cho phát thanh và truyền hình",
            "credits": 3,
            "lecturer": "Giảng viên 066",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 66
        },
        {
            "id": "jou3089",
            "code": "JOU3089",
            "name": "Ứng dụng truyền thông đa phương tiện",
            "credits": 3,
            "lecturer": "Giảng viên 067",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 67
        },
        {
            "id": "jou3090",
            "code": "JOU3090",
            "name": "Các vấn đề xã hội và góc tiếp cận báo chí",
            "credits": 3,
            "lecturer": "Giảng viên 068",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 68
        },
        {
            "id": "jou3091",
            "code": "JOU3091",
            "name": "Báo chí chuyên biệt",
            "credits": 3,
            "lecturer": "Giảng viên 069",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 69
        },
        {
            "id": "jou3092",
            "code": "JOU3092",
            "name": "Quản trị nội dung số",
            "credits": 3,
            "lecturer": "Giảng viên 070",
            "time": {
                "day": 2,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 70
        },
        {
            "id": "jou3093",
            "code": "JOU3093",
            "name": "Quản trị tạp chí",
            "credits": 3,
            "lecturer": "Giảng viên 071",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 71
        },
        {
            "id": "jou3094",
            "code": "JOU3094",
            "name": "Sản xuất chương trình phát thanh - truyền hình",
            "credits": 3,
            "lecturer": "Giảng viên 072",
            "time": {
                "day": 6,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 72
        },
        {
            "id": "jou3095",
            "code": "JOU3095",
            "name": "Truyền thông mạng xã hội",
            "credits": 3,
            "lecturer": "Giảng viên 073",
            "time": {
                "day": 2,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 73
        },
        {
            "id": "jou3096",
            "code": "JOU3096",
            "name": "Ứng dụng báo chí trên thiết bị di động",
            "credits": 3,
            "lecturer": "Giảng viên 074",
            "time": {
                "day": 2,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 74
        },
        {
            "id": "jou3097",
            "code": "JOU3097",
            "name": "Siêu phẩm số",
            "credits": 3,
            "lecturer": "Giảng viên 075",
            "time": {
                "day": 2,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 75
        },
        {
            "id": "prs3003",
            "code": "PRS3003",
            "name": "Kỹ năng viết cho quan hệ công chúng",
            "credits": 3,
            "lecturer": "Giảng viên 076",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 76
        },
        {
            "id": "prs3004",
            "code": "PRS3004",
            "name": "Tổ chức sự kiện",
            "credits": 3,
            "lecturer": "Giảng viên 077",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 77
        },
        {
            "id": "prs3002",
            "code": "PRS3002",
            "name": "Các chương trình quan hệ công chúng",
            "credits": 3,
            "lecturer": "Giảng viên 078",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 78
        },
        {
            "id": "jou3098",
            "code": "JOU3098",
            "name": "Kinh tế báo chí truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 079",
            "time": {
                "day": 5,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 79
        },
        {
            "id": "jou3099",
            "code": "JOU3099",
            "name": "Quản trị khủng hoảng truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 080",
            "time": {
                "day": 4,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 80
        },
        {
            "id": "jou3100",
            "code": "JOU3100",
            "name": "Báo chí truyền thông trong hoạt động lãnh đạo quản lý",
            "credits": 3,
            "lecturer": "Giảng viên 081",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 81
        },
        {
            "id": "jou4056",
            "code": "JOU4056",
            "name": "Thực tập chuyên môn 1",
            "credits": 3,
            "lecturer": "Giảng viên 082",
            "time": {
                "day": 5,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 82
        },
        {
            "id": "jou4060",
            "code": "JOU4060",
            "name": "Thực tập chuyên môn 2",
            "credits": 4,
            "lecturer": "Giảng viên 083",
            "time": {
                "day": 3,
                "start": 1,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 83
        },
        {
            "id": "jou4050",
            "code": "JOU4050",
            "name": "Thực tập tốt nghiệp",
            "credits": 5,
            "lecturer": "Giảng viên 084",
            "time": {
                "day": 2,
                "start": 2,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 84
        },
        {
            "id": "jou4051",
            "code": "JOU4051",
            "name": "Khoá luận tốt nghiệp",
            "credits": 5,
            "lecturer": "Giảng viên 085",
            "time": {
                "day": 3,
                "start": 9,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 85
        },
        {
            "id": "jou4065",
            "code": "JOU4065",
            "name": "Lý luận và thực tiễn báo chí truyền thông",
            "credits": 2,
            "lecturer": "Giảng viên 086",
            "time": {
                "day": 3,
                "start": 9,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 86
        },
        {
            "id": "jou4066",
            "code": "JOU4066",
            "name": "Sản xuất sản phẩm báo chí truyền thông",
            "credits": 3,
            "lecturer": "Giảng viên 087",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 87
        }
    ],
    "da": [
        {
            "id": "phi1006",
            "code": "PHI1006",
            "name": "Triết học Mác-Lênin",
            "credits": 3,
            "lecturer": "Giảng viên 001",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 1
        },
        {
            "id": "pec1008",
            "code": "PEC1008",
            "name": "Kinh tế chính trị Mác-Lênin",
            "credits": 2,
            "lecturer": "Giảng viên 002",
            "time": {
                "day": 6,
                "start": 2,
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
                "day": 5,
                "start": 8,
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
                "day": 2,
                "start": 8,
                "count": 2
            },
            "info": "",
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
                "day": 4,
                "start": 2,
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
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "PHI1006"
            ],
            "stt": 6
        },
        {
            "id": "flf1107",
            "code": "FLF1107",
            "name": "Tiếng Anh B1",
            "credits": 5,
            "lecturer": "Giảng viên 007",
            "time": {
                "day": 3,
                "start": 2,
                "count": 5
            },
            "info": "",
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
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 8
        },
        {
            "id": "skill001",
            "code": "SKILL001",
            "name": "Kỹ năng bổ trợ",
            "credits": 3,
            "lecturer": "Giảng viên 009",
            "time": {
                "day": 5,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 9
        },
        {
            "id": "edu001",
            "code": "EDU001",
            "name": "Giáo dục thể chất",
            "credits": 4,
            "lecturer": "Giảng viên 010",
            "time": {
                "day": 6,
                "start": 3,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 10
        },
        {
            "id": "def001",
            "code": "DEF001",
            "name": "Giáo dục quốc phòng - an ninh",
            "credits": 8,
            "lecturer": "Giảng viên 011",
            "time": {
                "day": 2,
                "start": 1,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 11
        },
        {
            "id": "mns1053",
            "code": "MNS1053",
            "name": "Các phương pháp nghiên cứu khoa học",
            "credits": 3,
            "lecturer": "Giảng viên 012",
            "time": {
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 12
        },
        {
            "id": "his1056",
            "code": "HIS1056",
            "name": "Cơ sở văn hoá Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 013",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 13
        },
        {
            "id": "his1053",
            "code": "HIS1053",
            "name": "Lịch sử văn minh thế giới",
            "credits": 3,
            "lecturer": "Giảng viên 014",
            "time": {
                "day": 7,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 14
        },
        {
            "id": "phi1054",
            "code": "PHI1054",
            "name": "Logic học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 015",
            "time": {
                "day": 5,
                "start": 8,
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
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 16
        },
        {
            "id": "soc1051",
            "code": "SOC1051",
            "name": "Xã hội học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 017",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
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
                "day": 4,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 18
        },
        {
            "id": "pol1053",
            "code": "POL1053",
            "name": "Hệ thống chính trị Việt Nam",
            "credits": 2,
            "lecturer": "Giảng viên 019",
            "time": {
                "day": 3,
                "start": 2,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 19
        },
        {
            "id": "its1051",
            "code": "ITS1051",
            "name": "Hội nhập quốc tế và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 020",
            "time": {
                "day": 7,
                "start": 1,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 20
        },
        {
            "id": "evs1001",
            "code": "EVS1001",
            "name": "Môi trường và phát triển",
            "credits": 2,
            "lecturer": "Giảng viên 021",
            "time": {
                "day": 5,
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
                "day": 2,
                "start": 9,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 22
        },
        {
            "id": "mat1078",
            "code": "MAT1078",
            "name": "Thống kê cho khoa học xã hội",
            "credits": 2,
            "lecturer": "Giảng viên 023",
            "time": {
                "day": 6,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 23
        },
        {
            "id": "lin1050",
            "code": "LIN1050",
            "name": "Thực hành văn bản tiếng Việt",
            "credits": 2,
            "lecturer": "Giảng viên 024",
            "time": {
                "day": 3,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 24
        },
        {
            "id": "lit1054",
            "code": "LIT1054",
            "name": "Tư duy sáng tạo và thiết kế ý tưởng",
            "credits": 2,
            "lecturer": "Giảng viên 025",
            "time": {
                "day": 4,
                "start": 8,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 25
        },
        {
            "id": "lit1053",
            "code": "LIT1053",
            "name": "Viết học thuật",
            "credits": 2,
            "lecturer": "Giảng viên 026",
            "time": {
                "day": 7,
                "start": 1,
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
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 27
        },
        {
            "id": "cin1150",
            "code": "CIN1150",
            "name": "Niên luận",
            "credits": 2,
            "lecturer": "Giảng viên 028",
            "time": {
                "day": 6,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [],
            "stt": 28
        },
        {
            "id": "lit1100",
            "code": "LIT1100",
            "name": "Nghệ thuật học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 029",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 29
        },
        {
            "id": "cin1151",
            "code": "CIN1151",
            "name": "Lí luận, phê bình nghệ thuật",
            "credits": 3,
            "lecturer": "Giảng viên 030",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 30
        },
        {
            "id": "lit1103",
            "code": "LIT1103",
            "name": "Nghệ thuật dân gian Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 031",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 31
        },
        {
            "id": "lit1106",
            "code": "LIT1106",
            "name": "Dẫn luận văn học",
            "credits": 3,
            "lecturer": "Giảng viên 032",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 32
        },
        {
            "id": "sin1001",
            "code": "SIN1001",
            "name": "Hán Nôm cơ sở",
            "credits": 3,
            "lecturer": "Giảng viên 033",
            "time": {
                "day": 6,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 33
        },
        {
            "id": "his1100",
            "code": "HIS1100",
            "name": "Lịch sử Việt Nam đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 034",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 34
        },
        {
            "id": "jou1051",
            "code": "JOU1051",
            "name": "Báo chí truyền thông đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 035",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 35
        },
        {
            "id": "phi1100",
            "code": "PHI1100",
            "name": "Mỹ học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 036",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 36
        },
        {
            "id": "ant1100",
            "code": "ANT1100",
            "name": "Nhân học đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 037",
            "time": {
                "day": 2,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 37
        },
        {
            "id": "lin2033",
            "code": "LIN2033",
            "name": "Dẫn luận ngôn ngữ học",
            "credits": 3,
            "lecturer": "Giảng viên 038",
            "time": {
                "day": 7,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 38
        },
        {
            "id": "lit1155",
            "code": "LIT1155",
            "name": "Xã hội học nghệ thuật",
            "credits": 3,
            "lecturer": "Giảng viên 039",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIT1100"
            ],
            "stt": 39
        },
        {
            "id": "lit1101",
            "code": "LIT1101",
            "name": "Văn học Việt Nam đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 040",
            "time": {
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 40
        },
        {
            "id": "psy2023",
            "code": "PSY2023",
            "name": "Tâm lí học xã hội",
            "credits": 3,
            "lecturer": "Giảng viên 041",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "PSY1051"
            ],
            "stt": 41
        },
        {
            "id": "prs1100",
            "code": "PRS1100",
            "name": "Quan hệ công chúng đại cương",
            "credits": 3,
            "lecturer": "Giảng viên 042",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 42
        },
        {
            "id": "cin1152",
            "code": "CIN1152",
            "name": "Lịch sử nghệ thuật tiền hiện đại",
            "credits": 3,
            "lecturer": "Giảng viên 043",
            "time": {
                "day": 7,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIT1100"
            ],
            "stt": 43
        },
        {
            "id": "cin2001",
            "code": "CIN2001",
            "name": "Nghệ thuật đại chúng trong thời đại số hóa",
            "credits": 3,
            "lecturer": "Giảng viên 044",
            "time": {
                "day": 5,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN1151"
            ],
            "stt": 44
        },
        {
            "id": "cin2002",
            "code": "CIN2002",
            "name": "Đại cương các thể loại điện ảnh - truyền hình",
            "credits": 3,
            "lecturer": "Giảng viên 045",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 45
        },
        {
            "id": "cin2003",
            "code": "CIN2003",
            "name": "Đại cương lịch sử điện ảnh thế giới",
            "credits": 3,
            "lecturer": "Giảng viên 046",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 46
        },
        {
            "id": "cin2004",
            "code": "CIN2004",
            "name": "Văn hoá đại chúng Hàn Quốc và Nhật Bản",
            "credits": 3,
            "lecturer": "Giảng viên 047",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 47
        },
        {
            "id": "cin2005",
            "code": "CIN2005",
            "name": "Những vấn đề cơ bản của điện ảnh châu Á đương đại",
            "credits": 3,
            "lecturer": "Giảng viên 048",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN2003"
            ],
            "stt": 48
        },
        {
            "id": "cin2006",
            "code": "CIN2006",
            "name": "Tự sự, thực tế ảo và công nghệ kĩ thuật số",
            "credits": 3,
            "lecturer": "Giảng viên 049",
            "time": {
                "day": 5,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN2001"
            ],
            "stt": 49
        },
        {
            "id": "cin2007",
            "code": "CIN2007",
            "name": "Âm nhạc đại chúng",
            "credits": 3,
            "lecturer": "Giảng viên 050",
            "time": {
                "day": 4,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN2001"
            ],
            "stt": 50
        },
        {
            "id": "cin2008",
            "code": "CIN2008",
            "name": "Nghệ thuật thị giác đương đại",
            "credits": 3,
            "lecturer": "Giảng viên 051",
            "time": {
                "day": 3,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIT1100"
            ],
            "stt": 51
        },
        {
            "id": "cin2009",
            "code": "CIN2009",
            "name": "Sân khấu và nghệ thuật trình diễn đương đại",
            "credits": 3,
            "lecturer": "Giảng viên 052",
            "time": {
                "day": 2,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 52
        },
        {
            "id": "cin2010",
            "code": "CIN2010",
            "name": "Kịch học điện ảnh trong sáng tạo tác phẩm đa phương tiện",
            "credits": 3,
            "lecturer": "Giảng viên 053",
            "time": {
                "day": 6,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 53
        },
        {
            "id": "lit1154",
            "code": "LIT1154",
            "name": "Hán văn Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 054",
            "time": {
                "day": 5,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "SIN1001"
            ],
            "stt": 54
        },
        {
            "id": "lit1162",
            "code": "LIT1162",
            "name": "Tiếp cận liên ngành trong nghiên cứu văn học Việt Nam: lý thuyết và ứng dụng",
            "credits": 3,
            "lecturer": "Giảng viên 055",
            "time": {
                "day": 4,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 55
        },
        {
            "id": "lit1165",
            "code": "LIT1165",
            "name": "Tổng quan văn học thế giới",
            "credits": 3,
            "lecturer": "Giảng viên 056",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 56
        },
        {
            "id": "lin3043",
            "code": "LIN3043",
            "name": "Tiếng Việt trên các phương tiện nghe nhìn",
            "credits": 3,
            "lecturer": "Giảng viên 057",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIN2033"
            ],
            "stt": 57
        },
        {
            "id": "ors2005",
            "code": "ORS2005",
            "name": "Văn hóa, văn minh phương Đông",
            "credits": 3,
            "lecturer": "Giảng viên 058",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 58
        },
        {
            "id": "lit1166",
            "code": "LIT1166",
            "name": "Viết sáng tạo",
            "credits": 3,
            "lecturer": "Giảng viên 059",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 59
        },
        {
            "id": "cin3001",
            "code": "CIN3001",
            "name": "Hollywood, toàn cầu hóa và điện ảnh xuyên quốc gia",
            "credits": 3,
            "lecturer": "Giảng viên 060",
            "time": {
                "day": 6,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN2003"
            ],
            "stt": 60
        },
        {
            "id": "cin3002",
            "code": "CIN3002",
            "name": "Giám tuyển phim và giám tuyển nghệ thuật",
            "credits": 3,
            "lecturer": "Giảng viên 061",
            "time": {
                "day": 4,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 61
        },
        {
            "id": "cin3003",
            "code": "CIN3003",
            "name": "Phân tích kịch bản phim và ngôn ngữ điện ảnh",
            "credits": 3,
            "lecturer": "Giảng viên 062",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 62
        },
        {
            "id": "lit1169",
            "code": "LIT1169",
            "name": "Nhập môn biên kịch điện ảnh - truyền hình",
            "credits": 3,
            "lecturer": "Giảng viên 063",
            "time": {
                "day": 7,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 63
        },
        {
            "id": "cin3004",
            "code": "CIN3004",
            "name": "Đạo diễn điện ảnh",
            "credits": 4,
            "lecturer": "Giảng viên 064",
            "time": {
                "day": 5,
                "start": 9,
                "count": 4
            },
            "info": "",
            "prerequisites": [],
            "stt": 64
        },
        {
            "id": "cin3005",
            "code": "CIN3005",
            "name": "Điện ảnh Việt Nam và tiến trình hình thành căn tính dân tộc",
            "credits": 3,
            "lecturer": "Giảng viên 065",
            "time": {
                "day": 4,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 65
        },
        {
            "id": "lit3080",
            "code": "LIT3080",
            "name": "Những khuynh hướng cơ bản trong văn hóa nghệ thuật thế kỷ XX",
            "credits": 3,
            "lecturer": "Giảng viên 066",
            "time": {
                "day": 2,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIT1100"
            ],
            "stt": 66
        },
        {
            "id": "cin3006",
            "code": "CIN3006",
            "name": "Sitcom, phim truyền hình dài tập và truyền hình thực tế",
            "credits": 3,
            "lecturer": "Giảng viên 067",
            "time": {
                "day": 3,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN2002"
            ],
            "stt": 67
        },
        {
            "id": "cin3007",
            "code": "CIN3007",
            "name": "Giới, chủng tộc và tầng lớp trong điện ảnh",
            "credits": 3,
            "lecturer": "Giảng viên 068",
            "time": {
                "day": 6,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 68
        },
        {
            "id": "cin3008",
            "code": "CIN3008",
            "name": "Dựng phim: lý thuyết và thực hành",
            "credits": 3,
            "lecturer": "Giảng viên 069",
            "time": {
                "day": 5,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN3003"
            ],
            "stt": 69
        },
        {
            "id": "cin3009",
            "code": "CIN3009",
            "name": "Quay phim: lý thuyết và thực hành",
            "credits": 3,
            "lecturer": "Giảng viên 070",
            "time": {
                "day": 4,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN3003"
            ],
            "stt": 70
        },
        {
            "id": "cin3010",
            "code": "CIN3010",
            "name": "Phim tài liệu và nghệ thuật phi hư cấu",
            "credits": 3,
            "lecturer": "Giảng viên 071",
            "time": {
                "day": 3,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN2002"
            ],
            "stt": 71
        },
        {
            "id": "cin3011",
            "code": "CIN3011",
            "name": "Luật và các vấn đề đạo đức trong điện ảnh",
            "credits": 3,
            "lecturer": "Giảng viên 072",
            "time": {
                "day": 2,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 72
        },
        {
            "id": "cin3012",
            "code": "CIN3012",
            "name": "Di sản nghệ thuật Việt Nam thời thuộc địa qua tư liệu báo chí và văn học",
            "credits": 3,
            "lecturer": "Giảng viên 073",
            "time": {
                "day": 7,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 73
        },
        {
            "id": "lit3078",
            "code": "LIT3078",
            "name": "Chuyển thể kịch bản trong nghệ thuật điện ảnh",
            "credits": 3,
            "lecturer": "Giảng viên 074",
            "time": {
                "day": 6,
                "start": 8,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIT1100"
            ],
            "stt": 74
        },
        {
            "id": "cin3013",
            "code": "CIN3013",
            "name": "Nghiên cứu, phê bình điện ảnh và nghệ thuật đại chúng",
            "credits": 3,
            "lecturer": "Giảng viên 075",
            "time": {
                "day": 5,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN3003"
            ],
            "stt": 75
        },
        {
            "id": "cin3014",
            "code": "CIN3014",
            "name": "Thực hành biên kịch điện ảnh - truyền hình",
            "credits": 3,
            "lecturer": "Giảng viên 076",
            "time": {
                "day": 4,
                "start": 2,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "LIT1169"
            ],
            "stt": 76
        },
        {
            "id": "cin3015",
            "code": "CIN3015",
            "name": "Truyền thông nghệ thuật và văn hóa tiêu thụ",
            "credits": 3,
            "lecturer": "Giảng viên 077",
            "time": {
                "day": 3,
                "start": 1,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 77
        },
        {
            "id": "cin3016",
            "code": "CIN3016",
            "name": "Quản lý dự án điện ảnh và quỹ điện ảnh",
            "credits": 3,
            "lecturer": "Giảng viên 078",
            "time": {
                "day": 2,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN1151"
            ],
            "stt": 78
        },
        {
            "id": "cin3017",
            "code": "CIN3017",
            "name": "Tổ chức sản xuất, phân phối và lưu trữ phim",
            "credits": 3,
            "lecturer": "Giảng viên 079",
            "time": {
                "day": 7,
                "start": 3,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 79
        },
        {
            "id": "cin4001",
            "code": "CIN4001",
            "name": "Thực tập",
            "credits": 3,
            "lecturer": "Giảng viên 080",
            "time": {
                "day": 5,
                "start": 9,
                "count": 3
            },
            "info": "",
            "prerequisites": [],
            "stt": 80
        },
        {
            "id": "cin4050",
            "code": "CIN4050",
            "name": "Khoá luận tốt nghiệp",
            "credits": 5,
            "lecturer": "Giảng viên 081",
            "time": {
                "day": 4,
                "start": 7,
                "count": 5
            },
            "info": "",
            "prerequisites": [],
            "stt": 81
        },
        {
            "id": "cin4051",
            "code": "CIN4051",
            "name": "Đặc điểm lịch sử điện ảnh Việt Nam",
            "credits": 3,
            "lecturer": "Giảng viên 082",
            "time": {
                "day": 3,
                "start": 7,
                "count": 3
            },
            "info": "",
            "prerequisites": [
                "CIN3005"
            ],
            "stt": 82
        },
        {
            "id": "cin4052",
            "code": "CIN4052",
            "name": "Những đặc trưng của nghệ thuật đại chúng",
            "credits": 2,
            "lecturer": "Giảng viên 083",
            "time": {
                "day": 2,
                "start": 3,
                "count": 2
            },
            "info": "",
            "prerequisites": [
                "CIN2001"
            ],
            "stt": 83
        }
    ]
}
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
