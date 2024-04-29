import Item from '../Components/Item';
import '../index.css';
function sample(array, num){
    let samp=[];
    while (samp.length==0){
        for (let i=0;i<array.length;i++){
            if(Math.floor(Math.random() * array.length)<num/1.5){
                samp.push(array[i]);
            };
        }
    }
    return samp;
}
export default function LandingPage(properties) {
    console.log(properties);
    return (
        <div className="LandingPage">
            <h1>LandingPage</h1>
            <div className="hotBar">Check out these hot items!</div>
            <div className="hotItems">
                {sample(properties.items,6).map(item => (< Item item={item} key={item.id}/>))}
            </div>
        </div>
    )
}