import { createSlice,nanoid } from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    users:[{id:"abc", name:"xyz"}]
}

const Slice = createSlice({
    name:"adduserslice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const data={
                id:nanoid(),
                name:action.payload
            }
            state.users=[...state.users,data]
        }
    }
});

export const {addUser} = Slice.actions;
export default Slice.reducer;