import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  location: "",
  type: "",
  searchApplied: false,
  features: {
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    automatic: false, 
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
    transmission: false,
  },
}


const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload
    },
    setType: (state, action) => {
      state.type = action.payload
    },
    toggleFeature: (state, action) => {
      const feature = action.payload
      state.features[feature] = !state.features[feature]
    },
    setSearchApplied: (state, action) => {
    state.searchApplied = action.payload;
  },
  },
})

export const { setLocation, setType, toggleFeature, setSearchApplied} = filtersSlice.actions
export default filtersSlice.reducer