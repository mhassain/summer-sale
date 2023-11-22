function myFunction(itemAmount, itemName){
        // Get the Amount
        const amount = getProductAmount(itemAmount);
        //console.log(amount);

        // if(amount > 0) {
        //         document.getElementById('btn-purchase').addEventListener('click', function(){
        //             console.log("va");

        //         }) 
                
        //     }

        // Get the Product
        const product = getProductName(itemName);

        // Set the Item Name (Where to set product name, Product name)
        setProductName('new-item', product);

        //Set the Product Price (Product Price Field ID, The amount of product)
        setProductPrice('items-price', amount);

        //Set discount price (Discount field ID, The amount of the product)
        setDiscountPrice('items-discount', amount);

}

