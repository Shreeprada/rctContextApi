import React from "react";
import {useContext} from "react";
import {Cartcontext} from "../contexts/Cartcontext";
const Cart=()=>{
    const {count,setCount}=useContext(Cartcontext);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Add to cart</button>
        </div>
    );
};
export default Cart;