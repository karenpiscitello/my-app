
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListConatiner/ItemsListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import "bootstrap/dist/css/bootstrap.min.css";
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
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
