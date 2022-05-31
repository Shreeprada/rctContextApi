import React,{createContext} from "react";
export const Cartcontext=createContext();

export const CartProvider=({children})=>{
    const [count,setCount]=React.useState(0);
    return <Cartcontext.Provider value={{count,setCount}}>{children}</Cartcontext.Provider>
};