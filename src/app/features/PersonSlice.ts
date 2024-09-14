import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PersonState{
    name:string
}

export const initialState:PersonState ={
    name:""
}


export const PersonSlice = createSlice({
    name:"person",
    initialState,
    reducers:{
        addPerson : (state,action:PayloadAction<string>) =>{
            state.name = action.payload
        }
    }
})


export const {addPerson} = PersonSlice.actions

export default PersonSlice.reducer