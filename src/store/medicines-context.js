import { createContext, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";


const MedicineContext=createContext();

const getLocalItems=async ()=>{
    try{
        const localItems=localStorage.getItem('items');
        if(localItems) return JSON.parse(localItems);
        const getFromCrudResponse=await axios.get('https://crudcrud.com/api/caecbeafce0846a78202e6a893165c9c/medicine-products');
        const items=getFromCrudResponse.data;
        console.log(items);
        localStorage.setItem('items', JSON.stringify(items));
        return items;
    }catch(err)
    {
       console.log(err)
    }
}

export const MedicineContextProvider=(props)=>{

    const [items, setItems]=useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const localItems = await getLocalItems();
            setItems(localItems || []);
        };
        fetchItems();
    }, []);
    const addMedicineHandler=async (item)=>{
        try{
            const newMedicineResponse=await axios.post('https://crudcrud.com/api/caecbeafce0846a78202e6a893165c9c/medicine-products',item);
            console.log(newMedicineResponse.data);
            const localItems=JSON.parse(localStorage.getItem('items'));
            localStorage.setItem('items',JSON.stringify([...localItems, newMedicineResponse.data]));
        setItems((prev)=> [...prev,{
            ...item,
            id:Math.random().toString()
        }]);
        }catch(err)
        {
            console.log(err)
        }
    }
    const incrementQuantity=(id)=>{
        setItems((prev)=> {
            prev.map((item)=> item.id===id ? {...item, quantity:item.quantity+1} : item)
        })
    }
    const decrementQuantity=(id)=>{
        setItems((prev)=> {
            prev.map((item)=> item.id===id ? {...item, quantity:item.quantity-1} : item)
        })
    }
    const updateTotalQuantityHandler=async (item)=>{
        try{
        const updateCartResponse=await axios.patch(`https://crudcrud.com/api/caecbeafce0846a78202e6a893165c9c/medicine-cart/${item._id}`,{item});
        setItems((prev)=>prev.map((prevItem)=>
        prevItem._id === item._id ? item : prevItem
        ))
    }catch(err)
    {
        console.log(err);
    }
    }

    const medicine={
        items:items,
        addMedicine:addMedicineHandler,
        updateTotalQuantity:updateTotalQuantityHandler
    }
   return <MedicineContext.Provider value={medicine}>{props.children}</MedicineContext.Provider>
}

export default MedicineContext;
