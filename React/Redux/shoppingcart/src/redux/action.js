
export const addToCart = (id)=>{
    return{
      type : "ADD_TO_CART",
      payload: id
    };
}

export const removeFromCart =(id)=>{
    return{
        type:"Remove_From_Cart",
        payload:id
    }
}