import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext=createContext();
const getLocalItems=async ()=>{
    try{
        const localItems=localStorage.getItem('cart');
        if(localItems) return JSON.parse(localItems);
        const getFromCrudResponse=await axios.get('https://crudcrud.com/api/caecbeafce0846a78202e6a893165c9c/medicine-cart');
        const items=getFromCrudResponse.data;
        console.log(items);
        localStorage.setItem('cart', JSON.stringify(items));
        return items;
    }catch(err)
    {
       console.log(err)
    }
}
export const CartContextProvider=(props)=>{
    const [items, setItems]=useState([]);
    useEffect(()=>{
        async function fetchCart() {
            const localItems = await getLocalItems();
            setItems(localItems || []);
        }
        fetchCart();
    },[]);
    const [totalPrice, setTotalPrice]=useState(0);

    const addToCartHandler=async(item)=>{
        try{    
            if(items.find((ele)=>ele._id === item._id)) return;
        const newMedicineResponse=await axios.post('https://crudcrud.com/api/caecbeafce0846a78202e6a893165c9c/medicine-cart',item);
            const localItems=JSON.parse(localStorage.getItem('cart'));
            localStorage.setItem('cart',JSON.stringify([...localItems, item]));
        setItems((prev)=>[...prev, item]);
        }catch(err)
        {
            console.log(err)
        }       
    }

    const removeFromCartHandler=async (id)=>{
        try{
            const newMedicineResponse=await axios.delete(`https://crudcrud.com/api/caecbeafce0846a78202e6a893165c9c/medicine-cart/${id}`);
            const localItems=JSON.parse(localStorage.getItem('cart'));
            const updateItems=localItems.filter((preitem)=>preitem._id!==id);
            localStorage.setItem('cart',JSON.stringify(updateItems));
            setItems((prev)=>prev.filter((cartItem)=>cartItem._id !== id));
        }catch(err)
        {
            console.log(err);
        }
    }

    const updateCartQuantityHandler=async (item)=>{
        try{
        const updateCartResponse=await axios.put(`https://crudcrud.com/api/caecbeafce0846a78202e6a893165c9c/medicine-cart/${item._id}`,item);
        setItems((prev)=>prev.map((prevItem)=>
        prevItem._id === item._id ? item : prevItem
        ))
    }catch(err)
    {
        console.log(err);
    }
    }
    
    const cartItem={
        items:items,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler,
        updateCartQuantity:updateCartQuantityHandler,
    }

    return <CartContext.Provider value={cartItem}>{props.children}</CartContext.Provider>

}
export default CartContext;