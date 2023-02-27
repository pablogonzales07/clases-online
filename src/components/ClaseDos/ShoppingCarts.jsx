import { useReducer } from "react"
import { TYPES } from "../../actions/shoppingActions";
import { shoppingReducer, shopíngInitialState } from "../../reducers/shoppingReducer";
import CartItem from "./CartItem/CartItem";
import ProductsItem from "./ProductsItem/ProductsItem";
import "./ShoppingCarts.css"


const ShoppingCarts = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shopíngInitialState);
    const {products, cart} = state;


    const addToCart = (id) => {
        dispatch({ type:TYPES.ADD_TO_CART, payload:id })
    };

    const dFromCart = (id, all = false) => {       
       if(all) {
        dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload:id })
       } else {
        dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload:id })
       }

    };

    const clearCart = () => {
        dispatch({ type:TYPES.CLEAR_CART })
    };







  return (
    <div>
        <h2>Carrito De Compras</h2>
        <h3>Productos</h3>
        <article className="productos">
            {
                products.map(product => <ProductsItem key={product.id} data={ product } addToCart={ addToCart }/>)
            }
        </article>
        <h3>Carrito</h3>
        <article className="carrito">
            <button onClick={ clearCart }>Limpiar Carrito</button>
            {
                cart.map((item, index) => <CartItem key={ index } data={ item } dFromCart={ dFromCart } />)
            } 
        </article>
    </div>
  )
}

export default ShoppingCarts