import { useState, useEffect, useReducer, useRef } from 'react';
import './App.css';
import Products from './Products'
import Cart from './Cart'
import AdminPage from './AdminPage'
import Header from './Header';
import { initialState } from './reducer';
import reducer from './reducer';
import Footer from './Footer';

import {
  LOGIN_STATUS,
  CLIENT,
  SERVER,
  PAGE,
  SHOW_PAGE,
  USER_TYPE,
  ACTIONS,
} from './constants';

import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchProducts,
  fetchCheckout,
  fetchUserData,
  fetchUpdateInformation,
  fetchAddCart,
  fetchDeleteCartItem,
  fetchAddProduct,
  fetchAdminLogin,
} from './services';
import Controls from './Controls';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  function onLogin( username ) {
    fetchLogin(username)
    .then( data => {
      dispatch({type:ACTIONS.UPDATE_USER_DATA, data});
      dispatch({type:ACTIONS.USER_LOG_IN, username});

      window.alert("You login succesfully!")
    })
    .catch( err => {
      if( err.error === 'auth-insufficient' || err.error === 'required-username' ){
        window.alert("username and password are wrong")
      }
    });
  }

  function onAdminLogin( username, code ) {
    fetchAdminLogin( username, code )
    .then( fetchedUserName => {
      dispatch({type: ACTIONS.ADMIN_LOG_IN, username})
    })
    .catch( err => {
      if( err.error === 'auth-insufficient'){
        window.alert("username and password are wrong")
      }
    });
  }

  function onLogout() {
    dispatch({type: ACTIONS.LOG_OUT})
    fetchLogout() 
    .catch( err => {
      dispatch({type: ACTIONS.REPORT_ERROR, error: err?.error});
    });
  }

  
  function getProducts() {
    fetchProducts()
    .then( products => {
      dispatch({type: ACTIONS.UPDATE_PRODUCTS, products})
    })
    .catch( err => {
      dispatch({type: ACTIONS.REPORT_ERROR, error: err?.error});
    });
  }

  function onCheckout() {
    fetchCheckout()
    .then(cart => {
      dispatch({type: ACTIONS.UPDATE_CART, cart})
    })
    .catch( err => {
      dispatch({type: ACTIONS.REPORT_ERROR, error: err?.error});
    })
  }

  function addProduct(name, price, image, type){
    fetchAddProduct(name, price, image, type)
    .then( products => {
      dispatch({type: ACTIONS.UPDATE_PRODUCTS, products})
    })
    .catch( err => {
      dispatch({type: ACTIONS.SET_ERROR, err})
    })
  }

  function onDeleteCartItem(id) {
    fetchDeleteCartItem(id)
    .then( data => {

      dispatch({type: ACTIONS.UPDATE_CART_TOTALPRICE, data})
  
    })
    .catch ( err => {
      dispatch({type: ACTIONS.SET_ERROR, err})
    })
    
  }


  function onSaveInformation(address, cardNumber){
    fetchUpdateInformation(address, cardNumber)
    .then( data => {

      dispatch({type: ACTIONS.UPDATE_ADDRESS_CARD, data})

    })
    .catch( err => {
      dispatch({type: ACTIONS.SET_ERROR, err})
    })
  }

  function addCart(id) {
    fetchAddCart(id)
    .then( data => {

      dispatch({type: ACTIONS.UPDATE_CART_TOTALPRICE, data})

    })
    .catch( err => {
      if( err.error === 'auth-missing'){
        window.alert("Please login before using cart!")
      }
      
    })
  }

  function showCart(){
    dispatch({type: ACTIONS.SHOW_CART})
  }

  function showAdmin(){
    dispatch({type: ACTIONS.SHOW_ADMIN})
  }

  function showMain(){
    dispatch({type: ACTIONS.SHOW_MAIN})
  }

  function checkForSession() {
    fetchSession()
    .then( session => {
      const username = session.username
      if( username === 'admin'){
        dispatch({type: ACTIONS.ADMIN_LOG_IN, username})
      }else{
        dispatch({type: ACTIONS.USER_LOG_IN, username})
      }
      return fetchUserData(); 
    })
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION })
      }
      return Promise.reject(err);
    })
    .then( data => {
      dispatch({type:ACTIONS.UPDATE_USER_DATA, data});
    })
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) {
        dispatch({type: ACTIONS.LOG_OUT})
        return;
      }
      dispatch({type: ACTIONS.REPORT_ERROR, error: err?.error});
    });

  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  
  useInterval(() => {
    getProducts();
  }, 20000);


  
  useEffect(
    () => {
      getProducts()
      checkForSession()
    },
    []
  )
  

  return (
    <div className="App">
      <Header />
      <main>
        <Controls 
        username = {state.username}
        loginStatus={state.loginStatus}
        userType = {state.userType}
        onLogout = {onLogout}
        onLogIn = {onLogin}
        onAdminLogin = {onAdminLogin}
        showAdmin = {showAdmin}
        showCart = {showCart} />

        {state.showPage === SHOW_PAGE.MAIN && <Products productList={state.productList} addCart = {addCart}/>}
        {state.showPage === SHOW_PAGE.CART && <Cart
          userCart={state.userCart}
          totalPrice = {state.totalPrice} 
          showMain = {showMain}
          userAddress={state.userAddress}
          userCardNumber={state.userCardNumber}
          onCheckout={onCheckout}
          onSaveInformation={onSaveInformation}
          addCart = {addCart}
          onDeleteCartItem = {onDeleteCartItem}
          />}
        {state.showPage === SHOW_PAGE.ADMIN && <AdminPage
          showMain = {showMain}
          addProduct = {addProduct}
        />}
      </main>
      <Footer />

    </div>
  );
}

export default App;
