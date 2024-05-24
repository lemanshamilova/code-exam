import React, { useEffect } from 'react'
import './cards.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, addToWishlist, getAllData } from '../../redux/slices/productSlice'
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Cards = () => {
    const products = useSelector((state) => state.products.products)
    const wishlist = useSelector((state) => state.products.wishlist)
const navigate =useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllData())
    }, [])

    return (
        <section className='cards'>
            <div className='container'>
                <div className='carts'>
                    {
                        products.map((p) => (
                            <div className='cart' key={p._id}>



                                <div className='text'>


                                    <h4>{p.title}</h4>
                                    <h2>{p?.description}</h2>

                                    <p>${p.price}</p>
                                </div>
                                <img src={p.image} />
                                <div className='top-box'>
                                    <FaShoppingCart onClick={(e) => {
                                        e.preventDefault(), e.stopPropagation()
                                        dispatch(addToBasket(p))
                                        alert("added to basket")


                                    }} />
                                    {
                                        wishlist.find((q) => q._id === p._id) ? (

                                            <MdFavoriteBorder style={{color:"red"}} onClick={(e) => {
                                                e.preventDefault(), e.stopPropagation()
                                                dispatch(addToWishlist(p))
                                                alert("added to wishlist")

                                            }} />
                                        ):(
                                            <MdFavoriteBorder onClick={(e) => {
                                                e.preventDefault(), e.stopPropagation()
                                                dispatch(addToWishlist(p))
                                                alert("added to wishlist")

                                            }} />
                                            

                                

                                        )
                                    }


                                </div>
                                <button className='detail' onClick={()=>{
                                    navigate(`${p._id}`)

                                }}>DETAIL</button>





                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default Cards