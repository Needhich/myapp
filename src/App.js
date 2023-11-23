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
import { useState } from 'react';
function App() {
 const [cart,setCart]= useState([])

 const addtocart =(food)=>{
 const newcart =[...cart, food]
 setCart(newcart)
 }
console.log(cart)
  return (
    <div className="App">
     <Navbar cart={cart}/>
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/menu' element= {<Menu  addtocart={addtocart}/>} />
      <Route path='*'  element={<Notfound/>} />
      <Route path='/createpage'  element={<Createpage/>} />
      <Route path='/fooddetails/:id' element={<Fooddetails addtocart={addtocart} />}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
