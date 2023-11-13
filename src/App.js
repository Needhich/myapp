import {Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Footer from './Components/Footer';
import Notfound from './Pages/Notfound';
import Createpage from './Pages/Createpage';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/menu' element= {<Menu/>} />
      <Route path='*'  element={<Notfound/>} />
      <Route path='/createpage'  element={<Createpage/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
