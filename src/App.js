
import './App.scss';
import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
