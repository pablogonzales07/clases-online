import { useReducer} from 'react'
import { TYPES } from '../../actions/contadorActions';
import { contadorInit, contadorInitialState, contadorReducer } from '../../reducers/contadorReducer';




const ContadorMejorado = () => {


 const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit);

 const add = () => dispatch({type:TYPES.INCREMENT});
 const subtract = () => dispatch({type:TYPES.DECREMENT});
 const addFive = () => dispatch({ type:TYPES.INCREMENT_5, payload:5 });
 const subtractFive = () => dispatch({ type:TYPES.DECREMENT_5, payload:5 });
 const reset = () => dispatch({ type: TYPES.RESET })


  return (
    <div style={{textAlign:"center"}}>
        <h2>Contador Reducer Mejorado</h2>
        <nav>
            <button onClick={ add }>+</button>
            <button onClick={ subtract }>-</button>
            <button onClick={ reset }>reset</button>
            <button onClick={ addFive }>+5</button>
            <button onClick={ subtractFive }>-5</button>

        </nav>
        <h3> {state.contador} </h3>
    </div>
  )
}

export default ContadorMejorado