import { createContext, useState } from "react";


const MedicineContext=createContext();


export const MedicineContextProvider=(props)=>{
    const [items, setItems]=useState([]);
    const addMedicineHandler=(item)=>{
        setItems((prev)=> [...prev,{
            ...item,
            id:Math.random().toString()
        }]);
    }
    const medicine={
        items:items,
        addMedicine:addMedicineHandler
    }
   return <MedicineContext.Provider value={medicine}>{props.children}</MedicineContext.Provider>
}

export default MedicineContext;
