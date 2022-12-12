const uuid = require('uuid').v4;

function makeProductList() {
    const id1 = uuid();
    const id2 = uuid();
    const id3 = uuid();
    const id4 = uuid();
    const id5 = uuid();
    const id6 = uuid();

    const productList = {};
    const products = {
        [id1] : {
            id : id1,
            name : "Airpods Wireless Bluetooth Headphones",
            price : 89.99,
            image : '/images/airpods.jpg',
            product_type : "Electronics"
        },
        [id2] : {
            id : id2,
            name : "iPhone 11 Pro 256GB Memory",
            price : 599.99,
            image :"/images/phone.jpg",
            product_type : "Electronics"
        },
        [id3] : {
            id : id3,
            name : "Cannon EOS 80D DSLR Camera",
            price : 929.99,
            image : '/images/camera.jpg',
            product_type : "Electronics"
        },
        [id4] : {
            id : id4,
            name : "Sony Playstation 4 Pro White Version",
            price :399.99,
            image: '/images/playstation.jpg',
            product_type : "Electronics"
        },
        [id5] : {
            id : id5,
            name: 'Logitech G-Series Gaming Mouse',
            price : 49.99,
            image: '/images/mouse.jpg',
            product_type : "Electronics"
        },
        [id6] : {
            id : id6,
            name: 'Amazon Echo Dot 3rd Generation',
            price : 29.39,
            image: '/images/alexa.jpg',
            product_type : "Electronics"
        },

    }

    productList.getProducts = function getProducts() {
        return products;
      };

    productList.contains = function contains(id) {
        return !!products[id];
    };

    productList.addProduct = function addProduct(name, price, image, product_type){
        const id = uuid();
        products[id] = {
            id,
            name,
            price,
            image,
            product_type,
        };
        return id;
    }

    productList.getProduct = function getProduct(id) {
        return products[id];
    }

    productList.deleteProduct = function deleteProduct(id) {
        delete products[id];
    }
    

    return productList;
    
}


module.exports = {
    makeProductList,
};