import './Menu.css';
import menu from '../Assets/menu.png';
import chicken from '../Assets/chicken.png';
import fruit from '../Assets/fruit.png';
import softdrink from '../Assets/softdrink.png';
import desserts from '../Assets/dessert.png';
import icecream from '../Assets/icecream.png';
import fish from '../Assets/fish.png';
import rice from '../Assets/rice.png';
import foodtest from '../Assets/foodtest.png';
import cart from '../Assets/cart.png';
function Menu (){
return(
    <div>
        <div className="menusection">
            <p className="menuheading underline-text">Our Hot Dishes</p>
            <div className="menutabs">
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={menu} alt='menu' />
                    </div>
                    <p>Menu</p>
                </div>
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={chicken} alt='chicken' />
                    </div>
                    <p>Chicken</p>
                </div>
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={fruit} alt='fruit' />
                    </div>
                    <p>Fruit</p>
                </div>
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={softdrink} alt='softdrink' />
                    </div>
                    <p>Soft Drink</p>
                </div>
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={desserts} alt='desserts' />
                    </div>
                    <p>Desserts</p>
                </div>
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={icecream} alt='icecream' />
                    </div>
                    <p>Icecreams</p>
                </div>
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={fish} alt='fish' />
                    </div>
                    <p>Fish</p>
                </div>
                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={rice} alt='rice' />
                    </div>
                    <p>Rice</p>
                </div>

                <div className="menutabcard">
                    <div className='menutabimg'>
                    <img src={desserts} alt='desserts' />
                    </div>
                    <p>Curry</p>
                </div>

            </div>
        </div>
        <div className="menuoptions">
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
)
}
export default Menu;