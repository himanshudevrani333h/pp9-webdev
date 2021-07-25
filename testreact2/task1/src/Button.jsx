
let Button =(props)=>{

    return (
        <button onClick={()=>{
            fetch("https://www.boredapi.com/api/activity/").then((res)=>{
                return res.json()
            }).then((json)=>{
             console.log(json);
             props.ste([...props.data,json.activity])
            })
        }}>
            New Activity
        </button>
    )
}

export default Button