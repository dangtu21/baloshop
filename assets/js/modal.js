function None(){
    document.getElementById("modals").style.display="none";
}

function Flex(){

    document.getElementById("modals").style.display="flex";
}

function AlertCart(){
    if( confirm("Thanh toán thành công, quay lại trang chủ?")){
        window.location.href="index.html";
    }
}