import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListConatiner/ItemsListContainer';
import ItemCount from './components/ItemCount';

function App() {
  
  const inicial = 1
  const max = 10

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      
      <ItemsListContainer greeting="Indumentaria Personalizada"/>
      <ItemCount inicial = {inicial} max = {max}/>

      
    </div>
  );
}

export default App;
