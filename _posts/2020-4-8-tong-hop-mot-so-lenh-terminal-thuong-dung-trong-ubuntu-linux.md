---
layout: post
thumbnail: 202048terminalUbuntu.png
title: Tổng hợp một số lệnh terminal thường dùng trong Ubuntu/Linux
excerpt: Ubuntu là một hệ điều hành máy tính dựa trên Debian GNU/Linux, một bản phân phối Linux thông dụng.
author: Panadora
category: [unixlinux, terminal]
permalink: /tong-hop-mot-so-lenh-terminal-thuong-dung-trong-ubuntu-linux.html
---

<center><img class="img-thumbnail" src="https://www.engisv.info/wp-content/uploads/2018/07/linux-terminal-1.jpg"></center><br>

**Giới thiệu 1 chút về Ubuntu:**

Ubuntu là một [hệ điều hành](https://vi.wikipedia.org/wiki/H%E1%BB%87_%C4%91i%E1%BB%81u_h%C3%A0nh) máy tính dựa trên [Debian GNU/Linux](https://vi.wikipedia.org/wiki/Debian), một bản phân phối Linux thông dụng. Mục đích của Ubuntu bao gồm việc cung cấp một hệ điều hành ổn định, cập nhật cho người dùng thường, và tập trung vào sự tiện dụng và dễ dàng cài đặt. Ubuntu đã được đánh xếp hạng là bản phân phối Linux thông dụng nhất cho máy tính để bàn, chiếm khoảng 30% số bản Linux được cài đặt trên máy tính để bàn năm 2007.

Ubuntu là [phần mềm mã nguồn mở tự do](https://vi.wikipedia.org/wiki/Ph%E1%BA%A7n_m%E1%BB%81m_t%E1%BB%B1_do_ngu%E1%BB%93n_m%E1%BB%9F), có nghĩa là người dùng được tự do chạy, sao chép, phân phối, nghiên cứu, thay đổi và cải tiến phần mềm theo điều khoản của [giấy phép GNU GPL](https://vi.wikipedia.org/wiki/Gi%E1%BA%A5y_ph%C3%A9p_C%C3%B4ng_c%E1%BB%99ng_GNU). Ubuntu được tài trợ bởi Canonical Ltd (chủ sở hữu là một người Nam Phi Mark Shuttleworth). Thay vì bán Ubuntu, Canonical tạo ra doanh thu bằng cách bán hỗ trợ kĩ thuật. Bằng việc để cho Ubuntu tự do và mở mã nguồn, Canonical có thể tận dụng tài năng của những nhà phát triển ở bên ngoài trong các thành phần cấu tạo của Ubuntu mà không cần phải tự mình phát triển.

<p style="text-align: right">Tham khảo thêm từ <a href="https://vi.wikipedia.org/wiki/Ubuntu">Wikipedia</a></p>
<hr style="background: #000;">

Mở lệnh terminal với tổ hợp phím: **`Ctrl + Alt + t`**<br>
Hoặc bạn có thể click biểu tượng của terminal để mở.
<center><img class="img-thumbnail" src="{{site.baseurl}}/image/terminal-ubuntu.png"></center><br>

Để có thể mở thêm tab mới cho terminal ta ấn phím tổ hợp: **`Ctrl + Shift + t`**
<center><img class="img-thumbnail" src="{{site.baseurl}}/image/terminal-ubuntu-2.png"></center><br>

**Sau đây là tổng hợp một số lệnh thường dùng trên Terminal:**
- **`pwd`**: ( path working directory ) In ra đường dẫn đến vị trí hiện tại bạn đang đứng.
<hr style="background: #000;">
- **`ls`**: ( list ) Hiển thị danh sách các tập tin và thư mục trong thư mục hiện tại bạn đang đứng. Mặc định, lệnh này sẽ không in ra các file ẩn. Do đó, để in ra các file ẩn này, bạn sử dụng thêm tuỳ chọn -a, câu lệnh sẽ là ( **`ls -a`** ).
<hr style="background: #000;">
- **`cd`**: ( change directory ) Thay đổi vị trí thư mục hiện tại - di chuyển đến vị trí thư mục khác. Một số cách khác nhau khi sử dụng lệnh.

- **`cd .`** : đứng nguyên ở thư mục hiện tại.
- **`cd ..`** : di chuyển đến thư mục cha của thư mục hiện tại.
- **`cd -`**  : di chuyển đến thư mục trước khi di chuyển đến thư mục hiện tại.
- **`cd hoặc cd ~`** : di chuyển đến thư mục /home/username (ví dụ với mình là: /home/lampv). Đây là vị trí thư mục mặc định mỗi khi bạn mở Terminal. Và bạn có toàn quyền đối với thư mục này.
- **`cd /`** : di chuyển đến thư mục root - thư mục gốc chứa mọi thư mục,( trong đó có home/username ).
- **`cd <tên thư mục con>`** : di chuyển đến thư mục con bên trong thư mục hiện tại.
- **`cd <đường dẫn đến thư mục>`** : di chuyển đến thư mục với đường dẫn là đường dẫn cứng. Đường dẫn cứng có thể ( ví dụ như: /home/lampv/Documents, ~/Documents/abc... )
<hr style="background: #000;">
- **`cp`**: ( copy ) Dùng để sao chép tập tin hay thư mục đến một thư mục khác.

- **`cp <tên tập tin> <tên thư mục>`**: dùng để copy một tập tin vào một thư mục.
- **`cp -r <tên thư mục nguồn> <tên thư mục đích>`**: dùng để copy thư mục nguồn vào thư mục đích.
<hr style="background: #000;">
- **`mv`**: ( move ) Dùng để di chuyển tập tin đến một thư mục mới đồng thời đổi tên tập tin đó.
- **`mv <tên tập tin cũ> <tên thư mục đích / tên tập tin mới>`**: di chuyển một tập tin đến thư mục mới đồng thời đổi tên tập tin.
- **`mv <tên tập tin cũ> <tên thư mục đích>`**: di chuyển tập tin đến thư mục đích và không đổi tên.
<hr style="background: #000;">
- **`rm`**: ( remove ) Dùng để xoá tập tin hay thư mục.

- **`rm <tên tập tin>`**: dùng để xoá tập tin.
- **`rm <tên thư mục>`**: dùng để xoá một thư mục rỗng.
- **`rm -r <tên thư mục>`**: xoá bất kỳ thư mục nào.
<hr style="background: #000;">
- **`mkdir <tên thư mục>`**: Dùng để tạo thư mục mới.

- **`touch <tên tập tin>`**: Dùng để tạo file mới.

- **`man <tên câu lệnh>`**: Dùng để hiển thị hướng dẫn các câu lệnh, ví dụ: **`man touch`**, **`man mkdir`,...**

- **`df`**: Hiển thị mức độ chiếm dụng không gian đĩa cứng của tập tin hệ thống ở tất cả các phân vùng được gắn kết.<br>
Đơn vị hiển thị là 1K.<br>
Để hiển thị kết quả với đơn vị MB hay GB (dễ đọc hơn), bạn có thể dùng thêm tuỳ chọn -h (human-readable), câu lệnh thành **`df -h`**.

- **`du`**: Hiển thị mức chiếm dụng không gian đĩa cứng ở thư mục hiện tại và các thư mục con. Có một số tuỳ chọn mà bạn có thể sử dụng:<br>
**`-h`**: (human-readable) kết quả hiển thị sử dụng đơn vị là KB, MB hay GB.<br>
**`-s`**: (summary) hiển thị tổng dung lượng.

- **`free`**: Hiển thị dung lượng bộ nhớ RAM còn trống và đang được sử dụng với một số tuỳ chọn:<br>
**`-h`**: (human-readable) hiển thị cách dễ đọc với con người.<br>
**`-g`**: hiển thị đơn vị dạng GB.<br>
**`-m`**: hiển thị đơn vị dạng MB.

- **`top`**: Hiển thị thông tin về hệ thống Linux của bạn, các tiến trình đang chạy và tài nguyên hệ thống, bao gồm: CPU, RAM, phân vùng Swap, và tổng số các tác vụ đang chạy.

- **`uname -a`**: Hiển thị toàn bộ thông tin về tên máy tính, tên nhân kernel kèm theo số phiên bản và một vài chi tiết khác.

- **`lsb_release -a`**: Hiển thị phiên bản linux đang dùng.

- **`ifconfig`**: Hiển thị danh sách các thiết bị mạng trên máy tính. Qua đó, bạn có thể biết được địa chỉ IP hiện tại của máy.

- **`adduser <tên user mới>`**: Dùng để thêm một user mới cho máy.

- **`passwd <tên user mới>`**: Dùng để thêm password cho người dùng mới.

- **`sudo`**: Nhiều câu lệnh trong Terminal cần phải có sudo phía trước. Khi dùng sudo, máy tính hiểu rằng bạn đang thực thi câu lệnh với quyền cao nhất, đó là quyền **`root`**.

Để thực thi được câu lệnh này, bạn bắt buộc phải nhập mật khẩu. Một số lệnh bắt buộc phải dùng sudo như:

- **`sudo apt-update`**: Để để fetch index mới nhất.
- **`sudo apt list --upgradable`**: Để kiểm tra 1 package có update mới.
- **`sudo apt-get upgrade`**: Để cập nhật tất cả các gói phần mềm mới nhất.
- **`sudo apt-get <tên gói phần mềm>`**: tải gói phần mềm hay ứng dụng về hệ điều hành ubuntu.
- **`sudo shutdown -h now`**: tắt máy tính ngay lập tức.
- **`sudo reboot`**: khởi động lại máy tính.

**Lời kết**: Như vậy Ubuntu cũng không mấy khó thân thiện với người dùng lắm nhệ, vì thế các bạn có thể sử dụng hệ điều hành ubuntu như với số thao tác trên windows cũng được không nhất thiết phải sử dụng lệnh, trừ khi bạn cần cài các gói phần mềm bên ngoài vào Ubuntu thì buộc bạn phải sử dụng đến terminal.<br>
*( chú ý: một số phần mềm chưa được hộ trợ trên linux thì bạn ko thể cài đặt mà thôi, ngoài ra bạn có thể tìm trên google để được hướng dẫn cài đặt các phần mềm được hổ trợ trên ubuntu nhé )*.
