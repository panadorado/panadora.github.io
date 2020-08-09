---
thumbnail: "SourceMod/202089SourceModLogo.png"
layout: "post"
title: "Hướng dẫn về Plugins SourceMode (Part 2)"
excerpt: "Sau bài viết hướng dẫn về Plugins SourceMod (Part 1), thì trong bài post này mình xin hướng dẫn cách cài đặt SourceMod"
author: Panadora
category: [SourceMod,games]
permalink: sourcemods/huong-dan-cai-dat-SourceMode-vao-CS-Source.html
---

![image-title]({{baseurl}}/image/SourceMod/202089SourceModLogo.png){:width="100%"}

Sau bài viết [hướng dẫn về Plugins SourceMod (Part 1)](sourcemods/huong-dan-viet-plugin-part-1.html), thì trong bài post này mình xin hướng dẫn cách cài đặt SourceMod vào [Counter-Strike: Source](https://store.steampowered.com/app/240/CounterStrike_Source/) để có thể sử dụng được Plugins trong game nhá !

## 1. Download ##
<hr>

**Tải SourceMod**<br>
 . [**`Bản SourceMod ổn định`**](https://www.sourcemod.net/downloads.php?branch=stable) ► <kbd>khuyên dùng</kbd> <br>
 . [**`Bản SourceMod Dev`**](https://www.sourcemod.net/downloads.php?branch=dev) ► <kbd>Dành cho Dev chuyên nghiệp</kbd>

**Tải MetaMod:Source**<br>
 . [**`Bản MetaMod:Source ổn định`**](http://www.sourcemm.net/downloads.php?branch=stable) ► <kbd>khuyên dùng</kbd> <br>
 . [**`Bản MetaMod:Source Dev`**](http://www.sourcemm.net/downloads.php/?branch=master) ► <kbd>Dành cho Dev chuyên nghiệp</kbd>

## 2. Setting ##
<hr>

Các bạn tải hai bản SourceMod vs MetaMod:Source ổn định để sử dụng nha. Sau khi tải hoàn tất các bạn giải nén như sau:

đối với **`sourcemod-1.10.0-git6490-windows.zip`** các bạn mở file lên với **`rar`** và copy 2 thư mục <kbd>addons vs cfg</kbd> vào đường dẫn vào thư mụcmục <kbd>D:/Counter-Strike Source/cstrike/</kbd>

![tutorial-1]({{baseurl}}/image/SourceMod/202086Tutorial1.PNG){:width="100%"}

đối với **`mmsource-1.10.7-git971-windows.zip`** các bạn mở file lên với **`rar`** và copy thư mục <kbd>addons</kbd> vào đường dẫn vào thư mục <kbd>D:/Counter-Strike Source/cstrike/</kbd>

![tutorial-2]({{baseurl}}/image/SourceMod/202086Tutoriral2.PNG){:width="100%"}

 . Đến đây thì đã hoàn thành xong giai đoạn cài đặt SoureMod cho CS:Source, để SourceMod có thể hoạt động trong CS:Source thì các bạn tìm đến thư mục <kbd>cstrike/gameinfo.txt</kbd> tìm đến dòng <kbd>SearchPaths</kbd> sau đó đưa dòng <kbd>GameBin				|gameinfo_path|addons/metamod/bin</kbd> vào trong {  } để SourceMod có thể hoạt động trong game nhá !

 ![tutorial-3]({{baseurl}}/image/SourceMod/gameinfo.PNG){:width="100%"}

Để biết SourceMod có đang hoạt động trong CS:Source hay không các bạn có thể bật Game lênh sau đó ấn <kbd> ~</kbd> để mở console và nhập lênh <kbd>sourcemod_version</kbd> hoặc <kbd>sm_admin</kbd>

![tutorial-4]({{baseurl}}/image/SourceMod/SourceModVersion.PNG){:width="100%"}

![tutorial-5]({{baseurl}}/image/SourceMod/sm_admin.PNG){:width="100%"}

nếu một trong 2 lệnh đều hiển thị được tức là bạn đã cài đặt SourceMod cho CS:Source thành công !

<hr>
