import { useDispatch, useSelector } from "react-redux"
import { setLocation, setType, toggleFeature, resetFilters } from "../../redux/slices/filtersSlice"
import { fetchCampers, resetPage } from "../../redux/slices/campersSlice"
import styles from '../../styles/FilterForm.module.css' // Import your CSS module

function FilterForm() {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)

  const vehicleTypes = [
    { value: "alcove", label: "Alcove" },
    { value: "integrated", label: "Integrated" },
    { value: "van", label: "Van" },
  ]

  const features = [
    { value: "AC", label: "Air Conditioning" },
    { value: "bathroom", label: "Bathroom" },
    { value: "kitchen", label: "Kitchen" },
    { value: "TV", label: "TV" },
    { value: "radio", label: "Radio" },
    { value: "refrigerator", label: "Refrigerator" },
    { value: "microwave", label: "Microwave" },
    { value: "gas", label: "Gas" },
    { value: "water", label: "Water" },
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
    e.preventDefault()
    dispatch(resetPage())
    dispatch(fetchCampers())
  }

  const handleReset = () => {
    dispatch(resetFilters())
    dispatch(resetPage())
    dispatch(fetchCampers())
  }

  return (
    <div className={styles.filterContainer}>
      <form className={styles.filterForm} onSubmit={handleSubmit}>
        <div className={styles.filterSection}>
          <h3>Location</h3>
          <input
            type="text"
            placeholder="Search for location..."
            value={filters.location}
            onChange={handleLocationChange}
            className={styles.locationInput}
          />
        </div>

        <div className={styles.filterSection}>
          <h3>Vehicle Type</h3>
          <div className={styles.typeOptions}>
            {vehicleTypes.map((type) => (
              <label key={type.value} className={styles.typeOption}>
                <input
                  type="radio"
                  name="vehicleType"
                  value={type.value}
                  checked={filters.type === type.value}
                  onChange={handleTypeChange}
                />
                <span>{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.filterSection}>
          <h3>Features</h3>
          <div className={styles.featureOptions}>
            {features.map((feature) => (
              <label key={feature.value} className={styles.featureOption}>
                <input
                  type="checkbox"
                  checked={filters.features[feature.value]}
                  onChange={() => handleFeatureToggle(feature.value)}
                />
                <span>{feature.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.filterActions}>
          <button type="button" className={styles.resetBtn} onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className={styles.applyBtn}>
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}

export default FilterForm
