
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Add from './pages/add/Add'
import Basket from './pages/basket/Basket'
import Wishlist from './pages/wishlist/Wishlist'
import Detail from './pages/detail/Detail'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/:productId' element={<Detail/>}/>

    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
