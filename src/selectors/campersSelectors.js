// src/selectors/campersSelectors.js
export const selectFilteredCampers = (state) => {
    const { campersList } = state.campers;
    const { location, type, priceRange } = state.filters;
  
    if (!Array.isArray(campersList)) {
      console.error('campersList is not an array:', campersList);
      return [];
    }
    // console.log('campersList in selector:', state?.campers?.campersList);

    
    return campersList.filter((camper) => {
      const matchesLocation = location === '' || camper.location?.toLowerCase().includes(location.toLowerCase());
      const matchesType = type === '' || camper.type === type;
      const matchesPrice = camper.price >= priceRange[0] && camper.price <= priceRange[1];
  
      return matchesLocation && matchesType && matchesPrice;
    });
  };
  