import '../index.css';
import {Button} from 'react-bootstrap';
export default function Item(properties) {
    let item=properties.item;
    let maxDescLen=80;// item.name.length>12?35:50;
    return (
        <div className="item" key={item.id}>
            <div className='itemInner'>
            <img src={item.img} width="100" alt={item.name} />
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <p style={{margin:"5px"}}>{item.description.length>maxDescLen? item.description.substring(0,maxDescLen)+'...':item.description}</p>
            <p style={{height:"5px"}}>{item.stock} left in stock!</p>
            <Button 
                size="sm"
                onClick={() =>{
                properties.cart.set(properties.item,1)}}>
                    Add to Cart!
            </Button>
            </div>
        </div>
    )
}