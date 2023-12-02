import './Menu.css';
import menu from '../Assets/menu.png';
import chicken from '../Assets/chicken.png';
import fruit from '../Assets/fruit.png';
import softdrink from '../Assets/softdrink.png';
import desserts from '../Assets/dessert.png';
import icecream from '../Assets/icecream.png';
import fish from '../Assets/fish.png';
import rice from '../Assets/rice.png';
import cart from '../Assets/cart.png';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Menu (props){
    const [loading, setLoading]= useState(true);
    const spinner = document.getElementById("spinner");
    if(spinner){
        setTimeout(() => {
            spinner.style.display = "none";
            setLoading(false);
        }, 500);
    }
    const [foods, setFoods]=useState([])
    const fetchitems=()=>{
        axios.get("https://backend-self-delta.vercel.app/api/food")
        .then( res=>{
            setFoods(res.data.data)
            // foods.reverse()
        }
        )
    }
    useEffect(()=>{
        fetchitems()
    },[])
    const handlefood = (title)=>{
        if (title === "Menu") {
           fetchitems() 
        }else{
            axios.get(`https://backend-self-delta.vercel.app/api/all/${title}`)
            .then( res=>{
                setFoods(res.data.food)
    
            }
            )
        }
    }
    const menubuttons=[
        {id:1, title:"Menu", image:menu},
        {id:2, title:"Chicken", image:chicken},
        {id:3, title:"Fruit", image:fruit},
        {id:4, title:"Soft Drink",image:softdrink},
        {id:5, title:"Desserts", image:desserts},
        {id:6, title:"Icecreams", image:icecream},
        {id:7, title:"Fish", image:fish},
        {id:8, title:"Rice", image:rice},
        {id:9, title:"Curry", image:desserts}
    ]
return(
    <div>
        <div className="menusection">
            <p className="menuheading underline-text">Our Hot Dishes</p>
            <div className="menutabs">
                {
                    menubuttons.map((menu )=>{
                        return(
                            <>
                             <div className="menutabcard" key={menu.id} onClick={()=>{handlefood(menu.title)}}>
                                <div className='menutabimg'>
                                    <img src={menu.image} alt='menu' />
                                </div>
                                <p>{menu.title}</p>
                             </div>
                            </>

                        )
                    })
                }

            </div>
        </div>
        <div id='spinner' class="spinner-border text-danger mx-auto" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        <div className="menuoptions">
            {
                 !loading &&(
                foods.map((food)=>{
                    return(
                        <>
                          <div className="menuoptioncard">
                <div className="foodimg">
                    <div className='foodimage'>
                    <img style={{width:"100px"}} src={food.url} alt="foodtest" />
                    </div>
                    <div className='foodcardimg'>
                    <img src={cart} onClick={()=>{props.addtocart(food)}} alt='cart' />
                    </div>
                </div>
                <div className='fooddetail'>
                    <Link to={`/fooddetails/${food._id}`} className='detail-link'>
                <button className="btn btn-primary">Details</button></Link>
                <div className="carddetail">
                <p className="foodname"> {food.title} </p>
                <p className="fooddescription">{food.description}</p>
                <p className="foodprice text-info">₵{food.price}</p>
                </div>
                </div>
            </div>
                        </>
                    )
                })
                 )
            }
          
           
            
           
        </div>

    </div>
)
}
export default Menu;