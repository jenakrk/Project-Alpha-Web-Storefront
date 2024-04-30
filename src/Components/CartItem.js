import '../index.css';
import { Button } from 'react-bootstrap';
export default function CartItem(properties) {
    return(
        <div className="CartItem">
            <div className="cartRow">
                <img src={properties.cartItem.item.img} width="100" alt={properties.cartItem.item.name} />
                <div>{properties.cartItem.item.price}</div>
                <Button 
                    onClick={()=>properties.cart.set(properties.cartItem.item,-properties.cartItem.quantity)}
                    variant="danger"
                    size="sm"
                    style={{height:"25%"}}
                >
                    Remove
                </Button>
            </div>
            <div className="cartRow">
                <div>{properties.cartItem.item.name}</div>
                <div>{properties.cartItem.quantity}</div>
                <div>
                    <Button 
                        onClick={()=>properties.cart.set(properties.cartItem.item,1)}
                        variant="success"
                        size="sm"
                        style={{height:"25%"}}
                    >
                        +
                    </Button>
                    <Button 
                        onClick={()=>properties.cart.set(properties.cartItem.item,-1)}
                        variant="danger"
                        size="sm"
                        style={{height:"25%"}}
                    >
                        -
                    </Button>
                </div>
            </div>
        </div>
    )
}