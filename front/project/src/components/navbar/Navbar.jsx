import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './navbar.scss'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const basket = useSelector((state) => state.products.basket)

    const navigate=useNavigate()
    return (
        <header>
            <div className='container'>
                <div className='nav'>
                <img className='image' src='https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png'/>

                <div className='margin'>
                <ul>
                    <li>
                        <NavLink to={"/"}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink>GALLERY</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/wishlist"}>WISHLIST</NavLink>
                    </li>
                    <li>
                        <NavLink>REVIEWS</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add"}>ADD</NavLink>
                    </li>

                </ul>

                </div>

                <div className='right-side'>
                <FaShoppingCart className='basket' onClick={()=>{
                    navigate("/basket")
                }} />
                <span className='count'>{basket.length}</span>

                <button>
                    BUY NOW
                </button>




                </div>

                

                
                

                

                
                


                </div>


            </div>







        </header>
    )
}

export default Navbar