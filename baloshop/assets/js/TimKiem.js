function menu(){
	var url = window.location.href;
	var tem = url.split("?");
	var main = document.getElementById('main');
	switch(tem[1]){

		case '1':
		{
			right.innerHTML = "Gioi thieu";
			break;
		}
		case '2':
		{
			right.innerHTML = "Liên hệ";
			break;
		}
		case '3':
		{
			right.innerHTML = "Giỏ hàng";
			break;
		}
	}
}

function danhmuc(){
	var loai = new Array("Dưới 24 tháng tuổi","Trên 24 tháng tuổi","Bổ sung Canxi","Cho mẹ bầu","Tăng trưởng IQ","Cho người suy<br>dinh dưỡng","Tăng trưởng chiều cao");
	var dm = "<h3>Danh mục</h3><ul>";
	for(i=0 ; i < loai.length; i++){
		dm += "<li><a href='SanPham.html?" + i + "&0'>" + loai[i] + "</a></li>";
	}
	dm += "</ul>";
	document.getElementById('left').innerHTML = dm;
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
		
function exitForm(){
	$("#container").hide();
}


function TimKiem(){
	var url = window.localStorage.getItem("timkiem");
	var url1 = window.location.href;
	var tem1 = url1.split("?");
	tem1 = tem1[1].split("&");
	tem1 = tem1[1];
	var tem = new Array("0");
	var vitri = parseInt(tem1);
	var sotrang=0;
	var dem=0;
	var lienket="";
	var s="";

			
			s += '<div>Kết quả tìm kiếm cho <b>' + url + '</b></div>';
			s += '<div class="tim" >\
					<input type="checkbox" id="dk1" value="duoi24" >Dưới 24 tháng<br>\
					<input type="checkbox" id="dk2"value="tren24">Trên 24 tháng<br>\
				</div>\
				<div class="tim">\
					<input  type="checkbox" id="dk3" value="100" >Từ 100.000 VNĐ đến 300.00 VNĐ<br>\
					<input  type="checkbox" id="dk4" value="300" >Từ 300.000 VNĐ đến 500.00 VNĐ<br>\
					<input  type="checkbox" id="dk5" value="500">Trên 500.000 VNĐ\
				</div><input id="loc" type="button" value="Tìm kiếm"><br><div style="clear:left;width:100%"></div>'
			var sp = new Array("Sữa bột Hanie Kid 2 dành cho trẻ biếng ăn & suy dinh dưỡng","Sữa eurofit Babi 900g","Sữa công thức tăng trưởng và phát triển","Sữa Bột Dinh Dưỡng Meiji Số 0","Sữa bột France Lait 1 (900g)","Sữa Bellamy’s Organic Infant Formula Số 1","Sữa cho trẻ 1-2 tuổi với công thức IQ-Advance NUTI IQ STEP 3 900 g","Sữa bột Vinamilk Optimum Gold 1 lon 900g","Sữa Bột Vinamilk Dielac Alpha Gold 2 lon 900g","Sữa Bột Abbott Similac IQ3 HMO (1.7kg)","Sữa Bột Enfagrow A+ 3 (1.8kg)","Sữa Bột Nestle NAN Optipro 1 (800g)","Sữa Bột Frisolac Gold 3 900g","Sữa Bột Aptamil Số 1 (900g)","Sữa Morinaga Số 1 - Hagukumi (850g)","Sữa Bột Enfamil A+ 2 (900g)","Thực Phẩm Công Thức Dinh Dưỡng DG-1 Goat Milk Infant Formula","Sữa Wakodo Lebens 1 - LXU11 (850g)","Sữa Bột Hikid Hương Vani (600g)","Sữa Công Thức HiPP 2 Combiotic Organic (800g)","Sữa Meiji Số 0","Sữa non Goodhealth 9% 350 g từ New Zealand - Bồi bổ cơ thể, tăng cường sức đề kháng","Sữa S26 Gold Junior Số 2 Úc (900g)","Sữa Bột Abbott Grow 1 AG1M (900g)","Sữa cho trẻ 0-12 tháng bị suy dinh dưỡng thấp còi NutiFood Grow plus+ đỏ (780 g)","Sữa bột Nutricare Metacare 1 Mới - phát triển toàn diện cho trẻ 0-6 tháng tuổi (400g)");
			
			var gia = new Array(390000,450000,210000,580000,496000,620000,160000,399000,275000,802000,930000,379000,409000,505000,510000,559000,426000,529000,525000,510000,590000,505000,375000,311000,330000,200000);
			
			dem=0;
			
			for(i=vitri; i < sp.length; i++){
				dem++;
				s =s + "<div class='sanpham sanphamduoi24'><a href='ChiTiet.html?" + tem[0] + "&" + i + "'><img src='./image/duoi24/" + i + ".png' alt='Hình ảnh'><h2 class='tensp'>" + sp[i] + "</h2><h3 class='giasp'>" + Number(gia[i]).toLocaleString() + " Đ</h3></a><img title='Thêm vào giỏ hàng' class='giohang' src='./image/quanlydh.png'></div>";
				
				if(dem == 20) break;
			}
			sotrang = Math.ceil(sp.length/20);
			var head = "<a href='TimKiem.html?" + tem[0] + "&" + 0 + "'>" + "<<" + "</a>";
			var tail ="<a href='TimKiem.html?" + tem[0] + "&" + ((sotrang-1)*20) + "'>" + ">>" + "</a>";
			for(i=1 ; i <= sotrang; i++){
				vitri = (i-1)*20;
				lienket = lienket + "<a href='TimKiem.html?" + tem[0] + "&" + vitri + "'>" + i + "</a>";
			}
			document.getElementById('right').innerHTML = s + "<div class='page'>" + head + lienket +  tail + "</div>";
			
		
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

window.onload = function(){
	menu();
	danhmuc();
	search();
	GiuDangNhap();
	TimKiem();
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
			

		$('.giohang').click(function(){
			if($(this).attr("src").indexOf("added.png") == -1){
				alert("Đã thêm vào giỏ hàng.");
				$(this).attr("src","./image/added.png");
			}else{
				alert("Đã loại bỏ khỏi giỏ hàng.");
				$(this).attr("src","./image/quanlydh.png");
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
		$('#loc').click(function(){
			var lookup = $('#dk1').prop("checked") + "&" + $('#dk2').prop("checked") + "&" + $('#dk3').prop("checked") + "&" + $('#dk4').prop("checked") + "&" + $('#dk5').prop("checked") ;
			
			if(lookup.indexOf("true") == -1){
				alert("Xin vui lòng chọn điều kiện lọc");
			}else{
				window.localStorage.setItem("timkiemtick",lookup);
				window.location = "TimKiemNangCao.html?0&0";
			}
		});
		$("#locnangcao").click(function(){
			window.localStorage.setItem("timkiemtick","true&false&false&false&false&false");
		});
	});


}