import './Home.css';
import bikedelivery from '../Assets/bikedelivery.png';
import strawberry from '../Assets/strawberry.png';
import Menu from './Menu';
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
        <Menu/>
    </div>
)
}
export default Home;