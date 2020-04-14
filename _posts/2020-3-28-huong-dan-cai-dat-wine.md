---
thumbnail: 2020328InstallWine.png
title: "Hướng dẫn cài đặt Wine 5.0 trên Ubuntu"
layout: post
author: Panadora
excerpt: Wine 5.0 trên Ubuntu – Wine 5.0 là phiên bản phát triển mới của phần mềm mã nguồn mở wine, phần mềm cho phép chạy các chương trình Windows chạy trên Unix / Linux.
category: [unixlinux, terminal]
permalink: /huong-dan-cai-dat-wine
---

<center><img class="img-thumbnail" width="350" src="https://idroot.us/wp-content/uploads/2019/01/wine-linux-logo.jpg"></center>
<br>

**Wine 5.0 trên Ubuntu – Wine 5.0 là phiên bản phát triển mới của phần mềm mã nguồn mở wine, phần mềm cho phép chạy các chương trình Windows chạy trên Unix / Linux.**

<hr>
<hr>

Phát hành phiên bản Wine 5.0 Ổn định. Nhóm Wine đã công bố bản phát hành ổn định mới nhất 5.0 vào ngày 21 tháng 1 năm 2020. Mã nguồn của nó có sẵn để tải xuống từ trang web chính thức của nó. Bạn cũng có thể sử dụng trình quản lý gói để cài đặt wine.**

Wine là một triển khai mã nguồn mở của API Windows và sẽ luôn là phần mềm miễn phí. Khoảng một nửa mã nguồn được viết bởi các tình nguyện viên và nỗ lực còn lại được tài trợ bởi các lợi ích thương mại, đặc biệt là CodeWeavers.

Bài viết này sẽ giúp bạn cài đặt Phiên bản ổn định `Wine 5.0` trên các hệ thống Ubuntu `19.10`, `18.04 LTS` & `16.04 LTS` bằng trình quản lý gói `apt-get`.

**Bước 1 - Thiết lập PPA**

Trước hết, nếu bạn đang chạy với hệ thống 64 bit, hãy bật kiến ​​trúc 32 bit. Ngoài ra, cài đặt chìa khóa được sử dụng để ký các gói wine.

```terminal

 ~$ sudo dpkg --add-architecture i386
 ~$ wget -qO - https://dl.winehq.org/wine-builds/winehq.key | sudo apt-key add -

```

Sử dụng một trong các lệnh sau để bật kho lưu trữ Wine apt trong hệ thống của bạn dựa trên hệ điều hành và phiên bản Ubuntu của bạn.

**Bước 2 - Cài đặt Wine trên Ubuntu**

Sử dụng các lệnh dưới đây để cài đặt các gói Wine từ kho apt. Tùy chọn khuyến nghị cài đặt sẽ cài đặt tất cả các gói được đề xuất bởi các phiên bản ổn định của `Winehq` trên hệ thống `Ubuntu` của bạn.
```terminal

 ###  Ubuntu 19.10 
 ~$ sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ eoan main'

 ###  Ubuntu 18.04 
 ~$ sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ bionic main'
 ~$ sudo add-apt-repository ppa:cybermax-dexter/sdl2-backport


 ###  Ubuntu 16.04 
 ~$ sudo apt-add-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ xenial main'

```


```terminal

 ~$ sudo apt update
 ~$ sudo apt install --install-recommends winehq-stable

```

Nếu bạn gặp phải lỗi phụ thuộc chưa được đáp ứng trong khi cài đặt, hãy sử dụng các lệnh sau để cài đặt `Winehq` bằng `ptitude`.

```terminal

 ~$ sudo apt install aptitude
 ~$ sudo aptitude install winehq-stable

```

**Bước 3 - Kiểm tra phiên bản wine**

Sau khi cài đặt `wine` thành công. Sử dụng lệnh sau để kiểm tra phiên bản `wine` được cài đặt trên hệ thống của bạn.

```terminal

~$ wine --version

wine-5.0

```

**Làm thế nào để sử dụng wine (tùy chọn)?**

Để mở một ứng dụng có đuôi file là `.exe` việc đơn giản các bạn chỉ cần `click chuột` phải vào file đó và chọn `Open With Other Application` và chọn `Wine Windows Program Loader`

Ví dụ mình có file: `PTS-CS-PSP.exe` mình chỉ cần `click chuột` > `Open With Other Application` > `Wine Windows Program Loader` và đợi cho `wine` tiến hành mở ứng dụng cho bạn.

<center><img class="img-thumbnail" src="{{site.baseurl}}/image/wine_application.png"></center>
<br>
Nguồn thông tin chi tiết tại: <a href="https://tecadmin.net/install-wine-on-ubuntu/">https://tecadmin.net</a>
<br>
