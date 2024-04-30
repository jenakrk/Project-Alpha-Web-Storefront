import '../index.css'
import {Button} from 'react-bootstrap'
export default function SortBar(properties) {
    let dis1=properties.page.pageNum<=0;
    let dis2=(properties.page.pageNum+1)*10>properties.numTotal;
    return (
        <span className="sortbar">
            <div className="pageVisulizer">
                <div classname="showing">
                    Currently showing {properties.page.pageNum*10+1}
                        -{(properties.page.pageNum+1)*10>properties.numTotal?properties.numTotal:(properties.page.pageNum+1)*10} of {properties.numTotal} items &nbsp;    
                </div>
                <Button variant={dis1?"secondary":"primary"} size="sm"
                    onClick={()=>properties.page.setPageNum(properties.page.pageNum-1)} disabled={dis1} >&#8810;</Button>
                <Button variant={dis2?"secondary":"primary"} size="sm"
                    onClick={()=>properties.page.setPageNum(properties.page.pageNum+1)} disabled={dis2}>&#8811;</Button>
            </div>
            <div>
                Category: {properties.cat}
            </div>
            {/*
            <div>
                Sort by (default)
            </div>
            {*/}
        </span>
    )
}