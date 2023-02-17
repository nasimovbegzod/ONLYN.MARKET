        
              //////////////
        ////////ACTION_CARD////////
              ///////////////
let action = [
  {
    img: "./images/action.img/Action1_image.png",
    price: "44,50 ₽",
    discount: "-50%",
    description: "Г/Ц Блинчики с мясом вес, Россия",
    Category: "./images/indexCategory.img/rating(1).png",
  },

  {
    img: "./images/action.img/Action2_image.png",
    price: "34,50 ₽",
    discount: "-50%",
    description: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    Category: "./images/indexCategory.img/rating(2).png",
  },

  {
    img: "./images/action.img/Action3_image.png",
    price: "54,50 ₽",
    discount: "-50%",
    description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    Category: "./images/indexCategory.img/rating(4).png",
  },

  {
    img: "./images/action.img/Action4_image.png",
    price: "40,50 ₽",
    discount: "-50%",
    description: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    Category: "./images/indexCategory.img/rating(3).png",
  },
];

const action_card = ( img, price, discount, description, Category) => {
  return ` <div class="action_child">
    <button class="heart" id="heart" ><i class="fa-solid fa-heart"></i></button>
      <img src="${img}" alt="">
        <div>
        <h3><span>${price}</span><span class="action">${discount}</span></h3>
        <p>${description}</p>
        <p><img src="${Category}" alt=""></p>
        <button class="card_btn">В корзину</button>
      </div>
    </div>
  `;
};

const groupcard = (action) => {
  const paren_carts = document.querySelector(".cards_action");

  paren_carts.innerHTML = "";

  action.forEach(({ img, price, discount, description, Category }) => {
    let group = action_card(img, price, discount, description, Category);

    paren_carts.innerHTML += action_card(
      img,
      price,
      discount,
      description,
      Category
    );
  });
};

groupcard(action);
              ///////////////
        ////////NEW_CARD////////
              ///////////////
let new_card = [
  {
    img: "./images/action.img/Action5_image.png",
    price: "599,99 ₽",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    Category: "./images/indexCategory.img/rating(1).png",
  },

  {
    img: "./images/action.img/Action3_image.png",
    price: "44,50 ₽",
    description: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    Category: "./images/indexCategory.img/rating(4).png",
  },

  {
    img: "./images/action.img/Action4_image.png",
    price: "159,99 ₽",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    Category: "./images/indexCategory.img/rating(1).png",
  },

  {
    img: "./images/action.img/Action2_image.png",
    price: "49,39 ₽",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    Category: "./images/indexCategory.img/rating(1).png",
  },
];

const product_new = (img, price, description, Category) => {
return ` <div class="new_child">
            <button class="heart" id="heart" ><i class="fa-solid fa-heart"></i></button>
            <img src="${img}" alt="">
            <div>
              <h3>${price}</h3>
              <p>${description}</p>
              <p><img src="${Category}" alt=""></p>
              <button class="card_btn">В корзину</button>
            </div>
          </div>`;
};

const new_group = (new_card) => {
   const paren_new = document.querySelector(".card_new");
   paren_new.innerHTML = ""

    new_card.forEach(({ img, price, description, Category }) => {
      let group = product_new(img, price, description, Category);

      paren_new.innerHTML += product_new(
        img,
        price,
        description,
        Category
      );
    });
}

new_group(new_card)


              ///////////////
        ////////BEFORE_CARD////////
              ///////////////

let before_card = [ 
  {
    img: "./images/action.img/Action6_image.png",
    price: "77,99 ₽",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    Category: "./images/indexCategory.img/rating(3).png",
  },

  {
    img: "./images/action.img/Action3_image.png",
    price: "159,99 ₽",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    Category: "./images/indexCategory.img/rating(2).png",
  },

  {
    img: "./images/action.img/Action5_image.png",
    price: "599,99 ₽",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    Category: "./images/indexCategory.img/rating(4).png",
  },

  {
    img: "./images/action.img/Action2_image.png",
    price: "49,39 ₽",
    description: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    Category: "./images/indexCategory.img/rating(1).png",
  },
];

const product_before = (img, price, description, Category) => {
return `
<div class="before_child">
                <button class="heart" id="heart" ><i class="fa-solid fa-heart"></i></button>
                <img src="${img}" alt="">
                <div>
                  <h3>${price}</h3>
                  <p>${description}</p>
                  <p><img src="${Category}" alt=""></p>
                  <button class="card_btn">В корзину</button>
                </div>
              </div>`;
}

const before_group = (before_card) => {
const paren_before = document.querySelector(".card_before");
paren_before.innerHTML = "";

before_card.forEach(({img, price, description, Category}) => {
  let before = product_before(img, price, description, Category);
  paren_before.innerHTML += product_before(img, price, description, Category);
});
};
before_group(before_card)

let heard = document.querySelectorAll("#heart");

for (let i = 0; i < heard.length; i++) {
  heard[i].addEventListener("click", () => {
    heard[i].classList.toggle("heart2");
  });
}