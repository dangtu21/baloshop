function Cancel(){
    document.getElementById("modals").style.display="none";
}

function Edit(){
    document.getElementById("modals").style.display="flex";
}

function Save(){
    document.getElementById("modals").style.display="none";
    alert("Sửa thành công !");
}

function Unlock(){
    document.getElementById("unlock").style.display="none";
    document.getElementById("lock").style.display="block";
    alert("Mở khóa thành công")
}

function Locks(){
    document.getElementById("unlock").style.display="block";
    document.getElementById("lock").style.display="none";
    alert("Khóa người dùng")
}