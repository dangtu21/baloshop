function showDonHang(){

	var user = new Array("long1","nguyen1","van8","ngo25","mevabe95","catle2002","nuocngoaidengoai","tinhyeumua","oopjavachieu","badaohocsinh");
	var s = "";
	 s+= '<table id="DonHangTable" ><tr><th>Số thứ tự</th><th>Mã đơn hàng</th><th>Tài khoản</th><th>Thời gian</th><th>Đã xử lý</th><th>Xem chi tiết</th></tr>';
	 var d = new Date();
	 var h = d;
	 var dem = user.length/2;
	 
	for(i=0;i<user.length;i++){
	  	
	  	h = new Date(((i<dem)?d.getFullYear():d.getFullYear()-1), d.getMonth()-i,d.getDate()-i);
	  	var check = ((h.getFullYear() < 2018)?"checked":"");
	  	var link = 'onclick="ChiTietDonHang(' + i + ')"';
	 	s = s + '<tr><td>' + (i+1) + '</td><td>DH0' + i + '</td><td>' + user[i] + '</td><td class="thoigian" >' + h.getDate() + '/' + (h.getMonth()<10?'0' + h.getMonth():h.getMonth()) + '/' + h.getFullYear() + '</td><td><input class="checkxuly" type="checkbox" ' + check + '></td><td ><img  ' + link + '  id="xemchitiet' + i + '"src="../image/chitiet.png" alt="' + i + '"></td></tr>';
		
	}
	
	s += '</table>';
	document.getElementById('TableDonHang').innerHTML = s;

}

function ChiTietDonHang(id){
	var sp = new Array("Sữa bột Hanie Kid 2 dành cho trẻ biếng ăn & suy dinh dưỡng","Sữa eurofit Babi 900g","Sữa công thức tăng trưởng và phát triển","Sữa Bột Dinh Dưỡng Meiji Số 0","Sữa bột France Lait 1 (900g)","Sữa Bellamy’s Organic Infant Formula Số 1","Sữa cho trẻ 1-2 tuổi với công thức IQ-Advance NUTI IQ STEP 3 900 g","Sữa bột Vinamilk Optimum Gold 1 lon 900g","Sữa Bột Vinamilk Dielac Alpha Gold 2 lon 900g","Sữa Bột Abbott Similac IQ3 HMO (1.7kg)","Sữa Bột Enfagrow A+ 3 (1.8kg)","Sữa Bột Nestle NAN Optipro 1 (800g)","Sữa Bột Frisolac Gold 3 900g","Sữa Bột Aptamil Số 1 (900g)","Sữa Morinaga Số 1 - Hagukumi (850g)","Sữa Bột Enfamil A+ 2 (900g)","Thực Phẩm Công Thức Dinh Dưỡng DG-1 Goat Milk Infant Formula","Sữa Wakodo Lebens 1 - LXU11 (850g)","Sữa Bột Hikid Hương Vani (600g)","Sữa Công Thức HiPP 2 Combiotic Organic (800g)","Sữa Meiji Số 0","Sữa non Goodhealth 9% 350 g từ New Zealand - Bồi bổ cơ thể, tăng cường sức đề kháng","Sữa S26 Gold Junior Số 2 Úc (900g)","Sữa Bột Abbott Grow 1 AG1M (900g)","Sữa cho trẻ 0-12 tháng bị suy dinh dưỡng thấp còi NutiFood Grow plus+ đỏ (780 g)","Sữa bột Nutricare Metacare 1 Mới - phát triển toàn diện cho trẻ 0-6 tháng tuổi (400g)");
	var gia = new Array(390000,450000,210000,580000,496000,620000,160000,399000,275000,802000,930000,379000,409000,505000,510000,559000,426000,529000,525000,510000,590000,505000,375000,311000,330000,200000);
	var soluong = new Array(1,5,9,6,3,1,2,4,5,8,7,5,3,6,4,1,3,8,10,23,6,3,6,9,8,1,4,9,8,7,12,5,41,32,10,20,30,51,62,12,13,14,8,9,14,6,5,8,3,1,5,7,8,9,5,4);
	var user = new Array("long1","nguyen1","van8","ngo25","mevabe95","catle2002","nuocngoaidengoai","tinhyeumua","oopjavachieu","badaohocsinh");
	
	var id = "#xemchitiet" + id;
	var s = "";
	id = $(id).attr("alt");
	id = parseInt(id);
	var tong = 0;
	var ma ="";
	var tk = "";
	s += '<table id="tableChiTietDonHang"><tr><th>Mã sản phẩm</th><th>Hình ảnh</th><th>Tên</th><th>Giá</th><th>Số lượng</th><th>Thành tiền</th></tr>';
	var tg = document.getElementsByClassName('thoigian');
	tg = tg[id].innerHTML;

	var check = tg.split("/");
	check = check[2];

	for(i=0; i<= id; i++){
	 	
	 	ma = (id<=25?"DU0":"TR0") + i;
	 	$("#madonhang").val(ma);
	 	$('#taikhoan').val(user[i]);
	 	$('#thoigian').val(tg);
	 	(check > 2017?$('#trangthai').val("Chưa xử lý"):$('#trangthai').val("Đã xử lý"));
	 	s += '<tr class="quanlysanpham" ><td>' + ma + i + '</td><td class="tdanhminhhoa"><img class="anhminhhoa" src="../image/' + (id<=25?"duoi24/":"tren24/") + i + '.png"></td><td class="tensanphamminhhoa">' + sp[i] + '</td><td>' + gia[i] + '</td><td>' + soluong[i] + '</td><td>' + (gia[i]*soluong[i]) + '</td></tr>';
	 	tong += gia[i]*soluong[i];
	 }
	 s += '<tr><td colspan="5">Tổng tiền</td><td>' + tong + '</td>';
	s += '</table>';
	$('#chitietDonHang').show();
	document.getElementById('donhangsp').innerHTML = s;

}

window.onload = function(){

	showDonHang();

	url = window.location.href;
	menu = url.split("?");

	$(document).ready(function(){

		$('.xemchitiet').click(function(){
			$(".xemchitiet").hide();
		});

		$("#dangxuat").click(function(){
			window.location = "../index.html";
		});

		$("#x").click(function(){
			$("#chitietDonHang").hide();
		});
	});
}

