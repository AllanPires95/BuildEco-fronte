import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';


function App() {
  return (
<>
<Navbar/>
<Home/>
<Footer/>

</>
  );
}

export default App;
