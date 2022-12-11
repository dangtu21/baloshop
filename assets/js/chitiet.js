function menu(){
	var url = window.location.href;
	var tem = url.split("?");
	var main = document.getElementById('main');
	switch(tem[1]){

		case 'GT':
		{
			main.innerHTML = "Gioi thieu";
			break;
		}
		case 'LH':
		{
			main.innerHTML = "Liên hệ";
			break;
		}
		case 'GH':
		{
			main.innerHTML = "Giỏ hàng";
			break;
		}
	}
}

function ChiTiet(){
	var url = window.location.href;

	var tem = url.split("?");
	tem = tem[1].split("&");
	var x = parseInt(tem[1]);
	var src="";
	switch(tem[0]){

		//Duoi 24 thang tuoi
		case '0':
		{
            var ten = "Balo";
            var trongluong = new Array(300,400,500,600,400,300,400,500,600,400,300,400,500,600,400,300,400,500,600,400);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhartt Wip","NIKE","LOVE","PUMA","SEARCH","Carhartt Wip","NIKE","LOVE","PUMA","SEARCH","Carhartt Wip","NIKE","LOVE","PUMA","SEARCH","Carhartt Wip");
            var mausac = new Array("green", " yehlow","black", "red","Brown","green", " yellow","black", "red","Brown","green", " yehlow","black", "red","Brown","green", " yehlow","black", "red","Brown")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack In Signature Jacquard","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack In Signature Jacquard","Foldsack No.2","Carhartt Philis Backpack");
			
			var gia = new Array(680,350,4199,850,699,680,350,4199,850,699,680,350,4199,850,699,680,350,4199,850,699);
			src += './assets/img/balo/';
			break;
		}

		//Tren 24 thang tuoi
		case '1':
		{
            var ten = "Phụ Kiện";
            var trongluong = new Array(300,400,500,600,400,300,400,500);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhart400t Wip","NIKE","LOVE","PUMA");
            var mausac = new Array("green", " yehlow","black", "red","Brown","green", " yehlow","black")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack");
			
			var gia = new Array(680,350,4199,850,699,680,350,);
			src += './assets/img/phukien/';
			break;
		}
		case '2':
		{
            var ten = "SALE OFF 50%";
            var trongluong = new Array(300,400,500,600,400,300,400,500);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhart400t Wip","NIKE","LOVE","PUMA");
            var mausac = new Array("green", " yehlow","black", "red","Brown","green", " yehlow","black")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack");
			
			var gia = new Array(680,350,4199,850,699,680,350,);
			src += './assets/img/seleOff/';
			break;
		}
		case '3':
		{
            var ten = "Túi Xách";
            var trongluong = new Array(300,400,500,600,400,300,400,500);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhart400t Wip","NIKE","LOVE","PUMA");
            var mausac = new Array("green", " yehlow","black", "red","Brown","green", " yehlow","black")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack");
			
			var gia = new Array(680,350,4199,850,699,680,350,);
			src += './assets/img/tuixach/';
			break;
		}
		case '4':
		{
            var ten = "Uncategorized";
            var trongluong = new Array(300,400,500,600,400,300,400,500);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhart400t Wip","NIKE","LOVE","PUMA");
            var mausac = new Array("green", " yehlow","black", "red","Brown","green", " yehlow","black")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack");
			
			var gia = new Array(680,350,4199,850,699,680,350,);
			src += './assets/img/Uncategorized/';
			break;
		}
	}	
	var s="";
	s += '<div class="title"><a href="">Trang chủ </a>/<a href=""> '+ ten + ' </a></div><div id="content"><div id="photo"><img src="'+src+'balo'+ x +'/1.jpg"  alt="IMG"></div><div id="chitiet"><h1>'+ sp[x] + '</h1><div class="is-divider small"></div><span class="cart-price" style="font-size: 25px;">'+ Number(gia[x]).toLocaleString() +'$</span><form class="cart" action="" method="post" enctype="multipart/form-data"><div class="quantity buttons_added"><input type="button" value="-" class="minus button is-form"><input type="number" id="quantity_6387668eae1bd" class="input-text qty text" step="1" min="1" max="9999" name="quantity" value="1" title="SL" size="4" inputmode="numeric"><input type="button" value="+" class="plus button is-form"></div><button type="submit" name="add-to-cart" value="27779" class="single_add_to_cart_button button alt">Thêm vào giỏ hàng</button></form><p>TAI SAO LAI CHON BALOSHOP</p><ol class="lydo"><li>Đại lý chính hãng hơn 30 thương hiệu hàng đầu</li><li>Đổi trả 30 ngày nếu không hài lòng</li><li>Hoàn tiền nếu không hài lòng sản phẩm</li><li>Bảo hành sản phẩm lên đến 01 năm</li> </ol><div class="social-links mt-3 text-center"><a href="https://www.facebook.com/nong.than.944" class="twitter"><i class="bx bxl-twitter"></i></a><a href="https://www.facebook.com/nong.than.944" class="facebook"><i class="bx bxl-facebook"></i></a><a href="https://www.facebook.com/nong.than.944" class="instagram"><i class="bx bxl-instagram"></i></a><a href="https://www.facebook.com/nong.than.944" class="google-plus"><i class="bx bxl-skype"></i></a><a href="https://www.facebook.com/nong.than.944" class="linkedin"><i class="bx bxl-linkedin"></i></a></div></div></div><div id="info"><p>Thông tin</p><table class="thongtin">      <tr><th>TRỌNG LƯỢNG</th><td>'+trongluong[x]+ 'g<td></tr><tr><th>THƯƠNG HIỆU</th><td>'+thuonghieu[x]+ '<td></tr><tr><th>MÀU SẮC</th><td>' + mausac[x] +'<td></tr><tr><th>KÍCH THƯỚC</th><td>'+ kichthuoc[x]+'<td></tr><tr><th>CHẤT LIỆU</th><td>'+chatlieu[x]+'<td></tr></table></div><div id="mota"><p>Mô Tả</p><table><tr><th></th></tr></table></div><div id="sanphamtuongtu"></div>';
    
	document.getElementById('noidung').innerHTML = s;
}


function search(){
	var tim = document.getElementById('search_bar');
	var bg = document.getElementById('searchIcon');
	var placeholder = document.getElementById('type');
	if(tim.value == "on"){
		bg.src="./image/search_x.png";
		tim.value = "off";
	}else{
		bg.src="./image/search.png";
		tim.value = "on";
		placeholder.value = "";
	}
		
}

//Giữ account
function GiuDangNhap(){
	var ten = localStorage.getItem("username");
	var mk = localStorage.getItem("pw");
	var flag = localStorage.getItem("flag");
	if(typeof(Storage) !== "undefined" && ten != null && flag == 1){
		$("#login").hide();
		$("#hello").show();
		$("#hello").html("Xin chào "+ localStorage.getItem("username"));
		$("#logout").show();
	}
}			
	
function XemDonHangDaDat(){

	var s = "<div id='chitietdonhang'></div><div style='text-align:center;color:#19ba99;font-size:26px;text-transform:uppercase;margin-bottom:10px;'>Các đơn hàng đã đặt</div>";
	s+= '<table id="DonHangTable" ><tr><th>Số thứ tự</th><th>Mã đơn hàng</th><th>Thời gian</th><th>Xem chi tiết</th></tr>';
	var d = new Date();
	
	var h = d;
	var dem = 5/2;
	 
	for(i=0;i<5;i++){
	  	
	  	h = new Date(((i<dem)?d.getFullYear():d.getFullYear()-1), d.getMonth()-i,d.getDate()-i);
	  	var check = ((h.getFullYear() < 2018)?"checked":"");
	  	var link = 'onclick="ChiTietDonHang(' + i + ')"';
	 	s = s + '<tr><td>' + (i+1) + '</td><td>DH0' + i + '</td><td class="thoigian" >' + h.getDate() + '/' + (h.getMonth()<10?'0' + h.getMonth():h.getMonth()) + '/' + h.getFullYear() + '</td><td ><img  ' + link + '  id="xemchitiet' + i + '"src="./image/chitiet.png" alt="' + i + '"></td></tr>';	
	}
	s += '</table>';
	document.getElementById('right').innerHTML = s;
}

function ChiTietDonHang(id){
	var sp = new Array("Sữa bột Hanie Kid 2 dành cho trẻ biếng ăn & suy dinh dưỡng","Sữa eurofit Babi 900g","Sữa công thức tăng trưởng và phát triển","Sữa Bột Dinh Dưỡng Meiji Số 0","Sữa bột France Lait 1 (900g)","Sữa Bellamy’s Organic Infant Formula Số 1","Sữa cho trẻ 1-2 tuổi với công thức IQ-Advance NUTI IQ STEP 3 900 g","Sữa bột Vinamilk Optimum Gold 1 lon 900g","Sữa Bột Vinamilk Dielac Alpha Gold 2 lon 900g","Sữa Bột Abbott Similac IQ3 HMO (1.7kg)","Sữa Bột Enfagrow A+ 3 (1.8kg)","Sữa Bột Nestle NAN Optipro 1 (800g)","Sữa Bột Frisolac Gold 3 900g","Sữa Bột Aptamil Số 1 (900g)","Sữa Morinaga Số 1 - Hagukumi (850g)","Sữa Bột Enfamil A+ 2 (900g)","Thực Phẩm Công Thức Dinh Dưỡng DG-1 Goat Milk Infant Formula","Sữa Wakodo Lebens 1 - LXU11 (850g)","Sữa Bột Hikid Hương Vani (600g)","Sữa Công Thức HiPP 2 Combiotic Organic (800g)","Sữa Meiji Số 0","Sữa non Goodhealth 9% 350 g từ New Zealand - Bồi bổ cơ thể, tăng cường sức đề kháng","Sữa S26 Gold Junior Số 2 Úc (900g)","Sữa Bột Abbott Grow 1 AG1M (900g)","Sữa cho trẻ 0-12 tháng bị suy dinh dưỡng thấp còi NutiFood Grow plus+ đỏ (780 g)","Sữa bột Nutricare Metacare 1 Mới - phát triển toàn diện cho trẻ 0-6 tháng tuổi (400g)");
	var gia = new Array(390000,450000,210000,580000,496000,620000,160000,399000,275000,802000,930000,379000,409000,505000,510000,559000,426000,529000,525000,510000,590000,505000,375000,311000,330000,200000);
	var soluong = new Array(1,5,9,6,3,1,2,4,5,8,7,5,3,6,4,1,3,8,10,23,6,3,6,9,8,1,4,9,8,7,12,5,41,32,10,20,30,51,62,12,13,14,8,9,14,6,5,8,3,1,5,7,8,9,5,4);

	
	var id = "#xemchitiet" + id;
	var s = "";
	id = $(id).attr("alt");
	id = parseInt(id);
	var tong = 0;
	var ma ="";
	var tk = "";

	s += '<table id="tableChiTietDonHang"><tr><th>Mã sản phẩm</th><th>Hình ảnh</th><th>Tên</th><th>Giá</th><th>Số lượng</th><th>Thành tiền</th ><th id="andi" onclick="andi()">X</th></tr>';

	var tg = document.getElementsByClassName('thoigian');
	tg = tg[id].innerHTML;

	var check = tg.split("/");
	check = check[2];

	for(i=0; i<= id; i++){
	 	
	 	s += '<tr class="quanlysanpham" ><td>' + ma + i + '</td><td class="tdanhminhhoa"><img class="anhminhhoa" src="./image/' + (id<=25?"duoi24/":"tren24/") + i + '.png"></td><td class="tensanphamminhhoa">' + sp[i] + '</td><td>' + gia[i] + '</td><td>' + soluong[i] + '</td><td>' + (gia[i]*soluong[i]) + '</td></tr>';
	 	tong += gia[i]*soluong[i];
	 }
	s += '<tr><td colspan="5">Tổng tiền</td><td>' + tong + '</td>';
	s += '</table>';
	$('#chitietDonHang').show();
	document.getElementById('chitietdonhang').style.display = "block";
	document.getElementById('chitietdonhang').innerHTML = s;

}

function exitForm(){
	$("#container").hide();
}

window.onload = function(){
	menu();
	ChiTiet();
	search();
	GiuDangNhap();
	BackGroundLoaiSanPham();
	$(document).ready(function(){

		$("#searchIcon").click(function(){
			$("#search_bar").fadeToggle("fast");
			$("#type").focus();
		});
		// Nhấn đăng xuất
		$("#logout").click(function(){
			// localStorage.removeItem("username");
			// localStorage.removeItem("pw");
			localStorage.setItem("flag",0);
			$(this).hide();
			$("#hello").hide();
			$("#login").show();
		});
		$("#hello").hover(function(){
			$(this).attr("title","Xem đơn hàng đã đặt");
		});

		$('#hello').click(function(){
			XemDonHangDaDat();
		});
		//Nhấn đăng nhập
		$("#login").click(function(){
			$("#container").fadeToggle();
		});

		//Nhấn nút đăng kí - form
		$("#nutDangki").click(function(){
				if(KiemTraHopLe()){
					localStorage.setItem("username",$("#tendangnhap").val());
					localStorage.setItem("flag",1);
					localStorage.setItem("pw",document.getElementById('matkhau').value);
			}else{}
		});

		//Nhấn nút đăng nhập - form
		$("#tagDangNhap").click(function(){
			var id = document.getElementById('idDangNhap');
			var mk = document.getElementById('idMatKhau');
			if(id.value == "admin" && mk.value == "admin"){
				window.location = "./admin/KhachHang.html";
			}else if(id.value == localStorage.getItem("username") && mk.value == localStorage.getItem("pw")){
				$("#container").hide();
				$("#login").hide();
				$("#hello").show();
				$("#hello").html("Xin chào "+ localStorage.getItem("username"));
				$("#logout").show();
				localStorage.setItem("flag",1);
			}else{
				$("#sailogin").show();
				$("#sailogin").delay(1000).fadeOut();
			}
		});
		$("#idMatKhau").keypress(function(e){
			if(e.which == 13){
					var id = document.getElementById('idDangNhap');
					var mk = document.getElementById('idMatKhau');
					if(id.value == "admin" && mk.value == "admin"){
						window.location = "./admin/KhachHang.html";
					}else if(id.value == localStorage.getItem("username") && mk.value == localStorage.getItem("pw")){
						$("#container").hide();
						$("#login").hide();
						$("#hello").show();
						$("#hello").html("Xin chào "+ localStorage.getItem("username"));
						$("#logout").show();
						localStorage.setItem("flag",1);
					}else{
						$("#sailogin").show();
						$("#sailogin").delay(1000).fadeOut();
					}
			}
		});

		$("#exit").click(function(){
			exitForm();
		});

		$('.themvaogiohang').click(function(){
			if($(this).html().indexOf("Thêm") != -1){
				alert("Đã thêm vào giỏ hàng");
				$(this).html("Bỏ khỏi giỏ hàng");
			}else{
				alert("Đã loại bỏ khỏi giỏ hàng");
				$(this).html("Thêm vào giỏ hàng");
			}
			
		});

			
		$('#search_img').click(function(){

			var lookup = $('#type').val();
			if(!lookup.match(/^[a-zA-Z0-9\ ]+$/)){
				alert("Nội dung tìm kiếm không hợp lệ");
			}else{
				window.localStorage.setItem("timkiem",lookup);
				window.location = "TimKiem.html?0&0";
			}
		});

		$('#type').keypress(function(e){
			if(e.which == 13){
					var lookup = $('#type').val();
				if(!lookup.match(/^[a-zA-Z0-9\ ]+$/)){
					alert("Nội dung tìm kiếm không hợp lệ");
				}else{
					window.localStorage.setItem("timkiem",lookup);
					window.location = "TimKiem.html?0&0";
				}
			}
		});
		$("#locnangcao").click(function(){
			window.localStorage.setItem("timkiemtick","true&false&false&false&false&false");
		});
	});


}