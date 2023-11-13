import './Createpage.css';
import chef from '../Assets/chef.png';
import { useState } from 'react';
import axios from 'axios';

function Createpage(){
    const [title, setTitle]=useState("")
    const [price, setPrice]=useState("")
    const [discount, setDiscount]=useState("")
    const [description, setDescription]=useState("")
    const [category, setCategory]=useState("")
    const [image, setImage]=useState("")
    const [address, setAddress]=useState("")
    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post("https://backend-self-delta.vercel.app/api/create-food",{
            title,
            price,
            discount,
            description,
            category,
            image:"image",
            address
        })
        .then((res)=>{
            if(res.data.status === "true"){
                alert("Data has been submitted successfully");
                console.log("data is", res.data);
            }
        })
        .catch((error) => {
            console.log("Error posting message", error)

        });

    };
    return(
        <>
        <div className="container">
            <div className='row mt-5'></div>
        <div className="pagebody row">
        <div className="col-md-1">
           
            </div>
            <div className="col-md-4">
            <img className='createpagechef' src={chef} alt="chef" />
            </div>
            <div className="col-md-5">
                <div className='row'>
                    <div className='col-md-6 mt-3'>
                    <input className="form-control" type="text" id="title" name="name" required onChange={(e)=>{setTitle(e.target.value)}} />
                    <label className='form-label text-left' for="title">TITLE</label>
                    </div>
                    <div className='col-md-6 mt-3'>
                    <input className="form-control" type="text" id="price" name="name" required onChange={(e)=>{setPrice(e.target.value)}} />
                    <label className='form-label' for="price">PRICE</label>
                    </div>
                    <div className='col-md-12 mt-3'>
                    <input className="form-control"  type="text" id="disprice" name="name" required onChange={(e)=>{setDiscount(e.target.value)}} />
                    <label className='form-label' for="disprice">Discount Price</label>
                    </div>
                    <div className='col-md-12 mt-3'>
                    <input className="form-control"  type="text" id="category" name="name" required onChange={(e)=>{setCategory(e.target.value)}} />
                    <label className='form-label' for="category">Category</label>
                    </div>
                    <div className='col-md-12 mt-3'>
                    <input className="form-control"  type="text" id="description" name="name" required onChange={(e)=>{setDescription(e.target.value)}} />
                    <label className='form-label' for="description">Description</label>
                    </div>
                    <div className='col-md-12 mt-3'>
                    <input className="form-control"  type="text" id="address" name="name" required onChange={(e)=>{setAddress(e.target.value)}} />
                    <label className='form-label' for="address">Address</label>
                    </div>
                    <div className='col-md-12 mt-3'>
                    <input className="form-control" type="text" name="name" id="image" accept="image/*"  onChange={(e)=>{setImage(e.target.value)}} />
                    <label for="image">Image URL</label>
                    </div>
                    <div className='col-md-12 mt-3'>
                    <button type="button" class="btn btn-warning" onClick={handleSubmit }>Submit Form</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Createpage;