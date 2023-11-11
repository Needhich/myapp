import './Contactus.css';
import cartman from '../Assets/cartman.png';
function Contactus(){
    return(
        <>
        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

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
        </>
    )
}
export default Contactus;