
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemsListContainer greeting="Indumentaria Personalizada"/>
      <ItemDetailContainer/> 
    </div>
  );
}

export default App;
