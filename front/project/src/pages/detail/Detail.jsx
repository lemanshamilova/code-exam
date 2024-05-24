import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {productId}=useParams()
  const [product, setProduct] = useState([]);

  const getProduct=async()=>{
    const res=await axios("http://localhost:5050/products/"+productId)
    setProduct(res.data)
  }
  useEffect(() => {
    getProduct()
   
  }, []);
  return (
    <section >
      <div className='container'>
        <div className='carts'>
          {
            product.map((p) => (
              <div className='cart' key={p._id}>





                <div className='text'>


                  <h4>{p.title}</h4>
                  <h2>{p?.description}</h2>

                  <p>${p.price}</p>
                </div>
                <img src={p.image} />
               





              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Detail