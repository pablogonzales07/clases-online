import { Provider } from "react-redux"
import ContadorRedux from "./components/ClaseTres/ContadorRedux/ContadorRedux"
import ShoppingCartsRedux from "./components/ClaseTres/ShoppingRedux/ShoppingCartsRedux"
import store from "./store"

function App() {
  

  return (
    <>
      <Provider store={ store }>
        <hr />
        <ShoppingCartsRedux />
        <hr />
        <ContadorRedux />
      </Provider>    
    </>
  )
}

export default App
