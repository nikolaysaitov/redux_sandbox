const defaultState = {
    customer: []
}


export const customerReducer = (state = defaultState, action ) => {
    switch (action.type){
      case "add_customer":
        return {...state, cash: state.cash + action.payload};
  
      case "get_customer":
        return {...state, cash: state.cash - action.payload}
  
      default:
        return state;
    }
  } 