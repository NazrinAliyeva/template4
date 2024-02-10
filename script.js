
const sidebarBtn = document.querySelector('.sidebar__btn');
const closeBtn = document.querySelector('.close__btn');
const sidebar = document.querySelector('.side__menu');
const sideWrapper = document.querySelector('.side-wrapper');
const input= document.querySelector('.item')
const btn=document.querySelector('.submit-btn')
sidebarBtn.addEventListener('click', function(event){
    event.preventDefault();
    sidebar.classList.add('active');
    sideWrapper.classList.add('side')
    
    sideWrapper.innerHTML =`
    <li class="nav-item">Home</li>
    <li class="nav-item">About Us</li>
    <li class="nav-item">Planters</li>
    <li class="nav-item">Contact</li>
    <li class="nav-item"><button class="btn-transparent">Call Us</button></li>
    `
    sidebar.appendChild(side);

})

closeBtn.addEventListener('click', function(e){
    e.preventDefault();




    sidebar.classList.remove('active'); 

})




const cardWrapper=document.querySelector('.card-wrapper')
const products=[
    {
        id: 1,
        title: "Cactus Plant",
        price1: (10),
        price2: 8,
        image: "card1.svg"
    },
    {
        id: 2,
        title: "Cactus Plant",
        price1: (10),
        price2: 8,
        image: "card2.svg"
    }   ,
     {
        id: 3,
        title: "Cactus Plant",
        price1: (10),
        price2: 8,
        image: "card3.svg"
    }
    ,
    {
       id: 4,
       title: "Cactus Plant",
       price1: (10),
       price2: 8,
       image: "card4.svg"
   }
   ,
   {
      id: 5,
      title: "Cactus Plant",
      price1: (10),
      price2: 8,
      image: "card5.svg"
  }
  ,
  {
     id: 6,
     title: "Cactus Plant",
     price1: (10),
     price2: 8,
     image: "card6.svg"
 }
 ,
 {
    id: 7,
    title: "Cactus Plant",
    price1: (10),
    price2: 8,
    image: "card7.svg"
}
,
{
   id: 8,
   title: "Cactus Plant",
   price1: (10),
   price2: 8,
   image: "card8.svg"
}
]
products.forEach((product) => {
    const card = document.createElement('div');

    card.classList.add('card')
    card.innerHTML = `
<div class="wrapper">                <div>
<img src="./img/${product.image}" alt="" class="card-img">
<img src="./img/heart.svg" alt="" class="heart-icon">
</div>
<div class="card-info-wrapper">
<h1 class="card-title">${product.title}</h1>
<span class="card-price-deleted">${product.price1} </span>
<span class="card-price">${product.price2} $</span>

<button class="green-btn">Buy Now</button>

</div>
</div>
    `
    cardWrapper.appendChild(card);
})
// const icon=document.querySelectorAll('.heart-icon')
// icon.addEventListener('click',function(){
// icon.style.display='none'
// const blackHeart = document.createElement('div');
// blackHeart.classList.add('black-heart')
// blackHeart.innerHTML=`<img src="./img/black-heart.svg" alt="">`
// card.appendChild(blackHeart)
// })
btn.addEventListener('click',function(e){
    e.preventDefault();
input.value=''
})