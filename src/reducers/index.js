import { combineReducers } from "redux";
import contadorReducerRedux from "./contadorReducerRedux";
import { shoppingReducerRedux } from "./shoppingReducerRedux";

const reducer = combineReducers( { 
    contador: contadorReducerRedux,
    shoppingRedux: shoppingReducerRedux   
 });

export default reducer