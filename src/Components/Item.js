import '../index.css';
export default function Item(properties) {
    let item=properties.item;
    let maxDescLen=80;// item.name.length>12?35:50;
    return (
        <div className="item" key={item.id}>
            <div className='itemInner'>
            <img src={item.img} width="100" alt={item.name} />
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <p>{item.description.length>maxDescLen? item.description.substring(0,maxDescLen)+'...':item.description}</p>
            <button onClick={() => console.log('stuf!')}>do stuff!</button>
            </div>
        </div>
    )
}