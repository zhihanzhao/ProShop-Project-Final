import LoginForm from './LoginForm'
import {
  LOGIN_STATUS, USER_TYPE,
} from './constants';


function Controls({ username, loginStatus, userType, onLogout, onLogIn, onAdminLogin, showCart, showAdmin }) {
  return (
    <div className="controls">
      { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && <h3>Hello, {username}</h3>}
      { loginStatus === LOGIN_STATUS.PENDING && <p className='loading'>Loading page...</p>}
      { loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <LoginForm onLogin={onLogIn} onAdminLogin={onAdminLogin}/>}
      <div className='buttons'>
        { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && <button onClick={onLogout} className="controls__logout">Logout</button>}
        { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && userType === USER_TYPE.USER && <button onClick={showCart} className="controls__cart">Cart</button>}
        { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && userType === USER_TYPE.ADMIN && <button onClick={showAdmin}>Add product</button>}
      </div>
    </div>
  );
}

export default Controls;
