const searchFrom = document.querySelector(".search-form ");
const searchBtn = document.querySelector("#search-btn");

const cartİtemsContainer  = document.querySelector(".cart-items-container ");
const cardBtn = document.querySelector(".cart-btn");
// console.log(searchBtn);

searchBtn.addEventListener("click",function(){
    searchFrom.classList.toggle("active");
})

cardBtn.addEventListener("click",function(){
    cartİtemsContainer .classList.toggle("active");
})