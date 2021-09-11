import { combineReducers } from "redux";

//Shopping Cart Reducer
import shopReducer from './shopping/shopping-reducer';

const rootReducer = combineReducers({
    shop: shopReducer
});

export default rootReducer;