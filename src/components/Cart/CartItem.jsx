import React, { useContext, useEffect, useState } from 'react'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'
import "./CartItem.css"
import Card from '../UI/Card'
const CartItem = (props) => {
    const [itemQuantity, setItemQuantity]=useState(props.item.cartQuantity);
    const { removeFromCart, updateCartQuantity}=useContext(CartContext);
    const removeCartItemHandler=()=>{
        removeFromCart(props.item)
    }
    const incrementButtonHandler=()=>{
        setItemQuantity((prev)=>prev+1);
    }
    const decrementButtonHandler=()=>{
        if(itemQuantity === 1) {
            removeFromCart(props.item._id);
            return;
        }
        setItemQuantity((prev)=>prev-1);
    }
    useEffect(()=>{
        updateCartQuantity({...props.item,cartQuantity:itemQuantity})
    },[itemQuantity])
  return (
    <Card>
        <h2>{props.item.name}</h2>
        <h3>${props.item.price}</h3>
        
        <Button onClick={incrementButtonHandler}>+</Button>
        <Button onClick={decrementButtonHandler}>-</Button>
        <h6>X{itemQuantity}</h6>
        <Button onClick={removeCartItemHandler}>X</Button>
    </Card>
  )
}

export default CartItem