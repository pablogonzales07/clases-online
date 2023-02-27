import { useReducer} from 'react'



const initialState = {contador:0}

const init = (initialState) => {
    return {
        contador: initialState.contador + 100
    }
}

const TYPES = {
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET:"RESET"
}


function reducer(state, action) {
    switch(action.type) {
        case TYPES.INCREMENT:
            return { contador:state.contador + 1 }
        case TYPES.INCREMENT_5:
            return { contador:state.contador + action.payload }
        case TYPES.DECREMENT:
            return { contador:state.contador - 1 }
        case TYPES.DECREMENT_5:
            return { contador:state.contador - action.payload }
        case TYPES.RESET:
            return initialState
        default:
            return state
    }
}

const Contador = () => {


 const [state, dispatch] = useReducer(reducer, initialState, init);



 const add = () => dispatch({type:"INCREMENT"});
 const subtract = () => dispatch({type:"DECREMENT"});
 const addFive = () => dispatch({ type:"INCREMENT_5", payload:5 });
 const subtractFive = () => dispatch({ type:"DECREMENT_5", payload:5 });
 const reset = () => dispatch({ type: "RESET" })


  return (
    <div style={{textAlign:"center"}}>
        <h2>Contador Reducer</h2>
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

export default Contador