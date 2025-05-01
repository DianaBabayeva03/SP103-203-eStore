import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import basketSlice from "./reducers/basketSlice";
import adminSlice from "./reducers/adminSlice";

const store = configureStore({
    reducer:{
        product: productSlice,
        basket: basketSlice,
        admin: adminSlice,
    }
})

export default store