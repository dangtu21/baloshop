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
			var sp = new Array("Sữa Morinaga Số 2 - Chilmil (850g)","Sữa Bột Frisolac Gold 4 Cho Trẻ Từ 2-4 Tuổi 1500g","Sữa Bột Abbott Grow G-Power Vanilla GGL Dành Cho Trẻ Từ 3 - 6 Tuổi (1700g)","Sữa Bột Meiji Nội Địa Step Milk Số 9 (800g)","Sữa Wakodo Lebens 2 - LXU12 (850g)","Sữa Bột Abbott Similac IQ4 HMO (1.7kg)","Sữa Bột Abbott Grow 4 DHA AW4M Dành Cho Trẻ 2 Tuổi Trở Lên (900g)","Cowala Instant Whole Milk Powder","Sữa Bột Frisolac Gold 5 Dành Cho Bé Từ 4 Tuổi Trở Lên 900g","Sữa Bột Vinamilk Dielac Alpha Gold Step 4 (900g)","Sữa Dinh Dưỡng Công Thức Physiolac Croissance 3 (900g)","Sữa Công Thức HiPP 4 Junior Combiotic (800g)","Sữa bột nguyên kem của NutiFood 900 Gr","Sữa bột S26 Gold Junior số 4 (900g)","Sữa bột Wincofood Goldcare Grow","Nuvita GROW 3+dành cho trẻ từ 3 tuổi trở lên","Sữa Bột Vinamilk Dielac Optimum Gold Step 3 (900g)","Sữa bột SmartA IQ 4 hỗ trợ phát triển não bộ & dinh dưỡng cho bé 3-10 tuổi","Sữa bột France Lait 3 (900g)","Sữa Tăng Miễn Dịch, phát triển chiều cao cho trẻ Nucleo Gold 900g","Sữa bột Nutricare Metacare 4 Mới - phát triển toàn diện cho trẻ 3-6 tuổi (400g, 900g)","CRM - Sữa Enfamil A + 1 360° Brain DHA+ MFGM PRO (400g)","Sữa Bột Similac IQ Plus HMO số 4 hương Vanilla lon 900g","Sữa P100 900G - dành cho trẻ biếng ăn, suy dinh dưỡng, bệnh, phục hồi bệnh","Eneright Diamond Nutrient Kid số 2 700g : sữa cho trẻ suy dinh dưỡng, thấp còi từ 36 tháng tuổi trở lên","Riso opti gold 4- dinh dưỡng đặc chế cho hệ tiêu hóa khỏe mạnh","Sữa bột Nefesure Horu IQ Grow (800 gram)","Sữa bột Nefesure TiTan Plus (40gram x 23 thanh)","Lốc 4 Hộp Sữa Bột Pha Sẵn Friso Gold Vani (4 x 180ml)");
			var gia = new Array(450000,650000,623000,380000,489000,762000,298000,265000,309000,209000,350000,469000,150000,365000,175000,185000,329000,265000,488000,343000,250000,278000,439000,450000,325000,350000,380000,395000,560000);
			src = "./image/tren24/";
			break;
		}
		//Sua bo sung Canxi cho xuong
		case '2':
		{
			var sp = new Array("Sữa bột Nutricare Bone Mới phòng loãng xương cải thiện xương khớp (400g, 900g)","SỮA GOLDSURE CANXI DÀNH CHO NGƯỜI GIÀ LOÃNG XƯƠNG VÀ TIỂU ĐƯỜNG LON 900g","Sữa Eurofit Gold 900g (Dành cho người trưởng thành,người trung và cao tuổi, người có nguy cơ loãng xương, thiếu canxi, người ốm cần phục hồi sức khỏe)","Sữa Bột dinh dưỡng giúp bảo vệ sụn khớp Cho Người Lớn Tuổi Dr. Lucen Bonemax (900g)","Sữa bổ sung canxi Anlene Gold 800g","SỮA NUTIFOOD DR LUCEN XƯƠNG KHỚP 900G","Sữa bột Nucalci cho người 19-50 tuổi loại 800g - nucalci","HI-CANXI hiệu GIGO Gold 900 gr : sữa bột dinh dưỡng ngừa loãng xương & tiểu đường cho người trưởng thành","Sữa Bột Vinamilk Sure Prevent (900g)","Sữa Oldlac Calcium Collagen Type II (19 - 45 Tuổi)","Sữa bột Vinamilk Canxi Pro hộp 400g","Sữa bột Gigo Canxi-Nano Gold 900g","Sữa bột Goldcare dưỡng chất ít béo, bổ sung Canxi 900g","Sữa bột Gigo Care 900g","Sữa bột giúp phòng ngừa loãng xương, xơ vữa động mạch và tiểu đường GIGO SURE Hồng sâm 900 Gr (JISENG)","Sữa bột Bonecare dưỡng chất cho xương và khớp 900g","Sữa bột Anlene Gold hương vani hộp 400g","Sữa bột Anlene 400g (Hộp giấy)");
			var gia = new Array(165000,188000,430000,370000 ,436000 ,234000 ,180000 ,260000 ,405000 ,348000 ,139300,250000,175000 ,295000,270000,249000 ,193600,172000);
			src="./image/canxi/";
			break;
			
		}
		//Sua cho me bau
		case '3':
		{
			var sp = new Array("Sữa Bột Frisomum Gold Hương Cam (900g)","Sữa Bột Frisomum Gold Hương Cam (400g)","Sữa Bột Similac Mom Hương Vani (900g)","Sữa Bột Frisomum Gold Hương Vani (400g)","Sữa Bột Similac Mom Hương Sữa Chua Dâu (400g)","Sữa Bột Frisomum Gold Hương Vani (900g)","Sữa Bột Similac Mom Hương Vani (400g)","Sữa bầu Enfamama A+ Vanilla hộp 900g","Sữa bầu Enfamama A+ Vanilla 400g","Sữa bầu Morinaga vị trà sữa (216g)","Sữa Friso Gold Mum hương Vanilla 900g","Sữa Friso Gold Mum hương Cam 900g","SỮA ANMUM Chocolate 800G","Sữa Bà Bầu Fonterra Anmum Materna Hương Vani Hộp 800g (Dành cho bà mẹ mang thai và cho con bú)","Sữa Bà Bầu Nutifood Nuti IQ Gold Mum Hương Vanilla Hộp 900g (Bà mẹ mang thai và cho con bú)","Sữa bột Dielac Mama Gold- Hộp thiếc 900g_Sữa bầu cho mẹ","Sữa bầu Morinaga cà phê","Sữa bột Optimum Mama Gold - Hộp thiếc 900g_Sữa bầu cho mẹ","Sữa bột Dolsure Mum Fruity 900gr","Sữa Wakodo Lebens Mom 850g","Sữa Bầu Meiji Mama 350g","SỮA THANH BẦU MORINAGA VỊ TRÀ XANH - NHẬT (12 gói x 18g)");
			var gia = new Array(489000 ,244000 ,434000 ,244000 ,210000 ,489000 ,215000 , 475000 ,230000 ,215000 ,459000,455000,352000,365000 ,175000,236390 ,240000 ,371470 ,391914 ,409000 ,159000 ,235000);
			src="./image/mebau/";
			break;
			
		}
		//Sua IQ
		case '4':
		{
			var sp = new Array("Sữa bột Similac Newborn IQ (900g)","Sữa Similac Newborn IQ HMO 400g","Sữa Similac Gain IQ 2 900g","Sữa Similac HMO số 2 IQ 400g","Sữa Nuti IQ Step 3 900G","Sữa Similac HMO số 3 IQ (900g)","Sữa Bột Nuti IQ Step 2 (400g)","Sữa bột Insulac IQ Infant 900g (Mỹ)","Sữa bột NutiFood Nuti IQ Gold Step 4 (900g)","Sữa Nuti IQ Step3 Gold 900G","Sữa Similac IQ Plus số 3 - 400g (1-2 tuổi)","Sữa bột SmartA IQ 1 hỗ trợ phát triển não bộ & dinh dưỡng cho bé 0-6 tháng tuổi (400g)","Sữa bột SmartA IQ 2 dinh dưỡng hỗ trợ phát triển não bộ cho bé 6-12 tháng tuổi (400g)","Sữa Similac IQ HMO số 4 900g","Sữa Vita IQ Gold 3 - SS-VIG3","Sữa bột Nefesure Horu IQ Grow (800 gram)","Sữa bột Vinamilk Dielac Alpha Gold IQ Step 4 - 900g - ALpha gold IQ 4","Sữa Bột Similac IQ 3 1.7kg");
			var gia = new Array(561000,279400 ,552000,273900 ,159000 ,496100 ,99000 ,698000 ,189000 ,215000,195000,180000 ,469700 ,410000 ,380000 ,196000 ,150000 ,789000);
			src="./image/iq/";
			break;
			
		}
		//Sua suy dinh duong
		case '5':
		{
			var sp = new Array("Sữa P100 900G - dành cho trẻ biếng ăn, suy dinh dưỡng, bệnh, phục hồi bệnh","Sữa dinh dưỡng Morinaga Kodomil cho trẻ suy dinh dưỡng, thấp còi trên 18 tháng tuổi Nhật Bản vị vani","Sữa dinh dưỡng Morinaga Kodomil cho trẻ suy dinh dưỡng, thấp còi trên 18 tháng tuổi Nhật Bản vị dâu","Sữa bột GrowsPlus + Suy dinh dưỡng lon 900g","Sữa bột NutriniDrink Neutral 400g- cho trẻ suy dinh dưỡng","Sữa bột Nutrison Powder 430g- cho suy dinh dưỡng, suy nhược, tiêu hóa kém","Eneright Diamond Nutrient Kid số 2 700g : sữa cho trẻ suy dinh dưỡng, thấp còi từ 36 tháng tuổi trở lên","Sữa bột Hanie Kid 1 dành cho trẻ biếng ăn & suy dinh dưỡng 0-6 tháng tuổi (900g)","Sữa Nutricare Care 100 Gold cho trẻ biếng ăn suy dinh dưỡng 1-10 tuổi (900g)","Sữa bột Hanie Kid 2 dành cho trẻ biếng ăn & suy dinh dưỡng 6-12 tháng tuổi (400g)","Sữa cho trẻ 0-12 tháng bị suy dinh dưỡng thấp còi NutiFood Grow plus+ đỏ (780 g)","Sữa goldsure growplus suy dinh dưỡng thấp còi lon 900g","Sữa bột Medibest Ba Gold – Giải pháp khắc phục tình trạng biếng ăn, suy dinh dưỡng","Sữa Nutren Junior - Cho Trẻ Suy Dinh Dưỡng, Kém Hấp Thu 400g","Sữa tăng cân diamond nutrientkid số 1 cho bé còi xương suy dinh dưỡng hộp 700g","Sữa bột dành cho người suy dinh dưỡng NUTIFOOD EnPlus Gold 900g","Sữa Calo KID 900g cho trẻ biếng ăn suy dinh dưỡng","Sữa dành cho trẻ suy dinh dưỡng thấp còi Nutifood GrowPLUS+ Đỏ 1,5kg","Sữa non Goodhealth 9% 175 gr : Dinh dưỡng cho người ốm , trẻ suy dinh dưỡng","Sữa Eneric Kid 2 dành cho trẻ biếng ăn suy dinh dưỡng");
			var gia = new Array(450000 ,255000 ,255000 ,331000 ,330000 ,380000 ,325000 ,420000 ,320000 ,190000 ,330000 ,268000 ,360000 ,320000 ,329000 ,288000 ,375000 ,435000 ,425000 ,340000);
			src="./image/suydinhduong/";
			break;
			
		}
		//Sua tang truong
		case '6':
		{
			var sp = new Array("Sữa tăng trưởng dành cho trẻ 0-6 tháng France Lait 1 (900g)","Sữa bột giúp tăng trưởng chiều cao cho trẻ từ 1-17 tuổi Gigo Opti Grow 900 Gr","SỮA GOLDSURE GROW TĂNG TRƯỞNG CHIỀU CAO LON 900G (CAO CẤP)","Sữa Tăng Miễn Dịch, phát triển chiều cao cho trẻ Nucleo Gold 900g","Sữa nutren junior tăng cân cho bé hộp 800g","Sữa tăng cân New Milky Extra 1kg","Sữa Bột Tăng Cân Khỏe Mạnh Grow Plus+ 900G (Chỉ Giao TPHCM)","Sữa Clinutren Juinior","Sữa tăng cân T470 Pedia 900g (6-36 tháng)","Sữa tăng cân kidesent úc hộp 850g","sữa tăng cân cho người gầy GOLDMILK WEIGHT GAIN (900g)","Sữa Ensure Gold 400g","Sữa Nutricare God 400g","Sữa tăng cân cho người gầy Weight Gain 900g","Sữa Tăng Cân Top Mass Gold Cho Người Gầy 800g, Socola","SỮA NUTIFOOD DR LUCEN GAIN MAX (DÀNH CHO NGƯỜI GẦY) (hộp 900g) ","Sữa bột Natumil dành cho người gầy 900g - Natumilgay","sữa OGGI dành cho người gầy - 023","Sữa Bột Cho Trẻ Tăng Cân Nutifood Grow Plus+ (Hộp Giấy 400G)","Sữa tăng chiều cao Hikid Hàn Quốc - hikid");
			var gia = new Array(430000 ,260000 ,278000 ,367000 ,545000 ,285000,188000 ,395000 ,340000 ,549000 ,320000 ,247000,343000 ,280000,254000 ,290000 ,298000 ,545000,500000,500000);
			src="./image/tangtruong/";
			break;
			
		}
	}		
			
			dem=0;
			for(i=vitri; i < sp.length; i++){
				dem++;
				s =s +  "<div class=\"cart-row\"><div class=\"portfolio-wrap\">" + "<img src=" + src + "balo"+ i + "/1" + ".jpg class=\"img-fluid\" alt=\"\" width=\"415px\" height=\"315px\"><div class=\"portfolio-links\"><a href=\"chitietcopy.html?"+tem[0]+"&"+ i +"\" title=\"More Details\" class=\"cart-title-item\">" + sp[i] + "</a><br/><b class=\"cart-price\">" + Number(gia[i]).toLocaleString() + "$</b> </div></div></div>";
				if(dem == 18) break;
			}
			
			sotrang = Math.ceil(sp.length/18);
			var head = "<a href='hienthisanphamcopy.html?" + tem[0] + "&" + 0 + "'>" + "<<" + "</a>";
			var tail = "<a href='hienthisanphamcopy.html?" + tem[0] + "&" + ((sotrang-1)*18) + "'>" + ">>" + "</a>";
			for(i=1 ; i <= sotrang; i++){
				vitri = (i-1)*18;
				lienket = lienket + "<a href='hienthisanphamcopy.html?" + tem[0] + "&" + vitri + "'>" + i + "</a>";
			}
			var x=head + lienket +  tail 
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