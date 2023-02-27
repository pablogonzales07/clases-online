

const ProductsItemRedux = ( {data, addToCart} ) => {


  return (
    <div className="cartItem">
          <h4>{data.name}</h4>
          <b>{ data.price }$</b>
          <button onClick={ () => addToCart(data.id) } >Agregar Al Carrito</button>   
    </div>
  )
}

export default ProductsItemRedux