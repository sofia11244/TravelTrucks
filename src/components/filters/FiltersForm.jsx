import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"; 
import { setLocation, setType, toggleFeature, setSearchApplied } from "../../redux/slices/filtersSlice"
import { fetchCampers, resetPage } from "../../redux/slices/campersSlice"
import styles from '../filters/FiltersForm.module.css'

import tv from '../../assets/tv.svg'
import ac from '../../assets/wind.svg'
import bathroom from '../../assets/ph_shower.svg'
import kitchen from '../../assets/cup-hot.svg'
import automatic from '../../assets/diagram.svg'

import three from '../../assets/bi_grid-1x2.svg' // refrigerator icon used for Van
import four from '../../assets/bi_grid.svg' // microwave icon used for Fully Integrated
import nine from '../../assets/bi_grid-3x3-gap.svg' // gas icon used for Alcove

function FilterForm() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)
const searchApplied = useSelector(state => state.filters.searchApplied);

  const vehicleTypes = [
    { value: "van", label: "Van", icon: three },
    { value: "integrated", label: "Fully Integrated", icon: four },
    { value: "alcove", label: "Alcove", icon: nine },
  ]

  const features = [
    { value: "AC", label: "AC", icon: ac },
    { value: "bathroom", label: "Bathroom", icon: bathroom },
    { value: "kitchen", label: "Kitchen", icon: kitchen },
    { value: "TV", label: "TV", icon: tv },
    { value: "automatic", label: "Automatic", icon: automatic },
  ]

  const handleLocationChange = (e) => {
    dispatch(setLocation(e.target.value))
  }


  const handleTypeChange = (e) => {
    dispatch(setType(e.target.value))
  }

  const handleFeatureToggle = (feature) => {
    dispatch(toggleFeature(feature))
  }

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log("SEARCH basıldı. Filtre uygulanıyor...", filters);
  dispatch(resetPage());
  dispatch(setSearchApplied(true));  // This will trigger the effect below
}

useEffect(() => {
  if (searchApplied) {
    console.log("Fetching campers with filters:", filters);
    dispatch(fetchCampers());
  }
}, [filters, searchApplied, dispatch]);  // Triggers when either filters or searchApplied changes


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
/>
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
              <label
                key={type.value}
                className={`${styles.typeOptionButton} ${filters.type === type.value ? styles.active : ''}`}
              >
                <input
                  type="radio"
                  name="vehicleType"
                  value={type.value}
                  checked={filters.type === type.value}
                  onChange={handleTypeChange}
                />
                <img src={type.icon} alt={`${type.label} icon`} className={styles.typeIcon} />
                <span>{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.filterActions}>
          <button type="submit" className={styles.showMoreBtn} >
            Search
          </button>
        </div>

      </form>
    </div>
  )
}

export default FilterForm
