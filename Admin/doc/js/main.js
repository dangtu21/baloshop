(function () {
	"use strict";

	var treeviewMenu = $('.app-menu');

	// Toggle Sidebar
	$('[data-toggle="sidebar"]').click(function(event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	// Activate sidebar treeview toggle
	$("[data-toggle='treeview']").click(function(event) {
		event.preventDefault();
		if(!$(this).parent().hasClass('is-expanded')) {
			treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	// Set initial active toggle
	$("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

	//Activate bootstrip tooltips
	$("[data-toggle='tooltip']").tooltip();

})();

function addnew(){
	//validateInput()
    let errorElement=document.querySelectorAll(".error-message")
    let arrErrorElement=[]
    for(let i=0;i<errorElement.length;i++)
    {
        arrErrorElement.push(errorElement[i].innerText)
    }
    let checkErrorElement=arrErrorElement.every(value=> value=="")
    if(checkErrorElement){
        let image = document.getElementById("image").value;
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let listProducts=localStorage.getItem("listProducts")?JSON.parse(localStorage.getItem("listProducts")):[]
        listProducts.push({image:image,name:name,price:price})
        localStorage.setItem("listProducts",JSON.stringify(listProducts))
        renderData(listProducts)
    }
}
