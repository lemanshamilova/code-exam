import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrash } from "react-icons/fa";
import './basket.scss'

import { addToBasket, delBasket, remvBasket } from '../../redux/slices/productSlice'
const Basket = () => {
  const basket = useSelector((state) => state.products.basket)
  const dispatch = useDispatch()
  return (
    <section >
      <div className='container'>
        <div className='carts'>
          {
            basket.map((p) => (
              <div className='cart' key={p._id}>





                <div className='text'>


                  <h4>{p.title}</h4>
                  <h2>{p?.description}</h2>

                  <p>${p.price}</p>
                </div>
                <img src={p.image} />
                <div className='bottom-side'>
                  <div className='counter'>
                    <button onClick={() => {
                      dispatch(remvBasket(p))
                    }}>-</button>
                    <span>{p.count}</span>
                    <button onClick={() => {
                      dispatch(addToBasket(p))
                    }}>+</button>


                  </div>
                  <FaTrash  className='trash' onClick={()=>{
                    dispatch(delBasket(p))
                  }}/>

                </div>





              </div>
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default Basket