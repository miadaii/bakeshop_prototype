
//Initialize cart as an empty Array
const cart = [];
var cartQuantTotal = 0;

//shopping cart setup on loading page
let basketNull = false;
let basketNull2 = false;

let template = document.getElementById('cart-item-template');

  // function that removes a particular item (obj) from the shopping cart
  function removeItem(obj) {
    // retrieve the stored value of the cart items so that we can modify it
    var cartItemsString = localStorage.getItem("itemObject")

    console.log(cartItemsString);

    
    if (cartItemsString !== null) {
      var cartItems = JSON.parse(cartItemsString) // successfully loaded in the cart items


      // find the index of the input object in the list
      var ind = cartItems.findIndex(function (item) {
        
        console.log(item.glaze);

        return item.glaze === obj.glaze && item.quantity === obj.quantity
      })
      
      console.log("ind " + ind)
      if (ind !== -1) {
        // remove item from the list
        cartItems.splice(ind, 1)
        console.log(cartItems);
        // update the stored value
        localStorage.setItem('itemObject', JSON.stringify(cart))
        // re-render the page to reflect changes
      }
    }
  }

window.onload=function(){

  //get value of local storage
  let cart1 = JSON.parse(localStorage.getItem('shoppingCart'));

  let updateCart = JSON.parse(localStorage.getItem('itemObject'));
  console.log(updateCart);

  // checks if values exist in local storage + updates cart
  if(cart1 !== null){

    console.log(cart1);
    var element = document.getElementById("result");
     element.innerHTML = cart1.toString();


     console.log(element.innerHTML);

    var subtotalPrice = document.getElementById("subtotal");
    var totalPrice = document.getElementById("estimatedTotal");

    var total = cart1*3;
    console.log(total.toString());
    subtotalPrice.innerHTML = "$" + total.toString() + ".00";
    console.log(subtotalPrice.innerHTML)

    totalPrice.innerHTML = "$" + total.toString() + ".00";


    basketNull = true;

    // subtotalPrice.appendChild(total);
  }

  console.log(updateCart);
  if(updateCart !== null){

    var cartList = document.getElementById("item-append");
    cartList.innerHTML = "";


    console.log(cartList);
    console.log(updateCart[0].glaze);
    console.log(updateCart[0].title);



    if (updateCart.length === 0) {
      // if nothing is in the cart, let's show the placeholder text
      document.getElementById("placeholder-text").style.visibility = "visible"
    }
    else{
      // items are in the cart, hide the placeholder text
      document.getElementById("placeholder-text").style.visibility = "hidden"
      for(let i = 0; i<updateCart.length; i++){

        let cartItems = updateCart[i];

        // var itemNode = document.createElement("li")
        
        // itemNode.classList.add("item");        

        // itemNode.innerText = cartItems.title + cartItems["glaze"] + " (" + cartItems.quantity + ")" + cartItems.price ;

        // cartList.appendChild(itemNode)



        var cartDiv = document.createElement("div");
        cartDiv.classList.add("item-categ")

        var lineDiv = document.createElement("div");
        lineDiv.classList.add("item-categ")

        var subCartDiv = document.createElement("div");
        subCartDiv.classList.add("sub-item-categ")

        var subCartDiv2 = document.createElement("div");
        subCartDiv2.classList.add("sub-item-categ2")

        var subCartDiv3 = document.createElement("div");
        subCartDiv3.classList.add("sub-item-categ3")

  



        var cartImage = document.createElement("img");
        cartImage.src = "source/bun2.png"
        cartImage.classList.add("item-image")
        cartDiv.appendChild(cartImage);




        var cartTitle = document.createElement("div");
        subCartDiv.classList.add("item-title");
        cartTitle.innerText = cartItems.title;
        subCartDiv.appendChild(cartTitle);


        var cartGlaze = document.createElement("span");
        subCartDiv.classList.add("item-glaze");
        cartGlaze.innerText = cartItems.glaze;
        subCartDiv.appendChild(cartGlaze);

        var cartQuant = document.createElement("span");
        subCartDiv2.classList.add("quant-cart");
        cartQuant.innerText = cartItems.quantity;
        subCartDiv2.appendChild(cartQuant);

        var cartQuant = document.createElement("span");
        subCartDiv3.classList.add("price-cart");
        cartQuant.innerText = cartItems.price;
        subCartDiv3.appendChild(cartQuant);



        var cartInfoItemRemove = document.createElement("a")
        cartInfoItemRemove.classList.add("remove")
        cartInfoItemRemove.innerText = "Remove"
        subCartDiv.appendChild(cartInfoItemRemove)

        
        var connectAttr = document.getElementById("appendTo")
        connectAttr.appendChild(cartDiv)

        var sepLine = document.createElement("hr");
        cartDiv.classList.add("line4");
        // cartDiv.appendChild(sepLine);

        // console.log(cartItems.quantity);
        // cartQuantTotal += parseInt(cartItems.quantity);
        // console.log(cartQuantTotal); 


        cartDiv.appendChild(subCartDiv);        
        cartDiv.appendChild(subCartDiv2);
        cartDiv.appendChild(subCartDiv3);
        cartDiv.appendChild(sepLine);


        // we have to get the cartItem eagerly, but return a function that executes lazily
        cartInfoItemRemove.onclick = (function (cartItems, cartDiv) {
          return function() {
            // removeItem(cartItems)
            cartDiv.parentNode.removeChild(cartDiv)
            console.log(cartDiv);
            
            var element3 = document.getElementById("result");
            var tempNum = parseInt(result.innerHTML);
            var tempNum2 = parseInt(cartItems.quantity);
            


            console.log(tempNum);
            console.log(tempNum2);
            tempNum -= tempNum2;
            console.log(tempNum);
            
            console.log(result);
            // result = tempNum.toString();
            // console.log(result);

            element3.innerHTML = tempNum.toString();
            counter = element3.innerHTML;
            localStorage.setItem('shoppingCart', JSON.stringify(element3.innerHTML));

            // console.log(newResult.toString());
            // result = newResult;
            



          }
         }(cartItems, cartDiv))
         


        
      
      }
    
    }


     basketNull2 = true;
  }
}

// function calculatePrice(){
//   var subtotalPrice = document.getElementsByClassName("subtotal");
//   var total = parseInt(result) * 3;
//   console.log(total)
// }



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


//define custom object 
function BunItem(title, quantity, price, glaze) {
  this.title = title;
  this.quantity = quantity;
  this.glaze = glaze;
  this.price = price;
  // this.imageSrc = imageSrc;
}


//addtocart function creates a Product object and adds it to the cart array
function addToCart(title, quantity, price, glaze) {
  const itemObject = new BunItem(title, quantity, price, glaze);
  cart.push(itemObject);

  localStorage.setItem('itemObject', JSON.stringify(cart));
  console.log(cart);
}


var counter;

if(localStorage.getItem('shoppingCart')==null){
  counter = 0;
}
else{
  counter = Number(localStorage.getItem('shoppingCart'));
}

let mainForm = document.getElementById("mainForm");

// document.mainForm.onclick = function(){
// }

let basket2 = document.getElementsByClassName("button1");

var bunTitle = '';
var radVal;
var bunPrice;
var glazeSelection;

for(var cartButton of basket2){
    cartButton.onclick = function() {

        var customizeOptionsNode = this.parentNode
        // console.log("customizeOptionsNode", customizeOptionsNode)
        
        var bunCollection = document.getElementsByClassName("button1");
        var tempArray = Array.from(bunCollection);
        console.log(tempArray[0]);
        // var checkTitle = document.getElementById("button1").parentNode.parentNode.parentNode.children[1].children[0].children[1].children[2].innerHTML;
        // console.log(checkTitle);

        // if(checkTitle == )
        //takes in bun options
        bunTitle = document.getElementsByClassName('heading4')[0].innerText;
        
        console.log(bunTitle);
        console.log(document.getElementsByClassName('heading4')[1].innerText);

        var bunPrice = document.getElementsByClassName('item-price')[0].innerText; 

        //takes in glaze input
        var glazingDivNode = customizeOptionsNode.children[1]
        var glazeSelection = glazingDivNode.getElementsByClassName('my-select')[0].value;
        // console.log(glazeSelection);

        //takes in quantity input
        var radioButtonList = customizeOptionsNode.children[0].getElementsByClassName('qty-btn');
        for (radioButton of radioButtonList) {
            if(radioButton.checked){
              radVal = radioButton.value;
              counter += parseInt(radVal);
              let element = document.getElementById("result");
              element.innerHTML = counter.toString();

              localStorage.setItem('shoppingCart', JSON.stringify(counter));
            }
        }

        addToCart(bunTitle, radVal, bunPrice, glazeSelection); 
    }    
};

// function updatePage(){
// let templateElement = document.getElementById('my-template');
// for(let i = 0; i<cart.length; i++){
//   let 
// }
// }
//make sure to append child


// console.log(cart);
// console.log(bunTitle);








