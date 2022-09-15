import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
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

export const {test } = userSlice.actions
export default userSlice.reducer