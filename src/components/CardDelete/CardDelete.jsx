import "./CardDelete.css"

export function CardDelete(props){
    console.log(props)
    return (
        < div className="mainCard"> 
        <div className="card">
            <strong>{props.test}</strong>
        </div>
        <div className="card2">
        <strong>{props.id}</strong>
        </div>
        </ div>

    )
}