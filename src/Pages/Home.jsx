import './Home.css';
import bikedelivery from '../Assets/bikedelivery.png';
import Menu from './Menu';
import cart from '../Assets/cart.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home(props){

    const [items, setItems]=useState([])

useEffect(()=>{
    axios.get("https://backend-self-delta.vercel.app/api/food")
        .then( res=>{
            setItems(res.data.data)
        }
        )
},[])
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
            {
            items.slice(0,4).map((food)=>{
                return(
                    <>
                     <div className="herocard" key={food.id}>
                    <div className="herocardinnersec">
                        <div className="herocardimg-outer">
                    <img className='herocardimg'  src={food.url} alt="strawberry" />
                    </div>
                    <p className="cardname">{food.title}</p>
                    <p className="carddescription">{food.description}</p>
                    <p className="price"> <span style={{color: '#EA580C'}} >₵</span>{food.price}</p>
                    </div>
                </div>
                    </>
                )
            })
           }
               
            </div>
           </div>
        </div>
        <section className="pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-6">
        <h3 className="mb-3">Carousel cards title </h3>
      </div>
      <div className="col-6 text-right">
        <a
          className="btn btn-primary mb-3 mr-1"
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left" />
        </a>
        <a
          className="btn btn-primary mb-3 "
          href="#carouselExampleIndicators2"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right" />
        </a>
      </div>
      <div className="col-12">
        <div
          id="carouselExampleIndicators2"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
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

        <Menu addtocart={props.addtocart}/>
    </div>
)
}
export default Home;