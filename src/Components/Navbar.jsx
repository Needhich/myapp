import './Navbar.css';
import cartimg from '../Assets/cart.jpeg';
import loginimg from '../Assets/login.jpeg';
import searchimg from '../Assets/search.jpeg';
import { Link } from 'react-router-dom';

function Navbar(){
return(
<div className='header'>
<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> 
              <li className="nav-item">
                <a className="nav-link">LOGO</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
            </ul>
            <ul className="navbar-nav text-end"> 
                <li className="nav-item">
                 <img src={searchimg} alt="search"/>
                </li>
                <li className="nav-item">
                    <img src={loginimg} alt="user"/>
                </li>
                <li className="nav-item position-relative">
                    <img src={cartimg} alt="cart"/>
                    <div className="badge-container">
                        <span className="badge">1</span>
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </nav>
</div>
)
}

export default Navbar;