// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getFugitives = createAsyncThunk('appWanted/getFugitives', async params => {

  const searchParams = { 
    ...params, 
    title: params.q ? params.q : null,
    sort_on: params.sortBy ? params.sortBy : null
  }
  delete searchParams['q']
  delete searchParams['sortBy']
  
  const response = await axios.get('https://api.fbi.gov/wanted/v1', { params: { ...searchParams } })
  return { params, data: { ...response.data, fugitives: [...response.data.items]} }
})

export const getFugitive = createAsyncThunk('appWanted/getFugitive', async uid => {  
  const response = await axios.get(`https://api.fbi.gov/wanted/v1/object/${uid}`)

  return { fugitiveDetail: response.data }
})

export const appWantedSlice = createSlice({
  name: 'appWanted',
  initialState: {
    cart: [],
    params: {},
    fugitives: [],
    totalFugitives: 0,
    fugitiveDetail: {}
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getFugitives.fulfilled, (state, action) => {
        state.params = action.payload.params
        state.fugitives = action.payload.data.fugitives
        state.totalFugitives = action.payload.data.total
      })     
      .addCase(getFugitive.fulfilled, (state, action) => {
        state.fugitiveDetail = action.payload.fugitiveDetail
      })
  }
})

export default appWantedSlice.reducer
