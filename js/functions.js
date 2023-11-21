// Get Product Amount
function getProductAmount(CartAmount){
    const getProductAmount = document.getElementById(CartAmount);
    const getProductAmountStr = getProductAmount.innerText;
    const productAmount = parseFloat(getProductAmountStr);
    // console.log(productAmount);
    return productAmount;
}

// Get Product Name
function getProductName(ProductID){
    const nameOfTheProduct = document.getElementById(ProductID);
    const productOne = nameOfTheProduct.innerText;
    return productOne;
}

// Set Product Name
function setProductName(ItemName, ProductNum){
    var counter = 1; 
    const itemNameElement = document.getElementById(ItemName);
    itemNameElement.innerHTML += "<li>"+ " " + ProductNum + "</li>";
    //itemNameElement.innerText = ProductNum;
    counter++;
}

// Set Product Price
function setProductPrice(setPrice, ProductPrice){
    const NewitemsPrice = document.getElementById(setPrice);
    const NewitemsPriceStr = NewitemsPrice.innerText;
    const currentItmesPrice = parseFloat(NewitemsPriceStr);
    //console.log(currentItmesPrice);
    const priceOfItemElement = document.getElementById(setPrice);
    //console.log(ProductPrice);
    priceOfItemElement.innerText =  currentItmesPrice + ProductPrice;
}
