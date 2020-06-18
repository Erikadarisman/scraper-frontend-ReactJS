import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './page/Header/Header'
import Home  from './page/Home/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Route path='/' component={Home} exact/>
    </div>
  );
}

export default App;
