---
thumbnail: 2020413JDKUbuntu.png
layout: post
title: Hướng Dẫn Cài Đặt Java trên Ubuntu 18.04
excerpt: Trong bài viết này bạn sẽ được hướng dẫn cách cài đặt Java Runtime Environment (JRE) và Java Development Kit (JDK) trên Ubuntu phiên bản 18.04 sử dụng chương trình quản lý package apt-get.
author: Panadora
category: [unixlinux, terminal]
permalink: /Huong-Dan-Cai-Dat-Java-tren-Ubuntu-18-04.html
---

![iamge](https://vnreview.vn/image/14/91/03/1491033.jpg)

Trong bài viết này bạn sẽ được hướng dẫn cách cài đặt Java Runtime Environment (JRE) và Java Development Kit (JDK) trên Ubuntu phiên bản 18.04 sử dụng chương trình quản lý package `apt-get`.

<h3 style="font-weight: bold;">Cập Nhật Package Index</h3>
Trước khi cài đặt phần mềm sử dụng `apt-get` hay `apt`, chúng ta nên cập nhật package index:

```terminal

 ~$ sudo apt-get update

```

# **1. Cài Đặt Java** #
Trước khi cài đặt Java chúng ta tiến hành kiểm tra phiên bản Java được cài trên máy tính sử dụng câu lệnh sau:

```terminal

 ~$ java -version

```
Nếu Java chưa được cài đặt trên máy thì bạn sẽ thấy màn hình hiển thị kết quả như sau:

Command 'java' not found, but can be installed with:

```terminal

 ### tự động tải phiên bản JDK cho Ubuntu
 ~$ apt install default-jre

 ### Tải phiên bản JDK 11
 ~$ apt install openjdk-11-jre-headless

 ### Tải phiên bản JDK 8
 ~$ apt install openjdk-8-jre-headless

 ### Tải phiên bản JDK 9
 ~$ apt install openjdk-9-jre-headless

```
Trường hợp này bạn chạy câu lệnh dưới đây để cài đặt OpenJDK:

```terminal

 ~$ sudo apt install default-jre

```
Câu lệnh trên sẽ cài đặt môi trường chạy Java - Java Runtime Environment (hay JRE), với việc JRE được cài đặt máy tính bạn đã sẵn sàng để có thể chạy các chương trình Java.

Kiểm tra lại phiên bản của Java:

```terminal

 ~$ java -version

```
Bạn sẽ thấy hiển thị kết quả tương tự như sau:

```terminal

 openjdk version "10.0.1" 2018-04-17
 OpenJDK Runtime Environment (build 10.0.1+10-Ubuntu-3ubuntu1)
 OpenJDK 64-Bit Server VM (build 10.0.1+10-Ubuntu-3ubuntu1, mixed mode)

```
Nếu bạn có nhu cầu lập trình ứng dụng Java bạn nên cài đặt thêm Java Develpment Kit (hay JDK), JDK cung cấp các tính năng như biên soạn (compile) mã lệnh viết bằng Java:

```terminal

 ~$ sudo apt install default-jdk

```
Để kiểm tra phiên bản của trình biên soạn Java:

```terminal

 ~$ javac -version

```
# **2. Cài Đặt Các Phiên Bản Khác Của OpenJDK** #

**OpenJDK 8**

Để cài đặt OpenJDK 8 bạn chạy câu lệnh sau:

```terminal

 ~$ sudo apt install openjdk-8-jdk

```

**OpenJDK 10/11**

Để cài đặt OpenJDK 10/11 bạn chạy câu lệnh sau:

```terminal

 ~$ sudo apt install openjdk-11-jdk

```

**Oracle JDK**

Để cài đặt Oracle JDK bạn cần thêm repo sau:

```terminal

 ~$ sudo add-apt-repository ppa:webupd8team/java

```
Nhấn `Enter` để thêm repo trên sau đó chạy câu lệnh sau:

```terminal

 ~$ sudo apt update

```
Kết thúc việc update package chúng ta sẽ tiến hành cài đặt:

```terminal

 ~$ sudo apt install oracle-java8-installer

```
Nếu bạn cài đặt nhiều phiên bản Java khác nhau trên máy thì bạn nên tham khảo đoạn tiếp theo để biết cách quản lý các phiên bản Java.

# **3. Quản Lý Java** #
Câu lệnh `update-alternatives` được sử dụng để cấu hình phiên bản Java nào sẽ được sử dụng:

```terminal

 ~$ sudo update-alternatives --config java

```
Bạn sẽ được máy tính yêu cầu lựa chọn phiên bản Java sử dụng như phía dưới đây:

There are 3 choices for the alternative java (providing /usr/bin/java).

```console

  Selection    Path                                            Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1101      auto mode
  1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java      1101      manual mode
  2            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode
  3            /usr/lib/jvm/java-8-oracle/jre/bin/java          1081      manual mode

```
Chọn phiên bản Java và bấm `Enter`.

Tương tự bạn cũng có thể quản lý phiên bản của Java compiler với câu lệnh:

`sudo update-alternatives --config javac`.

<hr style="background: #242424;">

Tác giả: [user-fsc8dv8](https://www.codehub.vn/users/user-fsc8dv8)<br>
Nguồn: [codehub.vn](https://www.codehub.vn/Huong-Dan-Cai-Dat-Java-tren-Ubuntu-18-04#)
