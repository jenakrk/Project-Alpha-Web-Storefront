import './App.css';
import LandingPage from './Pages/LandingPage';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';
import CheckOut from './Pages/CheckOut';
import MyNav from './myNavbar.js';
import items from './items.json';
import {useState} from'react';

function App() {
  //console.log(window.location.pathname);
  const [cart,setCart]=useState([]);
  let Component;
  switch (window.location.pathname){
    case '/':
    case '/landing':
      Component=LandingPage
      break;
    case '/products':
      Component=Products
      break;
    case '/cart':
      Component=ShoppingCart
      break;
    case '/checkout':
      Component=CheckOut
      break;
  }
  return (
    <div className="App">
      <MyNav />
      <Component items={items} cart={{"inv":cart,"set":setCart}}/>
    </div>
  );
}

export default App;
