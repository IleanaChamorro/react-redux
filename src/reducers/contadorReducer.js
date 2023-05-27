import { DECREMENT, DECREMENT_5, INCREMENT, INCREMENT_5, RESET } from "../types";

//recibe el state a actualizar y el objeto de la acción
const initialState = 0;
export default function contadorReducer(state = initialState, action){
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1;
            //retornar el estado más el payload
        case INCREMENT_5:
            return state + action.payload;
        case DECREMENT_5:
            return state - action.payload;
        case RESET:
            return initialState;
        default:
            return state;
    }
}