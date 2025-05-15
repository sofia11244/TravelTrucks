import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"

export const fetchCampers = createAsyncThunk("campers/fetchCampers", async (_, { getState, rejectWithValue }) => {
  try {
    const { filters } = getState()
    const queryParams = new URLSearchParams()

    if (filters.location) {
      queryParams.append("location", filters.location)
    }

    if (filters.type) {
      queryParams.append("form", filters.type)
    }
    if (filters.features["automatic"]) {
      queryParams.append("transmission", "automatic")
    }
    const response = await axios.get(`${API_URL}?${queryParams.toString()}`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const fetchCamperById = createAsyncThunk("campers/fetchCamperById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const initialState = {
  items: [],
  total: 0,
  currentCamper: null,
  loading: false,
  error: null,
  page: 1,
  searchEmpty: false,

}

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1
    },
    resetPage: (state) => {
      state.page = 1
    },
    clearCurrentCamper: (state) => {
      state.currentCamper = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload.items
        state.total = action.payload.total
        state.searchEmpty = action.payload.items.length === 0;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false
        state.currentCamper = action.payload
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      

  },
})

export const { incrementPage, resetPage, clearCurrentCamper } = campersSlice.actions
export default campersSlice.reducer