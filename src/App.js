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
  const [cart,setCart]=useState(sessionStorage.getItem('cart')?JSON.parse(sessionStorage.getItem('cart')):[]);
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
  function modifyCart(item, num){
    let index=-1;
    let newCart=[...cart];
    for (let i=0; i < cart.length; i++){
      //console.log(cart[i].item);
      if (cart[i].item.id===item.id){
        index=i;
      }
    }
    if (num>0){
      if (index>-1){
        newCart[index].quantity+=num;
      }
      else{
        newCart.push({"item":item,"quantity":1});
      }
    }
    if (num<0){
      if (index>-1){
        if (newCart[index].quantity+num<=0){
          newCart.splice(index,1);
        }
        else{
          newCart[index].quantity+=num;
        }
      }
    }
    //console.log(newCart);
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    //console.log("hi");
    //console.log(sessionStorage.getItem('cart'));
  }
  return (
    <div className="App">
      <MyNav />
      <Component items={items} cart={{"inv":cart,"set":modifyCart}}/>
    </div>
  );
}

export default App;
