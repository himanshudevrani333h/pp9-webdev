
import {someContext,someContext2} from "./A"
import {useContext} from "react"
let D = ()=>{
    let name = useContext(someContext)
    let namesr = useContext(someContext2)
return(
   <h1>
       {name} + {namesr}
   </h1>
)

}

export default D;