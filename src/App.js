import './App.css';
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from './Components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import ItemCount from './Components/ItemCount';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>  
  );
}


export default App;