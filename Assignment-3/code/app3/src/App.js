import React from 'react';

import './App.css';
import Custinfo from './components/Custinfo';
import Header from './components/Header';
import Orderinfo from './components/Orderinfo';
import Prodlist from './components/Prodlist';





function App() {
  return (
    <div className="site-container">
      <Header/>
      <Custinfo/>
      <Orderinfo/>
      <Prodlist/>
    </div>
  );
}

export default App;
