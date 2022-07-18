
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';



function App() {

    
  return (
    <div className='App' >
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'element={<ItemListContainer greeting= "Bienvenido a Nexus" /> } />
          <Route path='/categoria/:categoria' element = {<ItemListContainer/>} />
          <Route path='/item/:id' element = { <ItemDetailContainer/> }/>
        </Routes>
    
      </BrowserRouter>
    </div>


    
  );
}

export default App;