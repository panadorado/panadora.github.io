---
thumbnail: "ransomware-as-a-service.png"
layout: "post"
title: "Ransomware RaaS, nguy hiểm với mã độc tống tiền mới"
excerpt: "Loại mã độc Ransomware tốngg tiền mới được phát tán vào đầu tháng 6 này, do một tổ chức chuyên phát triển loại mã độc có tên Avaddon đã được thành lập."
author: "Panadora"
category: [other, windows, unixlinux, news]
permalink: "/ma-doc-tong-tien-RaaS"
---

**Cách đây 2 ngày tình cơ trên facebook xuất hiện 1 bài đăng nói về sự nguy hiểm của loại mã độc tống tiền mới có tên là RaaS, và tôi cũng đã tò mò với điều và click vào bài post để xem thêm thông tin về con Ransomware mới này. Cụ thể như sau:**

![image-title]({{baseurl}}/image/ransomware-as-a-service.png){:width="100%"}
<br>

Loại mã độc Ransomware tốngg tiền mới được phát tán vào đầu tháng 6 này, do một tổ chức chuyên phát triển loại mã độc có tên Avaddon đã được thành lập. Tuy nhiên Avaddon không tự mình phân phối các mã đọc do họ tạo ra, thay vào đó Avaddon tuyển dụng một loại tin tặc và đại lý giúp họ phát tán mã độc.

Cách làm này giúp mã độc của Avaddon tấn công được cực kỳ nhiều nạn nhân. Đợt tấn công đầu tiên sử dụng mã độc ransomware có tên Avaddon Ransomware đang khiến cả thế giới lo lắng vì quy mô của nó. Với cái nháy mắt và nụ cười, Avaddon Ransomware đang spam, khủng bố hàng trăm ngàn người và rất nhiều trong số đó đã trở thành nạn nhân của Avaddon.

![image-title]({{baseurl}}/image/Avaddon-Ransomware-1.jpg){:width="100%"}
<br>

Một loạt email chứa mã độc với chủ đề gợi sự tò mò như "Ảnh mới của bạn nè?" hoặc "Bạn có thích ảnh của tôi không?", với nội dung chẳng có gì ngoài biểu tượng nháy mắt hoặc mặt cười đã được gửi đi. Kèm trong thư đương nhiên là trình tải xuống JavaScript mà khi kích vào ransomware sẽ được cài đặt trên máy tính của nạn nhân.

David Picket, nhà nghiên cứu bảo mật của AppRiver, chia sẻ rằng họ đã chặn 300.000 email chứa Avaddon Ransomware chỉ trong một khoảng thời gian ngắn. Các đại lý, hacker làm việc cho Avaddon bao gồm cả những cái tên sừng sỏ như Phorpiex/Trik Botnet. 

![image-title]({{baseurl}}/image/Avaddon-Ransomware-2.jpg){:width="100%"}
<br>

**`Thiết lập ảnh phần mở rộng tập tin mặc định của Microsoft vô tình tiếp tay cho Avaddon Ransomware`**.<br>
Trình cài đặt JavaScript được đính kèm trong email được ngụy trang giống như một bức ảnh định dạng JPG bằng cách đặt tên là IMG123101.jpg.js. Thiết lập ẩn phần mở rộng tập tin của Windows vô tình tiếp tay cho Avaddon Ransomware. Cụ thể, sau khi tải về máy, IMG123101.jpg.js sẽ chỉ hiển thị là IMG123101.jpg, khiến người dùng lầm tưởng đây chỉ là file ảnh và mở nó ra.

![image-title]({{baseurl}}/image/Avaddon-Ransomware-3.jpg){:width="100%"}
<br>

**`Các dòng code "độc hại" ẩn trong IMG123101.jpg.js`**.<br>
Khi được mở, IMG123101.jpg.js sẽ khởi chạy cả cửa sổ PowerShell và Bitsadmin để tải về và cài đặt Avaddon Ransomware vào thư mục %Temp%. Ransomware sẽ được khởi chạy ngay sau khi cài đặt xong.

Trong thử nghiệm được tiến hành bởi Bleeping Computer, sau khi chạy, Avaddon Ransomware sẽ tìm kiếm tất cả các dữ liệu trên máy và mã hóa chúng. Phần mở rộng .avdn sẽ được thêm vào các dữ liệu bị mã hóa.

![image-title]({{baseurl}}/image/Avaddon-Ransomware-4.jpg){:width="100%"}
<br>

**`Các tập tin bị mã hóa sau khi Avaddon Ransomware được khởi động`**.<br>
Thư đòi tiền chuộc dữ liệu có tên [id]-readme.html cũng được tạo ra trong mỗi thư mục. Trong thư có chứa link tới trang web thanh toán, chỉ có thể truy cập bằng trình duyệt TOR và ID của nạn nhân. Mỗi nạn nhân có một ID riêng, duy nhất.

![image-title]({{baseurl}}/image/Avaddon-Ransomware-5-1.jpg){:width="100%"}
<br>

**`Thư đòi tiền chuộc của Avaddon, yêu cầu người dùng tải trình duyệt TOR để truy cập trang thanh toán`**.<br>
Khi truy cập trang web thanh toán, nạn nhân sẽ thấy số tiền mà Avaddon yêu cầu là 900 USD, có thể tăng thêm tùy theo số lượng tài liệu. Hướng dẫn chi tiết về cách thanh toán để nhận trình giải mã cũng được Avaddon liệt kê chi tiết.

![image-title]({{baseurl}}/image/Avaddon-Ransomware-6.jpg){:width="100%"}
<br>

**`Giá tiền chuộc dữ liệu là 900 USD, có thể tăng thêm tùy theo số lượng tài liệu`**.<br>
Trang web cũng có đầy đủ các phần như hỗ trợ qua tin nhắn, giải mã thử miễn phí và trang trợ giúp vui nhộn với hình ảnh các nhân vật trong Harry Potter. Không may là sau khi tiến hành phân tích Avaddon Ransomware, Michael Gillespie kết luận rằng trình giải mã thử miễn phí không hoạt động. Gillespie là người tạo ra trang xác định ransomware ID-Ransomware.

![image-title]({{baseurl}}/image/Avaddon-Ransomware-7.jpg){:width="100%"}
<br>

**`Trang hỗ trợ đầy hài hước của Avaddon`**.<br>
Phân phối ransomware theo hình thức đại lý liên kết

Trong quảng cáo đăng trên một diễn đàn hacker của Nga, Avaddon tuyên bố rằng họ vận hành theo phương thức Ransomware-as-an-Affiliate (RaaS). Đây là phương thức hoàn toàn mới trong thế giới tội phạm mạng. 

RaaS hoạt động giống như một hệ thống kinh doanh liên kết, trong đó Avaddon chịu trách nhiệm phát triển mã độc và vận hành, xử lý quá trình thanh toán, giải mã cho nạn nhân. Các hacker và đại lý liên kết với Avaddon sẽ đảm nhiệm việc phân phối ransomware qua thư rác, xâm nhập mạng lưới nội bộ và các phương thức khác.

Nếu nạn nhân chi tiền chuộc lại dữ liệu, Avaddon sẽ trả 65% cho đại lý, giữ lại 35%. Các đại lý lớn có thể đàm phán với Avaddon để nhận mức doanh thu cao hơn, tùy theo quy mô của cuộc tấn công.

![image-title]({{baseurl}}/image/Avaddon-Ransomware-8.jpg){:width="100%"}
<br>

**`Avaddon đang rất tích cực tìm kiếm đại lý`**.<br>
Tuy nhiên, các đại lý tham gia RaaS sẽ phải tuân theo một loạt quy định mà Avaddon đưa ra. Quy tắc quan trọng nhất mà Avaddon đưa ra đó là các đại lý không được tấn công nạn nhân tại các quốc gia trong Cộng đồng các Quốc gia Độc lập (CIS).

Hiện tại, Avaddon vẫn đang tích cực tuyển dụng thêm hacker và các đại lý. Vì thế, trong tương lai sẽ còn có thêm nhiều đợt tấn công với quy mô lớn của Avaddon Ransomware. Mời các bạn truy cập trang bên dưới để tham khảo cách bảo vệ dữ liệu trước các ransomware nguy hiểm.

<hr>
Dựa theo nguồn thông tin từ: [Quản Trị Mạng](https://quantrimang.com/ransomware-nguy-hiem-nay-dang-phat-tan-nhanh-tren-toan-the-gioi-172808)

