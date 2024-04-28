import Item from '../Components/Item';
import SortBar from '../Components/SortBar';
import '../index.css';

export default function Products(properties) {
    console.log(properties.items);
    let maxItems=50;//create use state and add page buttons if you ever have more than 50 items and pass into sortbar
    let numItems=properties.items.length;
    return (
        <div className='Products'>
            <h1 className='header'>Products</h1>
            <SortBar numShowing={numItems} numTotal={properties.items.length}/>
            <div className='ProductList'>
                {properties.items.slice(0,maxItems).map(//this would need to be fixed to account for pages of items
                    item => (< Item item={item} key={item.id}/>)
                )}
            </div>
        </div>
    )
    /*
    const [items, setItem] = useState(items);

    const removeItem = (id) => {
        setItem(items.filter(item => items.id != id));
    }

    return (
        <div className="items">
            {items.map(item => (
                <div key={item.id} className="col-lg-6">
                    <Item items={item} onDelete={removeItem} />
                </div>
            ))}
        </div>
    );
    */
}