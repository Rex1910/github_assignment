import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading : false,
  users : [],
  error : '',
}

export const fetchUsers = createAsyncThunk('user/fetchUser',(user) => {
  return axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then((response)=>response.data)
})

const homeSlice  = createSlice({
  name : 'home',
  initialState,
  extraReducers : (builder) => {
    builder.addCase(fetchUsers.pending,(state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled,(state,action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected,(state,action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})

export default homeSlice.reducer;