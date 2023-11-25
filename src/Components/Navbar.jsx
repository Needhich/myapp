import './Navbar.css';
import '../Pages/Contactus.css';
import cartimg from '../Assets/bag.png';
import loginimg from '../Assets/login.png';
import searchimg from '../Assets/search.png';
import { Link } from 'react-router-dom';
import cartman from '../Assets/cartman.png';

function Navbar(props){


  const deleteOne =(index)=>{
   const updatecart =[...props.cart]
   updatecart.splice(index,1)
   props.setCart(updatecart)
  }


  const addquantity=(index)=>{
const updatecart =[...props.cart]
updatecart[index].quantity += 1
props.setCart(updatecart)
  }

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
                <li className="nav-item mx-2">
                 <img className='topsocialicons' src={searchimg} alt="search"/>
                </li>
                <li className="nav-item mx-2">
                    <img className='topsocialicons' src={loginimg} alt="user"/>
                </li>
                <li className="nav-item position-relative mx-2"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <img className='topsocialicons' src={cartimg} alt="cart"/>
                    <div className="badge-container">
                        <span className="badge">{props.cart.length}</span>
                    </div>
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

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">MY CART</h5>
    <button type="button" className=" arrowbutton text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-arrow-left"></i></button>
  </div>
  <div class="offcanvas-body">
  {
    props.cart.map((item,index)=>{
      return(
        <>
      <div key={item._id} className='d-flex justify-content-between align-items-center border-bottom mb-2'>
      <img  src={item.url} alt={item.title} style={{width:"50px", height:"50px"}}/>
      <span className='p-2'>{item.title}</span>
      <button className='btn btn-danger rounded'onClick={()=>{deleteOne(index)}}><i class="fa-solid fa-trash" style={{color: "#ffffff"}}></i></button>
      <div className='d-flex justify-content-between align-items-center'>
         <button className='btn'><i class="fa-solid fa-plus" onClick={()=>{addquantity(index)}}></i></button>{item.quantity}
        <button className='btn'><i class="fa-solid fa-minus"></i></button>
      </div>
       

      </div>
        
        </>
      )
    })
  }
  </div>
</div>


</div>
)
}

export default Navbar;