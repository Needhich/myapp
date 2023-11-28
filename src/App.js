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
import { useState } from 'react';
function App() {
 const [cart,setCart]= useState([])
 const [totalQuantity, setTotalQuantity] = useState(0);

 const addtocart =(food)=>{
const existfoodindex = cart.findIndex((item)=>item._id === food._id)
if(existfoodindex != -1){
  const updatecart = [...cart]
 const quantity = updatecart[existfoodindex].quantity += 1
  setCart(updatecart)
 const quantities = quantity + totalQuantity
 setTotalQuantity(quantities)
}else{
  const newcart =[...cart,food]
  setCart(newcart)
  const quantities = 1 + totalQuantity
  setTotalQuantity(quantities)
}

};


  return (
    <div className="App">
     <Navbar cart={cart}  setCart={setCart}/>
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path="/logout" element={<Logout/>}/>
      <Route path='/menu' element= {<Menu  addtocart={addtocart}/>} />
      <Route path='*'  element={<Notfound/>} />
      <Route path='/createpage'  element={<Createpage/>} />
      <Route path='/fooddetails/:id' element={<Fooddetails addtocart={addtocart} />}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
