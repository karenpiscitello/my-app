import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
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
            path="/detalle" 
            element= {<ItemDetailContainer/> }
          />
          
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
