import './App.css'
import ComposeProviders from './Context/ComposeProviders'
import { AuthProvider } from './Context/CustomHooks/authHooks'
import { CartProvider } from './Context/CustomHooks/cartHooks'
import { Routers } from './Router/router'

function App () {
  return (
    <>
      <ComposeProviders components={[AuthProvider, CartProvider]}>
        <Routers />
      </ComposeProviders>
    </>
  )
}

export default App
