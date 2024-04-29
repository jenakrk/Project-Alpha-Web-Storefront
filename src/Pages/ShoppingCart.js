import CartItem from "../Components/CartItem";

export default function ShoppingCart(properties) {
  //console.log(properties);
  let tot=0;
  for(let i=0;i<properties.cart.inv.length;i++){
    tot+=properties.cart.inv[i].item.price*properties.cart.inv[i].quantity;
  }
  return (
    <div className="ShoppingCart">
      <h1>ShoppingCart</h1>
      {properties.cart.inv.length?
        properties.cart.inv.map(cartItem=><CartItem key={cartItem.item.id} cartItem={cartItem} cart={properties.cart}/>)
        :
        <p>Your cart is empty! Add some items to see them here!</p>}
      <div className="cartTotal">Your cart's current total is ${tot.toFixed(2)}</div>
    </div>
  )
}