import { Link } from "react-router-dom";
import "./product.css";
import {useDispatch} from "react-redux"
import { addToCart } from "../redux/action";
let Products = (props) => {

    let dispatch =  useDispatch()
  return (
    <div className="product">
      <Link to={`/preview/${props.data.id}`}>
        <div className="product_img">
          
          <img src={props.data.img} />

        </div>
      </Link>

      <div className="product_button">
        <button onClick={()=>{
            console.log("dispatching");
            dispatch(addToCart(props.data.id));
        }}>Buy</button>
      </div>
    </div>
  );
};

export default Products;