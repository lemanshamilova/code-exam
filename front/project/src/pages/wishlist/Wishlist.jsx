import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.products.wishlist)
  const dispatch = useDispatch()
  return (
    <section >
      <div className='container'>
        <div className='carts'>
          {
            wishlist.map((p) => (
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

export default Wishlist