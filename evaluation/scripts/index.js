import navbar from "../comp/navbar.js";


document.getElementById("navbar").innerHTML = navbar();


function createMeal(data){
    this.imgLink=data.strMealThumb;
    this.mealName=data.strMeal;
    this.price=Math.floor((Math.random() * 400) + 100);
}
// // menu
 let mealArr=[],indMeal;

// //fetch all the meals and push them inside meal array
let fetchMeals = async() =>{
    let res1,data;
      res1 = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
      );
      data = await res1.json();
      console.log(data.meals)
      data.meals.forEach(el => {
        mealArr.push(new createMeal(el))
      });
    displayMeals();
  }
fetchMeals()

// //Display all meals 
function displayMeals(){
    let x=``;
    mealArr.forEach(({imgLink ,mealName,price},i)=>{
        x += `<div class="cont">
        <img src="${imgLink}" alt="">
        <div class="mealname">${mealName}</div>
        <div class="price">Price: Rs. ${price}</div>
        <button  id="addtocart" >Add2Cart</button>
       </div>`;
    })
    document.getElementById("menu").innerHTML=x;
    let xyc=document.querySelectorAll("#addtocart")
    xyc.forEach((el,i)=>{
        el.addEventListener("click",function(){
            increaseCart(mealArr[i])
        })
    })
}
// //Add to cart
  function increaseCart(data){
      let mealD=JSON.parse(localStorage.getItem("mealsInCart")) ||[];
      if(data!=""){
        mealD.push(data)
        localStorage.setItem("mealsInCart",JSON.stringify(mealD))
      }    
      let cat=document.getElementById('cartcount');
      cat.textContent=mealD.length;
  }
  increaseCart("")
//   document.getElementById("count").addEventListener("click",()=>window.location.href="cart.html");
//   document.getElementById("cartcount").textContent=JSON.parse(localStorage.getItem("mealsInCart")).length || 0