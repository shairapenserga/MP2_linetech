import React from "react";
import { signOut } from "firebase/auth";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";



function HomeScreen(){
    const history = useNavigate()


    const handleClick = () =>{ 
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')    
        })
    }


    return(
        <div>
            <h1>Home</h1>
            <button onClick={handleClick}>SignOut</button>
        </div>
    )
}
export default HomeScreen;


