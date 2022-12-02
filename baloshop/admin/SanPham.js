function QuanLy(){
	var s = "";
	s += '<table ><tr><th>Mã sản phẩm</th><th>Hình ảnh</th><th>Tên</th><th>Kho</th><th>Giá</th><th>Số lượng</th><th>Danh mục</th><th>Sửa</th><th>Xóa</th></tr>';
	
	var sp = new Array("Sữa bột Hanie Kid 2 dành cho trẻ biếng ăn & suy dinh dưỡng","Sữa eurofit Babi 900g","Sữa công thức tăng trưởng và phát triển","Sữa Bột Dinh Dưỡng Meiji Số 0","Sữa bột France Lait 1 (900g)","Sữa Bellamy’s Organic Infant Formula Số 1","Sữa cho trẻ 1-2 tuổi với công thức IQ-Advance NUTI IQ STEP 3 900 g","Sữa bột Vinamilk Optimum Gold 1 lon 900g","Sữa Bột Vinamilk Dielac Alpha Gold 2 lon 900g","Sữa Bột Abbott Similac IQ3 HMO (1.7kg)","Sữa Bột Enfagrow A+ 3 (1.8kg)","Sữa Bột Nestle NAN Optipro 1 (800g)","Sữa Bột Frisolac Gold 3 900g","Sữa Bột Aptamil Số 1 (900g)","Sữa Morinaga Số 1 - Hagukumi (850g)","Sữa Bột Enfamil A+ 2 (900g)","Thực Phẩm Công Thức Dinh Dưỡng DG-1 Goat Milk Infant Formula","Sữa Wakodo Lebens 1 - LXU11 (850g)","Sữa Bột Hikid Hương Vani (600g)","Sữa Công Thức HiPP 2 Combiotic Organic (800g)","Sữa Meiji Số 0","Sữa non Goodhealth 9% 350 g từ New Zealand - Bồi bổ cơ thể, tăng cường sức đề kháng","Sữa S26 Gold Junior Số 2 Úc (900g)","Sữa Bột Abbott Grow 1 AG1M (900g)","Sữa cho trẻ 0-12 tháng bị suy dinh dưỡng thấp còi NutiFood Grow plus+ đỏ (780 g)","Sữa bột Nutricare Metacare 1 Mới - phát triển toàn diện cho trẻ 0-6 tháng tuổi (400g)");
	var gia = new Array(390000,450000,210000,580000,496000,620000,160000,399000,275000,802000,930000,379000,409000,505000,510000,559000,426000,529000,525000,510000,590000,505000,375000,311000,330000,200000);
	var soluong = new Array(0,14,94,28,17,36,21,84,86,42,10,0,50,92,90,47,33,52,36,85,64,11,31,70,44,91);
	var kho 	= new Array("Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng");
	var dem=sp.length;

	for(i=0;i<sp.length;i++){
		s += '<tr class="quanlysanpham" ><td>DU0' + i +  '</td><td class="tdanhminhhoa"><img class="anhminhhoa" src="../image/duoi24/' + i + '.png"></td><td class="tensanphamminhhoa">' + sp[i] + '</td><td>' + kho[i] + '</td><td>	' + gia[i] + '</td><td>' + soluong[i] +'</td><td>Dưới 24 tháng tuổi</td><td class="xoatd" ><img class="sua" alt="' + i + '"src="../image/sua.png"></td><td class="xoatd"><img class="xoa" alt="' + i + '" src="../image/xoa.png"></td></tr>';
	}

	sp = new Array("Sữa Morinaga Số 2 - Chilmil (850g)","Sữa Bột Frisolac Gold 4 Cho Trẻ Từ 2-4 Tuổi 1500g","Sữa Bột Abbott Grow G-Power Vanilla GGL Dành Cho Trẻ Từ 3 - 6 Tuổi (1700g)","Sữa Bột Meiji Nội Địa Step Milk Số 9 (800g)","Sữa Wakodo Lebens 2 - LXU12 (850g)","Sữa Bột Abbott Similac IQ4 HMO (1.7kg)","Sữa Bột Abbott Grow 4 DHA AW4M Dành Cho Trẻ 2 Tuổi Trở Lên (900g)","Cowala Instant Whole Milk Powder","Sữa Bột Frisolac Gold 5 Dành Cho Bé Từ 4 Tuổi Trở Lên 900g","Sữa Bột Vinamilk Dielac Alpha Gold Step 4 (900g)","Sữa Dinh Dưỡng Công Thức Physiolac Croissance 3 (900g)","Sữa Công Thức HiPP 4 Junior Combiotic (800g)","Sữa bột nguyên kem của NutiFood 900 Gr","Sữa bột S26 Gold Junior số 4 (900g)","Sữa bột Wincofood Goldcare Grow","Nuvita GROW 3+dành cho trẻ từ 3 tuổi trở lên","Sữa Bột Vinamilk Dielac Optimum Gold Step 3 (900g)","Sữa bột SmartA IQ 4 hỗ trợ phát triển não bộ & dinh dưỡng cho bé 3-10 tuổi","Sữa bột France Lait 3 (900g)","Sữa Tăng Miễn Dịch, phát triển chiều cao cho trẻ Nucleo Gold 900g","Sữa bột Nutricare Metacare 4 Mới - phát triển toàn diện cho trẻ 3-6 tuổi (400g, 900g)","CRM - Sữa Enfamil A + 1 360° Brain DHA+ MFGM PRO (400g)","Sữa Bột Similac IQ Plus HMO số 4 hương Vanilla lon 900g","Sữa P100 900G - dành cho trẻ biếng ăn, suy dinh dưỡng, bệnh, phục hồi bệnh","Eneright Diamond Nutrient Kid số 2 700g : sữa cho trẻ suy dinh dưỡng, thấp còi từ 36 tháng tuổi trở lên","Riso opti gold 4- dinh dưỡng đặc chế cho hệ tiêu hóa khỏe mạnh","Sữa bột Nefesure Horu IQ Grow (800 gram)","Sữa bột Nefesure TiTan Plus (40gram x 23 thanh)","Lốc 4 Hộp Sữa Bột Pha Sẵn Friso Gold Vani (4 x 180ml)");
	gia = new Array(450000,650000,623000,380000,489000,762000,298000,265000,309000,209000,350000,469000,150000,365000,175000,185000,329000,265000,488000,343000,250000,278000,439000,450000,325000,350000,380000,395000,560000);
	soluong = new Array(57,67,82,14,89,91,72,0,90,100,43,46,0,36,67,86,0,40,72,23,80,64,47,22,0,63,80,64,95);
	kho = new Array("Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng");
	
	for(i=0;i<sp.length;i++){
		s += '<tr class="quanlysanpham"><td>TR0' + i +  '</td><td class="tdanhminhhoa"><img class="anhminhhoa" src="../image/tren24/' + i + '.png"></td><td class="tensanphamminhhoa">' + sp[i] + '</td><td>' + kho[i] + '</td><td>	' + gia[i] + '</td><td>' + soluong[i] +'</td><td>Trên 24 tháng tuổi</td><td class="xoatd" ><img class="sua"  alt="' + (dem+i) + '" src="../image/sua.png"></td><td class="xoatd"><img class="xoa" alt="' + (dem+i) + '" src="../image/xoa.png"></td></tr>';
	}
	s+= "</table>";

	document.getElementById('table').innerHTML = s;
}


function sua(n){

	var sp = new Array("Sữa bột Hanie Kid 2 dành cho trẻ biếng ăn & suy dinh dưỡng","Sữa eurofit Babi 900g","Sữa công thức tăng trưởng và phát triển","Sữa Bột Dinh Dưỡng Meiji Số 0","Sữa bột France Lait 1 (900g)","Sữa Bellamy’s Organic Infant Formula Số 1","Sữa cho trẻ 1-2 tuổi với công thức IQ-Advance NUTI IQ STEP 3 900 g","Sữa bột Vinamilk Optimum Gold 1 lon 900g","Sữa Bột Vinamilk Dielac Alpha Gold 2 lon 900g","Sữa Bột Abbott Similac IQ3 HMO (1.7kg)","Sữa Bột Enfagrow A+ 3 (1.8kg)","Sữa Bột Nestle NAN Optipro 1 (800g)","Sữa Bột Frisolac Gold 3 900g","Sữa Bột Aptamil Số 1 (900g)","Sữa Morinaga Số 1 - Hagukumi (850g)","Sữa Bột Enfamil A+ 2 (900g)","Thực Phẩm Công Thức Dinh Dưỡng DG-1 Goat Milk Infant Formula","Sữa Wakodo Lebens 1 - LXU11 (850g)","Sữa Bột Hikid Hương Vani (600g)","Sữa Công Thức HiPP 2 Combiotic Organic (800g)","Sữa Meiji Số 0","Sữa non Goodhealth 9% 350 g từ New Zealand - Bồi bổ cơ thể, tăng cường sức đề kháng","Sữa S26 Gold Junior Số 2 Úc (900g)","Sữa Bột Abbott Grow 1 AG1M (900g)","Sữa cho trẻ 0-12 tháng bị suy dinh dưỡng thấp còi NutiFood Grow plus+ đỏ (780 g)","Sữa bột Nutricare Metacare 1 Mới - phát triển toàn diện cho trẻ 0-6 tháng tuổi (400g)","Sữa Morinaga Số 2 - Chilmil (850g)","Sữa Bột Frisolac Gold 4 Cho Trẻ Từ 2-4 Tuổi 1500g","Sữa Bột Abbott Grow G-Power Vanilla GGL Dành Cho Trẻ Từ 3 - 6 Tuổi (1700g)","Sữa Bột Meiji Nội Địa Step Milk Số 9 (800g)","Sữa Wakodo Lebens 2 - LXU12 (850g)","Sữa Bột Abbott Similac IQ4 HMO (1.7kg)","Sữa Bột Abbott Grow 4 DHA AW4M Dành Cho Trẻ 2 Tuổi Trở Lên (900g)","Cowala Instant Whole Milk Powder","Sữa Bột Frisolac Gold 5 Dành Cho Bé Từ 4 Tuổi Trở Lên 900g","Sữa Bột Vinamilk Dielac Alpha Gold Step 4 (900g)","Sữa Dinh Dưỡng Công Thức Physiolac Croissance 3 (900g)","Sữa Công Thức HiPP 4 Junior Combiotic (800g)","Sữa bột nguyên kem của NutiFood 900 Gr","Sữa bột S26 Gold Junior số 4 (900g)","Sữa bột Wincofood Goldcare Grow","Nuvita GROW 3+dành cho trẻ từ 3 tuổi trở lên","Sữa Bột Vinamilk Dielac Optimum Gold Step 3 (900g)","Sữa bột SmartA IQ 4 hỗ trợ phát triển não bộ & dinh dưỡng cho bé 3-10 tuổi","Sữa bột France Lait 3 (900g)","Sữa Tăng Miễn Dịch, phát triển chiều cao cho trẻ Nucleo Gold 900g","Sữa bột Nutricare Metacare 4 Mới - phát triển toàn diện cho trẻ 3-6 tuổi (400g, 900g)","CRM - Sữa Enfamil A + 1 360° Brain DHA+ MFGM PRO (400g)","Sữa Bột Similac IQ Plus HMO số 4 hương Vanilla lon 900g","Sữa P100 900G - dành cho trẻ biếng ăn, suy dinh dưỡng, bệnh, phục hồi bệnh","Eneright Diamond Nutrient Kid số 2 700g : sữa cho trẻ suy dinh dưỡng, thấp còi từ 36 tháng tuổi trở lên","Riso opti gold 4- dinh dưỡng đặc chế cho hệ tiêu hóa khỏe mạnh","Sữa bột Nefesure Horu IQ Grow (800 gram)","Sữa bột Nefesure TiTan Plus (40gram x 23 thanh)","Lốc 4 Hộp Sữa Bột Pha Sẵn Friso Gold Vani (4 x 180ml)");
	var gia = new Array(390000,450000,210000,580000,496000,620000,160000,399000,275000,802000,930000,379000,409000,505000,510000,559000,426000,529000,525000,510000,590000,505000,375000,311000,330000,200000,450000,650000,623000,380000,489000,762000,298000,265000,309000,209000,350000,469000,150000,365000,175000,185000,329000,265000,488000,343000,250000,278000,439000,450000,325000,350000,380000,395000,560000);
	var soluong = new Array(1,14,94,28,17,36,21,84,86,42,10,5,50,92,90,47,33,52,36,85,64,11,31,70,44,91,57,67,82,14,89,91,72,5,90,100,43,46,11,36,67,86,6,40,72,23,80,64,47,22,3,63,80,64,95);
	var kho = new Array("Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Hết hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng","Còn hàng");
	
	$(".content").hide();
	$("#editForm").show();
	if(n <= (sp.length-1)){
		$("#maEdit").attr("value","DU0" + n);
	}else{
		$("#maEdit").attr("value","TR0" + (n-26));
	}
	
	$("#tenEdit").attr("value",sp[n]);
	
	var khoEdit = document.getElementById('khoEdit');
	khoEdit.value = kho[n];
	
	$("#giaEdit").attr("value",gia[n]);
	
	$("#soluongEdit").attr("value",soluong[n]);
	
	if(n < 25){
		$("#hinhanhEdit").attr("src","../image/duoi24/" + n + ".png");
	}else{
		$("#hinhanhEdit").attr("src","../image/tren24/" + (n-26) + ".png");
	}
	
	var danhmuc = document.getElementById('danhmucEdit');
	if(n < 25) {
		danhmuc.value = "Dưới 24 tháng tuổi";
	}else{
		danhmuc.value = "Trên 24 tháng tuổi";
	}

}


function KiemTraMaTen(id){
	var maten = document.getElementById(id);
	if(maten.value.match(/^[a-zA-Z0-9\ ]+$/)){
		return true;
	}else{
		return false;
	}
}
function KiemTraGia(id){
	var gia = document.getElementById(id);
	if( gia.value.match(/^[0-9]+$/) && (gia.value >= 0) && (gia.value % 1 == 0)){
		return true;
	}else{
		return false;
	}
}
function KiemTraSoLuong(id){
	var gia = document.getElementById(id);
	if( gia.value.match(/^[0-9]+$/) && (gia.value >= 0) && (gia.value % 1 == 0)){
		return true;
	}else{
		return false;
	}
}	

function KiemTraAll(){
	return KiemTraMaTen('ma') && KiemTraMaTen('ten') && KiemTraGia('gia') && KiemTraSoLuong('soluong');
}
window.onload = function(){

	QuanLy();
	url = window.location.href;
	choose = url.split("?");
	if(choose[1] == "0"){
		$(".content").hide();
		$("#addForm").show();
	}else if(choose[1] > 0){
		sua(parseInt(choose[1])-1);
	}

	$(document).ready(function(){


		$(".xoa").click(function(){
			var n = $(this).attr('alt');
			var dong = document.getElementsByClassName('quanlysanpham');
			if(confirm("Xác nhận xóa sản phẩm ?")){
				alert("Đã xóa");
				dong[n].style.display = "none";
			}else{}
			
		});


		$(".sua").click(function(){
			var n = $(this).attr("alt");
			window.location.href = "SanPham.html?" + (parseInt(n)+1);
		});

		$("#suaspForm p").click(function(){
				alert("Sửa thành công");
		});

		$("#them").click(function(){

			if(KiemTraAll()){
				alert("Thêm sản phẩm thành công . ");
			}else{
				alert("Hãy nhập đầy đủ và chính xác thông tin");
			}
			
		});


		$("#dangxuat").click(function(){
			window.location = "../index.html";
		});

	});
}

