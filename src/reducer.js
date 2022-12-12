import { LOGIN_STATUS, SHOW_PAGE, USER_TYPE, ACTIONS} from "./constants"
export const initialState = {
    error:"",
    showPage : SHOW_PAGE.MAIN,
    userType : USER_TYPE.NONE,
    productList: {},
    loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
    username: "",
    userCart: {},
    userAddress: "",
    userCardNumber: "",
    totalPrice:0,
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.USER_LOG_IN:
            return{
                ...state,
                username: action.username,
                loginStatus: LOGIN_STATUS.IS_LOGGED_IN,
                userType: USER_TYPE.USER,
            };

        case ACTIONS.ADMIN_LOG_IN:
            return{
                ...state,
                username: action.username,
                loginStatus: LOGIN_STATUS.IS_LOGGED_IN,
                userType: USER_TYPE.ADMIN,
            };

        case ACTIONS.LOG_OUT:
            return{
                ...state,
                showPage : SHOW_PAGE.MAIN,
                userType : USER_TYPE.NONE,
                loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
                username: "",
                userCart: {},
                userAddress: "",
                userCardNumber: "",
                totalPrice:0,
            };
        
        case ACTIONS.UPDATE_USER_DATA:
            return{
                ...state,
                userAddress: action.data.address,
                userCart: action.data.cart,
                userCardNumber: action.data.cardNumber,
                totalPrice: action.data.totalPrice
            };

        case ACTIONS.UPDATE_PRODUCTS:
            return{
                ...state,
                productList: action.products,
            };
        
        case ACTIONS.UPDATE_CART:
            return{
                ...state,
                userCart: action.cart,
            };

        case ACTIONS.UPDATE_CART_TOTALPRICE:
            return{
                ...state,
                userCart: action.data.cart,
                totalPrice: action.data.totalPrice
            };

        case ACTIONS.UPDATE_ADDRESS_CARD:
            return{
                ...state,
                userAddress: action.data.address,
                userCardNumber: action.data.cardNumber
            };
            
        case ACTIONS.REPORT_ERROR:
            return{
                ...state,
                error: action.error || "ERROR",
            };

        case ACTIONS.SHOW_CART:
            return{
                ...state,
                showPage: SHOW_PAGE.CART
            };

        case ACTIONS.SHOW_ADMIN:
            return{
                ...state,
                showPage: SHOW_PAGE.ADMIN
            };

        case ACTIONS.SHOW_MAIN:
            return{
                ...state,
                showPage: SHOW_PAGE.MAIN
            };       


    }
}

export default reducer;