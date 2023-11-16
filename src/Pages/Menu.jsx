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

function Menu (){
const [foods, setFoods]= useState([])
const [activeButton, setActiveButton] = useState('Menu');


const fetchitems =()=>{
    axios.get("https://backend-self-delta.vercel.app/api/food")
    .then(
        res=>{
            setFoods(res.data.data)
        }
    )
}


useEffect(()=>{
    fetchitems()
},[])
const handlefood = (title)=>{
    setActiveButton(title);

if(title === "Menu"){
    fetchitems()
}else{
    axios.get(`https://backend-self-delta.vercel.app/api/all/${title}`)
    .then(
        res=>{
            setFoods(res.data.food)
        }
    )
}
}

const menubuttons = [
    {id:8, title:"Menu" , image:menu},
    {id:1 , title:"Chicken" , image:chicken },
    {id:2 , title:"Fruit" , image:fruit },
    {id:3 , title:"Soft Drink" , image:softdrink },
    {id:4 , title:"Desserts" , image:desserts },
    {id:5 , title:"Chicken" , image:icecream },
    {id:6 , title:"Icecreams" , image:fish },
    {id:7 , title:"Rice" , image:rice },
    {id:9 , title:"Curry" , image:desserts },
  
]







return(
    <div>
        <div className="menusection">
            <p className="menuheading underline-text">Our Hot Dishes</p>
            <div className="menutabs">
                {
                    menubuttons.map((menu)=>{
                        return(
                            <>
<div
            key={menu.id}
            className={`menutabcard ${activeButton === menu.title ? 'active' : ''}`}
            onClick={() => handlefood(menu.title)}
          >                    <div className='menutabimg'>
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
        <div className="menuoptions">

        
            {
                foods.map((food)=>{
                    return(
                        <>

                          <div className="menuoptioncard">
                <div className="foodimg">
                    <img src={food.url} alt="foodtest" />
                    <div className='foodcardimg'>
                    <img src={cart} alt='cart' />
                    </div>
                </div>
                <p className="foodname">{food.title}</p>
                <p className="fooddescription">{food.description}</p>
                <p className="foodprice"><span style={{color: '#F47C2A'}}>₵</span>{food.price}</p>
            </div>
                        </>
                    )
                })
            }
          
           
            
           
        </div>

    </div>
)
}
export default Menu;