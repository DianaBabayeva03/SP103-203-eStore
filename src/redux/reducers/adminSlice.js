import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminDataThunk = createAsyncThunk('get/admin', async () => {
    const res = await axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/basket')
    return res.data
})

export const postAdminDataThunk = createAsyncThunk('post/admin', async (data) => {
    const res = await axios.post('https://664b0dc2a300e8795d44055f.mockapi.io/basket', data)
    return res.data
})

export const deleteAdminDataThunk = createAsyncThunk('delete/admin', async (id) => {
    const res = await axios.delete(`https://664b0dc2a300e8795d44055f.mockapi.io/basket/${id}`)
    return id
})

export const adminSlice = createSlice({
    name: 'admin',
    initialState:{
        admin: []
    },
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(getAdminDataThunk.fulfilled, (state, action) =>{
            state.loading = false
            state.admin = action.payload
        })
        .addCase(postAdminDataThunk.fulfilled, (state, action) =>{
            state.loading = false
            state.admin.push(action.payload)
        })
        .addCase(deleteAdminDataThunk.fulfilled, (state,action) => {
            state.loading = false
            state.admin = state.admin.filter(item => item.id !== action.payload)
        })
    }
})

export default adminSlice.reducer