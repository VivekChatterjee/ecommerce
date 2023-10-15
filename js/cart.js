let carts = document.querySelectorAll('.cart-btn')

let products = [
    {
        name: 'Frame Folding Walker',
        tag: 'framefoldwalk',
        price: 349,
        inCart: 0
    },
    {
        name: 'BP Monitor',
        tag: 'bpmonitor',
        price: 1099,
        inCart: 0
    },
    {
        name: 'Hearing aid',
        tag: 'hearaid',
        price: 449,
        inCart: 0
    },
    {
        name: 'Seat cushion',
        tag: 'seatcushion',
        price: 299,
        inCart: 0
    },
    {
        name: 'Walking Stick',
        tag: 'walkstick',
        price: 599,
        inCart: 0
    },
    {
        name: 'Brand New wheelchair',
        tag: 'featwheelch',
        price: 14999,
        inCart: 0
    },
    {
        name: 'heart rate monitor',
        tag: 'heartrate',
        price: 1499,
        inCart: 0
    },
    {
        name: 'wheelchair',
        tag: 'wheelch',
        price: 17999,
        inCart: 0
    },
    {
        name: 'frame folding walker',
        tag: 'featframefoldwalk',
        price: 699,
        inCart: 0
    },
    {
        name: 'walking stick',
        tag: 'featwalkstick',
        price: 599,
        inCart: 0
    },

]

for(let i = 0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

//whenever page is loaded, cart number is remembered
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart-amount').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
        document.querySelector('.cart-amount').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart-amount').textContent = 1;

    }

    setItems(product)
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
}

onLoadCartNumbers();