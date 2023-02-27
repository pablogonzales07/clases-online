import { useDispatch, useSelector } from "react-redux"
import { reset, restar, restar_5, sumar, sumar_5 } from "../../../actions/contadorActionsRedux"


const ContadorRedux = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch( )



  return (
    <div style={ { textAlign:"center" } }>
        <h2>Contador Redux</h2>
        <nav>
            <button onClick={ () => dispatch(sumar()) } > + </button>
            <button onClick={ () => dispatch(restar()) } > - </button>
            <button onClick={ () => dispatch(sumar_5()) } > +5 </button>
            <button onClick={ () => dispatch(restar_5()) } > -5 </button>
            <button onClick={ () => dispatch(reset()) } > 0 </button>
            <h3> { state.contador } </h3>

        </nav>
    </div>
  )
}

export default ContadorRedux