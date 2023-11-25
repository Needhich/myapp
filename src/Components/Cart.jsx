import axios from "axios"
import { useState } from "react"
import './Cart.css'

function Cart(props){
    const deleteitem =(index)=>{
     const updatecart = [...props.cart]
     updatecart.splice(index,1)
     props.setCart(updatecart)
    }
    const addquantity = (index)=>{
        const updatecart= [...props.cart]
        updatecart[index].quantity += 1
        props.setCart(updatecart)
    }
    const removequantity = (index)=>{
        const updatecart = [...props.cart]
        if(updatecart[index].quantity === 1){
            props.setCart(updatecart)
        }else{
            updatecart[index].quantity -= 1
            props.setCart(updatecart)
        }
    }
    return(
        <>
        <section className="container cartSection">
            <div className="mycart">
                <p className="display-3">My Cart</p>
                    {
                        props.cart.map((item,index)=>{
                            return(
                                <>
                                <div key={item._id} className="row-cols-lg-5 row p-4 border-bottom justify-content-center align-center text-left">
                                    <div className="col-md-3 text-left d-flex align-items-center">
                                <img className="cart-item-img mr-4 ml-4" src={item.url} alt={item.url} /></div>
                                <div className="col-md-3 d-flex align-items-center">
                                <span className="text-left">{item.title}</span>
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                <button onClick={()=>{deleteitem(index)}} className="btn text-left"><i class="fa-solid fa-trash" style={{color: "#000000"}}></i></button>
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <button onClick={()=>{addquantity(index)}} className="btn"><i class="fa-solid fa-plus" style={{color: "#000000"}}></i></button>{item.quantity}
                                    <button onClick={()=>{removequantity(index)}} className="btn"><i class="fa-solid fa-minus" style= {{color:" #000000"}}></i></button>
                                </div>
                                </div>
                                </>
                            )
                        })
                    }
            </div>
        </section>
        </>
    )
}
export default Cart