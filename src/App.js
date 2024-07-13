import './App.scss';
import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainerIndex } from './components/itemListContainerIndex/ItemListContainerIndex.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.jsx';
import { ProductListContainer } from './components/productsListContainer/ProductsListContainer.jsx';
import { Greeting } from './components/greeting/Greeting.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path='/' element = {<Main/>} /> 
          <Route path='/:pageURL' element = {<Greeting/>}/>
          {/* <Route path='/contacto' element ={ <h1> contacto</h1>}/>
          <Route path='/acerca de' element ={ <h1> acerca de </h1>}/>
          <Route path='/canales de venta' element ={ <h1> canales de venta</h1>}/> */}
          <Route path='/item/:itemId' element = {<ItemDetailContainer/>}/>
          <Route path='/Productos' element = {<ProductListContainer greeting = {<Greeting/>} />} /> 
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
