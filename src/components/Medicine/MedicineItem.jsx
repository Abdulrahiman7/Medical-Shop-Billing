import React, { useContext } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import "./MedicineItem.css"
const MedicineItem = (props) => {
   const {addToCart}=useContext(CartContext);
   const addToCartHandler=()=>{
  
 
    console.log(props.item);
    const item={...props.item, cartQuantity:1}
    addToCart(item);
   }
  return (
    <li>
        <Card id={props.item.name}>
           
            <h2>{props.item.name}</h2>
            <h3>  ${props.item.price}</h3>

            <p>{props.item.description}</p>

            <Button onClick={addToCartHandler}>Add +</Button>

        </Card>
    </li>
  )
}

export default MedicineItem