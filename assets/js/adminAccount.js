function validateInput(){
    let formElement=document.querySelector('.form');
    let inputElement= formElement.querySelectorAll('.form-input');
    console.log(inputElement);
    for(let i=0;i<inputElement.length;i++)
    {
        if(inputElement[i].value===""){
            inputElement[i].parentElement.querySelector(".error-message").innerText= `Vui lòng nhập ${inputElement[i].placeholder}!`;
            inputElement[i].parentElement.classList.add('error');
        }
        else{
            inputElement[i].parentElement.querySelector(".error-message").innerText="";
            inputElement[i].parentElement.classList.remove('error');
        }
    }
}
function  addnew(){
    validateInput();
    let errorElement=document.querySelectorAll(".error-message");
    let arrErrorElement=[];
    for(let i=0;i<arrErrorElement.length;i++)
    {
        arrErrorElement.push(errorElement[i].innerText);
    }
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let password_2 = document.getElementById("confirm-password").value;
    let checkErrorElement=arrErrorElement.every(value=> value.arrErrorElement=="");
    if(checkErrorElement && password==password_2){
        alert("Đăng ký thành công!");
        window.location.href = "signIn.html";
        let listAccount=localStorage.getItem("listAccount")?JSON.parse(localStorage.getItem("listAccount")):[];
        listAccount.push({fullname:fullname,email:email,phone:phone,password:password,password_2:password_2});
        localStorage.setItem("listAccount",JSON.stringify(listAccount));
    }
    else{
        alert("Đăng kí thất bại!");
    }
}

function logIn() {
    validateInput();
    event.preventDefault();
    let listAccount=localStorage.getItem("listAccount")?JSON.parse(localStorage.getItem("listAccount")):[];
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkLogIn=listAccount.some(value=>value.email==email&&value.password==password);
    if(checkLogIn){
        alert("Đăng nhập thành công!");
        window.location.href="index.html";
    }
    else{
        alert("Đăng nhập thất bại!");
    }
  }

function checkLogIn(){
    let Display="flex";
    if(Display===document.getElementById("register").style.display){
        alert("Đăng nhập để mua hàng !");
        window.location.href="signIn.html";
    }
    if(Display===document.getElementById("registered").style.display){
        alert("Đăng nhập để mua hàng !");
        window.location.href="signIn.html";
    }
}

