---
thumbnail: "SourceMod/202086SourceModLogo.png"
layout: "post"
title: "Giới thiệu về SourceMod"
excerpt: "SourceMod là máy chủ sửa đổi cho bất kỳ trò chơi chạy trên Half-Life 2 động cơ..."
author: "Panadora"
category: [sourcemod, games]
permalink: "/SourceMod-Tutorial.html"
---

![image-logo](../assets/images/SourceMod/logo.png)

### `1.giới thiệu về SourceMod` ###
<hr>
SourceMod là modify cho bất kỳ trò chơi chạy trên Half-Life Engine. Nó là một giải pháp mạnh mẽ, tối ưu hóa nền tảng cho các plugin/script và quản lý, xử lý máy chủ. Gói mặc định đi kèm với một bộ phần bổ trợ cơ sở, nhưng có hơn 2.500 plugin trong cộng đồng.

### `2.Các tính năng cơ bản` ###
<hr>
 . Hệ thống quyền sử dụng tốt và dễ dàng (Khả năng tương thích vs SQL)<br>
 . Cấu hình menu quản trị nghiêm ngặc<br>
 . Quyền slots riêng biệt<br>
 . Các plugin quản lý bản đồ linh hoạt (nominations, rock the vote, etc)<br>
 . Các lệnh cơ bản như kick /ban /slap /mutee người chơi, thay đổi cvars, etc<br>
 . Các lệnh biểu quyết khác nhau<br>
 . Chống spam chat message<br>
 . Trình kích hoạt trò chuyện toàn diện cho cả người dùng và quản trị viên<br>
 . Dễ dàng chuyển đổi<br>

### `3.Tính năng script (Developers)` ###
<hr>
 **. Administration** - API toàn diện để phát triển hệ thống admin.<br>
 **. Clients** - Làm việc với thông tin khách hàng trong trò chơi và cuộc gọi lại.<br>
 **. Commands** - Creation, hooking, và overriding của client và server trong bảng điều khiển dòng lệnh.<br>
 **. ConVars** - Creation, hooking, và retrieval của biến bảng dòng lệnh.<br>
 **. Database** - Quyền truy cập dữ cơ sở dữ liệu nhanh gọn.<br>
 **. Engine** - Truy cập vào nhiều tính năng của Half-Life 2 Engine, với nhiều tính năng liên tục được bổ sung.<br>
 **. Entities** - Thay đổi và truy xuất các thuộc tính thực thể, và cả viết tên và đánh số.<br>
 **. Events** - Tạo, kích hoạt và kết nối GameEvents Half-Life 2.<br>
 **. Files** - Quyền truy cập vào hệ thống tệp.<br>
 **. IPC** - Giao tiếp nâng cao giữa các plugin, tương tự như **[AMX Mod X](https://www.amxmodx.org/)**.<br>
 **. Menus** - Biến API để tạo menu thống nhất giữa các mod.<br>
 **. Messages** - Gửi và kết nối Tin nhắn người dùng.<br>
 **. Parsing** - Phân tích văn bản tiên tiến, tối ưu hóa cao.<br>
 **. Timers** - Tạo các sự kiện theo thời gian.<br>
 **. Translation** - Tra cứu tệp cụm từ đa ngôn ngữ.<br>

### `4.Điều gì làm cho SourceMod khác biệt ? (Developers)` ###
<hr>
 **. Speed** - SourceMod dễ viết dễ mod tương thích nhanh với Engine Source. Mọi plugin đều được tải vào bộ nhớ và được chuyển đổi thành mã máy tính. Chúng tôi rất cẩn thận để đảm bảo mọi vùng nóng trong SourceMod đều nhanh như mong đợi. Ngôn ngữ kịch bản được nhập tĩnh và không bắt buộc lưu file rác.<br>
 **. API** - Phần lớn công việc trong SourceMod xảy ra trong việc làm cho API trở nên tốt nhất có thể. Khi thêm bất kỳ giao diện hoặc chức năng nào.<br>
**Extensibility** - SourceMod hoàn toàn có thể mở rộng. SourceMod cung cấp một API/C++ hoàn chỉnh để mở rộng cả SourceMod và Plugin event/native API.<br>
**Open-Source** - SourceMod, Phần mở rộng của nó và plugins của nó, đều là mã nguồn mở theo Giấy phép Công cộng GNU!.

```terminal

    Có thể sẽ không xác nghĩa gốc nhưng mình đã cố gắn sub cho nó dễ hiểu hơn còn ae muốn xem bản tiếng anh 
    thì các bạn có thể truy cập bài SourceMod gốc.

```

Ngồn: [wiki.alliedmods.net](https://wiki.alliedmods.net/Main_Page)

[**`đi đến hướng dẫn viết Plugins`**](/sourcemods/huong-dan-viet-plugin-part-1.html)