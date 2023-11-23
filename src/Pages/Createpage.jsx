import './Createpage.css';
import chef from '../Assets/chef.png';
import { useState } from 'react';
import axios from 'axios';

function Createpage() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    
    const handleImageUpload = async (e) => {
        try {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'sinypays');

            const res = await axios.post(
                'https://api.cloudinary.com/v1_1/dw6bugovr/image/upload',
                formData
            );

            if (res.status === 200) {
                const newImage = res.data.secure_url;
                setImage(newImage);
                alert("image upload done")
            } else {
                console.log(res.data.error);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && price && discount && description && category && image && address) {
            axios
                .post('https://backend-self-delta.vercel.app/api/create-food', {
                    title,
                    price,
                    user: '862834562862048',
                    discount,
                    description,
                    category,
                    url: image,
                    address,
                })
                .then((res) => {
                    if (res.data.status === 'true') {
                        alert('Data has been submitted successfully');
                        console.log('data is', res.data);
                        setTitle('');
                        setPrice(0);
                        setDiscount(0);
                        setDescription('');
                        setCategory('');
                        setAddress('');
                        setImage('');
                    }
                })
                .catch((error) => {
                    console.log('Error posting message', error);
                });
        } else {
            alert('Please fill in all fields.');
        }
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
                <div className='row borderr'>
                <div className='col-md-12 mt-3'>
                    <input className="form-control" type="file" name="name" id="image"   onChange={handleImageUpload} />
                    <label for="image">Image URL</label>
                    </div>
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