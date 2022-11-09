import { legacy_createStore as createStore, combineReducers} from 'redux'
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReduser = combineReducers({
    cash: cashReducer,
    customer: customerReducer,

})

export const store = createStore(rootReduser, composeWithDevTools());