//shopping cart setup on loading page
let basketBoolean = false;

window.onload=function(){

  let cart = JSON.parse(localStorage.getItem('shoppingCart'));

  if(cart !== null){
    let element = document.getElementById("result");
     element.innerHTML = cart.toString();
     basketBoolean = true;

  }
}


// function storeInBasket() {
//   if (localStorage.setItem("shoppingCart") != null) {
//     loadCart();
// }
// }

// // Get basket
// function getBasket() {
//     cart = JSON.parse(localStorage.getItem('shoppingCart'));
//     let element = document.getElementById("result");
//     element.innerHTML = cart.toString();
// }


//constructor
function bunItem(title, price, imageSrc, quantity, glaze) {
  this.title = title;
  this.quantity = quantity;
  this.glaze = glaze;
  this.price = price;
  this.imageSrc = imageSrc;
}

// Store basket info


// function storeInputQuantity{

// }

// var arr = {};
// var addToBasketButtons = document.getElementsByClassName('button-basket');

//   for (var i = 0; i < addToBasketButtons.length; i++) {
//       var button = addToBasketButtons[i];
//       button.addEventListener('click', addToBasketClicked);
      
//   }

// function getQuantity(event){
//   var form = event.target;
//   var quantity = document.getElementById("test");
// }

// function addToBasketClicked(event) {
//   var button = event.target;
//   var bakeryItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
//   var title = bakeryItem.getElementsByClassName('heading4')[0].innerText;
//   var price = bakeryItem.getElementsByClassName('item-price')[0].innerText;
//   var imageSrc = bakeryItem.getElementsByClassName('bun')[0].src

//   console.log(title);
//   console.log(document.getElementsByClassName("bun-layout"));

//   var bakeryItemEdit = button.parentElement.parentElement.parentElement.parentElement;


//   var glaze = document.getElementById('bunLayout').value;
//   var glaze_value;

//   if(glaze =='1'){
//     if (document.getElementById('g1').checked) {
//       glaze_value = document.getElementById('g1').value;   
//     }
//   }
//   else if(glaze =='3'){
//     if (document.getElementById('g2').checked) {
//       glaze_value = document.getElementById('g2').value;   
//     }
//   }
//   else if(glaze =='6'){
//     if (document.getElementById('g3').checked) {
//       glaze_value = document.getElementById('g3').value;   
//     }
//   } 
//   else if(glaze =='12'){
//     if (document.getElementById('g4').checked) {
//       glaze_value = document.getElementById('g4').value;   
//     }
//   }  



// document.getElementById('results').innerHTML = glaze_value;



//   var quantity = document.getElementById("test");
//   console.log(form.elements["test"].value);

//   var form = document.getElementById("test").elements["test"].value;


//   var quantity = bakeryItemEdit.getElementsByClassName().innerText;

  // addItemtoBasket(title, price, imageSrc);
  // updateBasketTotal();


  // addItemToCart(title, price, imageSrc)
  // updateCartTotal()

  // console.log (bakeryItem.getElementsByClassName('heading4'))

  // document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
// }



// function addItemToBasket(title, price, imageSrc) {
//   var cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   var basketItems = document.getElementsByClassName('basket-items')[0]
//   var basketItemNames = basketItems.getElementsByClassName('cart-item-title')
//   for (var i = 0; i < basketItemNames.length; i++) {
//       if (cartItemNames[i].innerText == title) {
//           alert('This item is already added to the cart')
//           return
//       }
//   }







//for expanding menu
var coll = document.getElementsByClassName("collapsible");
var i;

function expandDown(elmt){
  elmt.classList.toggle("active");
  var content = elmt.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  } 
}



  
  // Add to basket
  // arr.addToBasket = function(name, quantity, glaze, price) {
  //   for(var item in cart) {
  //     if(cart[item].name === name) {
  //       cart[item].count ++;
  //       storeInBasket();
  //       return;
  //     }
  //   }
  //   var item = new bunItem(name, quantity, glaze, price);
  //   cart.push(item);
  //   storeInBasket();
  // }



  
  // document.getElementById("result").innerHTML=localStorage.getItem("ddvalue")



// calc.addEventListener('click', sumToVariable)





// var sum;

// function sumUp() {
//   let sum = [...document.querySelectorAll('input[type=radio]:checked')]
//     .reduce(
//       (acc, val) => acc + Number(val.value)
//       , 0
//     )
//   result.textContent = sum;
//   return sum;
// }

// function sumToVariable() {
//   sum = sumUp();
//   console.log(sum);
// }


//for counting cart

var counter = 0;


// document.forms["mainForm"].onclick = function(){
//   var radVal = document.mainForm.radio.value;
//   var newRadVal = parseInt(radVal);
 
//   console.log(newRadVal);    
//   console.log(counter);
  
//   counter += newRadVal;
//   console.log(newRadVal);
// }

console.log(document.mainForm.radio);
let mainForm = document.getElementById("mainForm");
console.log(mainForm)

document.mainForm.onclick = function(){
   // var radios = document.getElementsByName('radio');


}

let basket2 = document.getElementsByClassName("button1");

for(var basket of basket2){
    basket.onclick = function() {
        var radVal = document.mainForm.radio.value;
        var newRadVal = parseInt(radVal);
        counter += newRadVal;
        let element = document.getElementById("result");
        element.innerHTML = counter.toString();
        localStorage.setItem('shoppingCart', JSON.stringify(counter));
    }
}


