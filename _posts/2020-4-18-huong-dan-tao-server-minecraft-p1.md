---
thumbnail: 2020418PostMinecraft.jpg
layout: post
title: Hướng dẫn tạo server minecraft ( Phần 1 )
excerpt: Minecraft là một tựa game độc lập trong một thế giới mở.
author: Panadora
category: [games, news]
permalink: /huong-dan-tao-server-minecraft-p1
---

**[Minecraft](https://vi.wikipedia.org/wiki/Minecraft) là một tựa game độc lập trong một thế giới mở. Ban đầu nó được tạo ra bởi lập trình viên người Thụy Điển [Markus "Notch" Persson](https://vi.wikipedia.org/wiki/Markus_%22Notch%22_Persson) và sau đó được phát triển và phát hành bởi [Mojang](https://vi.wikipedia.org/wiki/Mojang). Tựa game có đồ họa không mấy hấp dẫn những thu hút đông đạo số người chơi đặt biệt là thanh thiếu niên và trẻ em, vì lối chơi của tựa game này mạng lại tính sáng tạo và đầy thú vị với những khối block hình vuông với động, thực vật có hình thù vui nhộm. ``Minecraft``cho phép người chơi xây dựng các công trình bằng cách xây các khối kết cấu hình vuông trong một thế giới 3D.**

Game bao gồm các chế độ chơi gôm: `Sinh Tồn, Sáng tạo, Phiêu lưu`. Chi tiết tại [wikipedia](https://vi.wikipedia.org/wiki/Minecraft).

Ngoài ra game cho phép kết nối Online để có thể chơi game cùng bạn bè qua việc tạo server và sau đây là bài viết hướng dẫn tạo server minecraft để chơi cùng bạn bè.


![image-title-here]({{baseurl}}/image/2020418CreateServerMinecraft.jpg){:width="100%"}<br><br>

<h3 style="font-weight: bold;">Hướng dẫn tải Server Minecraft</h3>

Để có thể tạo server đầu tiên các bạn cần file để chạy server, các bạn có thể download phiên bản server minecarft bạn cần dưới đây.

<p style="border: 3px double #242424; background: #dddd; font-style: italic; border-radius: 5px;">Chú ý: lời khuyên dành mình cho các bạn là để server có thể ổn định các bạn có thể tải phiên bản server thấp hơn một chút đối với phiên bản mới nhất hiện tại của minecraft.</p>

[Vanilla](https://getbukkit.org/download/vanilla): Tổng hợp các phiên bản server minecraft không sử dụng plugins/addons

[Craft Bukkit](https://getbukkit.org/download/craftbukkit): Tổng hợp các phiên bản server minecraft cho phép sử dụng plugins/addons

[Spigot](https://getbukkit.org/download/spigot): Tương tự như `Craft Bukkit` nôm na là phiên bản nâng cấp từ Craft Bukkit, đặt biệt server `Spigot` có thể cho phép người chơi vào server từ nhiền phiên bản khác nhau, như trong các server Online bạn để ý dòng Title của server sẽ có hổ trợ từ ( 1.7 - 1.8 ) đó là server đang sử dụng `Spigot`.

<h3 style="font-weight: bold;">Tạo Server Minecraft</h3>

Sau khi download phiên bản file server bạn cần, thì việc bạn cần làm bây giờ là tạo 1 thư mục chưa file server download vừa rồi và bật nó lên, lưu ý để có thể chạy được file server thì máy tính bạn bắt buộc phải có `java` để chạy file server.

**Để kiểm trả phiên bản java có trong máy tính của bạn thao tác như sau: Nhấm tổ hợp phím `Start + r ` mở `Command Prompt` gõ lệnh:**

```js

   java -version

```

**nếu nó hiển thị như vậy tức là máy tính của bạn đã cài java**

```console

	java version "1.6.0_13"
	Java(TM) SE Runtime Environment (build 1.6.0_13-b03)
	Java HotSpot(TM) Client VM (build 11.3-b02, mixed mode, sharing)

```

**Nếu không có bạn có thể tải java tại đây:**

[Java online](https://javadl.oracle.com/webapps/download/AutoDL?BundleId=242057_3d5a2bb8f8d4428bbe94aed7ec7ae784)<br>
[Java 32bit offline](https://javadl.oracle.com/webapps/download/AutoDL?BundleId=242058_3d5a2bb8f8d4428bbe94aed7ec7ae784)<br>
[Java 64bit offline](https://javadl.oracle.com/webapps/download/AutoDL?BundleId=242060_3d5a2bb8f8d4428bbe94aed7ec7ae784)

Nếu đã cài sẵn Java thì bạn không `restart` lại máy, nếu bạn mới cài java thì bạn cần `restart` hoặc `login out` lại máy, sau đó thao tác theo các hướng dẫn sau để tạo server minecraft.

![image-title-here]({{baseurl}}/image/minecraft-folder-1.png){:width="100%"}

`Double click chuột` vào file server trong thư mục bạn đã tạo, sau đó đợi file tiến hành giải nén thêm một số file khác như sau:

![image-title-here]({{baseurl}}/image/minecraft-folder-2.png){:width="100%"}

`Double chuột phải` vào file eula.txt và sửa đổi `eula=false` thành `eula=true`

![image-title-here]({{baseurl}}/image/minecraft-eula-text.png){:width="100%"}

`ctrl + s` để `save` lại file eula.txt đã sửa sau đó tiền hành, mở file `server.properties` bằng cách click chuột phải và chọn `Open With` Text rồi chú ý và sửa đổi như sau:

`query.port=25565` : Cổng để hiển thị thông tin, khi người chơi nhập địa chỉ server sẽ hiện thị (Online/Offline, số người đang chơi, Ping…)

`gamemode=survival`: Chọn chế độ chơi cho server mặt định sẽ là **`Survival (Sinh Tồn)`**

`enable-query=true`: nếu true cái này thì bên ngoài sẽ biết được thông tin của Server (Online/Offline, số người đang chơi, Ping…)

`difficulty=easy` : Chọn mức độ của map mặt định sẽ là **`easy (Dễ)`**

`pvp=true` : **`true`** cho phép người chơi giết lân nhau, **`false`** ngược lại.

`max-players=20` : Cho phép số lượng người chơi tham gia server.

`max-world-size=29999984` : Kích thước tối đa của thế giới 

`server-port=25565` : **`port (cổng)`** để người chơi kết nối tới server của bạn

`server-ip=` : địa chỉ **`IP`** để người chơi kết nối tới server của bạn (mặt định sẽ là tự động bắt và mở IP ) của server bạn

`view-distance=10` : Tầm nhìn trong thế giới server mặt định là 10 hoặc 12 hoặc có thể lớn hơn.

`resource-pack=` : gói tài nguyên, (theme) cho server của bạn. Tốt nhất là để mặt định, vì khi thêm **`resource pack`** nó có thể gây lag server

`online-mode=false` : **`true`** chỉ dành cho Minecraft có bản quyền mới vào được server, **`false`** dành cho cả 2, bản quyền hay không bản quyền đều vào được server

`motd=A Minecraft Server` : Title (tiêu đề cho server) có thể bạn đặt tên thú vị hơn cho server của bạn.

Sau khi hoàn thành các bạn **`Ctrl + s`** để **`save`** lại **`server.properties`** và tiến hành tại thêm một file có đuôi là **`.bat`** để chạy server năm trong thư mục Server Minecraft của bạn, **`Click chuột phải`** chọn edit và nhập dòng lệnh sau:

```terminal

	/* 
	* spigot-1.15.jar là tên file server của bạn đã tải về.
	* -Xms1024M -Xmx2048M sử dụng từ 1GB - 2GB của máy tính khi tạo
	*/

	java -Xms1024M -Xmx2048M -jar spigot-1.15.jar nogui

```

Hoặc bạn có thể tải file.bat [tại đây](https://www.mediafire.com/file/z32ejk3b13q4nwz/start-server.bat/file) sau đó bỏ vào thư mục chứa file server của bạn và click chuột vào file start-server.bat để tiến hành khởi động server.

![image-title-here]({{baseurl}}/image/minecraft-file-server.png){:width="100%"}

Như vậy các bạn hoàn thành cách tạo server minecraft, tuy nhiên để có thể chơi **`online`** cùng bạn bè thì bạn cần phải mở **`port`** của server để bạn bè có thể tham gia cùng bạn. 

Mời các bạn liên kết đến [Hướng dẫn tạo server minecraft ( Phần 2 )]({{baseurl}}/huong-dan-tao-server-minecraft-p2.html)

<hr>
