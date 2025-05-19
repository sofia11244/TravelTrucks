import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"; 
import { setLocation, setType, toggleFeature, setSearchApplied } from "../../redux/slices/filtersSlice";
import { fetchCampers } from "../../redux/slices/campersSlice";
import styles from '../filters/FiltersForm.module.css';

import { fetchAllCities } from "../../redux/slices/campersSlice";

import tv from '../../assets/tv.svg';
import ac from '../../assets/wind.svg';
import bathroom from '../../assets/ph_shower.svg';
import kitchen from '../../assets/cup-hot.svg';
import automatic from '../../assets/diagram.svg';

import three from '../../assets/bi_grid-1x2.svg'; // refrigerator icon used for Van
import four from '../../assets/bi_grid.svg'; // microwave icon used for Fully Integrated
import nine from '../../assets/bi_grid-3x3-gap.svg'; // gas icon used for Alcove


function FilterForm() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const allCities = useSelector(state => state.campers.cities);
  const searchApplied = useSelector(state => state.filters.searchApplied);
  
  const [filteredCities, setFilteredCities] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
useEffect(() => {
  dispatch(fetchAllCities());
}, [dispatch]);

useEffect(() => {
  console.log("All cities from Redux:", allCities);
}, [allCities]);


  const vehicleTypes = [
    { value: "panelTruck", label: "Van", icon: three },
    { value: "fullyIntegrated", label: "Fully Integrated", icon: four },
    { value: "alcove", label: "Alcove", icon: nine },
  ];

  const features = [
    { value: "AC", label: "AC", icon: ac },
    { value: "bathroom", label: "Bathroom", icon: bathroom },
    { value: "kitchen", label: "Kitchen", icon: kitchen },
    { value: "TV", label: "TV", icon: tv },
    { value: "automatic", label: "Automatic", icon: automatic },
  ];

const handleLocationChange = (e) => {
  const value = e.target.value;
  console.log("Input value:", value);
  dispatch(setLocation(value));

  if (value.length > 1) {
    const suggestions = allCities.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    console.log("Filtered suggestions:", suggestions);
    setFilteredCities(suggestions);
    setShowSuggestions(true);
  } else {
    setShowSuggestions(false);
  }
};

  

  // const handleTypeChange = (e) => {
  //   dispatch(setType(e.target.value));
  // };

  const handleCitySelect = (city) => {
    dispatch(setLocation(city));
    setShowSuggestions(false);
  };


  const handleFeatureToggle = (feature) => {
    dispatch(toggleFeature(feature));
  };
const handleTypeToggle = (type) => {
  dispatch(setType(filters.type === type ? "" : type)); // Aynı tipe tıklanırsa kaldır
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filtreler gönderiliyor ve searchApplied true olarak ayarlanıyor.
    dispatch(setSearchApplied(true));  // Bu tetikleyerek arama işlemi yapılacak
    // console.log("Reservation submitted", camperId, formData);
  };

  useEffect(() => {
    if (searchApplied) {
      // Sadece searchApplied true olduğunda veri çekilecek
      dispatch(fetchCampers());
      dispatch(setSearchApplied(false));  // Bir kere çalıştıktan sonra tekrar çalışmasın
    }
  }, [searchApplied, dispatch]);


// const handleCitySelect = (city) => {
//   dispatch(setLocation(city));
//   setShowSuggestions(false);
// };

  return (
    <div className={styles.filterContainer}>
      <form className={styles.filterForm} onSubmit={handleSubmit}>
        <div className={styles.filterSection}>
          <h3 className={styles.filtersTitleLocation}>Location</h3>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="City"
              value={filters.location}
              onChange={handleLocationChange}
              className={`${styles.locationInput} ${searchApplied && filters.location ? styles.activeInput : ''}`}
              onFocus={() => setShowSuggestions(true)}
              // onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} 
            />
            {showSuggestions && filteredCities.length > 0 && (
              <ul className={styles.suggestionsList}>
                {filteredCities.map((city, index) => (
                  <li
                    key={index}
                    className={styles.suggestionItem}
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className={styles.filtersTitle}>Filters</p>
        <div className={styles.filterSection}>
          <h3 className={styles.filtersTitleVehicle}>Vehicle Equipments</h3>
          <div className={styles.featureOptions}>
            {features.map((feature) => (
              <label
                key={feature.value}
                className={`${styles.featureOption} ${filters.features[feature.value] ? styles.active : ""}`}
              >
                <input
                  type="checkbox"
                  checked={filters.features[feature.value]}
                  onChange={() => handleFeatureToggle(feature.value)}
                />
                <div className={styles.featureOptionContent}>
                  <img src={feature.icon} alt={`${feature.label} icon`} className={styles.featureIcon} />
                  <span className={styles.featureLabel}>{feature.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.filterSection}>
          <h3 className={styles.filtersTitleVehicle}>Vehicle Type</h3>
          <div className={styles.typeOptions}>
  {vehicleTypes.map((type) => (
    <div
      key={type.value}
      onClick={() => handleTypeToggle(type.value)}
      className={`${styles.typeOptionButton} ${filters.type === type.value ? styles.active : ''}`}
    >
      <img src={type.icon} alt={`${type.label} icon`} className={styles.typeIcon} />
      <span>{type.label}</span>
    </div>
  ))}
</div>

        </div>

        <div className={styles.filterActions}>
          <button type="submit" className={styles.showMoreBtn}>
            Search
          </button>
        </div>

      </form>
    </div>
  );
}

export default FilterForm;
