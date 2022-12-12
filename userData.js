const cart = require('./cart')

function makeUserData() {
    const userData = {};
    const data = {
        cart: cart.makeCart(),
        address: '',
        cardNumber: '',
    }
    
    userData.getUserData = function getUserData(){
        return data;
    }

    userData.getCart = function getCart() {
        return data.cart;
    }

    userData.updateInformation = function updateInformation(address, cardNumber) {
        data.address = address;
        data.cardNumber = cardNumber;
        return;
    }
    
    return userData;
};

module.exports = {
    makeUserData,
}