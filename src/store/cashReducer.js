const defaultState = {
    cash: 60,
  }
  
export const cashReducer = (state = defaultState, action ) => {
    switch (action.type){
      case "ADD_CASH":
        return {...state, cash: state.cash + action.payload};
  
      case "GET_CASH":
        return {...state, cash: state.cash - action.payload}
  
      default:
        return state;
    }
  } 