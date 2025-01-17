import React, { useContext } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import "./MedicineItem.css"
import axios from 'axios'
import MedicineContext from '../../store/medicines-context';

const MedicineItem = (props) => {
   const {addToCart}=useContext(CartContext);
   const {updateTotalQuantity}=useContext(MedicineContext);
   const addToCartHandler= ()=>{
      const item={...props.item, quantity:props.item.quantity-1, cartQuantity:1}
      updateTotalQuantity(item);
      addToCart(item);
   }
  return (
    <li>
        <Card id={props.item.name}>
           
            <h2>{props.item.name}</h2>
            <h3>  ${props.item.price}</h3>

            <p>{props.item.description}</p>
            <p>quantity available:{props.item.quantity}</p>
            <Button onClick={addToCartHandler}>Add +</Button>

        </Card>
    </li>
  )
}

export default MedicineItem