import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import {useContext} from 'react';
import Cart from "./Cart";

const Body=()=>{
    const {isAuth}=useContext(AuthContext);
    return (
        <div>
            {isAuth?"Logged In":"Logged Out"}
            <Cart/>
        </div>
    );
};
export default Body;