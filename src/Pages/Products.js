import Item from '../Components/Item';
import SortBar from '../Components/SortBar';
import {useState} from 'react';
import '../index.css';

export default function Products(properties) {
    //console.log(properties.items);
    //let maxItems=50;//create use state and add page buttons if you ever have more than 50 items and pass into sortbar
    //let numItems=properties.items.length;
    let cat1=properties.items.filter(item=>item.category=='Sports Equipment');
    let cat2=properties.items.filter(item=>item.category=='Gym Equipment');
    const [sportPage,setSportPage]=useState(0);
    const [gymPage,setGymPage]=useState(0);
    return (
        <div className='Products'>
            <h1 className='header'>Products</h1>
            <SortBar numTotal={cat1.length} page={{"pageNum":sportPage,"setPageNum":setSportPage}} cat="Sports Equipment"/>
            <div className='ProductList'>
                {cat1.slice(10*sportPage,10*(sportPage+1)).map(//this would need to be fixed to account for pages of items
                    item => (< Item item={item} cart={properties.cart} key={item.id}/>)
                )}
            </div>
            <SortBar numTotal={cat2.length} page={{"pageNum":gymPage,"setPageNum":setGymPage}} cat="Gym Equipment"/>
            <div className='ProductList'>
                {cat2.slice(10*gymPage,10*(gymPage+1)).map(//this would need to be fixed to account for pages of items
                    item => (< Item item={item} cart={properties.cart} key={item.id}/>)
                )}
            </div>
        </div>
    )
}