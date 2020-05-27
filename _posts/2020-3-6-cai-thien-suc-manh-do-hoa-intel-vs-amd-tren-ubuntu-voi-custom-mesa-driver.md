---
thumbnail: 202036gpu.jpg
title: Cải thiện sức mạnh đồ họa Intel/AMD trên ubuntu với Custom Mesa Driver
layout: post
excerpt: Bạn là một người dùng Ubuntu (hoặc bất kì một distro base trên Ubuntu ví dụ như Mint) trên một computer dùng đồ họa của Intel hay AMD (Nvidia thì vẫn có thể dùng nhưng không đảm bảo sử dụng) và đòi hỏi máy đáp ứng nhu cầu đồ họa mạnh như game hay blender, render video,... (mà Mesa đi kèm - stock - không thể đáp ứng).
author: Panadora
category: [unixlinux, terminal]
permalink: /cai-thien-suc-manh-do-hoa-intel-vs-amd-tren-ubuntu-voi-custom-mesa-driver
---

### Đối tượng cho bài viết

Bạn là một người dùng Ubuntu (hoặc bất kì một distro base trên Ubuntu ví dụ như Mint) trên một computer dùng đồ họa của Intel hay AMD (Nvidia thì vẫn có thể dùng nhưng không đảm bảo sử dụng) và đòi hỏi máy đáp ứng nhu cầu đồ họa mạnh như game hay blender, render video,... (mà Mesa đi kèm - stock - không thể đáp ứng).

Với Mesa (driver graphics mã nguồn mở trên hầu hết distro Linux) stock hay còn gọi là đi kèm theo khi cài Ubuntu là bản gốc hoặc cũ (nếu dùng LTS) chưa được cải tiến, chỉ dùng ổn với 2D, còn 3D thì không đáp ứng. Thì trong bài viết này mình giới thiệu và hướng dẫn cài đặt 2 bản Mesa đã chỉnh sửa của Oibaf và Padoka, luôn cập nhật theo git cách 2 ngày và tối ưu hóa mức cao nhất.

Chú ý rằng bài này sẽ không đề cập tới graphics Nvidia và chú trọng tới graphics Intel nhất, AMD thì cơ bản vẫn giống.

<center><img class="img-thumbnail image-post" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/070d1750882925.58dc072db3109.jpg"></center>

### Tìm hiểu sâu hơn

Trong bộ cài Ubuntu chứa Mesa - driver đồ họa mã nguồn mở cho linux - bản gốc tương thích với mọi phần cứng, nhưng chỉ đáp ứng đồ họa mức 2D ở mức Full HD là cùng, trở lên thì sẽ rất lag và có performance 3D vô cùng tệ. Như mình, vào các game đồ họa 3D trên Steam, hầu hết đều crash khi load game (Intel), nhiều người dùng khác cũng phản ánh điều này.
Mình cũng tìm hiểu trên Google và ai cũng trả lời chung câu trả lời, theo Softpedia thì họ chốt 1 câu:

```console

    Ubuntu gamers with older AMD Radeon or Intel graphics cards know by now that they have to install a third-party
    PPA (Personal Package Archive) that contains the latest open-source graphics drivers to enjoy a much better gaming
    experience.

```

Dịch sang tiếng việt:

```console

    Game thủ Ubuntu với card đồ họa AMD Radeon cũ hay Intel graphics đều biết rằng họ phải cài PPA bên thứ ba (Kho
    package cá nhân) chứa Mesa bản mới nhất để trải nghiệm gaming tốt hơn.

```

Và chỉ có 2 PPA chứa bản Mesa mới nhất và đã tối ưu hóa rất đáng kể cho 3D do tác giả có nickname Oibaf - tên viết ngược từ tên thật của tác giả (Fabio Pedretti) và Padoka (Paulo Miguel Dias).
Giới thiệu đủ rồi, đào thôi!

### Phiên bản của tác giả Oibaf's PPA

PPA này lập từ 2011 do tác giả Oibaf, được lấy từ git commit hằng ngày từ repo Mesa và chỉnh sửa, tối ưu và đưa update cứ 2 ngày 1 lần (bạn vẫn có thể skip qua update). Bản này được nhiều thánh Linux khuyên dùng và thấy rất stable (ổn định).
PPA này hỗ trợ các bản Ubuntu từ 18.04 đến 19.10 (testing).
Để cài đặt, bạn chạy lệnh sau (copy hết đọan rồi enter cho gọn):

```terminal

 ~$ sudo add-apt-repository ppa:oibaf/graphics-drivers
 ~$ sudo apt update
 ~$ sudo apt upgrade
 ~$ sudo reboot

```

Cả đoạn này bao gồm thêm PPA vào danh sách update và thay update từ PPA thay cho update từ Ubuntu. Chú ý: khi xong máy sẽ tự reboot, và không nên dùng máy khi đang thực hiện. Khi reboot, bạn vào thử 1 game và ngon cỡ nào nhé :D.
Có nhiều điều quan trọng khi dùng cả 2 PPA này, bạn kéo xuống xem phần Lưu ý

### Phiên bản của tác giả Padoka's PPA

Với PPA của tác giả Padoka mình chưa dùng. Có 2 PPA: ổn định và thiếu ổn định. Mình sẽ nói về bản ổn định.
Mình ít thấy ai review về PPA này, đa số đều đã cũ (từ hồi Ubuntu bản 17.10 thì hiệu năng nhỉnh hơn của Oibaf một tý), hay ai đó nói về sự ổn định. Nếu đã dùng thì hãy cho mình biết dưới comment nhé! :D.
PPA này chỉ hỗ trợ hai bản Ubuntu là 18.04.x và 18.10 do tác giả rất bận, không có thời gian.
Sau đây là cách sử dụng:

```terminal

 ~$ sudo add-apt-repository ppa:paulo-miguel-dias/pkppa
 ~$ sudo apt update
 ~$ sudo apt upgrade
 ~$ sudo reboot

```
Đọan lệnh này cũng như trên, sẽ tự động restart máy khi hoàn thành nên mình khuyên đừng dùng nhé!

### Lưu ý
Khi update lên 1 bản Ubuntu mới như 18.04 lên 18.10 hay 18.10 lên 19.04 v.v... thì bạn BẮT BUỘC phải gỡ hai PPA này trước khi update lên phiên bản mới của ubuntu, để gỡ bạn chạy 2 lệnh:

### Cài đặt gói ppa-purge
```terminal

 ~$ sudo apt-get install ppa-purge

```
### Gỡ cài đặt đối với Oibaf 
```terminal

 ~$ sudo ppa-purge ppa:oibaf/graphics-drivers

```
### Gỡ cài đặt đối với Padoka
```terminal

 ~$ sudo ppa-purge ppa:paulo-miguel-dias/pkppa 

```
Sau khi nâng Ubuntu bạn cài lại từ đầu nhé!
Nếu muốn gỡ, thì bạn làm như trên.

### Theo nguồn cung cấp từ:

Tác giả bài viết: Đặng Trung Nhân

Softpedia quote on this post

Oibaf's PPA & Padoka's PPA stable
<br>
<br>
