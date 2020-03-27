---
thumbnail: "2020327canvas.png"
layout: post
title: "Canvas cơ bản"
excerpt: Canvas là gì ? phần tử canvas hay còn gọi là thẻ canvas trong html
author: Panadora
---

<center><img class="img-thumbnail" src="https://www.dammio.com/wp-content/uploads/2018/06/html5-canvas-770x433.jpg"></center>
<br>
**Canvas là gì ?**

Phần tử `<canvas></canvas>` hay còn gọi là thẻ trong HTML được dùng để vẽ các đối tượng đồ họa, nó chiếm một vùng trên trang web, qua nguôn ngữ dạng `Script` thường là `JavaScript`.

Thẻ `<canvas></canvas>` chỉ chứa khối đồ họa. Bạn phải dùng một script để vẽ các đối tượng. Canvas cung cấp nhiều cách để vẽ đường thẳng, hình hộp, hình tròn, viết chữ, chèn ảnh,v.v.

**Trình duyệt hỗ trợ**

Những phiên bản trình duyệt bắt đầu hỗ trợ thẻ `<canvas></canvas>`

<style type="text/css">
	td {
                border: 2px solid #dddd;
                padding: 20px;
                text-align: center;
                width: auto;
        }
	td i {
		font-size: 25px;
	}
</style>

<table class="table table-dark" style="text-align: center;">
	<tr>
		<td> Browser </td>
		<td> <i class="fab fa-chrome"> Chrome</i> </td>
		<td> <i class="fab fa-firefox-browser"> Firefox</i> </td>
		<td> <i class="fab fa-internet-explorer"> Explorer/Edge</i> </td>
		<td> <i class="fab fa-safari"> Safari</i> </td>
		<td> <i class="fab fa-opera"> Openra</i> </td>
	</tr>
	<tr>
		<td> Version </td>
		<td> 4.0 </td>
		<td> 9.0 </td>
		<td> 2.0 </td>
		<td> 3.1</td>
		<td> 9.0 </td>
	</tr>
</table>

<br>
**Một số ví dụ về canvas**

Chú ý: Luôn luôn đặt thuộc tính `id` hoặc `class` (để có thể gọi trong script), thuộc tính width và height để đặt kích thước của `<canvas>`. Để thêm đường viền, sử dụng thuộc tính style như ví dụ dưới.

```html
	
	/* 
	** khai bảo thẻ <canvas> trong thẻ <body> của html
	*/
	<canvas class="drawing" width="300" height="300" style="border: 1px solid #000;"></canvas>

```

**kết quả như sau:**

<center><img class="img-thumbnail" src="{{site.baseurl}}/image/border-with-canvas.png"></center>

**Thao tác vẽ với JavaScript**

Tạo một file html với tên là `index.html` và viết code sau:

```html

	<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript" src="../drawCanvas.js"></script>
		</head>
		<body>
			<canvas class="drawing" width="200" height="200" ></canvas>
		</body>
	</html>

```

Tạo một file JavaScript với tên là `drawCanvas.js` và viết code sau:

```javascript

	var canvas = document.querySelector(".drawing");
	var c = canvas.getContext("2d");
	c.beginPath();
	c.moveTo(50, 50);
	c.lineTo(250, 250);
	c.stroke();

```

**kết quả như sau:**

<center><img class="img-thumbnail" src="{{site.baseurl}}/image/draw-line-canvas.png"></center>

trong đó:

`c.beginPath();` : Mở đầu cho mỗi nét vẽ. <br>
`c.moveTo(x, y);` : Điểm bắt đầu vẽ xác định theo x và y. <br>
`c.lineTo(x, y);` : Tạo đường vẽ từ điểm bắt đầu đến điểm cuối theo x và . <br>
`c.stroke();` : Tạo nét. <br>
 <br>
`x`: là trục hoành. <br>
`y`: là trục tung. <br>


**Ví dụ 2 vẽ đường dẫn tạo hình với JavaScript**

```html
	
	<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript" src="../drawCanvas.js"></script>
		</head>
		<body>
			<canvas class="drawing" width="300" height="300" ></canvas>
		</body>
	</html>

```

```javascript

	var canvas = document.querySelector(".drawing");
	var c = canvas.getContext("2d");

	c.beginPath();
	c.moveTo(250, 50);
	c.lineTo(250, 250);
	c.lineTo(50, 250);
	c.lineTo(50, 50);
	c.lineTo(250, 50);
	c.closePath();
	c.lineTo(50, 250);
	c.stroke();

```

Tất nhiên bạn có thể tái sử dụng `lineTo()` nhiều lần cho các nét vẽ tiếp theo.<br>
`closePath()`: Nối điểm cuối cùng của nét vẽ cuối* đến điểm bắt đầu nét vẽ.

**kết quả như sau:**

<center><img class="img-thumbnail" src="{{site.baseurl}}/image/draw-line-canvas2.png"></center>

**Lưu ý !:**

Nếu bạn có ý định tạo một nét vẽ mới, nên sử dụng `beginPath()` mới và kết thúc chúng ngay khi dùng `stroke()`, thay vì viết đè như ví dụ trên.

var canvas = document.querySelector(".drawing");
var c = canvas.getContext("2d");

**Ví dụ 3 độ rộng nét vẽ**

```html
	
	<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript" src="../drawCanvas.js"></script>
		</head>
		<body>
			<canvas class="drawing" width="300" height="300" ></canvas>
		</body>
	</html>

```

```javascript

	var canvas = document.querySelector(".drawing");
	var c = canvas.getContext("2d");

	c.beginPath();
	c.moveTo(40, 20);
	c.lineTo(40, 220);
	c.lineWidth = 40;
	c.strokeStyle = '#273c75';
	c.stroke();

	c.beginPath();
	c.moveTo(220, 20);
	c.lineTo(220, 220);
	c.lineWidth = 45;
	c.strokeStyle = '#ED4C67';
	c.stroke();

```

**Kết quả:**

<center><img class="img-thumbnail" src="{{site.baseurl}}/image/draw-linebg-canvas.png"></center>

trong đó:

`lineWidth` : Tăng độ rộng cho nét vẽ. <br>
`strokeStyle` : Màu nét vẽ, có thể là màu `hsl()`, `rgb()`, `rgba()`, `hex....` <br>
<br>
**Lưu ý !:**
<br>
Cột màu xanh lơ và cột màu hồng có sự khác nhau về đường nét. Canvas không thể chọn 0.5 điểm ảnh cho mỗi bên, vì thế trong canvas đừng nên dùng số lẻ.

**Nguồn thông tin từ:**  <a href="https://dev-note.cf" style="font-weight: bold;">https://dev-note.cf</a>
