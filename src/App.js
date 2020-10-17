import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';


function App() {
  return (
    <div >
    <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
