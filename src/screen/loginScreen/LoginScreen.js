import React from 'react'

import './loginScreen.css';

function LoginScreen() {
     const handleLogin = () => {
    //    dispatch(login());
     };
    return (
      <div className="login">
        <div className="login__container">
          <h2>Youtube Clone</h2>
          <img
            src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
            alt=""
          />
          <button onClick={handleLogin}>Login With google</button>
          <p>This Project is made using YOUTUBE DATA API</p>
        </div>
      </div>
    );
}

export default LoginScreen
