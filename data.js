// Dữ liệu mẫu cho ứng dụng
const majors = [
    { id: "khql", name: "Khoa học quản lý" },
    { id: "tlh", name: "Tâm lý học"},
    { id: "qhcc", name: "Quan hệ công chúng"},
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
      "time": {
        "day": 2,
        "start": 1,
        "count": 3
      },
      "info": "Cung cấp hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy; là nền tảng thế giới quan và phương pháp luận chung.",
      "prerequisites": [],
      "stt": 1
    },
    {
      "id": "pec1008",
      "code": "PEC1008",
      "name": "Kinh tế chính trị Mác - Lênin",
      "credits": 2,
      "lecturer": "Giảng viên 002",
      "time": {
        "day": 3,
        "start": 7,
        "count": 2
      },
      "info": "Nghiên cứu các quan hệ xã hội của sản xuất và trao đổi, các quy luật kinh tế trong các phương thức sản xuất, đặc biệt là chủ nghĩa tư bản và thời kỳ quá độ lên chủ nghĩa xã hội.",
      "prerequisites": [
        "phi1006"
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
        "start": 2,
        "count": 2
      },
      "info": "Nghiên cứu về sự chuyển biến từ chủ nghĩa tư bản lên chủ nghĩa xã hội và sứ mệnh lịch sử của giai cấp công nhân.",
      "prerequisites": [
        "phi1006"
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
        "start": 8,
        "count": 2
      },
      "info": "Tìm hiểu về quá trình ra đời, phát triển, các cương lĩnh, đường lối và sự lãnh đạo của Đảng Cộng sản Việt Nam qua các thời kỳ.",
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
        "start": 1,
        "count": 2
      },
      "info": "Nghiên cứu hệ thống quan điểm toàn diện và sâu sắc của Chủ tịch Hồ Chí Minh về những vấn đề cơ bản của cách mạng Việt Nam.",
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
        "day": 2,
        "start": 9,
        "count": 2
      },
      "info": "Cung cấp kiến thức cơ bản về nguồn gốc, bản chất, chức năng của Nhà nước và Pháp luật; hệ thống pháp luật Việt Nam.",
      "prerequisites": [
        "phi1006"
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
        "start": 1,
        "count": 5
      },
      "info": "Rèn luyện 4 kỹ năng tiếng Anh (nghe, nói, đọc, viết) để đạt trình độ tương đương B1 theo khung năng lực ngoại ngữ.",
      "prerequisites": [],
      "stt": 7
    },
    {
      "id": "vnu1001",
      "code": "VNU1001",
      "name": "Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo",
      "credits": 3,
      "lecturer": "Giảng viên 008",
      "time": {
        "day": 4,
        "start": 7,
        "count": 3
      },
      "info": "Trang bị kiến thức nền tảng về công nghệ số và cách ứng dụng AI trong học tập và công việc.",
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
        "start": 2,
        "count": 3
      },
      "info": "Các kỹ năng mềm cần thiết cho công việc và học tập (thường bao gồm các học phần như kỹ năng giao tiếp, làm việc nhóm, …, tùy theo lựa chọn cụ thể).",
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
        "start": 8,
        "count": 4
      },
      "info": "Rèn luyện sức khỏe và thể chất thông qua các môn thể thao.",
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
        "start": 3,
        "count": 5
      },
      "info": "Trang bị kiến thức về quốc phòng, an ninh và kỹ năng quân sự cơ bản.",
      "prerequisites": [],
      "stt": 11
    },
    {
      "id": "flh1164",
      "code": "FLH1164",
      "name": "Tiếng Anh Khoa học Xã hội và Nhân văn 1",
      "credits": 3,
      "lecturer": "Giảng viên 012",
      "time": {
        "day": 7,
        "start": 1,
        "count": 3
      },
      "info": "Tập trung vào từ vựng và kỹ năng đọc hiểu tài liệu thuộc lĩnh vực KHXH&NV.",
      "prerequisites": [],
      "stt": 12
    },
    {
      "id": "flh1167",
      "code": "FLH1167",
      "name": "Tiếng Anh Khoa học Xã hội và Nhân văn 2",
      "credits": 3,
      "lecturer": "Giảng viên 013",
      "time": {
        "day": 3,
        "start": 2,
        "count": 3
      },
      "info": "Tiếp nối học phần 1, nâng cao khả năng sử dụng tiếng Anh trong môi trường học thuật và chuyên môn KHXH&NV.",
      "prerequisites": [
        "flh1164"
      ],
      "stt": 13
    },
    {
      "id": "lit1170",
      "code": "LIT1170",
      "name": "Tư duy sáng tạo và tư duy thiết kế",
      "credits": 3,
      "lecturer": "Giảng viên 014",
      "time": {
        "day": 4,
        "start": 9,
        "count": 3
      },
      "info": "Trang bị phương pháp tư duy để giải quyết vấn đề một cách sáng tạo, quy trình tư duy thiết kế (Design Thinking) để tạo ra các giải pháp đổi mới.",
      "prerequisites": [],
      "stt": 14
    },
    {
      "id": "inf1150",
      "code": "INF1150",
      "name": "Ứng dụng AI trong học tập và nghề nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 015",
      "time": {
        "day": 5,
        "start": 7,
        "count": 3
      },
      "info": "Giới thiệu những kiến thức cơ bản về Trí tuệ nhân tạo (AI) và cách ứng dụng các công cụ AI để tối ưu hóa quá trình học tập (cá nhân hóa, tìm kiếm thông tin) và nâng cao hiệu suất công việc, chuẩn bị cho kỷ nguyên số.",
      "prerequisites": [],
      "stt": 15
    },
    {
      "id": "mns1161",
      "code": "MNS1161",
      "name": "Đổi mới sáng tạo và Khởi nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 016",
      "time": {
        "day": 2,
        "start": 2,
        "count": 3
      },
      "info": "Cung cấp kiến thức về quy trình đổi mới (Innovation) và các bước để khởi nghiệp (Entrepreneurship), từ nhận diện cơ hội, xây dựng mô hình kinh doanh, lập kế hoạch, đến huy động vốn và quản lý rủi ro ban đầu.",
      "prerequisites": [],
      "stt": 16
    },
    {
      "id": "his1160",
      "code": "HIS1160",
      "name": "Văn hoá Việt Nam trong kỷ nguyên số",
      "credits": 3,
      "lecturer": "Giảng viên 017",
      "time": {
        "day": 6,
        "start": 3,
        "count": 3
      },
      "info": "Phân tích các giá trị văn hóa truyền thống của Việt Nam và cách chúng biến đổi, bảo tồn và phát huy trong bối cảnh toàn cầu hóa và kỷ nguyên công nghệ số, bao gồm các vấn đề về giao lưu và hội nhập văn hóa.",
      "prerequisites": [],
      "stt": 17
    },
    {
      "id": "psy1164",
      "code": "PSY1164",
      "name": "Đạo đức nghề nghiệp và liêm chính học thuật",
      "credits": 3,
      "lecturer": "Giảng viên 018",
      "time": {
        "day": 7,
        "start": 8,
        "count": 3
      },
      "info": "Giúp sinh viên nhận thức và tuân thủ các chuẩn mực đạo đức trong môi trường làm việc chuyên nghiệp (nghề nghiệp) và các nguyên tắc về tính trung thực, liêm chính trong nghiên cứu, học tập (chống đạo văn, gian lận học thuật).",
      "prerequisites": [],
      "stt": 18
    },
    {
      "id": "ush2001",
      "code": "USH2001",
      "name": "Phương pháp và Thiết kế nghiên cứu",
      "credits": 5,
      "lecturer": "Giảng viên 019",
      "time": {
        "day": 3,
        "start": 9,
        "count": 5
      },
      "info": "Giới thiệu các phương pháp nghiên cứu khoa học (định tính, định lượng) và cách thiết kế một đề tài nghiên cứu hoàn chỉnh, từ xác định vấn đề, xây dựng khung lý thuyết, chọn mẫu, thu thập, đến phân tích và trình bày dữ liệu.",
      "prerequisites": [],
      "stt": 19
    },
    {
      "id": "jou2024",
      "code": "JOU2024",
      "name": "Truyền thông trong bối cảnh số",
      "credits": 4,
      "lecturer": "Giảng viên 020",
      "time": {
        "day": 4,
        "start": 1,
        "count": 4
      },
      "info": "Nghiên cứu các lý thuyết truyền thông và sự thay đổi trong hoạt động báo chí, truyền thông đại chúng khi chịu tác động của chuyển đổi số, bao gồm truyền thông đa nền tảng, mạng xã hội, và các vấn đề pháp lý/đạo đức.",
      "prerequisites": [],
      "stt": 20
    },
    {
      "id": "mns2008",
      "code": "MNS2008",
      "name": "Khoa học quản lý đại cương",
      "credits": 4,
      "lecturer": "Giảng viên 021",
      "time": {
        "day": 5,
        "start": 2,
        "count": 4
      },
      "info": "Cung cấp kiến thức nền tảng về quản lý, bao gồm các chức năng cốt lõi như hoạch định, tổ chức, lãnh đạo và kiểm soát, cùng với các nguyên tắc, mô hình quản lý cơ bản áp dụng trong nhiều loại hình tổ chức.",
      "prerequisites": [],
      "stt": 21
    },
    {
      "id": "tou2018",
      "code": "TOU2018",
      "name": "Đại cương Quản trị kinh doanh",
      "credits": 4,
      "lecturer": "Giảng viên 022",
      "time": {
        "day": 2,
        "start": 8,
        "count": 4
      },
      "info": "Giới thiệu tổng quan về hoạt động kinh doanh và các lĩnh vực quản trị chủ chốt trong một doanh nghiệp: quản trị chiến lược, quản trị tài chính, quản trị marketing, quản trị nhân sự, và quản trị sản xuất/vận hành.",
      "prerequisites": [],
      "stt": 22
    },
    {
      "id": "mns2009",
      "code": "MNS2009",
      "name": "Lịch sử tư tưởng quản lý",
      "credits": 4,
      "lecturer": "Giảng viên 023",
      "time": {
        "day": 6,
        "start": 2,
        "count": 4
      },
      "info": "Nghiên cứu sự hình thành và phát triển của các tư tưởng, học thuyết quản lý qua các thời kỳ lịch sử (cổ điển, tân cổ điển, hiện đại), từ Taylor, Fayol đến các lý thuyết quản lý đương đại.",
      "prerequisites": [],
      "stt": 23
    },
    {
      "id": "psy2038",
      "code": "PSY2038",
      "name": "Tâm lý học và đời sống",
      "credits": 4,
      "lecturer": "Giảng viên 024",
      "time": {
        "day": 7,
        "start": 8,
        "count": 4
      },
      "info": "Cung cấp kiến thức về tâm lý học ứng dụng, bao gồm các nguyên lý về hành vi, cảm xúc, nhận thức của con người và cách áp dụng chúng để giải quyết các vấn đề, nâng cao chất lượng cuộc sống cá nhân và xã hội.",
      "prerequisites": [],
      "stt": 24
    },
    {
      "id": "soc2001",
      "code": "SOC2001",
      "name": "Xã hội học và các vấn đề xã hội đương đại",
      "credits": 4,
      "lecturer": "Giảng viên 025",
      "time": {
        "day": 2,
        "start": 1,
        "count": 4
      },
      "info": "Nghiên cứu về cấu trúc xã hội, các thiết chế xã hội, và phân tích các vấn đề xã hội đang nổi cộm hiện nay (như bất bình đẳng, tội phạm, môi trường, di cư), dựa trên các lý thuyết và phương pháp của xã hội học.",
      "prerequisites": [],
      "stt": 25
    },
    {
      "id": "phi2025",
      "code": "PHI2025",
      "name": "Logic học và nghệ thuật phản biện",
      "credits": 4,
      "lecturer": "Giảng viên 026",
      "time": {
        "day": 3,
        "start": 3,
        "count": 4
      },
      "info": "Trang bị kiến thức về Logic học hình thức (cấu trúc tư duy, quy luật suy luận) và rèn luyện kỹ năng tư duy phản biện (Critical Thinking): phân tích, đánh giá tính hợp lý của lập luận và xây dựng bài phản bác có căn cứ.",
      "prerequisites": [],
      "stt": 26
    },
    {
      "id": "his2023",
      "code": "HIS2023",
      "name": "Văn minh thế giới và sự tiến hoá nhân loại",
      "credits": 4,
      "lecturer": "Giảng viên 027",
      "time": {
        "day": 5,
        "start": 9,
        "count": 4
      },
      "info": "Nghiên cứu lịch sử phát triển của các nền văn minh lớn trên thế giới, quá trình tiến hóa của loài người, và các yếu tố vật chất, tinh thần hình thành nên bản sắc của mỗi nền văn minh.",
      "prerequisites": [],
      "stt": 27
    },
    {
      "id": "mns2056",
      "code": "MNS2056",
      "name": "Khoa học chính sách",
      "credits": 4,
      "lecturer": "Giảng viên 028",
      "time": {
        "day": 7,
        "start": 2,
        "count": 4
      },
      "info": "Nghiên cứu về quy trình hoạch định, thực thi và đánh giá chính sách công/xã hội. Nội dung tập trung vào vai trò của nhà nước, các tác nhân chính sách, và các công cụ để phân tích, đưa ra quyết định chính sách hiệu quả.",
      "prerequisites": [],
      "stt": 28
    },
    {
      "id": "mns3129",
      "code": "MNS3129",
      "name": "Quản lý khoa học, công nghệ và đổi mới sáng tạo",
      "credits": 4,
      "lecturer": "Giảng viên 029",
      "time": {
        "day": 3,
        "start": 2,
        "count": 4
      },
      "info": "Trang bị những kiến thức chuyên môn thuộc lĩnh vực khoa học quản lí chuyên ngành Quản lí Khoa học và Công nghệ dưới dạng các chuyên đề như: Phân tích, hoạch định chính sách KH&CN, đánh giá nghiên cứu khoa học, đánh giá công nghệ...",
      "prerequisites": [],
      "stt": 29
    },
    {
      "id": "mns3130",
      "code": "MNS3130",
      "name": "Quản lý tài sản trí tuệ",
      "credits": 4,
      "lecturer": "Giảng viên 030",
      "time": {
        "day": 3,
        "start": 1,
        "count": 4
      },
      "info": "Cung cấp cho người học những kiến thức cơ bản về tài sản trí tuệ, quyền sở hữu trí tuệ; các đối tượng của quyền sở hữu trí tuệ; các nguyên tắc bảo hộ quyền sở hữu trí tuệ; cách thức khai thác và thương mại hoá các tài sản trí tuệ...",
      "prerequisites": [],
      "stt": 30
    },
    {
      "id": "mns3131",
      "code": "MNS3131",
      "name": "Quản lý nguồn nhân lực",
      "credits": 4,
      "lecturer": "Giảng viên 031",
      "time": {
        "day": 4,
        "start": 9,
        "count": 4
      },
      "info": "Cung cấp cho sinh viên những kiến thức cơ bản về quản lí nguồn nhân lực trong doanh nghiệp. Từ khái niệm, chức năng, tầm quan trọng đến các hoạt động của quản lí nguồn nhân lực...",
      "prerequisites": [],
      "stt": 31
    },
    {
      "id": "mns3132",
      "code": "MNS3132",
      "name": "Văn hoá tổ chức",
      "credits": 4,
      "lecturer": "Giảng viên 032",
      "time": {
        "day": 4,
        "start": 1,
        "count": 4
      },
      "info": "Trang bị cho người học những vấn đề cơ bản về văn hoá tổ chức như: khái quát chung về văn hóa tổ chức, khái niệm, đặc trưng, chức năng, cấu trúc, các loại hình văn hóa tổ chức; Lý luận về xây dựng văn hóa tổ chức...",
      "prerequisites": [],
      "stt": 32
    },
    {
      "id": "mns3133",
      "code": "MNS3133",
      "name": "Kinh tế học quản lý",
      "credits": 4,
      "lecturer": "Giảng viên 033",
      "time": {
        "day": 5,
        "start": 9,
        "count": 4
      },
      "info": "Về cơ bản bao gồm hai phần chính là kinh tế học vi mô và kinh tế học vĩ mô. Kinh tế học vi mô liên quan đến cung cầu giữa các cá nhân... Kinh tế học vĩ mô liên quan đến môi trường kinh tế tổng thể.",
      "prerequisites": [],
      "stt": 33
    },
    {
      "id": "mns3134",
      "code": "MNS3134",
      "name": "Quản trị tổ chức",
      "credits": 4,
      "lecturer": "Giảng viên 034",
      "time": {
        "day": 7,
        "start": 8,
        "count": 4
      },
      "info": "Cung cấp cho học viên những kiến thức cơ bản về kinh doanh và quản trị. Môn học tập trung vào các lý thuyết nền tảng của hoạt động quản trị, phân tích môi trường kinh doanh, ra quyết định, hoạch định và quản trị chiến lược...",
      "prerequisites": [],
      "stt": 34
    },
    {
      "id": "mns3135",
      "code": "MNS3135",
      "name": "Lý thuyết hệ thống và thông tin quản lý",
      "credits": 4,
      "lecturer": "Giảng viên 035",
      "time": {
        "day": 5,
        "start": 7,
        "count": 4
      },
      "info": "Trang bị các kiến thức về vai trò của hệ thống thông tin trong tổ chức, các thành phần cơ bản của một hệ thống, và cách quản lý chúng để hỗ trợ hoạt động kinh doanh.",
      "prerequisites": [],
      "stt": 35
    },
    {
      "id": "mns3136",
      "code": "MNS3136",
      "name": "Quản trị hiệu suất",
      "credits": 4,
      "lecturer": "Giảng viên 036",
      "time": {
        "day": 4,
        "start": 1,
        "count": 4
      },
      "info": "Bao gồm các kiến thức và kỹ năng về quy trình quản lý hiệu suất liên tục, như: thiết lập mục tiêu (SMART), xây dựng hệ thống đánh giá, theo dõi và phản hồi liên tục, phát triển năng lực nhân viên...",
      "prerequisites": [],
      "stt": 36
    },
    {
      "id": "mns3137",
      "code": "MNS3137",
      "name": "Chuyển đổi số trong quản lý",
      "credits": 4,
      "lecturer": "Giảng viên 037",
      "time": {
        "day": 7,
        "start": 8,
        "count": 4
      },
      "info": "Bao gồm việc áp dụng công nghệ số vào các hoạt động kinh doanh và quản trị, thay đổi mô hình ra quyết định dựa trên dữ liệu, tự động hóa các quy trình thủ công, và tập trung vào việc nâng cao trải nghiệm khách hàng...",
      "prerequisites": [],
      "stt": 37
    },
    {
      "id": "mns3057",
      "code": "MNS3057",
      "name": "Chính sách văn hóa",
      "credits": 3,
      "lecturer": "Giảng viên 038",
      "time": {
        "day": 3,
        "start": 3,
        "count": 3
      },
      "info": "Cung cấp kiến thức nền tảng về khái niệm chính sách công và chính sách văn hoá, vai trò của văn hoá trong phát triển xã hội; trình bày cơ sở lý luận và pháp lý của các chính sách văn hoá ở Việt Nam...",
      "prerequisites": [],
      "stt": 38
    },
    {
      "id": "mns3061",
      "code": "MNS3061",
      "name": "Chính sách giáo dục và đào tạo",
      "credits": 3,
      "lecturer": "Giảng viên 039",
      "time": {
        "day": 5,
        "start": 7,
        "count": 3
      },
      "info": "Cung cấp kiến thức về khái niệm và đặc điểm của chính sách công trong lĩnh vực giáo dục; cơ sở lý luận, pháp lý và các chủ trương của Đảng và Nhà nước về giáo dục và đào tạo...",
      "prerequisites": [],
      "stt": 39
    },
    {
      "id": "mns3083",
      "code": "MNS3083",
      "name": "Chính sách giảm nghèo bền vững",
      "credits": 3,
      "lecturer": "Giảng viên 040",
      "time": {
        "day": 6,
        "start": 3,
        "count": 3
      },
      "info": "Tập trung vào việc trang bị kiến thức về khái niệm nghèo đa chiều, phát triển bền vững và các tiếp cận giảm nghèo hiện đại; phân tích cơ sở lý luận, pháp lý và hệ thống chính sách giảm nghèo của Việt Nam...",
      "prerequisites": [],
      "stt": 40
    },
    {
      "id": "mns3106",
      "code": "MNS3106",
      "name": "Chính sách trợ giúp xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 041",
      "time": {
        "day": 6,
        "start": 2,
        "count": 3
      },
      "info": "Tập trung vào cơ chế bảo vệ và hỗ trợ của Nhà nước đối với các nhóm yếu thế và dễ bị tổn thương nhằm đảm bảo An sinh Xã hội tối thiểu. Nội dung chính nghiên cứu khái niệm, mục tiêu và vai trò của Trợ giúp Xã hội...",
      "prerequisites": [],
      "stt": 41
    },
    {
      "id": "mns3067",
      "code": "MNS3067",
      "name": "Phân cấp quản lý hành chính",
      "credits": 3,
      "lecturer": "Giảng viên 042",
      "time": {
        "day": 3,
        "start": 3,
        "count": 3
      },
      "info": "-Môn học này cung cấp kiến thức về các mô hình phân cấp, ủy quyền trong quản trị hành chính công và cả trong các tổ chức lớn. Bạn sẽ tìm hiểu cách phân chia quyền hạn, trách nhiệm từ cấp trung ương xuống địa phương...",
      "prerequisites": [],
      "stt": 42
    },
    {
      "id": "mns3066",
      "code": "MNS3066",
      "name": "Quản lý cấp cơ sở về kinh tế",
      "credits": 3,
      "lecturer": "Giảng viên 043",
      "time": {
        "day": 3,
        "start": 2,
        "count": 3
      },
      "info": "-Môn học này tập trung vào các công cụ, chính sách và thực tiễn quản lý hoạt động kinh tế tại cấp cơ sở (như phường, xã, tổ dân phố) hoặc các đơn vị trực thuộc trong doanh nghiệp.",
      "prerequisites": [],
      "stt": 43
    },
    {
      "id": "mns3110",
      "code": "MNS3110",
      "name": "Quản lý cấp cơ sở về văn hóa và xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 044",
      "time": {
        "day": 5,
        "start": 7,
        "count": 3
      },
      "info": "Trang bị cho sinh viên kỹ năng thực hành để quản lý hiệu quả các vấn đề văn hóa và xã hội tại cấp địa phương. Trọng tâm của học phần là nghiên cứu lý luận quản lý kết hợp với thực tiễn cộng đồng...",
      "prerequisites": [],
      "stt": 44
    },
    {
      "id": "mns3062",
      "code": "MNS3062",
      "name": "Pháp luật về lao động và việc làm",
      "credits": 3,
      "lecturer": "Giảng viên 045",
      "time": {
        "day": 7,
        "start": 7,
        "count": 3
      },
      "info": "Môn học cung cấp kiến thức pháp lý nền tảng về quan hệ lao động. Sinh viên sẽ được tìm hiểu về Bộ Luật Lao động Việt Nam và các văn bản hướng dẫn thi hành...",
      "prerequisites": [],
      "stt": 45
    },
    {
      "id": "mns3063",
      "code": "MNS3063",
      "name": "Bảo hiểm xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 046",
      "time": {
        "day": 2,
        "start": 7,
        "count": 3
      },
      "info": "- Môn học chuyên sâu về các chế độ bảo hiểm xã hội (ốm đau, thai sản, tai nạn lao động, bệnh nghề nghiệp, hưu trí, tử tuất), bảo hiểm thất nghiệp, và trách nhiệm của người sử dụng lao động...",
      "prerequisites": [],
      "stt": 46
    },
    {
      "id": "mns3111",
      "code": "MNS3111",
      "name": "Định mức lao động",
      "credits": 3,
      "lecturer": "Giảng viên 047",
      "time": {
        "day": 7,
        "start": 1,
        "count": 3
      },
      "info": "- Môn học về các phương pháp đo lường và xác định khối lượng công việc cần thiết để hoàn thành một sản phẩm/dịch vụ trong một khoảng thời gian nhất định. Nó liên quan đến việc xây dựng định mức năng suất...",
      "prerequisites": [],
      "stt": 47
    },
    {
      "id": "mns3065",
      "code": "MNS3065",
      "name": "Tuyển dụng nhân lực",
      "credits": 3,
      "lecturer": "Giảng viên 048",
      "time": {
        "day": 5,
        "start": 7,
        "count": 3
      },
      "info": "- Môn học tập trung vào quy trình và kỹ thuật tuyển dụng nhân sự hiệu quả. Nội dung bao gồm các bước: xác định nhu cầu tuyển dụng, phân tích công việc, lập kế hoạch tuyển dụng...",
      "prerequisites": [],
      "stt": 48
    },
    {
      "id": "mns3103",
      "code": "MNS3103",
      "name": "Tổ chức lao động khoa học",
      "credits": 3,
      "lecturer": "Giảng viên 049",
      "time": {
        "day": 2,
        "start": 3,
        "count": 3
      },
      "info": "- Nghiên cứu cách thiết kế và sắp xếp công việc, phân công lao động, bố trí nơi làm việc một cách khoa học để tối đa hóa năng suất, giảm mệt mỏi và tạo môi trường làm việc hiệu quả, an toàn.",
      "prerequisites": [],
      "stt": 49
    },
    {
      "id": "mns3112",
      "code": "MNS3112",
      "name": "Đào tạo phát triển nguồn nhân lực",
      "credits": 3,
      "lecturer": "Giảng viên 050",
      "time": {
        "day": 6,
        "start": 9,
        "count": 3
      },
      "info": "Môn học cung cấp kiến thức về quy trình đào tạo và phát triển nhân sự trong một tổ chức. Sinh viên sẽ học cách xác định nhu cầu đào tạo, lập kế hoạch, thiết kế chương trình...",
      "prerequisites": [],
      "stt": 50
    },
    {
      "id": "mns3138",
      "code": "MNS3138",
      "name": "Đãi ngộ toàn diện",
      "credits": 3,
      "lecturer": "Giảng viên 051",
      "time": {
        "day": 5,
        "start": 7,
        "count": 3
      },
      "info": "Môn học nghiên cứu về hệ thống đãi ngộ toàn diện, không chỉ là tiền lương. Nội dung bao gồm các thành phần: đãi ngộ tài chính trực tiếp (lương, thưởng), đãi ngộ tài chính gián tiếp (phúc lợi)...",
      "prerequisites": [],
      "stt": 51
    },
    {
      "id": "mns3071",
      "code": "MNS3071",
      "name": "Quyền tác giả và quyền liên quan",
      "credits": 3,
      "lecturer": "Giảng viên 052",
      "time": {
        "day": 7,
        "start": 1,
        "count": 3
      },
      "info": "- Nghiên cứu về quyền tác giả đối với các tác phẩm văn học, nghệ thuật, khoa học (sách, nhạc, phim, phần mềm...). Đồng thời, tìm hiểu về quyền của những người biểu diễn, nhà sản xuất bản ghi âm...",
      "prerequisites": [],
      "stt": 52
    },
    {
      "id": "mns3072",
      "code": "MNS3072",
      "name": "Sáng chế và giải pháp hữu ích",
      "credits": 3,
      "lecturer": "Giảng viên 053",
      "time": {
        "day": 7,
        "start": 2,
        "count": 3
      },
      "info": "- Đi sâu vào việc bảo hộ các giải pháp kỹ thuật dưới dạng sản phẩm hoặc quy trình. -Môn học làm rõ sự khác biệt giữa bằng độc quyền sáng chế và bằng độc quyền giải pháp hữu ích.",
      "prerequisites": [],
      "stt": 53
    },
    {
      "id": "mns3073",
      "code": "MNS3073",
      "name": "Kiểu dáng công nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 054",
      "time": {
        "day": 3,
        "start": 9,
        "count": 3
      },
      "info": "-Tập trung vào việc bảo hộ hình dáng bên ngoài của sản phẩm. Đó là những đường nét, hình khối, màu sắc, hoặc sự kết hợp các yếu tố đó tạo nên vẻ đẹp thẩm mỹ và tính mới của sản phẩm...",
      "prerequisites": [],
      "stt": 54
    },
    {
      "id": "mns3074",
      "code": "MNS3074",
      "name": "Nhãn hiệu và chỉ dẫn thương mại khác",
      "credits": 3,
      "lecturer": "Giảng viên 055",
      "time": {
        "day": 5,
        "start": 7,
        "count": 3
      },
      "info": "-Môn học về việc bảo hộ các dấu hiệu dùng để phân biệt hàng hóa, dịch vụ (tên thương hiệu, logo, khẩu hiệu, biểu tượng...). Cũng tìm hiểu về các chỉ dẫn thương mại khác như chỉ dẫn địa lý...",
      "prerequisites": [],
      "stt": 55
    },
    {
      "id": "mns3075",
      "code": "MNS3075",
      "name": "Quản lý sở hữu trí tuệ trong doanh nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 056",
      "time": {
        "day": 3,
        "start": 2,
        "count": 3
      },
      "info": "-Đây là môn học tổng hợp và ứng dựng. Nó kết tất cả các loại hình SHTT ở trên vào hoạt động thực tế của doanh nghiệp. Bạn sẽ học cách xây dựng chiến lược SHTT, lập hồ sơ đăng ký...",
      "prerequisites": [],
      "stt": 56
    },
    {
      "id": "mns3114",
      "code": "MNS3114",
      "name": "Thương mại hoá quyền sở hữu trí tuệ",
      "credits": 3,
      "lecturer": "Giảng viên 057",
      "time": {
        "day": 2,
        "start": 8,
        "count": 3
      },
      "info": "Môn Thương mại hoá quyền sở hữu trí tuệ học về cách biến tài sản trí tuệ (sáng chế, thương hiệu, bản quyền…) thành giá trị kinh tế. Nội dung gồm hiểu các loại quyền SHTT, cách đánh giá và định giá tài sản trí tuệ...",
      "prerequisites": [],
      "stt": 57
    },
    {
      "id": "mns3115",
      "code": "MNS3115",
      "name": "Thực thi quyền sở hữu trí tuệ",
      "credits": 3,
      "lecturer": "Giảng viên 058",
      "time": {
        "day": 7,
        "start": 7,
        "count": 3
      },
      "info": "Học về cách bảo vệ và thực thi quyền sở hữu trí tuệ khi xảy ra vi phạm. Nội dung bao gồm các biện pháp hành chính, dân sự và hình sự để xử lý xâm phạm quyền SHTT.",
      "prerequisites": [],
      "stt": 58
    },
    {
      "id": "mns3139",
      "code": "MNS3139",
      "name": "Pháp luật về khoa học, công nghệ và chuyển đổi số",
      "credits": 3,
      "lecturer": "Giảng viên 059",
      "time": {
        "day": 7,
        "start": 1,
        "count": 3
      },
      "info": "cung cấp kiến thức về khung pháp lý điều chỉnh hoạt động khoa học – công nghệ và đổi mới sáng tạo ở Việt Nam. Nội dung gồm pháp luật về quản lý nghiên cứu khoa học, phát triển công nghệ...",
      "prerequisites": [],
      "stt": 59
    },
    {
      "id": "mns3140",
      "code": "MNS3140",
      "name": "Khoa học, công nghệ và chuyển đổi số với phát triển bền vững",
      "credits": 3,
      "lecturer": "Giảng viên 060",
      "time": {
        "day": 2,
        "start": 8,
        "count": 3
      },
      "info": ". Nội dung bao gồm xu hướng chuyển đổi số, công nghệ số (AI, dữ liệu lớn, IoT…) và tác động của chúng đến các lĩnh vực như giáo dục, y tế, môi trường và quản trị.",
      "prerequisites": [],
      "stt": 60
    },
    {
      "id": "mns3098",
      "code": "MNS3098",
      "name": "Chính sách khoa học, công nghệ và đổi mới",
      "credits": 3,
      "lecturer": "Giảng viên 061",
      "time": {
        "day": 6,
        "start": 3,
        "count": 3
      },
      "info": "cách nhà nước xây dựng và triển khai chính sách để thúc đẩy khoa học, công nghệ và đổi mới sáng tạo. Nội dung gồm các công cụ chính sách như đầu tư công cho R&D, ưu đãi thuế...",
      "prerequisites": [],
      "stt": 61
    },
    {
      "id": "mns3079",
      "code": "MNS3079",
      "name": "Hệ thống đổi mới quốc gia",
      "credits": 3,
      "lecturer": "Giảng viên 062",
      "time": {
        "day": 7,
        "start": 7,
        "count": 3
      },
      "info": "nghiên cứu cách các thành phần trong một quốc gia (nhà nước, doanh nghiệp, trường đại học, viện nghiên cứu) phối hợp để thúc đẩy đổi mới sáng tạo. Nội dung tập trung vào cấu trúc, chức năng và mối quan hệ...",
      "prerequisites": [],
      "stt": 62
    },
    {
      "id": "mns3080",
      "code": "MNS3080",
      "name": "Doanh nghiệp khoa học và công nghệ",
      "credits": 3,
      "lecturer": "Giảng viên 063",
      "time": {
        "day": 6,
        "start": 9,
        "count": 3
      },
      "info": "nghiên cứu cách doanh nghiệp khai thác khoa học và công nghệ để tạo giá trị kinh tế. Nội dung gồm các loại hình doanh nghiệp công nghệ cao, cơ chế thành lập, vận hành và quản lý doanh nghiệp KH&CN.",
      "prerequisites": [],
      "stt": 63
    },
    {
      "id": "mns3141",
      "code": "MNS3141",
      "name": "Huy động và phát triển nguồn lực KH, CN và ĐMST",
      "credits": 3,
      "lecturer": "Giảng viên 064",
      "time": {
        "day": 3,
        "start": 9,
        "count": 3
      },
      "info": "cách huy động và sử dụng hiệu quả các nguồn lực để thúc đẩy khoa học, công nghệ và đổi mới sáng tạo (KH&CN&ĐMST). Nội dung gồm nguồn lực con người... nguồn lực tài chính... và nguồn lực vật chất...",
      "prerequisites": [],
      "stt": 64
    },
    {
      "id": "mns3142",
      "code": "MNS3142",
      "name": "Thiết kế và phát triển dự án KH, CN và ĐMST",
      "credits": 3,
      "lecturer": "Giảng viên 065",
      "time": {
        "day": 2,
        "start": 7,
        "count": 3
      },
      "info": "cách lập kế hoạch, thiết kế và triển khai dự án KH&CN và đổi mới sáng tạo. Nội dung gồm xác định ý tưởng, mục tiêu, phạm vi và nguồn lực dự án, đồng thời đánh giá tính khả thi về kỹ thuật, tài chính và thị trường.",
      "prerequisites": [],
      "stt": 65
    },
    {
      "id": "mns3099",
      "code": "MNS3099",
      "name": "Văn hoá khởi nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 066",
      "time": {
        "day": 7,
        "start": 7,
        "count": 3
      },
      "info": "tư duy, thái độ và hành vi đặc trưng của môi trường khởi nghiệp. Nội dung bao gồm tinh thần đổi mới, sáng tạo, chấp nhận rủi ro và khả năng thích nghi trong quá trình xây dựng doanh nghiệp.",
      "prerequisites": [],
      "stt": 66
    },
    {
      "id": "mns3100",
      "code": "MNS3100",
      "name": "Đạo đức kinh doanh",
      "credits": 3,
      "lecturer": "Giảng viên 067",
      "time": {
        "day": 2,
        "start": 9,
        "count": 3
      },
      "info": "nguyên tắc đạo đức trong hoạt động kinh doanh và quản trị doanh nghiệp. Nội dung gồm trách nhiệm với khách hàng, nhân viên, đối tác và xã hội, đồng thời xem xét các vấn đề đạo đức trong marketing, tài chính...",
      "prerequisites": [],
      "stt": 67
    },
    {
      "id": "mns3118",
      "code": "MNS3118",
      "name": "Đánh giá và phát triển văn hóa quản lý",
      "credits": 3,
      "lecturer": "Giảng viên 068",
      "time": {
        "day": 4,
        "start": 2,
        "count": 3
      },
      "info": "nghiên cứu văn hóa quản lý trong tổ chức, tức cách giá trị, thái độ và hành vi được thể hiện trong lãnh đạo và quản lý. Nội dung bao gồm đánh giá hiện trạng văn hóa quản lý, nhận diện điểm mạnh, điểm yếu...",
      "prerequisites": [],
      "stt": 68
    },
    {
      "id": "mns3102",
      "code": "MNS3102",
      "name": "Xây dựng văn hóa doanh nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 069",
      "time": {
        "day": 4,
        "start": 2,
        "count": 3
      },
      "info": "nghiên cứu cách hình thành, phát triển và duy trì văn hóa trong doanh nghiệp. Nội dung gồm xác định giá trị cốt lõi, tầm nhìn, sứ mệnh và chuẩn mực hành vi phù hợp với chiến lược và mục tiêu của doanh nghiệp.",
      "prerequisites": [],
      "stt": 69
    },
    {
      "id": "mns3092",
      "code": "MNS3092",
      "name": "Trách nhiệm xã hội của doanh nghiệp",
      "credits": 3,
      "lecturer": "Giảng viên 070",
      "time": {
        "day": 2,
        "start": 9,
        "count": 3
      },
      "info": "nghiên cứu vai trò và nghĩa vụ của doanh nghiệp đối với xã hội và môi trường. Nội dung gồm các nguyên tắc phát triển bền vững, bảo vệ môi trường, đóng góp cộng đồng và đạo đức kinh doanh.",
      "prerequisites": [],
      "stt": 70
    },
    {
      "id": "mns3119",
      "code": "MNS3119",
      "name": "Truyền thông văn hóa quản lý",
      "credits": 3,
      "lecturer": "Giảng viên 071",
      "time": {
        "day": 2,
        "start": 3,
        "count": 3
      },
      "info": "bao gồm các kiến thức lý luận chung về truyền thông, truyền thông đại chúng và các lý thuyết truyền thông cơ bản; các khái niệm, lý luận, thực tiễn và đánh giá về truyền thông quốc tế và đối ngoại...",
      "prerequisites": [],
      "stt": 71
    },
    {
      "id": "mns3120",
      "code": "MNS3120",
      "name": "Quản lý tổ chức đa văn hóa",
      "credits": 3,
      "lecturer": "Giảng viên 072",
      "time": {
        "day": 4,
        "start": 2,
        "count": 3
      },
      "info": "cung cấp kiến thức về sự khác biệt văn hóa, ảnh hưởng của chúng đến quản trị, và các chiến lược quản lý hiệu quả trong môi trường quốc tế.",
      "prerequisites": [],
      "stt": 72
    },
    {
      "id": "mns3143",
      "code": "MNS3143",
      "name": "Quản lý kinh tế số",
      "credits": 3,
      "lecturer": "Giảng viên 073",
      "time": {
        "day": 5,
        "start": 7,
        "count": 3
      },
      "info": "bao gồm kiến thức nền tảng về kinh tế số, mô hình kinh doanh số, và kỹ năng quản lý trong môi trường số hóa. Cụ thể, học phần trang bị kiến thức về phân tích dữ liệu, trí tuệ nhân tạo, blockchain...",
      "prerequisites": [],
      "stt": 73
    },
    {
      "id": "mns3144",
      "code": "MNS3144",
      "name": "Kinh tế xanh và phát triển bền vững",
      "credits": 3,
      "lecturer": "Giảng viên 074",
      "time": {
        "day": 4,
        "start": 1,
        "count": 3
      },
      "info": "bao gồm các kiến thức lý thuyết và thực tiễn chuyên sâu, tập trung vào mối quan hệ giữa kinh tế, môi trường và xã hội. Môn học này trang bị cho sinh viên những khái niệm cốt lõi, các công cụ, chính sách...",
      "prerequisites": [],
      "stt": 74
    },
    {
      "id": "mns3145",
      "code": "MNS3145",
      "name": "Pháp luật trong quản lý kinh tế",
      "credits": 3,
      "lecturer": "Giảng viên 075",
      "time": {
        "day": 3,
        "start": 9,
        "count": 3
      },
      "info": "cung cấp kiến thức nền tảng và chuyên sâu về hệ thống pháp luật điều chỉnh các hoạt động kinh tế, kinh doanh. Nội dung học phần trang bị cho người học khả năng nhận diện, phân tích và áp dụng các quy định...",
      "prerequisites": [],
      "stt": 75
    },
    {
      "id": "mns3146",
      "code": "MNS3146",
      "name": "Quản trị doanh nghiệp số",
      "credits": 3,
      "lecturer": "Giảng viên 076",
      "time": {
        "day": 2,
        "start": 2,
        "count": 3
      },
      "info": "tập trung vào việc áp dụng các công nghệ số vào quá trình quản trị và vận hành doanh nghiệp. Học phần này trang bị cho người học kiến thức và kỹ năng cần thiết để xây dựng và thực thi chiến lược chuyển đổi số...",
      "prerequisites": [],
      "stt": 76
    },
    {
      "id": "mns3147",
      "code": "MNS3147",
      "name": "Thương mại điện tử và quản trị chuỗi cung ứng bền vững",
      "credits": 3,
      "lecturer": "Giảng viên 077",
      "time": {
        "day": 4,
        "start": 7,
        "count": 3
      },
      "info": "kết hợp kiến thức về thương mại điện tử với các nguyên tắc bền vững trong quản trị chuỗi cung ứng. Nội dung học phần này giúp người học hiểu rõ cách thức vận hành một chuỗi cung ứng thân thiện với môi trường...",
      "prerequisites": [],
      "stt": 77
    },
    {
      "id": "mns3148",
      "code": "MNS3148",
      "name": "Đạo đức kinh doanh, văn hóa doanh nghiệp và trách nhiệm xã hội",
      "credits": 3,
      "lecturer": "Giảng viên 078",
      "time": {
        "day": 7,
        "start": 1,
        "count": 3
      },
      "info": "cung cấp kiến thức toàn diện về các chuẩn mực đạo đức, giá trị văn hóa và trách nhiệm đối với xã hội trong hoạt động kinh doanh. Nội dung học phần này trang bị cho người học tư duy quản trị bền vững...",
      "prerequisites": [],
      "stt": 78
    },
    {
      "id": "mns3149",
      "code": "MNS3149",
      "name": "Công nghệ Tài chính",
      "credits": 3,
      "lecturer": "Giảng viên 079",
      "time": {
        "day": 2,
        "start": 2,
        "count": 3
      },
      "info": "trang bị kiến thức về cả tài chính và công nghệ để áp dụng vào các dịch vụ tài chính. Nội dung học phần này giúp sinh viên nắm vững các công nghệ đột phá và ứng dụng chúng để đổi mới...",
      "prerequisites": [],
      "stt": 79
    },
    {
      "id": "mns4052",
      "code": "MNS4052",
      "name": "Khóa luận tốt nghiệp",
      "credits": 5,
      "lecturer": "Giảng viên 080",
      "time": {
        "day": 7,
        "start": 7,
        "count": 5
      },
      "info": "là quy trình thực hiện và hoàn thành một đề tài nghiên cứu dưới sự hướng dẫn của giảng viên. Sinh viên sẽ được đánh giá qua từng giai đoạn và kết quả cuối cùng là một bản khóa luận được bảo vệ trước hội đồng.",
      "prerequisites": [],
      "stt": 80
    },
    {
      "id": "mns4073",
      "code": "MNS4073",
      "name": "Các vấn đề đương đại trong quản lý",
      "credits": 5,
      "lecturer": "Giảng viên 081",
      "time": {
        "day": 5,
        "start": 2,
        "count": 5
      },
      "info": "tập trung vào việc cập nhật và phân tích các xu hướng, thách thức và cơ hội mới nhất trong lĩnh vực quản lý. Nội dung học phần này không cố định mà thay đổi theo thời gian...",
      "prerequisites": [],
      "stt": 81
    },
    {
      "id": "mns4057",
      "code": "MNS4057",
      "name": "Thực tập thực tế",
      "credits": 3,
      "lecturer": "Giảng viên 082",
      "time": {
        "day": 2,
        "start": 9,
        "count": 3
      },
      "info": "không có nội dung giảng dạy trên lớp mà tập trung vào trải nghiệm thực tế tại một doanh nghiệp, tổ chức.",
      "prerequisites": [],
      "stt": 82
    },
    {
      "id": "mns4054",
      "code": "MNS4054",
      "name": "Thực tập tốt nghiệp",
      "credits": 4,
      "lecturer": "Giảng viên 083",
      "time": {
        "day": 5,
        "start": 8,
        "count": 4
      },
      "info": "không có nội dung giảng dạy trên lớp mà tập trung vào trải nghiệm thực tế tại một doanh nghiệp, tổ chức.",
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
