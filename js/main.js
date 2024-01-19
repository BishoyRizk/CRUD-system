var productname = document.getElementById("productname")
var  productprice =document.getElementById("productprice")
var productcategory = document.getElementById("productcategory")
var description = document.getElementById("description")
var searchh =document.getElementById("search")
var addbutoon = document.getElementById("addbutoon")
var updatebutton = document.getElementById("updatebutton")
var indexnumber = 0
 var products = []

 if(localStorage.getItem("products") != null){
    products= JSON.parse(localStorage.getItem("products"))   
    display()
 }

function CREATE () {
    var product = {
        Name : productname.value,
        price : productprice.value,
        category : productcategory.value,
        desc :description.value
        
    }
    products.push(product)
    localStorage.setItem("products",JSON.stringify(products))
    
    clear()
    console.log(products);
    display()
}




function clear() {
         productname.value="",
        productprice.value="",
        productcategory.value="",
        description.value=""
}




function display(){
    var cartona = ""
    for (var i = 0 ; i < products.length ; i++) {
         cartona += `
         <tr>
         <td>${i}</td>           
        <td>${products[i].Name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="updateproducts(${i})" class="btn btn-outline-info">update</button></td>
        <td><button onclick="deleteitem(${i})" class="btn btn-outline-danger">delete</button></td>

        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = cartona
}




function deleteitem(index){
    products.splice(index,1)
    localStorage.setItem("products",JSON.stringify(products))
    display()
}


""

function searchby(){
    var valueinput = searchh.value


    var cartona = ""
    for (var i = 0 ; i < products.length ; i++) {
        if (products[i].Name.toLocaleLowerCase().includes(valueinput.toLocaleLowerCase())){
            cartona += `
            <tr>
            <td>${i}</td>           
           <td>${products[i].Name}</td>
           <td>${products[i].price}</td>
           <td>${products[i].category}</td>
           <td>${products[i].desc}</td>
           <td><button onclick="" class=" btn btn-success ">update</button></td>
           <td><button onclick="deleteitem(${i})" class="btn btn-outline-danger">delete</button></td>
   
           </tr>
           `
       }
       
        }
        document.getElementById("tbody").innerHTML = cartona
}




function updateproducts(index){

    indexnumber =index

    productname.value=products[index].Name
    productprice.value=products[index].price
    productcategory.value=products[index].category
    description.value=products[index].desc

    addbutoon.classList.add("d-none")
    updatebutton.classList.remove("d-none")
   

}







function updatethendisplay(){
    var product = {
        Name : productname.value,
        price : productprice.value,
        category : productcategory.value,
        desc :description.value
        
    }

    products.splice(indexnumber,1,product)
    localStorage.setItem("products",JSON.stringify(products))
    clear()
    display()
    addbutoon.classList.remove("d-none")
    updatebutton.classList.add("d-none")
}