
export const incrementReducer  = (state = 0, action)=>{
    if (action.type === "INCREMENT") {
        state = state + 1;
      }

      return state;
}
 