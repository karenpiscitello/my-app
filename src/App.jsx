import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart';
import Contacto from './components/Contacto';
import BootCarousel from './components/NavBar/BootCarousel';
import Footer from './Footer/Footer';

function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
            <div className="App">
              <header>
                <NavBar />
              </header>
              <BootCarousel/>
              <Routes>
                <Route
                  exact
                  path="/" 
                  element= {<ItemsListContainer greeting="Indumentaria Personalizada"/>}
                />
                <Route
                  exact 
                  path="/categoria/:idCate" 
                  element= {<ItemsListContainer greeting="Indumentaria Personalizada"/>}
                />
                <Route 
                  exact
                  path="/detalle/:id" 
                  element= {<ItemDetailContainer/> }
                />
                <Route 
                            exact
                            path="/contacto" 
                            element={ <Contacto />} 
                /> 
                <Route 
                            exact
                            path="/cart" 
                            element={ <Cart/>} 
                /> 
              </Routes>
              <Footer/>
          </div>
          </BrowserRouter>
    </CartContextProvider>
      
  );
}

export default App;
