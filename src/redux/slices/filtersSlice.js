import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  location: "",
  type: "",
  features: {
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
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
    resetFilters: () => initialState,
  },
})

export const { setLocation, setType, toggleFeature, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer