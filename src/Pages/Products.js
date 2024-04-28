import Item from '../Components/Item';
import '../index.css';
export default function Products(properties) {
    return (
        <div className='Products'>
            <h1 className='header'>Products</h1>
            <div className='ProductList'>
                {properties.items.map(
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