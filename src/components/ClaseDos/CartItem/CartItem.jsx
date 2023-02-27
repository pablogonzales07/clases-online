import "./CartItem.css"

const CartItem = ( {data, dFromCart} ) => {


  return (
    <div className="cardsCart">
        <h3> { data.name } </h3>
        <b> {data.price} x {data.quantity} = { data.price * data.quantity } </b>
        <button onClick={ () => dFromCart(data.id)}>Eliminar Uno</button>
        <br />
        <button onClick={ () => dFromCart(data.id, true) }> Eliminar Todos </button>
    </div>
  )
}

export default CartItem