//Vincular lógica con dispatch

import { useDispatch, useSelector } from "react-redux"
import { reset, restar, restar5, sumar, sumar5 } from "../actions/contadorAction";

const Contador = () => {
    //acceder al estado de redux
    const state = useSelector(state => state);
    //disparar las acciones
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Contador Redux</h1>
        <nav>
            <button onClick={() => dispatch(sumar5())}>+5</button>
            <button onClick={() => dispatch(sumar())}>-5</button>
            <button onClick={() => dispatch(reset())}>0</button>
            <button onClick={() => dispatch(restar())}>+1</button>
            <button onClick={() => dispatch(restar5())}>-1</button>
        </nav>
        <h3>{state.contador}</h3>
    </div>
  )
}

export default Contador