import '../index.css'
export default function SortBar(properties) {
    return (
        <span className="sortbar">
            <div classname="showing">
                Currently showing {properties.numShowing>50?properties.numShowing-50:0}-{properties.numShowing} of {properties.numTotal} items
            </div>
            <div>
                filter by (default)
            </div>
            <div>
                sort by (default)
            </div>
        </span>
    )
}