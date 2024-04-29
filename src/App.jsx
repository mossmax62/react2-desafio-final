import { Route,Routes } from 'react-router-dom'
import Home from "./views/Home.jsx"
import Detalle from "./views/Detalle.jsx"
import Menu from './component/Menu.jsx'
import Pedido from './views/Pedido.jsx'
import './App.css'

function App() {

  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pizza/:id' element={<Detalle/>}/>
      <Route path='/carrito' element={<Pedido/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    </Routes>
    </>
  )
}

export default App
