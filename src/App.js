import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Footer from './Components/Footer';
import Notfound from './Pages/Notfound';
import Createpage from './Pages/Createpage';
import Fooddetails from './Pages/Fooddetails';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Logout from './Components/Logout';
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import Input from './Pages/Input';
import Search from './Pages/Search';
function App() {
 const [cart,setCart]= useState([])

 const addtocart =(food)=>{
const existfoodindex = cart.findIndex((item)=>item._id === food._id)
if(existfoodindex != -1){
  const updatecart = [...cart]
 const quantity = updatecart[existfoodindex].quantity += 1
  setCart(updatecart)
 const quantities = quantity + totalQuantity
 message.success("Quantity added successfully")
}else{
  const newcart =[...cart,food]
  setCart(newcart)
  const quantities = 1 + totalQuantity
  message.success("Item added successfully")
}

};
const totalQuantity = cart.reduce((sum, item)=>sum + item.quantity,0)

  return (
    <div className="App">
     <Navbar cart={cart}  totalQuantity={totalQuantity}/>
     <Routes>
      <Route path='/' element= {<Home addtocart={addtocart}/>} />
      <Route path="/logout" element={<Logout/>}/>
      <Route path='/menu' element= {<Menu  addtocart={addtocart}/>} />
      <Route path='*'  element={<Notfound/>} />
      <Route path='/createpage'  element={<Createpage/>} />
      <Route path='/fooddetails/:id' element={<Fooddetails addtocart={addtocart} />}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
      <Route path='/input' element={<Input/>} />
      <Route path='/search' element={<Search addtocart={addtocart}/>} />

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
