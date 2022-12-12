import { useState } from 'react';


function LoginForm({ onLogin, onAdminLogin }) {
  const [username, setUsername] = useState('');
  const [ code, setCode ] = useState('')

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onCodeChange(e) {
    setCode(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault(); 
    if(username) {  
      onLogin(username); 
    }
  }

  function onClick(e) {
    e.preventDefault();
    if(username, code) {
      onAdminLogin(username, code)
    }
  }

  return (
      <div className="login">
        <form className="login__form" action="#/login" onSubmit={onSubmit}>
          <label>
            <span>Username:</span>
            <input className="login__username" value={username} onChange={onChange}/>
          </label>
          <label>
            <span>Password:</span>
            <input className="login__code" type="password" value={code} onChange={onCodeChange}/>
          </label>
          <button className="login__button" type="submit">Login</button>
          <button className="admin_login__button" onClick={onClick}>Admin Login</button>
        </form>
      </div>
  );

}

export default LoginForm;
