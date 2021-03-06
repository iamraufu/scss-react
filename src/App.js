import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState("");
  
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <div className='main'>
        <Header/>
        <Home/>
        <Shipment />
      </div>
    </CategoryContext.Provider>

  );
}

export default App;
