import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/Slide/cart/Cart'
import categorySlice from '../features/Slide/category'
import categoryPhoneSlice from '../features/Slide/categoryPhone/catePhone'
import productSlice from '../features/Slide/product/product'
import searchSlide from '../features/Slide/searchslice'
import userSlide from '../features/Slide/user/userSlide'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlide.reducer,
        categoryPhone: categoryPhoneSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer,
        searchProduct: searchSlide.reducer
    }
})

