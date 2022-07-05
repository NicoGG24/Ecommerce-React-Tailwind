import './App.css';
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from './Components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  return (

    <>
      <Header />
      <Main />
      <Footer />
    </>  
  );
}


export default App;