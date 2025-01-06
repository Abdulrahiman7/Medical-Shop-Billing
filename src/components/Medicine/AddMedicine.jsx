import React, {useContext, useState} from 'react'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import MedicineContext from '../../store/medicines-context';
import "./AddMedicine.css"

const AddMedicine = (props) => {
    const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [quantity, setQuantity] = useState("");
const {addMedicine}=useContext(MedicineContext);
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        addMedicine({name,description,price,quantity});
        props.closeAddMedicineModal();
    }
  return (
    <Modal>
        <div className='addMedicine'>
            <h2>Add New Medicine</h2>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor="name">Medicine Name</label>
                <input type="text" value={name} id='name' onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="description">Description</label>
                <input type="text" value={description} id='description' onChange={(e) => setDescription(e.target.value)}/>
                <label htmlFor="price">Price per Unit</label>
                <input type="number" value={price} id='price' onChange={(e) => setPrice(e.target.value)}/>
                <label htmlFor="Quantity">Quantity Available</label>
                <input type="number" value={quantity} id='Quantity' onChange={(e) => setQuantity(e.target.value)}/>
                <Button type="submit">Add Medicine</Button>
            </form>
            <Button onClick={props.closeAddMedicineModal}>close</Button>
        </div>
    </Modal>
    
  )
}

export default AddMedicine