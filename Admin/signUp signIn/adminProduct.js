/*function resetInput(){
    document.getElementById("id").value=""
    document.getElementById("name").value=""
    document.getElementById("count").value=""
    document.getElementById("price").value=""
}*/


function validateInput(){
    let formElement=document.querySelector('.form')
    let inputElement= formElement.querySelectorAll('.form-input')
    console.log(inputElement)
    for(let i=0;i<inputElement.length;i++)
    {
        if(inputElement[i].value===""){
            inputElement[i].parentElement.querySelector(".error-message").innerText= `Vui lòng nhập ${inputElement[i].id}!`
            inputElement[i].parentElement.classList.add('error')
        }
        else{
            inputElement[i].parentElement.querySelector(".error-message").innerText=""
            inputElement[i].parentElement.classList.remove('error')
        }
    }
}

function addnew(){
    validateInput()
    let errorElement=document.querySelectorAll(".error-message")
    let arrErrorElement=[]
    for(let i=0;i<errorElement.length;i++)
    {
        arrErrorElement.push(errorElement[i].innerText)
    }
    let checkErrorElement=arrErrorElement.every(value=> value=="")
    if(checkErrorElement){
        alert("Thêm thành công!")
        let id=document.getElementById("id").value
        let name=document.getElementById("name").value
        let count=document.getElementById("count").value
        let price=document.getElementById("price").value  
        let category=document.getElementById("category").value
        let status=document.getElementById("status").value
        let image=document.getElementById("image").value
        let listProducts=localStorage.getItem("listProducts")?JSON.parse(localStorage.getItem("listProducts")):[]
        listProducts.push({id:id,name:name,image:image,category:category,status:status,count:count,price:price})
        localStorage.setItem("listProducts",JSON.stringify(listProducts))
        renderData(listProducts)
    }
}

function renderData(array){
        let products =`<thead>
        <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Ảnh</th>
            <th>Danh mục</th>
            <th>Số lượng</th>
            <th>Tình trạng</th>
            <th>Giá tiền</th>
            <th>Tính năng</th>
        </tr>
    </thead>`

    array.map((value,index)=>{
        products+=`<tr>
        <td> ${value.id} </td>
        <td style="width:250px!important;"> ${value.name} </td>
        <td> 
            <img src="/img-sanpham/${value.image}" alt="" style="width:80px;"> 
        </td>
        <td> ${value.category} </td>
        <td> ${value.count} </td>
        <td><b> ${value.status}</b> </td>
        <td> ${value.price}đ </td>
        <td style="text-align:center;">
        <button onclick="deleteProduct(${index})" class="btn btn-trash">
            <i class="fas fa-trash-alt"></i>
        </button>
        <button onclick="editProduct(${index})" class="btn btn-edit">
            <i class="fas fa-edit"></i>
        </button>
        </td>
    </tr>`
        //<td>
           // <button class="btn btn-trash">
            //    <i class="fas fa-trash-alt"></i>
           // </button>
           // <button class="btn btn-edit">
           //     <i class="fas fa-edit"></i>
          //  </button>
       // </td>
                    //<td>
                       // <button onclick="editProduct(${index})">Edit</button>
                       // <button onclick="deleteProduct(${index})">Delete</button>
                    //</td>
    })
    document.getElementById("tableContent").innerHTML=products
}



/*function editProduct(index)
{
    let listProducts=localStorage.getItem("listProducts")?JSON.parse(localStorage.getItem("listProducts")):[]
    document.getElementById("image").value=listProducts[index].image
    document.getElementById("name").value=listProducts[index].name
    document.getElementById("price").value=listProducts[index].price
    document.getElementById("index").value=index

    document.getElementById("save").style.display="none"
    document.getElementById("update").style.display="inline-block"
} */

/*function changeProduct(){
    let listProducts=localStorage.getItem("listProducts")?JSON.parse(localStorage.getItem("listProducts")):[]
    let index=document.getElementById("index").value
    listProducts[index]={
        image:document.getElementById("image").value,
        name:document.getElementById("name").value,
        price:document.getElementById("price").value
    }
    localStorage.setItem("listProducts",JSON.stringify(listProducts))
    document.getElementById("save").style.display="inline-block"
    document.getElementById("update").style.display="none"
    renderData(listProducts)
    resetInput()
}*/

function deleteProduct(index){
    let listProducts=localStorage.getItem("listProducts")?JSON.parse(localStorage.getItem("listProducts")):[]
    if(confirm("are you sure?")){
        listProducts.splice(index,1)
    }
    localStorage.setItem("listProducts",JSON.stringify(listProducts))
    renderData(listProducts)
}

/*function searchProduct(){
    let listProducts=localStorage.getItem("listProducts")?JSON.parse(localStorage.getItem("listProducts")):[]
    let valueSearchInput=document.getElementById("search").value
    let productSearch=listProducts.filter(value =>{
        return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
    })
    console.log(productSearch)
    renderData(productSearch)
}*/
