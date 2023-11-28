function priceFunction(itemAmount, itemName){
        // Get the Amount
        const amount = getProductAmount(itemAmount);
        //console.log(amount);
        
        // Get the Product
        const product = getProductName(itemName);

        // Set the Item Name (Where to set product name, Product name)
        setProductName('new-item', product);

        //Set the Product Price (Product Price Field ID, The amount of product)
        setProductPrice('items-price', amount);

}

function discountFunction(couponCode, itemsPrice){
        // Get the coupon field value
        const couponCodeValue = getCouponCode(couponCode);
        //console.log(couponCodeID);

        // Get the Total Price Value
        const totalPriceValue = getTotalPrice(itemsPrice);
        //console.log(totalPriceValue);

        // Set Discounted Price
        const discountTotal = setDiscountPrice('items-discount', totalPriceValue);

        // Get the Total Pay Field
        const totalPay = setTotalPay('total-pay', totalPriceValue);
}


