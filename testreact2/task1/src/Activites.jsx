
import "./activity.css"
let Activities = (props)=>{
    return(
        <div className="activity">
        <ul>
            {
                props.ste.map((el)=><li>{el}</li>)
            }
        </ul>
        </div>
    )
}

export default Activities