import React, { Component }  from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movies from './Components/Movies';
import Favourite from './Components/Favourite';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Movies/>
      <Favourite/>
    </>
  );
}

export default App;
