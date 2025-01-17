import React, { useContext } from 'react'
import "./Header.css";
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';

const Header = (props) => {
  const {items}=useContext(CartContext);
  return (
    <div className='header'>
        <h2>My Medical Store</h2>
        <Button onClick={props.showAddMedicineModal}>Add Medicine</Button>
        <Button onClick={props.showCartModal} closeCartModal={props.closeCartModal}>
          Cart
         <span className='cart-length'>{items.length}</span>
         </Button>
    </div>
  )
}

export default Header