---
thumbnail: 2020222jekyll.png
title: "Cách tạo trang blog với Jekyll"
layout: post
author: Panadora
excerpt: Bạn muốn làm một website đơn giản, không cầu kỳ về `database`, không nhập xuất dữ liệu thì `Jekyll` là một ứng cử viên sáng giá nhất nhì so với **Gatsby** hoặc **NextJS**.
category: [windows, news, unixlinux, terminal]
permalink: /cach-tao-trang-blog-voi-jekyll.html
---
Bạn muốn làm một website đơn giản, không cầu kỳ về `database`, không nhập xuất dữ liệu thì `Jekyll` là một ứng cử viên sáng giá nhất nhì so với **Gatsby** hoặc **NextJS**.

<center><img class="img-thumbnail image-post" src="https://d33wubrfki0l68.cloudfront.net/c9b06c39af69c905b6d31819a9ac9c8a78c77cd6/a5f98/media/images/blogging/jekyll/jekyll.png"></center>

Một lý do để bạn nên bắt tay làm ngay 1 blog viết bằng `Jekyll` đó là **Github** có hỗ trợ tên miền miễn phí và tạo ngay trên repositories.<br/>
Jekyll sử dụng Liquid template, Markdown, YAML front-matter để hoạt động trên nó.

Trước khi bắt tay vào tạo một trang bằng Jekyll bạn nên cài đặt các phần mềm phát triển.<br/>
<small>(Cài đặt trên Windows OS)

### 1. Việc đầu tiên cần làm là cài [Git](https://git-scm.com/download) trên máy tính.
### 2. Cài [Ruby](https://www.ruby-lang.org/en/downloads/) trước để giảm thiểu quá trình phát sinh lỗi khi chạy, đồng thời quản lý <kbd>Ruby gems dependencies</kbd> cho Jekyll.

<center><img class="img-thumbnail image-post" src="https://3fourstudios.com/assets/img/2019/03/05/ruby-logo1024%C3%97683.png"></center>

Kiểm tra phiên bản Ruby/Gem đã cài trên máy tính thành công hay chưa.

```terminal

    ruby -v

```

```terminal

    gem -v

```

### 3. Cài Bundler ta dùng lệnh

```terminal

 ~$ gem install jekyll bundler

```
    
Kiểm tra phiên bản Jekyll đã cài đặt trên máy tính chưa.

```terminal

    jekyll -v

```

<hr/>
<hr/>{:width="80%"}


### <center>Tiến hành tạo Blog với Jekyll nào.</center>

Trước tiên hãy chọn nơi lưu trữ project cho mục đích phát triển và quản lý sau này.

Sau đó ta tiến hành tạo project với lệnh nhau sau.

```terminal

 ~$ jekyll new [name-project]

```

Hãy trỏ tới thư mục chứa project trước đó.

```terminal

    cd \

```

Sau khi tạo xong *project* ta chạy server local.

```terminal

 ~$ bundle exec jekyll serve

```

hoặc sợ bị trùng `port` thì có thể dùng lệnh.

```terminal

 ~$ bundle exec jekyll serve --port 1234

```

**Cấu trúc thư mục Jekyll**<br>

 `_config.yml`: File này chứa đựng cấu hình của Jekyll, mọi thông tin về blog của bạn đều lưu bên trong này.<br>
 `index.html`: Đây là file *trang chủ*, bên trong chứa đụng HTML, YAML và Liquid templating.<br>
 `aboutme.md`: Những dữ liệu dưới dạng *text* sẽ được chứa đựng bên trong file Markdown.<br>
 `_posts`: Nơi chứa đựng các bài viết dưới dạng file Markdown.<br>
 `_layouts`: Các cấu trúc từng trang chỉ định đều ở bên trong này.<br>
 `_include`: Nơi chứa các file HTML (Header-Footer).<br>
 `_data`: Các file YAML nơi chứa các thông tin đều được nằm bên trong này.<br>
 `css, js`: Có thể dử dụng CSS, JavaScript để làm trang web sinh động hơn.<br>

**Lưu ý khi tạo bài viết**<br>

Có nhiều cách viết thông qua HTML, Markdown hoặc Liquid Templating nhưng hãy lưu ý các điểm sau.<br>
 Tên file phải ở dưới dạng `yyyy-mm-dd-ten-bai-viet.md`.<br>
 Trước khi viết bài đều có mã YAML, nơi chứa thông tin bài viết đó.<br>

```terminal

    ---
    YAML
    --- 

```

*Ví dụ như:*

```terminal

    ---
    layout: post
    title: "Cách tạo một trang blog với Jekyll"
    date: 2019-10-31 09:00:00 +0700
    author: Panadora
    tag: ["jekyll", "frontend"]
    img-title: /assets/img/blog16.jpg
    permalink: /cach-tao-mot-trang-blog-voi-jekyll
    ---

```

**Giải thích một số mã YAML**<br>

 `title:` Nơi chứa tiêu đề bài viết.<br>
 `subtitle` Nơi chứa tiêu đề phụ (nằm bên dưới tiêu đề chính).<br>
 `bigimg` Đưa ảnh to lên đầu trang hoặc bài viết.<br>
 `comments` Thêm chức năng comment cho bài viết, để kích hoạt bạn dùng *comments: true*.<br>
 `show-avatar` Tuỳ chỉnh Ẩn-Hiện avatar trong trang hoặc bài viết.<br>
 `social-share` Tuỳ chỉnh bật tắt chức năng share bài viết.<br>
 `layout` Nơi bạn tuỳ chỉnh sử dụng layout nào được sử dụng file này.<br>
 `js` Danh sách các file JavaScript local.<br>
 `css` Danh sách các file CSS.<br>
 `ext-js` Danh sách các file JavaScript được nhúng từ bên ngoài.<br>
 `ex` Danh sách các file CSS được nhứng từ bên ngoài.<br>
 `googlefonts` Danh sách các Font Google được sư dụng.<br>


### Một số lỗi có thể xảy ra.

 <i>Could not find ffi-1.11.1-x64-mingw32 in any of the sources. Run **`bundle install`** to install missing gems.</i>

 Cách khắc phục: **`bundle update`**<br>
 Cật nhật bundle và cài ffi cho gem: **`gem install ffi -f`** <br>

### Một số tài liệu kham khảo.

 Trang chủ Jekyll: [jekyllrb.com](https://jekyllrb.com/)<br>
 Trang chủ Github: [pages.github.com](https://pages.github.com/)<br>
 Blog có nhiều bài viết hay về Jekyll: [blog.webjeda.com](https://blog.webjeda.com/)<br>
