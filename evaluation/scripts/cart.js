let total=document.getElementById("total")
let totalCount=document.getElementById("totalCount")
let cart=document.getElementById("cart")

let mealD;

function displayMeals(){
    mealD=JSON.parse(localStorage.getItem("mealsInCart")) || [];
    if(mealD.length===0){
        totalCount.innerHTML="Rs. 0";
    }
    totalCount.innerHTML="Rs. 0";
    console.log(mealD)
    let x=``;
    let toP=0
    mealD.map((el,i)=>{
        x += `    <div class="cont">
      <img src="${el.imgLink}" alt="">
      <div class="mealname">${el.mealName}</div>
      <div class="price">Price: Rs. ${el.price}</div>
      <button onclick="removeFromCart(${i})" id="remove-btn" >RemoveFrom🧺</button>
     </div>`;
     toP +=el.price
    })
    cart.innerHTML=x
    totalCount.innerHTML=`Rs. `+toP;
    setTimeout(function(){
        document.getElementById('cartcount').textContent=mealD.length
    },1000)
    // cat.textContent=mealD.length;
}
displayMeals()

// //removeFromCart

function removeFromCart(datIn){
    mealD=mealD.filter((el,i)=>i!=datIn);
    localStorage.setItem("mealsInCart",JSON.stringify(mealD))
      
    
    displayMeals();
}
// document.getElementById("")