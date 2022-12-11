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

function danhmuc(){
	var loai = new Array("Balo","Phụ Kiện","SALE OFF 50%","Túi Xách","Uncategorized");
	var dm = "<h6 class=\"header-title\">Danh mục</h6> <br/> <ul class=\"nav2\">";
	for(i=0 ; i < loai.length; i++){
		dm += "<li><a id='" + i + "' href='hienthisanphamcopy.html?" + i + "&0'>" + loai[i] + "</a></li>";
	}
	dm += "</ul>";
	dm += "<h4 class=\"header-title\">THƯƠNG HIỆU</h4><br/><ul class=\"thuonghieu\">"
	var thuonghieu= new Array("Marc Jacobs", "Octopus", "Samsonite", "Sandqvist", "Supreme", "The North Face", "5.11 Tactical", "Adidas", "Burton", "Carhartt Wip", "Coach", "Fjallraven", "Nike", "Puma", "Vans");
	for(i=0 ; i < thuonghieu.length; i++){
		dm += "<li><a id='" + i + "' href='hienthisanphamcopy.html?" + (i+loai.length) + "&0'>" + thuonghieu[i] + "</a></li>";
	}
	document.getElementById("balo").innerHTML = dm;
}

function sanpham(){
	var url = window.location.href;
	var tem = url.split("?");
	tem = tem[1].split("&");
	var vitri = parseInt(tem[1]);
	var sotrang=0;
	var dem=0;
	var lienket="";
	var s="";
	var src ="";
	switch(tem[0]){

		//Duoi 24 thang tuoi
		case '0':
		{
            var ten = "Balo";
            var trongluong = new Array(300,400,500,600,400,300,400,500,600,400,300,400,500,600,400,300,400,500,600,400);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhartt Wip","NIKE","LOVE","PUMA","SEARCH","Carhartt Wip","NIKE","LOVE","PUMA","SEARCH","Carhartt Wip","NIKE","LOVE","PUMA","SEARCH","Carhartt Wip");
            var mausac = new Array("green", " yellow","black", "red","Brown","green", " yellow","black", "red","Brown","green", " yehlow","black", "red","Brown","green", " yehlow","black", "red","Brown")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack In Signature Jacquard","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack In Signature Jacquard","Foldsack No.2","Carhartt Philis Backpack");
			
			var gia = new Array("880.000","999.000","1.039.000","770.000","880.000","1.039.000","770.000","880.000","999.000","1.039.000","770.000","880.000","1.039.000","770.000","880.000","999.000","1.039.000","770.000","880.000","1.039.000","770.000","990.000","599.000");
			src += './assets/img/balo/';
			break;
		}

		//Tren 24 thang tuoi
		case '1':
		{
            var ten = "Phụ Kiện";
            var trongluong = new Array(300,400,500,600,400,300,400,500);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhart400t Wip","NIKE","LOVE","PUMA");
            var mausac = new Array("green", " yellow","black", "red","Brown","green", " yehlow","black")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack");
			
			var gia = new Array("880.000","999.000","1.039.000","770.000","880.000","1.039.000","770.000");
			src += './assets/img/phukien/';
			break;
		}
		case '2':
		{
            var ten = "SALE OFF 50%";
            var trongluong = new Array(300,400,500,600,400,300,400,500);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhart400t Wip","NIKE","LOVE","PUMA");
            var mausac = new Array("green", " yellow","black", "red","Brown","green", " yehlow","black")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack");
			
			var gia = new Array("880.000","999.000","1.039.000","770.000","880.000","1.039.000","770.000");
			src += './assets/img/seleOff/';
			break;
		}
		case '3':
		{
            var ten = "Túi Xách";
            var trongluong = new Array(300,400,500,600,400,300,400,500);
            var thuonghieu = new Array("NIKE","LOVE","PUMA","SEARCH","Carhart400t Wip","NIKE","LOVE","PUMA");
            var mausac = new Array("green", " yellow","black", "red","Brown","green", " yellow","black")
            var kichthuoc= new Array("100 x 200","200 x 300", "200 x 100", "100 x 300","Height 50cm X Whidth 33cm X Depth 13cm","100 x 200","200 x 300", "200 x 100") ;
            var chatlieu = new Array("coton", "vai", "giay", "nuoc", "100% Polyester Duck Canvas","coton", "vai", "giay")
			var sp = new Array("Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack ","Foldsack No.2","Carhartt Philis Backpack","Airette Backpack","Tiro Primegreen Backpack","League Flap Backpack");
			
			var gia = new Array("880.000","999.000","1.039.000","770.000","880.000","1.039.000","770.000");
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
			
			var gia = new Array("880.000","999.000","1.039.000","770.000","880.000","1.039.000","770.000");
			src += './assets/img/Uncategorized/';
			break;
		}
	}		
			
			dem=0;
			for(i=vitri; i < sp.length; i++){
				dem++;
				s =s +  "<div class=\"cart-row\"><div class=\"portfolio-wrap\">" + "<a href=\"chitietcopy.html?"+tem[0]+"&"+ i +"\"><img src=" + src + "balo"+ i + "/1" + ".jpg class=\"img-fluid\" alt=\"\" width=\"415px\" height=\"315px\"><div class=\"portfolio-links\"></a><a href=\"chitietcopy.html?"+tem[0]+"&"+ i +"\" title=\"More Details\" class=\"cart-title-item\">" + sp[i] + "</a><br/><b class=\"cart-price\">" + gia[i] + "đ</b> </div></div></div>";
				if(dem == 9) break;
			}
			
			sotrang = Math.ceil(sp.length/9);
			var head = "<ul class=\"list-btn\"><li class=\"btn-prev\"><a href='hienthisanphamcopy.html?" + tem[0] + "&" + 0 + "'><</a></li>"+"<div class=\"number-page\" id=\"number-page\">";
			var tail = "</div><li class='btn-next'><a href='hienthisanphamcopy.html?" + tem[0] + "&" + ((sotrang-1)*9) + "'>" + ">" + "</a></li></ul>";
			for(i=1 ; i <= sotrang; i++){
				vitri = (i-1)*9;
				lienket = lienket + "<li"+(i==(tem[1]/9+1)?" class=\"active\"":"")+ "><a href=\"hienthisanphamcopy.html?" + tem[0] + "&" + vitri + "\">" + i + "</a></li>";
			}
			var x=head + lienket +  tail ;
			document.getElementById('cart-item').innerHTML = s  ;

			document.getElementById('page').innerHTML = x;

}

/*function BackGroundLoaiSanPham(){
	var url = window.location.href;
	
	url = url.split("?");
	url = url[1].split("&");
	url = "#" + url[0];
	$(url).css({"backgroundColor":"#19ba99","color":"white","box-shadow":"0 0 7px #000 inset"});	
}*/


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

function andi(){
	var hide  = document.getElementById('chitietdonhang');
	hide.style.display = "none";
}	

function exitForm(){
	$("#container").hide();
}

window.onload = function(){
	menu();
	danhmuc();
	sanpham();
	search();
	GiuDangNhap();
	BackGroundLoaiSanPham();
	$(document).ready(function(){

		// nhấn kính lúp tìm kiếm menu
		$("#searchIcon").click(function(){
			$("#search_bar").fadeToggle("fast");
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

		// nhấn để xem đơn hàng đã đặt
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

		// Enter để đăng nhập
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

		// Exit form
		$("#exit").click(function(){
			exitForm();
		});


		// Click để thêm vài giỏ hàng ở phần sản phẩm
		$('.giohang').click(function(){
			if($(this).attr("src").indexOf("added.png") == -1){
				alert("Đã thêm vào giỏ hàng.");
				$(this).attr("src","./image/added.png");
			}else{
				alert("Đã loại bỏ khỏi giỏ hàng.");
				$(this).attr("src","./image/quanlydh.png");
			}
		});

		// nhấn kình lúp để tìm kiếm
			
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