import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, dFromCart } from "../../../actions/shoppingActionsRedux";
import CartItemRedux from "./CartItemRedux";
import ProductsItemRedux from "./ProductsItemRedux";


const ShoppingCartsRedux = () => {
    
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const {products, cart} = state.shoppingRedux;


  return (
    <div>
        <h2>Carrito De Compras</h2>
        <h3>Productos</h3>
        <article className="productos">
            {
                products.map(product => <ProductsItemRedux key={product.id} data={ product } addToCart={ () => dispatch( addToCart( product.id ) ) }/>)
            }
        </article>
        <h3>Carrito</h3>
        <article className="carrito">
            <button onClick={ () => dispatch(clearCart( ) ) }>Limpiar Carrito</button>
            {
                cart.map((item, index) => <CartItemRedux key={ index } data={ item } dOneFromCart={ () => dispatch( dFromCart( item.id ) ) } dAllFromCart={ () => dispatch( dFromCart(item.id, true) )} />)
            } 
        </article>
    </div>
  )
}

export default ShoppingCartsRedux