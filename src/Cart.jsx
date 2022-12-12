import CartItem from './CartItem';
import { useState } from "react";
import { SHOW_PAGE } from './constants';

function Cart({
    userCart,
    totalPrice,
    showMain,
    userAddress,
    userCardNumber,
    onCheckout,
    onSaveInformation,
    addCart,
    onDeleteCartItem,
}) {
  const SHOW = {  // a constant used only in this component
    PENDING: 'pending',
    EMPTY: 'empty',
    Cart: 'cart',
  };
  
  let show;
  if( !Object.keys(userCart).length){
    show = SHOW.EMPTY;
  }else{
    show = SHOW.Cart;
  }

     const [ address, setAddress ] = useState(userAddress)
     const [ cardNumber, setCardNumber ] = useState(userCardNumber)
     const [ save, setSave ] = useState(false)


    const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };

    function onAddressChange(e) {
        setAddress(e.target.value);
      }
    
    function onCardNumberChange(e) {
        setCardNumber(e.target.value);
    }

    const handleSave = () => {
        setSave(!save);
      };
    
      function onSubmit(e) {
        e.preventDefault();
        if(address && cardNumber) {
          onCheckout(); 
          if(save){
            onSaveInformation(address, cardNumber);
          }
          window.alert("You checkout successfully!")
        }
      }


    return(
        <div className="cart">
            <button className="cart_back" onClick={showMain}>Back</button>
            {show === SHOW.Cart && <div className="cartInfo">
              <div className="productList">
                  <ul className="products">
                      { Object.values(userCart).map( item => (
                          <li className="productItem" key={item.id}>
                              <CartItem
                              item = {item}
                              addCart = {addCart}
                              onDeleteCartItem = {onDeleteCartItem}
                              />
                          </li>
                      ))}
                  </ul>
                  <h2 className='total_price'>Total price: ${totalPrice.toFixed(2)}</h2>
              </div>
              <div className="userInformation">
                  <form className="checkout_form" action="#/login" onSubmit={onSubmit}>
                      <div>
                        <label for="address">Address:</label>
                        <input type="text" name="address" value={address} onChange={onAddressChange}/>
                      </div>
                      <div>
                        <label for="card">Card Number:</label>
                        <input type="text" name="card" value={cardNumber} onChange={onCardNumberChange}/>
                      </div>
                      <div>
                        <Checkbox
                            label="Do you want to save address and card number for next purchase?"
                            value={save}
                            onChange={handleSave}/>
                      </div>
                      <button className="checkout_button" type="submit">Checkout</button>
                  </form>
              </div>
            </div>}
            {show === SHOW.EMPTY && <h2 className='empty_cart'>Your cart is empty</h2>}
        </div>
    );
}

export default Cart;