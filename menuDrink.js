 

document.addEventListener("DOMContentLoaded", () => {
  const menu = [
    { name: "Cafe Maltado", price:25.90 , img: "./img/menu-1.png" },
    { name: "Cafe com Leite",price:17.90 , img: "./img/menu-2.png" },
    { name: "Cafe Makiato", price:22.90 , img: "./img/menu-3.png" },
    { name: "Cafe Maltado", price:19.90 , img: "./img/menu-4.png" },
    { name: "Cafe Maltado", price:27.90 , img: "./img/menu-5.png" },
    { name: "Cafe Maltado", price:23.90 , img: "./img/menu-6.png" },
  ];

  const menuDrink = document.querySelector(".menu-drink");

  menu.forEach((drink) => {
    const drinkCard = document.createElement("div");
    drinkCard.classList.add("drink-Card");

    drinkCard.innerHTML = `
      <img src="${drink.img}" alt="${drink.name}">
       <h4>${drink.name}</h4>
       <h5>R$ ${drink.price.toFixed(2).replace(/\./g, ",")}</h5>
       <a>Comprar</a>
     `;

menuDrink.appendChild(drinkCard)

  });
});
