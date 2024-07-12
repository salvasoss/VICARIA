import './App.scss';
import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path='/' element = {<Main/>} /> 
          <Route path='/Productos' element = {<ItemListContainer greeting = "Con mas de 70 años de experiencia en el mercado y con materia prima de primera calidad importada, Vicaria ofrece productos a un precio accesible tanto para minoristas como mayoristas "/>}/>
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
