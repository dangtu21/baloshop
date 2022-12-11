function validateInput(){
    let formElement=document.querySelector('.form')
    let inputElement= formElement.querySelectorAll('input')
    console.log(inputElement)
    for(let i=0;i<inputElement.length;i++)
    {
        if(inputElement[i].value===""){
            inputElement[i].parentElement.querySelector(".error-message").innerText= `Please enter your ${inputElement[i].id}!`
            inputElement[i].parentElement.classList.add('error')
        }
        else{
            inputElement[i].parentElement.querySelector(".error-message").innerText=""
            inputElement[i].parentElement.classList.remove('error')
        }
    }
}

function  addnew(){
    validateInput()
    let errorElement=document.querySelectorAll(".error-message")
    let arrErrorElement=[]
    for(let i=0;i<arrErrorElement.length;i++)
    {
        arrErrorElement.push(errorElement[i].innerText)
    }
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let password_2 = document.getElementById("confirm-password").value;
    let checkErrorElement=arrErrorElement.every(value=> value==="")
    if(checkErrorElement && password==password_2){
        alert("Đăng ký thành công!")
        window.location.href = "signIn.html"
        let listAccount=localStorage.getItem("listAccount")?JSON.parse(localStorage.getItem("listAccount")):[]
        listAccount.push({fullname:fullname,email:email,phone:phone,password:password,password_2:password_2})
        localStorage.setItem("listAccount",JSON.stringify(listAccount))
        renderData()
    }
    else{
        alert("Mật khẩu không khớp!")
    }
}

function logIn() {
    validateInput()
    event.preventDefault();
    let listAccount=localStorage.getItem("listAccount")?JSON.parse(localStorage.getItem("listAccount")):[]
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let checkLogIn=listAccount.some(value=>value.email==email&&value.password==password)
    if(checkLogIn){
        alert("Đăng nhập thành công!")
    }
    else{
        alert("Đăng nhập thất bại!")
    }
  }

function renderData(){
    let listAccount=localStorage.getItem("listAccount")?JSON.parse(localStorage.getItem("listAccount")):[]
    let account =`<tr>
                    <th>ID</th>
                    <th>Họ tên</th>
                    <th>Email</td>
                    <th>Số điện thoại</th>
                    <th>Mật khẩu</th>
                    <th>Tính năng</th>
                </tr>`

    listAccount.map((value,index)=>{
        account+=`<tr>
                    <td>${index+1}</td>
                    <td>${value.fullname}</td>
                    <td>${value.email}</td>
                    <td>${value.phone}</td>
                    <td>${value.password}</td>
                    <td>
                        <button class="btn btn-primary btn-sm edit">
                        <i class="fa-solid fa-ban"></i>
                        </button>
                        <button class="btn btn-primary btn-sm trash" onclick="deleteAccount()">
                        <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>`
    })
    document.getElementById("sampleTable").innerHTML= account
}

function deleteAccount(index){
    let listAccount=localStorage.getItem("listAccount")?JSON.parse(localStorage.getItem("listAccount")):[]
    if(confirm("are you sure?")){
        listAccount.splice(index,1)
    }
    localStorage.setItem("listAccount",JSON.stringify(listAccount))
    renderData()
}
