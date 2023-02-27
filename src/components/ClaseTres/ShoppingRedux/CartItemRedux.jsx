const CartItemRedux = ( {data, dOneFromCart, dAllFromCart} ) => {


  return (
    <div className="cardsCart">
        <h3> { data.name } </h3>
        <b> {data.price} x {data.quantity} = { data.price * data.quantity } </b>
        <button onClick={ () => dOneFromCart(data.id)}>Eliminar Uno</button>
        <br />
        <button onClick={ () => dAllFromCart(data.id, true) }> Eliminar Todos </button>
    </div>
  )
}

export default CartItemRedux