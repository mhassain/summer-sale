function myFunction(itemAmount, itemName){
        // Get the Amount
        const amount = getProductAmount(itemAmount);

        // Get the Product
        const product = getProductName(itemName);

        // Set the Item Name (Where to set product name, Product name)
        setProductName('new-item', product);

        //Set the Product Price (Where to set amount, The amount)
        setProductPrice('items-price', amount);

}

