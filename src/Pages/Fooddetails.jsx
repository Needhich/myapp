import { useParams } from 'react-router-dom'
import './Fooddetails.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import cart from '../Assets/cart.png';

function Fooddetails(props){
    const foodid = useParams()
    const [productDetails, setProductDetails]=useState("")
    useEffect(()=>{
        axios.get(`https://backend-self-delta.vercel.app/api/getfoods/${foodid.id}`)
        .then(res=>{
            setProductDetails(res.data.food)
        })
    },[])
    return(
        <>
        <section className='container food-details'>
            <div className='design-for-detail'>
            <div className="row text-centre item-img mt-5">
                <img src={productDetails.url} alt='foodimage' />
            </div>
            <div className="row text-centre item-details">
                <h1 className='display-2'>
                    {productDetails.title}
                </h1>
                <p>
                    {productDetails.description}
                </p>
                <p className="text-danger">Real price:
                ₵{productDetails.price}
                </p>
                <p className="text-warning">Discount:
                ₵{productDetails.discount}
                </p>
                <div className='foodcartimg'>
                    <img src={cart} onClick={()=>{props.addtocart(productDetails)}} alt='cart' />
                    </div>
                    </div>
            </div>
            <div className="coments">
                    <label for="exampleFormControlTextarea1" class="form-label">Add your comments here</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
        </section>
        </>
    )
}
export default Fooddetails