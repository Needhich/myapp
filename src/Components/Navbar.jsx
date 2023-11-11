import './Navbar.css';
import cartimg from '../Assets/bag.png';
import loginimg from '../Assets/login.png';
import searchimg from '../Assets/search.png';
import { Link } from 'react-router-dom';

function Navbar(){
return(
<div className='header'>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav menubar mx-auto">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto "> 
                <li className="nav-item mx-2">
                 <img className='topsocialicons' src={searchimg} alt="search"/>
                </li>
                <li className="nav-item mx-2">
                    <img className='topsocialicons' src={loginimg} alt="user"/>
                </li>
                <li className="nav-item position-relative mx-2">
                    <img className='topsocialicons' src={cartimg} alt="cart"/>
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