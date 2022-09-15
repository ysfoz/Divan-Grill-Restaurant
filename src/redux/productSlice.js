import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:"user",
    initialState:{
        error:false,
        isFetching:false,
        user:null
    },
    reducers:{
        test:(state) =>{
            state.error = true
        }
    }
})

export const {test } = productSlice.actions
export default productSlice.reducer