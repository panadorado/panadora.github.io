---
thumbnail: 2020311theme.jpg
title: Cài cặt giao diện (theme) cho Ubuntu 18.04 với Gnome Tweal Tool 
layout: post
excerpt: Nếu nhắc tới hệ điều hành mã nguồn mở dựa trên nhân linux thì chắc hẵn các bạn sẽ không thể nhắc Ubuntu, 1 hệ điều hành mã nguồn mở.
author: Panadora
---

 Nếu nhắc tới hệ điều hành mã nguồn mở dựa trên nhân linux thì chắc hẵn các bạn sẽ không thể nhắc Ubuntu, 1 hệ điều hành mã nguồn mở.

 Sau khi <a href="https://vi.wikipedia.org/wiki/Ubuntu">Canonical Ltd </a>- Cty phát triển bản phân phối linux Ubuntu loại bỏ UNITY chuyển sang dùng môi trường GNOME từ phiên bản 17.04 về sau, thì việc theme bằng "Unity Tweak Tool" sẽ không còn khả dụng. Thay vào đó người dùng sẽ phải sử dụng "Gnome Tweak Tool" thể cài đặt và tùy biến giao diện cho Ubuntu trở nên đẹp hơn và có thể làm giao diện riêng cho chính mình.
<br>
<br>
<center><img class="img-thumbnail image-post" src="http://sf.co.ua/15/07/wallpaper-14218.jpg"></center>

### Các bước tiến hành như sau: ###

### Bước 1: 
Cài đặt Gnome Tweak Tool bằng cách thao tác ( Ctrl + Alt + T ) để mở Terminal và gõ lệnh.

<p style="font-size: 16px; border: 5px double #000; padding: 10px;border-radius: 5px; background: #dddd">
	sudo apt install gnome-tweal-tool -y<br>
</p>

Như vậy các bạn đã cài xong trình điều khiển tùy biến giao diện của Ubuntu. Vào menu ứng dụng bạn tìm đến Gnome Tweal Tool click vào chuột phải chọn " Add to favorites " để ghim vào thành dask dock trên màng hình.

### Bước 2: 
Cài đặt Add-ons (User Theme) đây là phần cần thiến để bạn có thể tùy biến giao theo ý muốn của chính mình, các bạn thao tác gõ lệnh như sau.

<p style="font-size: 16px; border: 5px double #000; padding: 10px;border-radius: 5px; background: #dddd">
	sudo apt install gnome-shell-extensions -y<br>
</p>

Sau khi cài đặt xong thì phần " shell " trong Gnome Tweak Tool của bạn sẽ được unlock, như vậy các bạn đã có thể thêm giao diện của mình vào.

<center><img class="img-thumbnail image-post" src="https://www.upsieutoc.com/images/2020/03/11/Screenshot-from-2020-03-11-20-30-29.png" alt="Screenshot-from-2020-03-11-20-30-29.png" border="0"></center>

### Bước 3: 

Tạo thư mục .themes và .icons bằng lệnh sau:

<p style="font-size: 16px; border: 5px double #000; padding: 10px;border-radius: 5px; background: #dddd">
	mkdir ~/.themes<br>
	mkdir ~/.icons
</p>

Vào " Files " thao tác tổ hợp phím ( Ctrl + h ) để hiển thị các thư mục ẩn trong đó có thư mục .themes và .icons, đây 2 thư mục chứ giao diện tùy biến của các bạn.

<center><img class="img-thumbnail image-post" src="https://www.upsieutoc.com/images/2020/03/11/Screenshot-from-2020-03-11-20-36-06.png" alt="Screenshot-from-2020-03-11-20-36-06.png" border="0"></center>

Để thêm giao điện tùy biến riêng mình các bạn có thể vào trang <a href="https://www.gnome-look.org/">gnome-look.org</a> để tải về những giao diện bạn thích.

### Bước 4: Cài đặt Numix theme (icon) vs Adapta theme (icon Paper) 

### Theme Numix vs icon Numix

<p style="font-size: 16px; border: 5px double #000; padding: 10px;border-radius: 5px; background: #dddd">
	sudo add-apt-repository ppa:numix/ppa<br>
	sudo apt-get update<br>
	sudo apt-get install numix-gtk-theme numix-icon-theme-circle numix-icon-theme-square
</p>

<div class="embed-responsive embed-responsive-16by9">
	<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9TNvaqtVKLk" allowfullscreen></iframe>
</div>

### Theme Adapta vs Icon Paper

Thông thường khi thêm một repo mới thì Ubuntu sẽ hỏi là có muốn thêm vào trong repo list không, khi nó hỏi chỉ cần nhấn [ENTER] là được. Tiếp theo là cài theme: <br><br>

### Bước 1: 

<p style="font-size: 16px; border: 5px double #000; padding: 10px;border-radius: 5px; background: #dddd">
	sudo add-apt-repository ppa:tista/adapta<br><br>
	sudo apt update && sudo apt upgrade -y<br>
</p>

### Bước 2:

<p style="font-size: 16px; border: 5px double #000; padding: 10px;border-radius: 5px; background: #dddd">
	sudo apt-get install adapta-gtk-theme<br>
	sudo add-apt-repository -u ppa:snwh/ppa
	sudo apt-get install paper-icon-theme
</p>

<center><img class="img-thumbnail image-post" src="https://jaredchu.com/wp-content/uploads/2018/08/gnome-tweak-select-theme-jaredchu-blog.png"></center>
<br>
<br>

