import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  location: { country: "", city: "" }, //changed bcuz its not a string anymore
  type: "",
  searchApplied: false,
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
    transmission: false,
    automatic: false, // ?

  },
}


const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      // state.location = action.payload
      // const { country, city } = action.payload; değil de

      const {  country = "", city = "" } = action.payload; // Böylece undefined veya string karmaşası yaşamazsın.
      
    state.location = { country, city };//obje haline getirmek için(?)
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