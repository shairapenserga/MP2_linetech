import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { useNavigate } from "react-router-dom";
import './PasswordLoginWithFirebase.css'

function RegisterAndLogin() {
    const [login, setLogin] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (type == "signup") {
        createUserWithEmailAndPassword(database, email,password )
        .then(data => {
            console.log(data, "authData");  
            history("/checkout");
            })
            .catch((err) => {
                alert(err.code);
                setLogin(true);
              });
}else {
    signInWithEmailAndPassword(database, email, password)
    .then(data => {
        console.log(data, "authData");  
        history("/checkout");
})
.catch((err) => {
    alert(err.code);
  });
}
};
const handleReset = ()=>{
  alert("reset password success");
}




    return (
     <>
      <div className="my-form">
        <div className="login-form">
      <div className="row">
    <div
          className={login == false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}> Signup </div>
     
    
        <div className={login == true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}>  
          SignIn
          </div> 
          
          </div>
        </div> 
        </div>
            <div className="form-group">
            <h1>{login ? "SignIn" : "SignUp"}</h1>
            <form onSubmit={(e) => handleSubmit(e, login? "signin" : "signup")}>
                <input name="email" placeholder="Email"/>
                <br />
        <input name="password" type="password" placeholder="Password" />
        <br />
        <p onClick={handleReset}>Forgot Password?</p>
        <br />
        <button>{login ? "SignIn" : "SignUp"}</button>
      </form>
      
    </div>
    </>
     
  );
}
export default RegisterAndLogin;