import './Navbar.css';
import '../Pages/Contactus.css';
import cartimg from '../Assets/bag.png';
import loginimg from '../Assets/login.png';
import searchimg from '../Assets/search.png';
import { Link } from 'react-router-dom';
import cartman from '../Assets/cartman.png';

function Navbar(props){
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
        <Link className="nav-link" to="/logout">Logout</Link>
        </li>
        <li className="nav-item">
        <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Contact Us</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto "> 
                <li className="nav-item mx-2"><img className='topsocialicons' src={searchimg} alt="search"/></li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img className='topsocialicons' src={loginimg} alt="user"/> Login/Signup</a>
                <ul class="dropdown-menu">
                  <li><Link className='dropdown-item' to="/login">Login</Link></li>
                  <li><Link className='dropdown-item' to="/logout">Logout</Link></li>
                </ul>
                </li>
                <li className="nav-item position-relative mx-2">
                  <Link to='/cart'>
                    <img className='topsocialicons' src={cartimg} alt="cart"/>
                    <div className="badge-container">
                        <span className="badge">{props.cart.length}</span>
                    </div>
                    </Link>
                </li>
            </ul>

    </div>
 </div>
</nav>
<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Contact Us</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <img src={cartman} alt='cartman' />
    <form action="#" method="post" className="contactusform">
        <input placeholder="Name" type="text" id="name" name="name" required />
        <input placeholder="Email ID" type="email" id="email" name="email" required />
        <input placeholder="Subject" type="text" id="subject" name="subject" required />
        <textarea placeholder="Message" id="message" name="message" rows="4" required></textarea>
        <button className='submitbtn' type="submit">Submit</button>
    </form>
  </div>
</div>



</div>
)
}

export default Navbar;