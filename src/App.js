import './App.css';
import {Link , BrowserRouter} from 'react-router-dom';
import FirstPage from './components/firstPage/FirstPage';
import SecondPage from "./components/secondPage/SecondPage"
import ThirdPage from './components/thirdPage/ThirdPage'
import Header from './components/Heade';
import Footer from './components/Footer';
import React from 'react';
function App() {

  return (
    <div id="app" className="app">
      <BrowserRouter>
      <Header/>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
