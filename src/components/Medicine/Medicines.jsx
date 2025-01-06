import React, {useContext} from 'react'
import MedicineContext from '../../store/medicines-context'
import MedicineItem from './MedicineItem';
import "./Medicines.css"

const Medicines = () => {
    const {items}=useContext(MedicineContext);
    console.log(items);
  return (
    <div className='medicines-list'>
        <ul>
            {
                items.map((item)=><MedicineItem key={item.name} item={item}></MedicineItem>)
            }
        </ul>
    </div>
  )
}

export default Medicines