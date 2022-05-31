import React from "react";
import {useContext} from "react";
import {Cartcontext} from "../contexts/Cartcontext";
import {AuthContext} from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
const Navbar=()=>{
    const {count} =useContext(Cartcontext);
    const {isAuth,login,logout}=useContext(AuthContext);
    const {isLight,toggleTheme}=useContext(ThemeContext);
    return (
        <div>
            <button onClick={()=>{
                if(isAuth)logout();
                else login("S","B");
            }}>{isAuth?"Logout":"Login"}</button>
        <h3>Cart:{count}</h3>
        <button onClick={toggleTheme}>Theme</button>
        
        
        </div>
    );
};
export default Navbar;