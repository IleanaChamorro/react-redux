//Centralizado de reducers
//funciones que reciben el estado actual y la acción a realizar y devuelven un nuevo estado, sin modificar directamente el estado actual

import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";

const reducer = combineReducers({
    //llamar a la funcion reductora
    contador: contadorReducer
});

export default reducer;