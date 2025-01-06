import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export const CartContextProvider=(props)=>{
    const [items, setItems]=useState([]);
    const [totalPrice, setTotalPrice]=useState(0);

    const addToCartHandler=(item)=>{
        if(items.find((ele)=>ele.id === item.id)) return;
        setItems((prev)=>[...prev, item]);
       
    }
    const removeFromCartHandler=(item)=>{
        setItems((prev)=>prev.filter((cartItem)=>cartItem.id !== item.id));
       
    }
    const updateCartQuantityHandler=(item)=>[
        setItems((prev)=>prev.map((prevItem)=>
        prevItem.id === item.id ? item : prevItem
        ))
    ]
    
    const cartItem={
        items:items,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler,
        updateCartQuantity:updateCartQuantityHandler,
    }

    return <CartContext.Provider value={cartItem}>{props.children}</CartContext.Provider>

}
export default CartContext;