import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <CategoryContext.Provider value={count}>
      <div className='main'>
        <Header count={count} setCount={setCount}></Header>
        <Home/>
        <Shipment />
      </div>
    </CategoryContext.Provider>

  );
}

export default App;
