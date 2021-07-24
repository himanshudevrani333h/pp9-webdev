function List(props){
        return(
          <ul>
              {
                  props.map((el, index)=>{
                      return <InnerList key ={index} remove = {props.removefn} taskVal = {el}/>
                  })
              }
          </ul>
        );
    }
