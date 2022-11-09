const defaultState = {
    cash: 60,
  }
  
export const cashReducer = (state = defaultState, action ) => {
    switch (action.type){
      case "add_cash":
        return {...state, cash: state.cash + action.payload};
  
      case "get_cash":
        return {...state, cash: state.cash - action.payload}
  
      default:
        return state;
    }
  } 