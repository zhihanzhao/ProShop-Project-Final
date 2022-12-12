const uuid = require('uuid').v4;

function makeCart() {
    const id1 = uuid();

    const Cart = {};
    const products = {}
    let totalPrice = 0;


    Cart.getProducts = function getProducts() {
        return products;
      };

    Cart.getTotalPrice = function getTotalPrice() {
        return totalPrice;
    }

    
    Cart.contains = function contains(id) {
        return !!Cart[id];
    };

    Cart.addProduct = function addProduct(id, name, price, image, product_type){
        if(!!products[id]){
            products[id].count = products[id].count+1;
            totalPrice = totalPrice + price;
            return;
        }
        products[id] = {
            id,
            name,
            price,
            image,
            product_type,
            count:1
        };
        totalPrice = totalPrice + price;
        return;
    };

    Cart.deleteProduct = function deleteProduct(id) {
        const price = products[id].price;
        if(products[id].count > 1){
            products[id].count = products[id].count-1;
            totalPrice = totalPrice - price;
            return;
        }
        delete products[id];
        totalPrice = totalPrice - price;
        return;
    };
    
    Cart.checkout = function checkout() {
        totalPrice = 0;
        for( const key in products){
            delete products[key];
        }
        return
    };
    

    return Cart;
    
}


module.exports = {
    makeCart,
};