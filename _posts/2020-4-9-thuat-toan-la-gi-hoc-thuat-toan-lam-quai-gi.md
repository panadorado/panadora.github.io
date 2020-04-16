---
layout: post
thumbnail: 202049Algorithm.png
title: Thuật toán là gì? Học thuật toán làm quái gì?
excerpt: Tôi là một lập trình viên có trên 15 năm kinh nghiệm. Những năm đầu tiên (từ cấp 3), tôi học và làm nhiều về thuật toán.
author: Panadora
category: [news, other]
permalink: /thuat-toan-la-gi-hoc-thuat-toan-lam-quai-gi
---

<center><img class="img-thumbnail" src="https://techtalk.vn/wp-content/uploads/2018/08/00-696x406.png"></center><br>

Tôi là một lập trình viên có trên 15 năm kinh nghiệm. Những năm đầu tiên (từ cấp 3), tôi học và làm nhiều về thuật toán. Cho đến cả khi ra trường, tôi cũng luôn nghiên cứu và có đam mê với nó. Đồ án tốt nghiệp của tôi mang tính học thuật khá nhiều: “Xây dựng mô hình ngôn ngữ cho tiếng Việt”. Ra trường, tôi nung nấu ý định đi du học và theo con đường nghiên cứu. Tuy nhiên, sau quãng thời gian đi làm 1 năm, tôi thấy thích làm sản phẩm/phần mềm hơn là nghiên cứu. Tôi chuyển hướng học về công nghệ, kĩ thuật hơn là thuật toán. Nói như vậy để bạn hiểu rằng, hiện tại tôi không còn là tín đồ hay thần thánh hoá thuật toán nữa. Tuy nhiên, cá nhân tôi cho rằng, thuật toán vẫn là thứ gì đó khá quan trọng vs đối lập trình viên. Sau này lúc đi dạy học hay định hướng chia sẻ với những lập trình viên trẻ, cũng có khá nhiều người hỏi tôi có cần học giải thuật/thuật toán hay không? Câu trả lời của tôi luôn luôn là có. Vì sao?

**Thuật toán là gì?**

Thuật toán hay giải thuật (tiếng anh là Algorithm) có khá nhiều định nghĩa phức tạp. Bạn có thể đọc ở nhiều nguồn để hiểu thêm về nó. Cá nhân tôi định nghĩa dễ hiểu rằng, thuật toán là “thuật” (phương pháp) để giải quyết 1 bài toán. Nói dễ hiểu hơn, mỗi một bài toán giống như một chiếc hòm chứa đựng kho báu (kết quả, đáp án), và chiếc chìa khoá để mở cái hòm đó chính là “giải thuật”. Nếu dùng sai chìa khoá, bạn vẫn có thể mở được hòm, nhưng mà sẽ mất nhiều thời gian, hoặc mở được hòm thì kho báu ở bên trong bị méo mó, không toàn vẹn. Sử dụng đúng chìa khoá, sẽ giúp bạn lấy được kho báu 1 cách dễ dàng, nhanh chóng. Tất nhiên mỗi chiếc hòm sẽ luôn cần loại chìa khoá khác nhau, giống như một bài toán luôn có những giải thuật xác định. Không có chiếc chìa khoá nào mở được tất cả các hòm, cũng như không có giải thuật nào giải được toàn bộ các bài toán.

**Tại sao cần dùng thuật toán?**

Lập trình chính là để yêu cầu, chỉ thị máy thực hiện, giải quyết 1 công việc, bài toán cụ thể nào đó của cuộc sống. Mỗi bài toán thực tế sẽ có cách giải quyết khác nhau. Am hiểu và sử dụng đúng thuật toán, sẽ giúp bạn giải quyết một cách dễ dàng, cùng với độ chính xác cao trong thời gian ngắn nhất. Bỏ qua thuật toán sắp xếp các số trong dãy số nguyên hay thuật toán tìm số nguyên tố đi nhé, bài đó chỉ dùng để học và minh hoạ về thuật toán thôi. Ở đây, mình muốn giới thiệu với các bạn những thuật toán có tính ứng dụng khá lớn trong các sản phẩm/hệ thống phần mềm hiện tại nhé:

-- Đầu tiên là thuật toán tìm đường đi ngắn nhất. Đại khái cho bạn một danh sách các đường đi giữa các địa điểm, hãy tìm đường đi ngắn nhất (về khoảng cách) hoặc chi phí tối thiểu khi đi từ điểm X đến điểm Y.
Bạn biết thuật toán này dùng ở đâu rồi chứ? Hiện tại tôi nghĩ, bạn có thể sẽ biết nó xuất hiện trong các phần mềm chỉ đường và ứng dụng liên quan tới ngành giao thông vận tải (ví dụ google map, grab, uber, giao hàng nhanh, ….), nhưng bạn có biết nó còn dùng ở đâu nữa không? Xin nói với các bạn rằng, trong các hệ thống mạng, viễn thông người ta cũng dùng thuật toán này để định hướng đường truyền và tín hiệu. Cuộc điện thoại từ 1 người ở thành phố Hà Nội gọi cho 1 người ở thành phố Hồ Chí Minh đi qua các cột thu phát sóng, dữ liệu internet từ máy tính của bạn đi tới máy chủ của nhà cung cấp mạng cũng phải sử dụng thuật toán này để đạt được tốc độ tối đa.

-- Tiếp theo, một thuật toán khá nổi tiếng khác là thuật toán tìm kiếm. Bạn có thể nhìn thấy nó ở khá nhiều sản phẩm phần mềm hiện tại, điển hình như Google. Bạn có thể nghĩ rằng, tìm kiếm khá là đơn giản, khi bạn lần lượt soi vào từng ô, từng dòng dữ liệu xem có thứ mà mình tìm kiếm hay không? Nhưng hãy đặt địa vị, bạn có hàng tỷ tỷ món đồ dùng được vứt lộn xộn trong 1 căn nhà, bạn sẽ mất bao nhiêu lâu để tìm được món đồ mà bạn mong muốn. Hãy biết chắc chắn rằng, việc Google trả ra được kết quả mà bạn yêu cầu tìm kiếm trong vòng 1 vài giây là vô cùng khó. Điều ấy yêu cầu 1 thuật toán cực mạnh, và vẫn liên tục cần cải tiến cho đến ngày hôm nay.

-- Các thuật toán mã hoá được sử dụng để mã hoá thông tin, được sử dụng nhiều trong việc truyền nhận và lưu trữ giữ liệu, giúp bảo vệ thông tin cá nhân và tổ chức khỏi các cuộc tấn công hay khai thác.

Bỏ qua những thuật toán cao siêu như bên trên vì bạn ít có cơ hội làm những sản phẩm như vậy, trong quá trình làm phần mềm, bạn cũng có thể sẽ gặp các bài toán hay vấn đề nhỏ yêu cầu bạn phải chọn đúng giải thuật để giải, ví dụ như:

-- Hãy tìm kiếm 1 cái máy tính có giá từ X->Y, đáp ứng tối đa các tiêu chí của người dùng chỉ trong 1 cái click chuột
-- Hãy đưa ra các bài viết hoặc sản phẩm mà người dùng quan tâm dựa trên lịch sử truy cập của họ

Khi bạn lập trình đủ lâu và đủ nhiều, tôi nghĩ chắc chắn bạn sẽ gặp nhiều bài toán khó hơn tôi. Trong quá trình phát triển sản 
phẩm CodeLearn, tôi và những đồng đội cũng đôi lúc phải giải quyết những bài toán kiểu như thế này:

-- Hãy tính toán và sắp xếp thứ hạng của người dùng dựa trên lịch sử học và làm bài
-- Đếm số lượng truy cập của người dùng trong 1 khoảng thời gian để dự đoán tấn công
-- Đưa ra gợi ý các bài tập mà người dùng nên làm dựa vào lịch sử truy cập và thao tác của họ trên hệ thống

Tất nhiên những bài toán trên là không khó với tập dữ liệu và người dùng nhỏ. Nhưng hãy thử tưởng tượng, khi hệ thống có hàng nghìn hàng vạn người cùng truy cập và bạn phải trả về kết quả là cực kì nhanh, bạn sẽ làm như thế nào để đảm bảo điều đó? Thực tế đã trả lời chúng tôi rằng, khi chọn đúng giải thuật, tốc độ xử lí có thể tăng lên từ hàng chục tới hàng trăm lần. Và tôi nghĩ rằng, một ngày nào đó, chúng tôi vẫn sẽ phải nâng cấp thuật toán để giải quyết bài toán với lượng dữ liệu và người dùng lớn hơn.

**Và không học thuật toán được không?**

Không phải là 1 tín đồ của thuật toán, không thần thánh hoá thuật toán, nên tôi nghĩ rằng không học thuật toán vẫn làm được thậm chí làm tốt phần mềm. Nếu các bạn không làm những bài toán có độ phức tạp cao, có dữ liệu người dùng lớn, cần phải ra đáp án nhanh với độ chính xác cao, tôi nghĩ bạn vẫn có thể giải quyết được vấn đề với vốn thuật toán hạn chế. Hay ví dụ nếu bạn làm 1 website chủ yếu là nội dung, nếu bạn làm 1 ứng dụng điện thoại chỉ xử lí các logic thông thường, thuật toán không giúp ích nhiều cho bạn trong trường hợp ấy. Kể cả khi bạn làm những sản phẩm rất lớn, sử dụng những công nghệ rất mới và hot như AI, BigData hay Blockchain, dù không thành thạo thuật toán nào cả, bạn vẫn xây dựng đc hệ thống. Trong trường hợp này, bạn chỉ cần hiểu rõ cách sử dụng và ứng dụng của công nghệ, chứ không cần nằm hay hiểu rõ thuật toán bên trong công nghệ ấy.

Đặc biệt là, với 1 số phần mềm đơn giản có yêu cầu hay thay đổi, dẫn đến việc thay đổi code thường xuyên. Lúc này, thuật toán hay, code chạy nhanh không quan trọng bằng việc hiểu đúng yêu, tổ chức dữ liệu, thiết kế cấu trúc code, viết code sao cho dễ đọc, dễ hiểu và dễ bảo trì.

**Rốt cuộc thì thuật toán quan trọng hay không?**

Có 1 sự thật rằng, đa phần các sản phẩm phần mềm ngày nay thành công mà không cần hay sử dụng rất ít thuật toán bên trong nó. Tuy nhiên những sản phẩm có hàm lượng thuật toán cao, trí tuệ lớn, thật sự tạo ra sự khác biệt và thành công lớn hơn những sản phẩm bình thường. Sản phẩm như Google thành công vì có thuật toán tìm kiếm mạnh mẽ bậc nhất thế giới. Sản phẩm như Facebook hay Youtube cũng phải sử dụng nhiều thuật toán như tìm kiếm, gợi ý người dùng, gợi ý nội dung, … Nhưng thuật toán lại không phải yếu tố cốt lõi quyết định thành công của sản phẩm này. Do đó, việc học thuật toán, sự quan trọng của thuật toán phụ thuộc vào sản phẩm, ứng dụng mà bạn làm. Dù có giỏi hay không giỏi thuật toán, bạn vẫn có thể thành công nếu vận dụng đúng kỹ năng, hiểu biết của mình vào lĩnh vực mà bạn làm. Cá nhân tôi luôn khuyên và nhắn nhủ các bạn lập trình viên hãy luôn học và rèn luyện thuật toán. Với tôi, thuật toán giúp bạn rèn luyện tư duy giải quyết vấn đề, cùng với suy nghĩ về việc luôn tối ưu và làm sản phẩm một cách tối ưu và tổng quát. Có những lúc, thực sự bế tắc trong công việc (không chỉ là lập trình), tôi vẫn thường vào làm 1 số bài tập thuật toán để khai thông và thúc đẩy sự suy nghĩ. Sau đó tôi thấy mình minh mẫn và giải quyết công việc cũ 1 cách thuận lợi hơn.

**Học thuật toán từ đâu? Như thế nào?**

Nếu bạn học CNTT ở trong trường đại học, tôi nghĩ bạn nên học tốt môn học này từ các thầy giáo và các bạn đồng trang lứa. Nếu không có điều kiện ấy, tôi nghĩ rằng bạn nên tìm kiếm 1 cuốn sách dạy về giải thuật như là cuốn “Cấu trúc dữ liệu và giải thuật” của thầy Đinh Mạnh Tường.

Nếu bạn giỏi tiếng Anh, hãy tìm kiếm những khoá học cơ bản trên mạng giống như là trang: 

[https://www.geeksforgeeks.org/fundamentals-of-algorithms/ ](https://www.geeksforgeeks.org/fundamentals-of-algorithms/ )

À ngoài ra thì, nếu có thể, hãy thử làm bài tập và học thử các khoá học liên quan tới thuật toán ở đường dẫn:

[https://codelearn.io/Learning/Detail/3477](https://codelearn.io/Learning/Detail/3477) hay [https://codelearn.io/Learning/Detail/133067](https://codelearn.io/Learning/Detail/133067).

Bằng tất cả tâm trí cùng đam mê của tôi và cộng sự, sẽ cố gắng giúp các bạn học tốt thuật toán nếu các bạn cần và hứng thú với nó.

<hr style="background: #000;">
<p style="text-align: right;">Nguồn thông tin: <a href="https://codelearn.io/blog/view/thuat-toan-la-gi-hoc-thuat-toan-lam-quai-gi?fbclid=IwAR28tR0kCNSuVdJzvSKBT7Ffr6docJ0RIjki2cjOs8kS2SYBtXNCHe0ZyO0">codelearn.io</a> | Tác giả: <a href="https://codelearn.io/profile/3410">vietcv</a></p>