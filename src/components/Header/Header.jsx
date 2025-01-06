import React from 'react'
import "./Header.css";
import Button from '../UI/Button';

const Header = (props) => {
  return (
    <div className='header'>
        <h2>My Medical Store</h2>
        <Button onClick={props.showAddMedicineModal}>Add Medicine</Button>
        <Button onClick={props.showCartModal} closeCartModal={props.closeCartModal}>Cart</Button>
    </div>
  )
}

export default Header