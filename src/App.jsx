import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer.jsx/ItemListContainer'
import ItemDetailContainer from './assets/Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './App.css'



function App() {


  return (
    <>
    <BrowserRouter>
      <NavBar />

      <Routes> 
        <Route path='/' element={<ItemListContainer saludo ={"Hola mundo!!"}/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
