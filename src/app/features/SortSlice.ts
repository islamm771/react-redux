import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SortState {
  sortBy: string;
  order: string;
}

const initialState: SortState = {
  sortBy: "",
  order: ""
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortState>) => {
      state.sortBy = action.payload.sortBy
      state.order = action.payload.order
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSort } = sortSlice.actions

export default sortSlice.reducer