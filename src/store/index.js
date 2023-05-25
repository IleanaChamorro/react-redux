import { createStore } from "redux";
import reducer from "../reducers";

const store = createStore(reducer);

//funcion que combina los reducers
//para que detecte cambios hay que subscribir, la cual recibe una funcion
store.subscribe(() => console.log(store));

export default store;