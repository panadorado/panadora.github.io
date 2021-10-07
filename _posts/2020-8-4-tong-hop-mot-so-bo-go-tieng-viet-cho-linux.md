---
thumbnail: "202084UnikeyLinuxWallpaper.png"
layout: "post"
title: "Tổng hợp một số bộ gõ tiếng việt cho hệ điều hành linux"
excerpt: "Trên Windows để có thể đánh văn bản hay chat tin nhắn và một số thao tác khác bằng tiếng việt có dấu..."
author: "Panadora"
category: [unixlinux, terminal, news]
permalink: "/tong-hop-mot-so-bo-go-tieng-viet-cho-linux.html"
---

Trên Windows để có thể đánh văn bản hay chat tin nhắn và một số thao tác khác bằng tiếng việt có dấu, thì buộc các bạn phải tải bộ gõ unikey tiếng việt để có thể sử dụng được. Nhưng còn trên các hệ điều hành linux thì sao, và bạn không thể nào dùng bộ gõ unikey tiếng việt trên windows choo linux được vì chúng vốn lập trình chỉ để thực thi được trên windows mà thôi, vì vậy bài viết này mình xin tổng hợp một số bộ gõ tiếng việt thông dụng hiện nay dành cho hệ điều hành linux nhá.

![image-1](../assets/images/202084UnikeyLinuxWallpaper.png)

<hr>
<h3>1. ibus-unikey</h3>

Để có thể cài đặt các bạn thao tác tổ hợp phím <kbd>ctrl + alt + t</kbd> để mở terminal và tiếng hành gõ lệnh cài đặt gói ibus-unikey như sau:

```terminal

 ~$ sudo add-apt-repository ppa:ubuntu-vn/ppa
 ~$ sudo apt-get update
 ~$ sudo apt-get install ibus-unikey -y
 ~$ ibus restart

```
<br>
Chi tiết cấu hình cài đăt: [<i style="font-size: 20px; font-weight: bold;" class="fab fa-github"> Source Github ibus-unikey</i>](https://github.com/vn-input/ibus-unikey)

**`Chú ý: Hiện tại bộ gõ này không còn được hỗ trợ. Do đó cân nhắt khi cài đặt bộ gõ này lênh các phiên bản linux mới nhất sau này.`**

<hr>
<h3>2. ibus-bamboo [Khuyên dùng]</h3>

Tương tự như ibus-unikey, tuy nhiên ibus-bamboo vẫn còn được hổ trợ trên linux các phiên bản mới cho đến hiện tại.

```terminal

  ##Ubuntu và các distro tương tự##
 ~$ sudo add-apt-repository ppa:bamboo-engine/ibus-bamboo
 ~$ sudo apt-get update
 ~$ sudo apt-get install ibus-bamboo
 ~$ ibus restart

  ##Arch Linux và các distro tương tự##

  Với Arch Linux, bạn có thể build từ AUR bằng yay:
  ~$ yay -S ibus-bamboo

  Hoặc bằng pamac:
  ~$ pamac build ibus-bamboo
  
  Hoặc build build từ file PKGBUILD:
  ~$ git clone https://aur.archlinux.org/ibus-bamboo.git
  ~$ cd ibus-bamboo
  ~$ makepkg -si

```
<br>
Chi tiết cấu hình cài đăt: [<i style="font-size: 20px; font-weight: bold;" class="fab fa-github"> Source Github ibus-bamboo</i>](https://github.com/BambooEngine/ibus-bamboo)

<hr>
<h3>3. ibus-bogo</h3>

ibus-bogo là một chương trình xử lý gõ tiếng Việt sử dụng engine BoGo và được thiết kế để chạy cùng iBus, một phần mềm quản lý các bộ gõ trong GNU/Linux.

ibus-bogo có thể được cài đặt từ gói cài đặt hoặc (nếu bạn muốn) trực tiếp từ mã nguồn.

Từ gói cài đặt cho các bản phân phối Linux thông dụng

Từ mã nguồn

**`Chú ý: Nếu bạn chưa thành thạo Linux và chỉ muốn sử dụng BoGo thì không nên cài đặt từ mã nguồn.`**

ibus-bogo có sử dụng các phần mềm sau, hãy chắc chắn rằng chúng đã được cài trên máy (theo tên gói cài đặt của Debian/Ubuntu):


  **`.  ibus 1.4.x`** <br>
  **`.  python 3.2+`** <br>
  **`.  python3-gi (pygobject)`** <br>
  **`.  python3-entrant (kiểm tra chính tả)`** <br>
  **`.  cmake`** <br>
  **`.  qt4-linguist-tools`** <br>
  **`.  pyqt4-dev-tools`** <br>
  **`.  python3-pyside`** <br>
  **`.  gir1.2-ibus-1.0 (GObject Introspection data)`** <br>
  **`.  gir1.2-wnck-3.0`** <br>


Lệnh sau sẽ cài đặt tất cả các gói cần thiết:

```terminal

 ~$ sudo apt-get install python3 ibus cmake python3-gi pyqt4-dev-tools \
gir1.2-ibus-1.0 gir1.2-wnck-3.0 python3-pyqt4 qt4-linguist-tools \
python3-enchant

```

Note

Từ bản 0.4 thì ibus-bogo sử dụng PyQt4 thay vì PySide.

Sau đó bạn tải mã nguồn tại [ibus-bogo-python](https://github.com/BoGoEngine/ibus-bogo-python/releases) rồi giải nén. 

Hoặc dùng:

```terminal
 
 ##Nếu bạn chưa có gói lệnh git thì hay tải về như sau##
 ~$ sudo apt-get install git -y

 ##Lấy gói ibus-bogo.git##
 ~$ git clone https://github.com/BoGoEngine/ibus-bogo.git

 ##Nếu bạn tải từ trang releases, bạn cần khởi tạo CMake:##
~$ cmake CMakeLists.txt

##Chạy lệnh sau để cài đặt:##
~$ sudo make install

##Gỡ cài đặt:##
~$ sudo make uninstall

```
<br>
Chi tiết cấu hình cài đăt: [<i style="font-size: 20px; font-weight: bold;" class="fab fa-github"> Source Github ibus-bogo</i>](https://github.com/BoGoEngine/ibus-bogo/blob/master/doc/sphinx/install.rst)

<hr>
- Vừa rồi là tổng hợp một số bộ gõ tiếng việt dành cho hệ điều hành linux hiện nay, các bạn đang sử dụng bộ gõ nào và cho mình một comment và đừng quên ấn nút like và share chia sẻ bài post này cho những người mới tiếp cận linux bạn nhá, còn bộ gõ nào mình chưa liệt kê thì các bạn cũng comment bên dưới để mình có thêm thông tin tổng hợp tiếp nhá.