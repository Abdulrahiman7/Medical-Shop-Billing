
import { useContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddMedicine from './components/Medicine/AddMedicine';
import Cart from './components/Cart/Cart';
import MedicineContext, {MedicineContextProvider} from './store/medicines-context';
import Medicines from './components/Medicine/Medicines';
import { CartContextProvider } from './store/cart-context';



function App() {
  const MedicinesContext=useContext(MedicineContext)
  const [addMedicineModalOn, setAddMedicineModalOn]=useState(false);
  const [cartModalOn, setCartModalOn]=useState(false);
  const addMedicineModalHandler=()=>{
    setAddMedicineModalOn((prevState)=>!prevState);
  }
  const cartModalHandler=()=>{
    setCartModalOn((prevState)=>!prevState);
  }
  return (

    <MedicineContextProvider>
      <CartContextProvider>
      {addMedicineModalOn && <AddMedicine closeAddMedicineModal={addMedicineModalHandler}/>}
      {cartModalOn && <Cart closeCartModal={cartModalHandler} />}
      <Header showAddMedicineModal={addMedicineModalHandler} showCartModal={cartModalHandler}></Header>
      <Medicines></Medicines>
      </CartContextProvider>
    </MedicineContextProvider>
  );
}

export default App;
