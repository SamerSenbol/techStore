var shoppingCart = []

if(localStorage.shoppingCart)
{
    shoppingCart = JSON.parse(localStorage.shoppingCart)
    
}

 // This would also be a good place to initialize other parts of the UI
function initSite() 
{
    updaetCounterCart()
    addCartItemsToWebbPage();
   
}

/** Uses the loaded products data to create a visible product list on the website */
function addCartItemsToWebbPage() 
{
    // Check your console to see that the products are stored in the shoppingCart varible.
    
    // forloop -> shoppingCart
    var productsWrapper = document.querySelector(".CART-ITEMS")

    for (i = 0; i < shoppingCart.length; i++)
    {
        var product = createProductItem(shoppingCart[i])
        productsWrapper.appendChild(product)
    }

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when you've read them.
}

function createProductItem(product) 
{
    
    var container = document.createElement("div")
    container.className = ("cart-items")

    var image = document.createElement("img")
    image.src= "Assets/" + product.image
    container.appendChild(image)

    var header = document.createElement("h2")
    header.innerText = product.title
    container.appendChild(header)

    var price = document.createElement("h1")
    price.innerText=product.price +" kr"
    container.appendChild(price)

    var button=document.createElement("btn")
    button.classList.add("btn", "removeBtn")
    button.innerHTML='<i class="far fa-trash-alt"></i> Ta bort';
    ;
    button.onclick = function() {remove(product)}
    container.appendChild(button) 

    return container
}

function remove(product)
{
    for (i = 0; i<shoppingCart.length; i++) 
    {
        if (product===shoppingCart[i])
        shoppingCart.splice(i,1)
    } 
    localStorage.shoppingCart = JSON.stringify(shoppingCart)

    updaetCounterCart()
}

function updaetCounterCart()
{
    var numItems = document.querySelector(".numItems");
    numItems.innerHTML = shoppingCart.length;
}
