//=========== Price Functions =============//

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
function setProductPrice(PriceFieldID, ProductPrice){
    const NewitemsPrice = document.getElementById(PriceFieldID);
    const NewitemsPriceStr = NewitemsPrice.innerText;
    const currentItemsPrice = parseFloat(NewitemsPriceStr);
    //console.log(currentItmesPrice);

    // Get Price Field Again
    const getPriceFieldAgain = document.getElementById(PriceFieldID);
    //console.log(ProductPrice);
    getPriceFieldAgain.innerText =  currentItemsPrice + ProductPrice;
}


//=========== Discount Functions =============//

// Get Coupon Code Value
function getCouponCode(CouponFieldID){
    const couponCode = document.getElementById(CouponFieldID);
    const couponCodeValue = couponCode.value;
    //console.log(couponCodeValue);
    if(couponCodeValue == 'SELL200'){
        return couponCodeValue;
        //console.log(couponCodeValue);
    }else{
        return (alert("Wrong Coupon Code!"));
        //console.log('wrong!');
    }
}

function getTotalPrice(ItemsPriceID){
    const totalPrice = document.getElementById(ItemsPriceID);
    const totalPriceValue = totalPrice.innerText;
    //console.log(totalPriceValue);
    return totalPriceValue;
}

// Set discount Price
function setDiscountPrice(DiscountFieldID, TotalPriceValue){
    const getDiscountField = document.getElementById(DiscountFieldID);
    const discountFieldStr = getDiscountField.innerText;
    const discountField = parseFloat(discountFieldStr);
    //console.log(discountField);

    // Get Discount Field Again
    const getDiscountFieldAgain = document.getElementById(DiscountFieldID);

    // Set Discounted Price
    getDiscountFieldAgain.innerText = (TotalPriceValue * 20) / 100;
}

// Set Total Pay 
function setTotalPay(TotalPayID, TotalPriceValue){
    const getDiscountedField = document.getElementById('items-discount');
    const getDiscountedFieldStr = getDiscountedField.innerText;
    const discountedFieldPrice = parseFloat(getDiscountedFieldStr);
    //console.log(discountedFieldPrice);

    // Get the total Pay Field
    const getTotalPayField = document.getElementById(TotalPayID);
    const getTotalPayFieldStr = getTotalPayField.innerText;
    const totalPayField = parseFloat(getTotalPayFieldStr);
    //console.log(totalPayField);

    // Get total pay field again
    const totalPayFieldAgain = document.getElementById(TotalPayID);

    totalPayFieldAgain.innerText = TotalPriceValue - discountedFieldPrice;
}