import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from './context/CartContext';


function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
            <div className="App">
              <header>
              <NavBar />
              </header>
              <Routes>
                <Route
                  exact
                  path="/" 
                  element= {<ItemsListContainer greeting="Indumentaria Personalizada"/>}
                />
                <Route
                  exact 
                  path="/categoria/:idCategoria" 
                  element= {<ItemsListContainer greeting="Indumentaria Personalizada"/>}
                />
                <Route 
                  exact
                  path="/detalle/:id" 
                  element= {<ItemDetailContainer/> }
                />
                <Route 
                            exact
                            path="/cart" 
                            element={ <Cart />} 
                /> 
              </Routes>
          </div>
          </BrowserRouter>
    </CartContextProvider>
    
      
    
  );
}

export default App;
