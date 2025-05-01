import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketDataThunk = createAsyncThunk('basket/get', async () => {
    const res = await axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/basket')
    return res.data
})

export const deleteBasketDataThunk = createAsyncThunk('basket/delete', async (id) => {
    const res = await axios.delete(`https://664b0dc2a300e8795d44055f.mockapi.io/basket/${id}`)
    return id
})

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: []
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getBasketDataThunk.fulfilled, (state, action) => {
            state.loading = false
            state.basket = action.payload
        })
        .addCase(getBasketDataThunk.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getBasketDataThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        .addCase(deleteBasketDataThunk.fulfilled, (state, action) => {
            state.loading = false
            state.basket = state.basket.filter(item => item.id !== action.payload)
        })
    }
})

export default basketSlice.reducer