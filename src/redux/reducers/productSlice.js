import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataThunk = createAsyncThunk('api/get', async () => {
    const res = await axios.get('https://dummyjson.com/products')
    return res.data.products
})

export const postDataThunk = createAsyncThunk('api/post', async (data) => {
    const res = await axios.post('https://664b0dc2a300e8795d44055f.mockapi.io/basket', data)
    return res.data
})

export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: []
    },
    reducers: {},
    extraReducers: builder =>  {
        builder
        .addCase(getDataThunk.fulfilled, (state, action) =>{
            state.loading = false
            state.product = action.payload
        })
        .addCase(getDataThunk.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getDataThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(postDataThunk.fulfilled, (state, action) =>{
            state.loading = false
            state.product.push(action.payload)
        })
        .addCase(postDataThunk.pending, (state, action) => {
            state.loading = true
        })
        .addCase(postDataThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer