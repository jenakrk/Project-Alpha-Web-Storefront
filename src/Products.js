import items from "./items.json";
import React, {useState} from "react";

export default function Products() {
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
    
}