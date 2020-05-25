---
thumbnail: 2020418PostMinecraftP2.jpg
layout: post
title: Hướng dẫn tạo server minecraft ( Phần 2 )
excerpt: Tiếp tục với phần 2 của Hướng dẫn tạo server minecarft
author: Panadora
category: [games, news]
permalink: /huong-dan-tao-server-minecraft-p2
---

![title-image-here]({{baseurl}}/image/2020418NetherPotal.jpg){:width="100%"}

*Tiếp tục với phần 2 của [Hướng dẫn tạo server minecarft](http://localhost:4000/huong-dan-tao-server-minecraft-p1)*

<h3 style="font-weight: bold;">Mở Port/Server Minecraft</h3>

Bước này khá quan trọng trong việc bạn bè của bạn có thể kết nối tới server minecarft của bạn chơi cùng.

Đầu tiên lấy địa chỉ IP của nhà mạng bằng cách thao tác tổ hợp phím `start + r` hoặc mở `Command Prompt` gõ lệnh:

```console

	ipconfig /all

```
tìm đến **`Default Gateway:  192.168....`** copy dòng số IP và mở trình duyệt chrome paste vào thanh địa chỉ để liên kết đến 

![title-image-here]({{baseurl}}/image/2020418IPv4.png){:width="100%"}

Trường hợp bạn quên hoặc không biết **`user`** và **`password`** để truy cập vào địa **`Default Gateway`**, thì bạn có thể hỏi tổng đài nhà mạng đã cấp Internet hoặc kiểm tra phần đáy của router để xem thông tin **`user, password`** để truy cập.

Sau khi truy cập được vào **`Default Gateway`** thì làm bước sau:

**B1:** : chọn `Firewall Setup > Port Forwarding` và nhập như sau:

![title-image-here]({{baseurl}}/image/2020418Setting1.png){:width="100%"}
![title-image-here]({{baseurl}}/image/2020418Setting2.png){:width="100%"}

**B2:** Nhập thông số cho IP/Port

> **Protocol**: chọn ALL <br>
> **Start Port Number**: *`Port`* này nằm trong *`server.properties > server-port= 25565`* mặt định là 25565 <br>
> **End Port Number**: nhập giống *`Start Port Number`* <br>
> **Local IP Address**: địa chỉ *`IPv4 Address`* của bạn thao tác *`ipconfig /all`* để xem lại<br>
> **Start Port Number(Local)**: nhập giống *`Start Port Number`* <br>
> **End Port Number(Local)**: nhập giống *`Start Port Number`* <br>

![title-image-here]({{baseurl}}/image/2020418Setting3.png){:width="100%"}

Cuối cùng nhấp chuột vào **`APPLY`** để xác nhận hoàn thành mở port

**B3:** Mở IP/Port từ **`Firewall`** của máy tính

Tìm kiếm và mở **`Windows Defender Firewall`**

![title-image-here]({{baseurl}}/image/2020418FireWall1.png){:width="100%"}

Click chuột chọn **`Advanced settings`**

![title-image-here]({{baseurl}}/image/2020418FireWall2.png){:width="100%"}

Click chuột phải vào **`Inbound Rules`** và chọn **`New Rule..`**

![title-image-here]({{baseurl}}/image/2020418FireWall3.png){:width="100%"}

Click chuột chọn ô **`Port`** và ấn **`Next`** để tiếp tục

![title-image-here]({{baseurl}}/image/2020418FireWall4.png){:width="100%"}

Click chuột chọn ô **`TCP`** và chọn **`Specific local ports`** đền số port: **`25565`** và Next để tiếp tục

![title-image-here]({{baseurl}}/image/2020418FireWall5.png){:width="100%"}

Click chuột chọn ô **`Allow the connection`** và Next để tiếp tục

![title-image-here]({{baseurl}}/image/2020418FireWall6.png){:width="100%"}

Next để tiếp tục

![title-image-here]({{baseurl}}/image/2020418FireWall7.png){:width="100%"}

Nhập tên cho **`Inbound Rules`** 

![title-image-here]({{baseurl}}/image/2020418FireWall8.png){:width="100%"}

- Tương tự với **`Inbound Rules`** bạn cũng khởi tạo như vậy với **`Outbound Rules`**<br>
Như vậy bạn đã hoàn thành khởi tạo server minecarft bạn, việc bây giờ là bạn chỉ cần chia sẻ địa chỉ IP/Port cho bạn bè cùng vào chơi.

IP: chính là IPv4 của bạn<br>
Port: chính là server-port= 25565 của bạn

IP:Port ví dụ: 192.168.55.103:25565

Chúc các bạn thành công !

<hr>