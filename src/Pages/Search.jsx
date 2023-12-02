import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import cart from '../Assets/cart.png';

function Search(props){
    const [searchparams, setSearchparams]=useSearchParams()
    const q = searchparams.get("q")
    const [product, setProduct]=useState([])
    useEffect(()=>{
        axios.get(`https://backend-self-delta.vercel.app/api/search?q=${q}`)
        .then(res=>{
            setProduct(res.data.products)
        })
    },[])

    return(
        <>
         <section className='container food-details'>
            {
            product.map((food)=>{
               return(
                <>
                 <div className='design-for-detail'>
                <div className="row text-centre item-img mt-5">
                    <img src={food.url} alt='foodimage' />
                </div>
                <div className="row text-centre item-details">
                    <h1 className='display-2'>
                        {food.title}
                    </h1>
                    <p>
                        {food.description}
                    </p>
                    <p className="text-danger">Real price:
                    ₵{food.price}
                    </p>
                    <p className="text-warning">Discount:
                    ₵{food.discount}
                    </p>
                    <div className='foodcartimg'>
                        <img src={cart} onClick={()=>{props.addtocart(food)}} alt='cart' />
                        </div>
                                </div>
                </div>
                </>
               )
            })
        }
        </section>
        </>
    )
}
export default Search