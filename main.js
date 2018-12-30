var listOfProducts;
var shoppingCart = []

if(localStorage.shoppingCart)
{
    shoppingCart = JSON.parse(localStorage.shoppingCart) 
}
/* Geting products from the json file and store them in a gobal variable */
function loadProducts() 
{
    fetch("./products.json")
    .then(function(response) 
    {
        return response.json();
    })
    .then(function(products) 
    {
        listOfProducts = products;
        addProductsToWebpage();
    });
}
function    initSite() 
{
            updaetCounterCart()
            loadProducts();
    // This would also be a good place to initialize other parts of the UI
}
/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() 
{
    // Check your console to see that the products are stored in the listOfProducts varible.
    
    // forloop -> listOfProducts
    var productsWrapper = document.querySelector(".shop-items")

    for (i = 0; i < listOfProducts.length; i++)
    {
        var product = createProductItem(listOfProducts[i])
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
    container.classList=("shop-items");
    

    var header = document.createElement("h3")
    header.innerText = product.title
    container.appendChild(header)

    var description = document.createElement("h1")
    description.innerText = product.description
    container.appendChild(description) 

    var image = document.createElement("img")
    image.src= "Assets/" + product.image
    container.appendChild(image)

    var price = document.createElement("h5")
    price.innerText=product.price +" kr"
    container.appendChild(price)

    var button=document.createElement("btn")
    button.classList.add("btn", "btn-primary","shop-item-button")
    button.innerHTML='<i class="fas fa-cart-arrow-down"></i>  Lägg till i kundvagnen';
    button.onclick = function(){addToCart(product)}
    container.appendChild(button) 
    return container
}
function addToCart(product) {
    shoppingCart.push(product)
    localStorage.shoppingCart = JSON.stringify(shoppingCart)
    updaetCounterCart()
}
function updaetCounterCart(){
    var numItems = document.querySelector(".numItems");
    numItems.innerHTML = shoppingCart.length;
}