const product = [

    {
        id:0,
        Image:'CARS/IMG_3920.WEBP',
        name:"Store Brand Eggs",
        price:9.98,
    },
    {
        id:1,
        Image:'CARS/Hawaiian.JPG',
        name:"Fruit Punch Juice",
        price:5.98,
    },
    {
        id:2,
        Image:'CARS/bread.JPG',
        name:"Store Brand Bread",
        price:3.98,
    },
    {
        id:3,
        Image:'CARS/ramen.JPG',
        name:"12pk Noodles",
        price:7.50,
    },
    {
        id:4,
        Image:'CARS/water.JPG',
        name:"40pk Deer Park Water",
        price:6.49,
    },
];
const categories = [...new Set(product.map((item)=>{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{

    var{Image,name,price} = item;
    return(
        `<div class= 'box'>
        <div class='img-box'>
        <img class= 'images' src=${Image}></img>
        </div>
        <div class= 'bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')
 
var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total = 0 ;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+" .00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>{
            var {Image, name, price} = items;
            total= total + price;
            document.getElementById("total").innerHTML = "$ "+total+" .00";
            return(
                `<div class= 'cart-item'>
                <div class= 'row-img'>
                <img class="rowimg"src="${Image}">
                </div>
                <p style= 'font-size:12px;'>${name}</p>
                <h2 style= 'font-size:15px;'>$ ${price}.00</h2>`+
                "<i class= 'fa-solid fa trash' onclick='delElement("+(j++)+")'></i></div>" 
            );
        }).join('');
    }
}