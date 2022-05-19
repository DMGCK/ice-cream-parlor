const iceCream = [{name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1}, {name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1}, {name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2}]
const vessels = [{name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2}, {name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4}]
const toppings = [{name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1}, {name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2}]
const fullMenu = [iceCream, vessels, toppings];
let inCart = [];

function draw(inx) {
  let template = '';
  const ids = ['flavors', 'cones', 'toppings'];
  fullMenu[inx].forEach(a => {
    const stringTemplate = 
      `<div class="col-3 mt-1 menu-item bg-secondary border border-dark text-light p-3" onclick="findObj('${a.name}')">
        <img class="menu-img w-100 border rounded" height="100px" src="${a.image}" alt="">
        <div class="fs-3"><u>${a.name}</u></div>
        <div>$${a.price}</div>
    </div>`; 
    template += stringTemplate;
  });
  document.getElementById( ids[inx] ).innerHTML = template;
}

function buy(arg) { 
  if (!inCart.find(a => (a == arg))) {
    arg.count = 1;
    inCart.push(arg);    
  }
  else {
    arg.count++;
  }
  drawCart();
}

function findObj(lost) {
  // let result = {};
  fullMenu.forEach(a => {
    let found =  a.find(b => b.name === lost)
    if (found) {
      console.log(found); 
      buy(found); // NOTE calls another func at end of func
    } 
  })
}

function drawCart() {
  let temp = '';
  let total = 0;
  const totalID = document.getElementById('total-price');
  const rowID = document.getElementById('row-represent')

  inCart.forEach(a => {
    total += (a.count * a.price);
    temp +=  `<div class="bg-light card preview-item-cone px-2 py-1">
    <div class="">${a.name} - <span>${a.count}</span></div>
    <div class="">$${a.price}</div>
    </div> `
  })
  rowID.innerHTML = temp;
  totalID.innerText = total.toFixed(2);
}

function reset() {
  inCart = [];
  drawCart();
}


// NOTE Startup

for (let i = 0; i < fullMenu.length; i++) {
  draw(i);
}

