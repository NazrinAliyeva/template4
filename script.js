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