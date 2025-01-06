import React, { useContext, useEffect, useState } from 'react'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import "./Cart.css"

const Cart = (props) => {
  const {items}=useContext(CartContext);
  const [totalPrice, setTotalPrice]=useState(0);
  useEffect(() => {
  
    const newTotalPrice = items.reduce((acc, item) => acc + item.price * item.cartQuantity, 0);
    setTotalPrice(newTotalPrice);
  }, [items]);
  return (
    <Modal>
        <div  className='cart-items'>
          <h2>My Cart</h2>
          <ul>
            {
              items.map((item)=>{
               return <CartItem key={item.name} item={item} closeCartModal={props.closeCartModal}/> 
            })
            }
          </ul>
        </div>
        <h2>TotalPrice:{totalPrice}</h2>
        <Button onClick={props.closeCartModal}>close</Button>
    </Modal>
    
  )
}

export default Cart