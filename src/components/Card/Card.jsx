import "./Card.css"

export function Card(props){
    return (
        < div className="mainCard"> 
        <div className="card">
            <strong>{props.text}</strong>
        </div>
        <div className="card2">
        <strong>{props.id}</strong>
        </div>
        </ div>

    )
}