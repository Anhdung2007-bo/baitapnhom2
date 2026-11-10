// DATA 20 QUESTIONS
const questions = [
  {
    id: 1,
    type: "single",
    title: "Câu 1: Bạn thường bắt đầu ngày mới làm việc/học tập như thế nào?",
    options: [
      { key: "A", text: "Nhảy ngay vào giải quyết công việc đầu tiên xuất hiện trong đầu.", explanation: "Cho thấy bạn ưu tiên tốc độ và hành động ngay lập tức, giúp xử lý việc tồn đọng nhanh nhưng dễ thiếu góc nhìn tổng thể." },
      { key: "B", text: "Mở danh sách công việc (To-do list) đã lên lịch từ trước và thực hiện theo thứ tự.", explanation: "Thể hiện tính kỷ luật cao, làm việc theo kế hoạch bài bản giúp bạn luôn chủ động kiểm soát tiến độ." },
      { key: "C", text: "Kiểm tra cẩn thận các tài liệu, rà soát lại các lỗi trước khi làm việc mới.", explanation: "Cho thấy sự tỉ mỉ, chu đáo và tiêu chuẩn chất lượng cao, hạn chế rủi ro sai sót trong công việc." },
      { key: "D", text: "Tùy thuộc vào hứng thú và nguồn năng lượng tại thời điểm đó.", explanation: "Cho thấy phong cách linh hoạt, sáng tạo, làm việc tốt nhất khi có nguồn cảm hứng dồi dào." }
    ]
  },
  {
    id: 2,
    type: "multiple",
    title: "Câu 2: Những yếu tố nào khiến bạn dễ bị mất tập trung nhất? (Chọn nhiều đáp án)",
    options: [
      { key: "A", text: "Sự trì hoãn hoặc tốc độ làm việc chậm chạp từ xung quanh.", explanation: "Bạn là người hướng đến kết quả nhanh, tiếng ồn hay sự chậm trễ dễ gây sốt ruột." },
      { key: "B", text: "Các sự cố bất ngờ làm chệch hướng kế hoạch đã đề ra.", explanation: "Bạn thích sự rõ ràng; sự xáo trộn lịch trình làm bạn tốn năng lượng để sắp xếp lại." },
      { key: "C", text: "Phải bàn giao một sản phẩm mà bạn cảm thấy chưa thực sự hoàn hảo.", explanation: "Tiêu chuẩn cao làm bạn lo lắng về lỗi nhỏ hơn là tập trung hoàn thành đúng hạn." },
      { key: "D", text: "Công việc lặp đi lặp lại mang tính quy trình nhàm chán.", explanation: "Tư duy sáng tạo cần sự đổi mới liên tục; việc rập khuôn dễ làm bạn giảm năng lượng." }
    ]
  },
  {
    id: 3,
    type: "image",
    title: "Câu 3: Chọn góc làm việc thể hiện đúng tinh thần của bạn nhất:",
    options: [
      { key: "A", text: "Góc làm việc tối giản", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60", explanation: "Tối giản để tập trung tối đa vào hành động, không bị phân tâm bởi chi tiết thừa." },
      { key: "B", text: "Góc làm việc quy chuẩn & bảng Gantt", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60", explanation: "Góc làm việc sắp xếp khoa học với lịch biểu giúp theo dõi mục tiêu rõ ràng." },
      { key: "C", text: "Góc làm việc chỉn chu & nhiều tài liệu", img: "https://images.unsplash.com/photo-1453928582365-b5ad333076dd?w=500&auto=format&fit=crop&q=60", explanation: "Được trang bị ngăn nắp, tỉ mỉ phục vụ công việc nghiên cứu chuyên sâu." },
      { key: "D", text: "Góc làm việc nghệ thuật & cảm hứng", img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=60", explanation: "Không gian mở đầy tính nghệ thuật kích thích tư duy bứt phá và ý tưởng mới." }
    ]
  },
  {
    id: 4,
    type: "single",
    title: "Câu 4: Khi đối mặt với deadline sát nút (chỉ còn vài giờ), bạn sẽ:",
    options: [
      { key: "A", text: "Làm hết tốc lực, xử lý nhanh các phần chính để nộp đúng giờ.", explanation: "Bạn giữ được sự bình tĩnh dưới áp lực và ưu tiên hoàn thành tiến độ." },
      { key: "B", text: "Phân chia nhanh thời gian còn lại cho từng phần và bám sát nó.", explanation: "Nhà chiến lược luôn giữ được tính kiểm soát dù trong hoàn cảnh ngặt nghèo." },
      { key: "C", text: "Căng thẳng vì sợ sản phẩm chưa chỉn chu, cố làm thật kỹ.", explanation: "Chủ nghĩa hoàn hảo khiến bạn áp lực gấp đôi khi thời gian bị giới hạn." },
      { key: "D", text: "Tập trung cao độ ở phút chót vì đây là lúc nảy ra nhiều sáng kiến nhất.", explanation: "Áp lực deadline kích thích tư duy đột phá và giải pháp ngẫu hứng." }
    ]
  },
  {
    id: 5,
    type: "multiple",
    title: "Câu 5: Những công cụ quản lý công việc bạn ưu tiên sử dụng:",
    options: [
      { key: "A", text: "Sổ ghi chú nhanh / App ghi chú đơn giản để note tức thì.", explanation: "Ghi chép gọn nhẹ để bấm máy thực hiện ngay." },
      { key: "B", text: "Lịch điện tử (Google Calendar) & Bảng Trello/Jira.", explanation: "Hệ thống quản lý chuyên nghiệp, theo dõi mốc thời gian chặt chẽ." },
      { key: "C", text: "Danh sách kiểm tra (Checklist) chi tiết từng tiểu tiết.", explanation: "Đảm bảo không bỏ sót bất kỳ hạng mục hay tiêu chuẩn nào." },
      { key: "D", text: "Sơ đồ tư duy (Mindmap) hoặc ghi chú dạng vẽ Sketchnote.", explanation: "Trực quan hóa ý tưởng giúp liên kết các khái niệm sáng tạo." }
    ]
  },
  {
    id: 6,
    type: "single",
    title: "Câu 6: Vai trò tự nhiên của bạn trong bài tập nhóm thường là:",
    options: [
      { key: "A", text: "Người thúc đẩy tiến độ và quyết định nhanh các bước làm.", explanation: "Giúp nhóm không bị sa lầy vào tranh luận và luôn tiến về phía trước." },
      { key: "B", text: "Người lập kế hoạch, phân công việc và theo dõi hạn nộp.", explanation: "Đóng vai trò là bộ não tổ chức, giữ cho dự án đúng quỹ đạo." },
      { key: "C", text: "Người rà soát, sửa lỗi chính tả/nội dung và đảm bảo chất lượng.", explanation: "Lá chắn bảo vệ uy tín cho sản phẩm cuối cùng của nhóm." },
      { key: "D", text: "Người đóng góp các ý tưởng mới lạ và giải pháp độc đáo.", explanation: "Mang lại làn gió mới và góc nhìn khác biệt cho dự án." }
    ]
  },
  {
    id: 7,
    type: "image",
    title: "Câu 7: Phương pháp giải tỏa căng thẳng giữa giờ làm việc của bạn:",
    options: [
      { key: "A", text: "Vận động nhanh 5 phút", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=60", explanation: "Tái tạo lại thể lực cấp tốc để tiếp tục bứt phá." },
      { key: "B", text: "Nghỉ đúng nhịp Pomodoro", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=60", explanation: "Tuân thủ khoa học nghỉ ngơi để duy trì sự bền bỉ." },
      { key: "C", text: "Sắp xếp lại góc làm việc", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&auto=format&fit=crop&q=60", explanation: "Dọn dẹp tỉ mỉ giúp thư giãn tinh thần và tìm lại sự ngăn nắp." },
      { key: "D", text: "Thư giãn tự do / Nghe nhạc", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60", explanation: "Thả lỏng tâm trí hoàn toàn để chào đón cảm hứng mới." }
    ]
  },
  {
    id: 8,
    type: "single",
    title: "Câu 8: Bạn xử lý thế nào khi kế hoạch bị thay đổi đột ngột?",
    options: [
      { key: "A", text: "Thích ứng ngay và chọn phương án hành động mới ngay tức khắc.", explanation: "Khả năng ứng biến hành động linh hoạt, không lãng phí thời gian tiếc nuối." },
      { key: "B", text: "Đánh giá tác động và điều chỉnh lại toàn bộ thời gian biểu.", explanation: "Quản lý rủi ro bài bản, đưa mọi thứ trở lại tầm kiểm soát." },
      { key: "C", text: "Phân tích kỹ nguyên nhân thay đổi để tránh lặp lại sai sót.", explanation: "Cẩn trọng học hỏi kinh nghiệm để đảm bảo độ chuẩn xác cho tương lai." },
      { key: "D", text: "Thấy hứng thú vì đây là cơ hội để thử nghiệm hướng đi mới.", explanation: "Tư duy tích cực, biến biến cố thành cơ hội sáng tạo." }
    ]
  },
  {
    id: 9,
    type: "multiple",
    title: "Câu 9: Khi hoàn thành xong một mục tiêu lớn, bạn thường làm gì?",
    options: [
      { key: "A", text: "Bắt tay ngay vào công việc/mục tiêu tiếp theo.", explanation: "Luôn tràn đầy năng lượng và khát khao chinh phục." },
      { key: "B", text: "Đánh dấu hoàn thành trên hệ thống và cập nhật báo cáo.", explanation: "Tận hưởng cảm giác hoàn thành đúng lộ trình đề ra." },
      { key: "C", text: "Tổng kết, xem xét lại các điểm có thể làm chỉn chu hơn.", explanation: "Luôn tìm kiếm cơ hội cải tiến chất lượng ngày một tốt hơn." },
      { key: "D", text: "Tự thưởng cho bản thân khoảng thời gian sáng tạo tự do.", explanation: "Nạp lại năng lượng tinh thần để chuẩn bị cho ý tưởng mới." }
    ]
  },
  {
    id: 10,
    type: "single",
    title: "Câu 10: Thái độ của bạn đối với các chi tiết nhỏ trong bài làm:",
    options: [
      { key: "A", text: "Bỏ qua nếu chúng không ảnh hưởng đến bức tranh tổng thể.", explanation: "Ưu tiên tốc độ và kết quả cốt lõi trên hết." },
      { key: "B", text: "Kiểm tra theo một checklist tiêu chuẩn đã có.", explanation: "Đảm bảo quy trình soát lỗi minh bạch và đồng bộ." },
      { key: "C", text: "Soi kỹ từng lỗi nhỏ về định dạng, chính tả hay số liệu.", explanation: "Sự tỉ mỉ tuyệt đối đảm bảo sản phẩm đạt chất lượng cao nhất." },
      { key: "D", text: "Chỉnh sửa thẩm mỹ theo cảm nhận trực quan cá nhân.", explanation: "Đề cao yếu tố thẩm mỹ và nét độc đáo riêng." }
    ]
  },
  {
    id: 11,
    type: "image",
    title: "Câu 11: Phong cách ghi chú (Take notes) yêu thích của bạn:",
    options: [
      { key: "A", text: "Ghi nhanh các việc cần làm (Action Items)", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&auto=format&fit=crop&q=60", explanation: "Tập trung vào danh sách hành động cần triển khai." },
      { key: "B", text: "Ghi chú phân cấp rõ ràng", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&auto=format&fit=crop&q=60", explanation: "Cấu trúc logic, dễ dàng tra cứu và quản lý." },
      { key: "C", text: "Ghi chép tỉ mỉ nhiều màu", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60", explanation: "Chi tiết, màu sắc phân loại kỹ càng để tránh nhầm lẫn." },
      { key: "D", text: "Phác thảo Sketchnote hình vẽ", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60", explanation: "Biểu đạt ý tưởng qua hình ảnh sáng tạo và trực quan." }
    ]
  },
  {
    id: 12,
    type: "single",
    title: "Câu 12: Khi đối mặt với quá nhiều nhiệm vụ dồn dập, bạn sẽ:",
    options: [
      { key: "A", text: "Làm việc dễ nhất trước để giải quyết xong số lượng nhanh chóng.", explanation: "Tạo đà tâm lý từ việc hoàn thành nhiều nhiệm vụ nhỏ." },
      { key: "B", text: "Sử dụng Ma trận Eisenhower để phân loại Ưu tiên/Gấp.", explanation: "Sắp xếp thứ tự làm việc dựa trên tư duy chiến lược." },
      { key: "C", text: "Tập trung làm thật xong một việc hoàn hảo rồi mới chuyển việc.", explanation: "Đảm bảo chất lượng từng công việc thay vì ôm đồm." },
      { key: "D", text: "Làm xen kẽ các việc theo ngẫu hứng để giữ sự tươi mới.", explanation: "Đổi mới trạng thái làm việc để duy trì sự hứng thú." }
    ]
  },
  {
    id: 13,
    type: "multiple",
    title: "Câu 13: Thước đo một ngày làm việc thành công của bạn là:",
    options: [
      { key: "A", text: "Số lượng công việc đã được hoàn thành (Output).", explanation: "Năng suất được đo bằng số việc giải quyết xong." },
      { key: "B", text: "Sự tuân thủ đúng 100% lịch trình đã đề ra.", explanation: "Năng suất là sự kiểm soát và đúng kế hoạch." },
      { key: "C", text: "Mức độ hoàn hảo và chất lượng của sản phẩm tạo ra.", explanation: "Năng suất nằm ở độ sâu và giá trị chất lượng." },
      { key: "D", text: "Tìm ra được những ý tưởng hay giải pháp bứt phá mới.", explanation: "Năng suất nằm ở sự đổi mới và giá trị sáng tạo." }
    ]
  },
  {
    id: 14,
    type: "single",
    title: "Câu 14: Khi nhận được góp ý/phản hồi từ người khác:",
    options: [
      { key: "A", text: "Nhanh chóng tiếp thu và điều chỉnh ngay để công việc trôi chảy.", explanation: "Thích ứng tốc độ để đảm bảo công việc không bị đình trệ." },
      { key: "B", text: "Lên danh sách các mục cần chỉnh sửa theo các bước bài bản.", explanation: "Hệ thống hóa phản hồi thành kế hoạch hành động." },
      { key: "C", text: "Đánh giá kỹ xem phản hồi đó có thực sự chuẩn xác không.", explanation: "Cẩn trọng phân tích tính đúng đắn trước khi thay đổi." },
      { key: "D", text: "Biến tấu phản hồi đó thành một ý tưởng độc đáo tốt hơn.", explanation: "Dùng góp ý làm chất liệu để sáng tạo bứt phá." }
    ]
  },
  {
    id: 15,
    type: "image",
    title: "Câu 15: Cảm xúc thường thấy của bạn vào cuối ngày làm việc:",
    options: [
      { key: "A", text: "Thỏa mãn vì giải quyết nhiều việc", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60", explanation: "Cảm giác chiến thắng khi gạch bỏ được nhiều việc." },
      { key: "B", text: "An tâm vì mọi thứ đúng tiến độ", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60", explanation: "Cảm giác bình yên khi mọi thứ nằm trong tầm kiểm soát." },
      { key: "C", text: "Trăn trở về chi tiết chưa hoàn hảo", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60", explanation: "Khát khao hoàn thiện tiếp tục thúc đẩy tư duy." },
      { key: "D", text: "Hào hứng với các ý tưởng mới", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60", explanation: "Đầu óc vẫn rộng mở chào đón cơ hội mới." }
    ]
  },
  {
    id: 16,
    type: "single",
    title: "Câu 16: Bạn chuẩn bị cho cuộc họp tiếp theo như thế nào?",
    options: [
      { key: "A", text: "Vào họp đúng giờ và nắm nhanh mục tiêu chính cần giải quyết.", explanation: "Tiết kiệm thời gian, đi thẳng vào trọng tâm." },
      { key: "B", text: "Chuẩn bị trước Agenda (nội dung) và câu hỏi theo thứ tự.", explanation: "Đảm bảo cuộc họp diễn ra điều độ và hiệu quả." },
      { key: "C", text: "Nghiên cứu kỹ tài liệu liên quan để đặt câu hỏi đào sâu.", explanation: "Chuẩn bị kỹ lưỡng để đóng góp ý kiến chất lượng." },
      { key: "D", text: "Chuẩn bị các góc nhìn mở và ý tưởng thảo luận mới.", explanation: "Đem lại luồng thảo luận phong phú và sáng tạo." }
    ]
  },
  {
    id: 17,
    type: "multiple",
    title: "Câu 17: Thói quen xử lý Email / Tin nhắn công việc của bạn:",
    options: [
      { key: "A", text: "Trả lời cực nhanh để giải quyết ngay lập tức.", explanation: "Giảm độ trễ giao tiếp, tăng tốc độ dòng công việc." },
      { key: "B", text: "Phân loại vào các thư mục (Folder/Label) ngăn nắp.", explanation: "Quản lý thông tin khoa học và chỉn chu." },
      { key: "C", text: "Soạn thảo câu từ vô cùng cẩn trọng trước khi gửi.", explanation: "Đảm bảo sự chuyên nghiệp và tính chính xác tuyệt đối." },
      { key: "D", text: "Gom lại trả lời theo các khung giờ cố định trong ngày.", explanation: "Tối ưu hóa tập trung, tránh bị xao nhãng liên tục." }
    ]
  },
  {
    id: 18,
    type: "single",
    title: "Câu 18: Cách bạn tiếp cận một công việc hoàn toàn mới chưa từng làm:",
    options: [
      { key: "A", text: "Bắt tay thử làm ngay, học hỏi qua trải nghiệm thực tế.", explanation: "Học qua hành động (Learning by doing) tốc độ cao." },
      { key: "B", text: "Tìm kiếm quy trình mẫu hoặc hướng dẫn từng bước để làm theo.", explanation: "Giảm thiểu rủi ro bằng bài học chuẩn chuẩn hóa." },
      { key: "C", text: "Nghiên cứu thật kỹ lý thuyết và tài liệu trước khi bắt đầu.", explanation: "Xây dựng nền tảng vững chắc trước khi thực hành." },
      { key: "D", text: "Thử nghiệm những góc nhìn hoàn toàn mới chưa ai thử.", explanation: "Khám phá tiềm năng đột phá thay vì lối mòn." }
    ]
  },
  {
    id: 19,
    type: "image",
    title: "Câu 19: Hình ảnh đại diện cho nhịp độ làm việc của bạn:",
    options: [
      { key: "A", text: "Chạy nước rút (Bứt phá nhanh)", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60", explanation: "Mạnh mẽ, tập trung cao độ trong thời gian ngắn." },
      { key: "B", text: "Chạy Marathon (Bền bỉ nhịp nhàng)", img: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=500&auto=format&fit=crop&q=60", explanation: "Đều đặn, kỷ luật và phân bổ sức hợp lý." },
      { key: "C", text: "Nghệ nhân chế tác (Tỉ mỉ tinh xảo)", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=60", explanation: "Chăm chút tỉ mỉ cho từng tác phẩm." },
      { key: "D", text: "Lướt sóng (Bắt nhịp linh hoạt)", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=500&auto=format&fit=crop&q=60", explanation: "Phiêu lưu, sẵn sàng đón nhận những con sóng cơ hội." }
    ]
  },
  {
    id: 20,
    type: "single",
    title: "Câu 20: Phương châm làm việc thể hiện đúng bạn nhất:",
    options: [
      { key: "A", text: "« Hành động nhanh hơn hoàn hảo »", explanation: "Tốc độ và sự thực thi là ưu tiên số một." },
      { key: "B", text: "« Thất bại trong chuẩn bị là chuẩn bị cho thất bại »", explanation: "Kế hoạch là chìa khóa mở ra thành công." },
      { key: "C", text: "« Chất lượng làm nên thương hiệu »", explanation: "Sự chuẩn xác và đỉnh cao là giá trị cốt lõi." },
      { key: "D", text: "« Sáng tạo là không giới hạn »", explanation: "Sự đổi mới là động cơ thúc đẩy phát triển." }
    ]
  }
];

// PROFILES DICTIONARY
const profiles = {
  A: {
    title: "Nhà Thực Thi Tốc Độ (Action Orientator)",
    icon: "fa-solid fa-bolt text-indigo-600",
    desc: "Bạn là người có tinh thần hành động cực kỳ cao và không ngại bắt tay vào công việc ngay lập tức. Điểm mạnh lớn nhất của bạn là khả năng ra quyết định nhanh chóng, giải quyết tồn đọng hiệu quả và luôn đẩy nhanh tiến độ chung cho cả nhóm. Tuy nhiên, việc quá tập trung vào tốc độ đôi khi có thể khiến bạn bỏ sót những chi tiết nhỏ hoặc thiếu một kế hoạch dài hạn bài bản. Để tối ưu hóa hiệu suất, bạn nên dành ra 5-10 phút đầu ngày để hệ thống hóa lại thứ tự ưu tiên trước khi hành động."
  },
  B: {
    title: "Nhà Chiến Lược Trật Tự (Strategic Planner)",
    icon: "fa-solid fa-chess-board text-emerald-600",
    desc: "Bạn là người quản lý thời gian tuyệt vời với tư duy logic và tổ chức cao. Bạn luôn làm việc theo mục tiêu, lịch trình và các bước được vạch sẵn. Nhờ đó, bạn hiếm khi rơi vào tình trạng quá hạn deadline hay bị động trước công việc. Tuy nhiên, việc quá phụ thuộc vào quy trình có thể khiến bạn cảm thấy căng thẳng khi có sự thay đổi đột ngột ngoài dự kiến. Bạn sẽ phát triển mạnh mẽ hơn nếu rèn luyện thêm tính linh hoạt và sẵn sàng chấp nhận các phương án dự phòng mang tính bứt phá."
  },
  C: {
    title: "Chuyên Gia Tỉ Mỉ & Chuẩn Xác (Perfectionist Specialist)",
    icon: "fa-solid fa-gem text-amber-600",
    desc: "Bạn đặt tiêu chuẩn rất cao cho bản thân và sản phẩm của mình. Điểm cộng lớn của bạn là sự cẩn thận, chỉn chu đến từng chi tiết và tinh thần trách nhiệm tuyệt đối với chất lượng đầu ra. Tuy vậy, chủ nghĩa hoàn hảo đôi khi là 'con dao hai lưỡi' khiến bạn tốn nhiều thời gian cho những chi tiết nhỏ, dễ dẫn đến kiệt sức hoặc chậm tiến độ chung. Hãy nhớ rằng 'Hoàn thành tốt hơn hoàn hảo' – biết điểm dừng đúng lúc sẽ giúp bạn cân bằng năng lượng và đạt hiệu suất cao hơn."
  },
  D: {
    title: "Nhà Sáng Tạo Linh Hoạt (Adaptive Innovator)",
    icon: "fa-solid fa-lightbulb text-rose-600",
    desc: "Bạn là người sở hữu tư duy mở, khả năng thích ứng linh hoạt và nguồn sáng tạo dồi dào. Bạn làm việc hiệu quả nhất trong môi trường tự do, không bị gò bó bởi quy tắc cứng nhắc và thường tạo ra những giải pháp độc đáo vào phút chót. Mặc dù vậy, việc thiếu một khung thời gian cố định đôi khi khiến bạn dễ bị trì hoãn hoặc mất tập trung bởi các ý tưởng mới phát sinh. Lời khuyên cho bạn là hãy áp dụng các khung thời gian linh hoạt (như kỹ thuật Time-blocking) để vừa giữ được cảm hứng vừa đảm bảo cam kết công việc."
  }
};

// STATE MANAGEMENT
let currentIndex = 0;
let userAnswers = {}; // { 1: ['A'], 2: ['A', 'B'], ... }

// FUNCTIONS
function startQuiz() {
  document.getElementById('screen-start').classList.add('hidden');
  document.getElementById('screen-quiz').classList.remove('hidden');
  document.getElementById('quiz-progress-badge').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentIndex];
  
  // Update Progress UI
  document.getElementById('current-q-num').innerText = currentIndex + 1;
  const percent = Math.round(((currentIndex + 1) / questions.length) * 100);
  document.getElementById('progress-percent').innerText = `${percent}%`;
  document.getElementById('progress-bar').style.width = `${percent}%`;

  // Question Title & Type
  document.getElementById('question-title').innerText = q.title;
  const badge = document.getElementById('question-type-badge');
  if(q.type === 'single') badge.innerText = "Trắc nghiệm - Chọn 1 đáp án";
  else if(q.type === 'multiple') badge.innerText = "Trắc nghiệm - Chọn nhiều đáp án";
  else if(q.type === 'image') badge.innerText = "Hình ảnh - Chọn 1 hình phù hợp";

  // Options Render
  const container = document.getElementById('options-container');
  container.innerHTML = '';

  const currentSelected = userAnswers[q.id] || [];

  if (q.type === 'image') {
    container.className = "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8";
    q.options.forEach(opt => {
      const isSelected = currentSelected.includes(opt.key);
      const card = document.createElement('div');
      card.className = `border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${isSelected ? 'border-indigo-600 ring-2 ring-indigo-200 bg-indigo-50/20' : 'border-slate-200 hover:border-slate-300 bg-white'}`;
      card.onclick = () => selectOption(q.id, opt.key, q.type);
      card.innerHTML = `
        <div class="h-36 overflow-hidden bg-slate-100">
          <img src="${opt.img}" alt="${opt.text}" class="w-full h-full object-cover">
        </div>
        <div class="p-3.5 flex items-center justify-between">
          <span class="font-semibold text-sm text-slate-800">${opt.key}. ${opt.text}</span>
          <div class="w-5 h-5 rounded-full border ${isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300'} flex items-center justify-center text-xs">
            ${isSelected ? '<i class="fa-solid fa-check"></i>' : ''}
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  } else {
    container.className = "space-y-3 mb-8";
    q.options.forEach(opt => {
      const isSelected = currentSelected.includes(opt.key);
      const item = document.createElement('div');
      item.className = `p-4 border-2 rounded-xl cursor-pointer flex items-start space-x-3 transition-all ${isSelected ? 'border-indigo-600 bg-indigo-50/30' : 'border-slate-200 hover:border-slate-300 bg-white'}`;
      item.onclick = () => selectOption(q.id, opt.key, q.type);
      
      const iconType = q.type === 'multiple' ? (isSelected ? 'fa-square-check text-indigo-600' : 'fa-regular fa-square text-slate-300') : (isSelected ? 'fa-circle-dot text-indigo-600' : 'fa-regular fa-circle text-slate-300');

      item.innerHTML = `
        <div class="text-lg mt-0.5"><i class="fa-solid ${iconType}"></i></div>
        <div class="flex-grow">
          <span class="font-medium text-slate-800 text-sm sm:text-base">${opt.key}. ${opt.text}</span>
        </div>
      `;
      container.appendChild(item);
    });
  }

  // Prev Button State
  document.getElementById('btn-prev').disabled = currentIndex === 0;

  // Next Button Label
  const btnNext = document.getElementById('btn-next');
  if (currentIndex === questions.length - 1) {
    btnNext.innerHTML = 'Xem Kết Quả <i class="fa-solid fa-square-poll-vertical ml-1.5"></i>';
    btnNext.className = "px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm shadow-md transition-all";
  } else {
    btnNext.innerHTML = 'Câu tiếp theo <i class="fa-solid fa-chevron-right ml-1.5"></i>';
    btnNext.className = "px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm shadow-md transition-all";
  }
}

function selectOption(qId, optKey, type) {
  if (!userAnswers[qId]) userAnswers[qId] = [];

  if (type === 'single' || type === 'image') {
    userAnswers[qId] = [optKey];
  } else {
    // Multiple choice toggle
    const idx = userAnswers[qId].indexOf(optKey);
    if (idx > -1) {
      userAnswers[qId].splice(idx, 1);
    } else {
      userAnswers[qId].push(optKey);
    }
  }
  renderQuestion();
}

function nextQuestion() {
  const q = questions[currentIndex];
  if (!userAnswers[q.id] || userAnswers[q.id].length === 0) {
    alert("Vui lòng chọn ít nhất một đáp án trước khi tiếp tục!");
    return;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function showResults() {
  document.getElementById('screen-quiz').classList.add('hidden');
  document.getElementById('quiz-progress-badge').classList.add('hidden');
  document.getElementById('screen-result').classList.remove('hidden');

  // Calculate Scores
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  let totalSelections = 0;

  Object.values(userAnswers).forEach(keys => {
    keys.forEach(k => {
      if (counts[k] !== undefined) {
        counts[k]++;
        totalSelections++;
      }
    });
  });

  // Percentages
  const getPercent = (key) => Math.round((counts[key] / totalSelections) * 100) || 0;
  
  document.getElementById('score-a').innerText = `${getPercent('A')}%`;
  document.getElementById('score-b').innerText = `${getPercent('B')}%`;
  document.getElementById('score-c').innerText = `${getPercent('C')}%`;
  document.getElementById('score-d').innerText = `${getPercent('D')}%`;

  // Find Dominant Group
  let topKey = 'A';
  let maxCount = -1;
  Object.keys(counts).forEach(k => {
    if (counts[k] > maxCount) {
      maxCount = counts[k];
      topKey = k;
    }
  });

  // Render Top Profile
  const prof = profiles[topKey];
  document.getElementById('res-title').innerText = prof.title;
  document.getElementById('res-desc').innerText = prof.desc;
  document.getElementById('res-icon').className = prof.icon;

  // Render Detailed Answer Reviews
  const reviewContainer = document.getElementById('answers-review-list');
  reviewContainer.innerHTML = '';

  questions.forEach((q, idx) => {
    const userSelectedKeys = userAnswers[q.id] || [];
    const card = document.createElement('div');
    card.className = "p-5 bg-slate-50 rounded-xl border border-slate-200 text-left";

    let selectedOptsHTML = '';
    q.options.forEach(opt => {
      if (userSelectedKeys.includes(opt.key)) {
        selectedOptsHTML += `
          <div class="mt-3 p-3 bg-white rounded-lg border border-indigo-100 shadow-sm">
            <div class="flex items-center space-x-2 font-semibold text-xs text-indigo-600 mb-1">
              <span class="bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">Đáp án bạn chọn: ${opt.key}</span>
              <span>- ${opt.text}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed"><strong class="text-slate-700">Giải thích:</strong> ${opt.explanation}</p>
          </div>
        `;
      }
    });

    card.innerHTML = `
      <h4 class="font-bold text-sm text-slate-900">${q.title}</h4>
      ${selectedOptsHTML}
    `;
    reviewContainer.appendChild(card);
  });
}

function restartQuiz() {
  currentIndex = 0;
  userAnswers = {};
  document.getElementById('screen-result').classList.add('hidden');
  document.getElementById('screen-start').classList.remove('hidden');
}