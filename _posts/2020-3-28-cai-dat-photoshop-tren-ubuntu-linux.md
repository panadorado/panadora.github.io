---
thumbnail: 2020328PtsCs6.png
title: "Cài đặt Photoshop trên Ubuntu, Linux"
layout: post
author: Panadora
excerpt: Bạn là một người dùng windows và sau đó bạn chuyển sang dùng 1 hệ điều hành xa lạ để trải nghiệm đó là Ubuntu/Linux , điều đầu tiên đập vào mắt bạn là ở 1 HĐH này là mới mẽ mang một loại cách tính năng khác lạ v.v.
category: [unixlinux, terminal]
permalink: /cai-dat-photoshop-tren-ubuntu-linux.html
---

**Bạn là một người dùng windows và sau đó bạn chuyển sang dùng 1 hệ điều hành xa lạ để trải nghiệm đó là Ubuntu/Linux , điều đầu tiên đập vào mắt bạn là ở 1 HĐH này là mới mẽ mang một loại cách tính năng khác lạ v.v.**

**Nhưng bất ngờ vào một ngày đó bạn thử cài đặt một phần mềm của windows, nhưng không được vì phần mềm đó chỉ xây dựng và chạy trên HĐH Windows. Vì thế bài viết này sẽ hướng dẫn bạn cài đặt phần mềm đó trên HĐH Ubuntu/Linux với một ứng dụng mang tên PlayOnLinux.**

**1. Cài đặt PlayOnLinux:**

*PlayOnLinux là một frontend cho lớp tương thích phần mềm Wine cho phép người dùng Linux cài đặt các video game dựa trên Windows, Microsoft Office, Microsoft Internet Explorer, cũng như nhiều ứng dụng khác như Apple iTunes và Safari, chi tiết xin mời các bạn truy cập <a href="https://vi.wikipedia.org/wiki/PlayOnLinux">Wikipedia</a>.*

<center><img class="img-thumbnail" src="{{site.baseurl}}/image/reviewAppPlayOnLinux.png"></center>
<br>
Thao tác mở `terminal` của ubuntu lên với tổ hợp phím `Ctrl + Alt + t` và thao dòng lệnh sau:

```terminal

 ~$ wget -q "http://deb.playonlinux.com/public.gpg" -O- | sudo apt-key add -
 ~$ sudo wget http://deb.playonlinux.com/playonlinux_saucy.list -O /etc/apt/sources.list.d/playonlinux.list
 ~$ sudo apt update
 ~$ sudo apt install playonlinux

```
Xác nhận `Password` của bạn và tiến hành lấy gói tập tin về.

**2. Cài đặt Photoshop CS 6 bằng PlayOnLinux trên Ubuntu:**

*Đầu tiền bạn cần tải <a href="https://drive.google.com/file/d/1DD6PB5qzPMHD6FICQHCPHrlUwtRZt7E7/view">Adobe Photoshop CS6 Extended</a> về.*

Mở PlayOnLinux lên và click chọn `install` <img class="img-thumbnail" src="{{site.baseurl}}/image/choose_install.png" width="60"> tìm và chọn mục `Graphics` <img class="img-thumbnail" src="{{site.baseurl}}/image/Type_Graphics.png" width="60">.

Tìm đến phần mềm `Adobe Photoshop CS6`.

<img class="img-thumbnail" src="{{site.baseurl}}/image/app_ptscs6_pbp.png"> <br>

Bạn chỉ cần ấn `next`

<img class="img-thumbnail" src="{{site.baseurl}}/image/pts1.png"> <br>
<img class="img-thumbnail" src="{{site.baseurl}}/image/pts2.png"> <br>
<img class="img-thumbnail" src="{{site.baseurl}}/image/pts3.png"> <br>
<img class="img-thumbnail" src="{{site.baseurl}}/image/pts4.png"> <br>

Tới phần này buộc bạn ấn vào `Browse` tìm đến đường dẫn chứa `Set-up.exe` của Photoshop. Việc bây giờ bạn chỉ cần next để tiến hành giải nén và cài đặt tất cả các file của Photoshop. Sau Khi xong bạn có thể mở ứng dụng lên hưởng thành quả !

<iframe class="embed-responsive embed-responsive-21by9" height="450" src="https://www.youtube.com/embed/--bkO_K8YAc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>
Nguồn thông tin: Được tổng hợp và thu thập từ nhiều nguồn.
<hr>
<br>
