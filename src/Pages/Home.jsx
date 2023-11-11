import './Home.css';
import bikedelivery from '../Assets/bikedelivery.png';
import strawberry from '../Assets/strawberry.png';
import Menu from './Menu';
import foodtest from '../Assets/foodtest.png';
import cart from '../Assets/cart.png';
function Home(){
 return(
    <div>
        <div className='herosection'>

           <div className='herosectionleft'>

            <div className="bikedelivery">
            <p className='bikedelivery'>Bike Delivery</p>
            <img src={bikedelivery} alt="bikedelivery" />
            </div>
            <p className="heroheading display-3">The Fastest Food Delivery in <span style={{color: '#EA580C'}} > Accra</span> </p>
            <p className="herocontent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum minima minus facilis sapiente nemo fugit itaque doloribus ad quasi aliquam optio consequuntur ducimus explicabo commodi sequi, nostrum, harum veniam. Blanditiis?</p>
            <button className='herobtn'>Order Now</button>

           </div>
           <div className='herosectionright'>
            <div className="herocardsection">
                <div className="herocard">
                    <div className="herocardinnersec">
                    <img className='herocardimg' src={strawberry} alt="strawberry" />
                    <p className="cardname">Strawberries</p>
                    <p className="carddescription">Fresh Strawberries</p>
                    <p className="price"> <span style={{color: '#EA580C'}} >₵</span>7.25</p>
                    </div>
                </div>
                <div className="herocard">
                    <div className="herocardinnersec">
                    <img className='herocardimg' src={strawberry} alt="strawberry" />
                    <p className="cardname">Strawberries</p>
                    <p className="carddescription">Fresh Strawberries</p>
                    <p className="price"> <span style={{color: '#EA580C'}} >₵</span>7.25</p>
                    </div>
                </div>
                <div className="herocard">
                    <div className="herocardinnersec">
                    <img className='herocardimg' src={strawberry} alt="strawberry" />
                    <p className="cardname">Strawberries</p>
                    <p className="carddescription">Fresh Strawberries</p>
                    <p className="price"> <span style={{color: '#EA580C'}} >₵</span>7.25</p>
                    </div>
                </div>
                <div className="herocard">
                    <div className="herocardinnersec">
                    <img className='herocardimg' src={strawberry} alt="strawberry" />
                    <p className="cardname">Strawberries</p>
                    <p className="carddescription">Fresh Strawberries</p>
                    <p className="price"> <span style={{color: '#EA580C'}} >₵</span>7.25</p>
                    </div>
                </div>
               
            </div>
           </div>
        </div>
        <div oncontextmenu='return false' className='snippet-body'>
        <section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-6">
                <h3 className="mb-3">Our Fresh & Healthy Fruits</h3>
            </div>
            <div className="col-6 text-right">
                <a style={{backgroundColor: "#FB923C", border: "none"}} className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a style={{backgroundColor: "#FB923C", border: "none"}} className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
            <div className="col-12" style={{backgroundColor: "#F5EEE9"}} >
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">

                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                            <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                            <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={foodtest} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">New Food Test</p>
                <p className="fooddescription">Short Description</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>45</p>
            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
        <Menu/>
    </div>
)
}
export default Home;