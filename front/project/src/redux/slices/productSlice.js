import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const getAllData = createAsyncThunk(
    'products/getAllData',
    async () => {
        const response = await axios.get("http://localhost:5050/products")
        return response.data
    },
)

const initialState = {
    products: [],
    basket:JSON.parse(localStorage.getItem("basket")) || [],
    wishlist:JSON.parse(localStorage.getItem("basket")) || [],

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
       
        addToBasket: (state, action) => {
           const {_id,image,price,title,description}=action.payload
           let index=state.basket.findIndex((p)=>p._id===_id)
           if(index !==-1){
            state.basket[index].count +=1
           }
           else{
            state.basket.push({_id,image,price,title,description,count:1})
           }
           localStorage.setItem("basket",JSON.stringify(state.basket))
        },
        remvBasket: (state, action) => {
            const {_id,image,price,title,description}=action.payload
            let index=state.basket.findIndex((p)=>p._id===_id)
            if(index !==-1){
              if( state.basket[index].count >1){
                state.basket[index].count -=1
              }else{
                state.basket=state.basket.filter((p)=>p._id !==_id)
              }
            }
           
            localStorage.setItem("basket",JSON.stringify(state.basket))
         },
         delBasket: (state, action) => {
            const {_id,image,price,title,description}=action.payload
            let index=state.basket.findIndex((p)=>p._id===_id)
            if(index !==-1){
              
                state.basket=state.basket.filter((p)=>p._id !==_id)
              
            }
           
            localStorage.setItem("basket",JSON.stringify(state.basket))
         },
         addToWishlist: (state, action) => {
            const {_id,image,price,title,description}=action.payload
            let index=state.wishlist.findIndex((p)=>p._id===_id)
            if(index !==-1){
                state.wishlist=state.basket.filter((p)=>p._id !==_id)
            }
            else{
             state.wishlist.push({_id,image,price,title,description,count:1})
            }
            localStorage.setItem("wishlist",JSON.stringify(state.wishlist))
         },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllData.fulfilled, (state, action) => {
            state.products=[...action.payload]
        })
    },
})

export const {addToBasket,addToWishlist,remvBasket,delBasket } = counterSlice.actions

export default counterSlice.reducer