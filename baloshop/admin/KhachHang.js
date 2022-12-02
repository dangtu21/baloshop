
function QuanLyNguoiDung(){

	var user = new Array("long1","nguyen1","van8","ngo25","mevabe95","catle2002","nuocngoaidengoai","tinhyeumua","oopjavachieu","badaohocsinh");
	var mk = new Array("long1","nguyen1","van8","ngo25","meyeucon123","helelacat9","toidentungoai","cuocdoi987","thanhtich10","yeunhatlop");
	var email = new Array("ngvanlong99@gmail.com","haitac.lilo@gmail.com","highschool471@gmail.com","ngoquynh1502@gmail.com","muahoadao@gmail.com","giaovien51@gmail.com","quang.tn@gmail.com","long.loli@gmail.com","yeucongnghe@gmail.com","anhxtanh10@gmail.com");
	var hoten = new Array("Nguyễn Văn Long","Long Nguyễn Văn","Nguyễn Sữa Bột","Lê Tre Nhỏ","Ngô Quỳnh Trang","Tiểu Bạch Bạch","Lăng Hàn","Võ Chính Nghĩa","Đăng Phục Hưng","Đào Cát Tường");
	var nghenghiep = new Array("Học sinh","Sinh viên","Giáo viên","Bảo mẫu","Sinh viên","Học sinh","Bảo mẫu","Giáo viên","Giáo viên","Học sinh");
	var tuoi = new Array(19,20,27,35,27,18,20,21,23,18);
	var gioitinh = new Array("Nam","Nam","Nữ","Nữ","Nam","Nam","Nữ","Nam","Nam","Nữ");
	var diachi = new Array("Nguyễn Cư Trinh, Phạm Ngũ Lão, Quận 1, Hồ Chí Minh",'Huỳnh Thúc Kháng, P5, Quận 1, Hồ Chí Minh, Việt Nam',"Phường 4, Yên Lập, Hồ Chí Minh, Việt Nam","Văn Chí, Phường Linh Trung, Thủ Đức, Hồ Chí Minh, Việt Nam","Mã Đà, Vĩnh Cửu, Đồng Nai, Việt Nam","Xã Đất Cuốc, Tân Uyên, Bình Dương, Việt Nam","​Xã Đất Cuốc, Bắc Tân Uyên, Bình Dương, Việt Nam","Tân Uyên, Tân Uyên, Bình Dương, Việt Nam","Uyên Hưng, Tân Uyên, Bình Dương, Việt Nam","Hội Nghĩa, Tân Uyên, Bình Dương, Việt Nam");
	var s = "";

	s += '<table id="userTable"><tr><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Email</th><th>Họ tên</th><th>Nghề nghiệp</th><th>Tuổi</th><th>Giới tính</th><th>Địa chỉ</th><th>Chặn	</th></tr>';

	for(i=0;i<user.length;i++){
		s += '<tr><td>' + user[i] + '</td><td>' + mk[i] + '</td><td>' + email[i] + '</td><td>' + hoten[i] + '</td><td>' + nghenghiep[i] + '</td><td>' + tuoi[i] + '</td><td>' + gioitinh[i] + '</td><td>' + diachi[i] + '</td><td><img class="block" src="../image/block.png"></td></tr>';
	}

	s += '</table>';

	document.getElementById('userDiv').innerHTML = s;
}


window.onload = function(){

	QuanLyNguoiDung();
	$(document).ready(function(){

		$("#qluser").click(function(){
			
			$(".content").hide();
			$("#userDivContainer").show();
		});

		$(".block").click(function(){
			if($(this).attr("src") == "../image/block.png"){
				if(confirm("Xác nhận chặn tài khoản ?")){
				alert("Đã chặn");
				$(this).attr("src","../image/unclock.png");
			}else{}
			}else{
				if($(this).attr("src") == "../image/unclock.png"){
					if(confirm("Xác nhận bỏ chặn tài khoản ?")){
						alert("Đã bỏ chặn");
						$(this).attr("src","../image/block.png");
					}else{}
				}
			}
					
		});
		$("#dangxuat").click(function(){
			window.location = "../index.html";
		});
	
	});
}

