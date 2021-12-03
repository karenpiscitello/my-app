import { useState } from 'react'
import logo from './LOG.png'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListConatiner/ItemsListContainer';


function App() {
  

  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer greting="hola soy itemlistc"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
