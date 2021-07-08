function List(props){
        return(
          <ul>
              {
                  props.tasks.map((el, index)=>{
                      return <InnerList key ={index} remove = {props.removefn} taskVal = {el}/>
                  })
              }
          </ul>
        );
    }
