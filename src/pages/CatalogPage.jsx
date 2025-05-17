import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import FilterForm from "../components/filters/FiltersForm"
import Catalog from "../components/Catalog"
import styles from '../styles/CatalogPage.module.css'
import { fetchCampers } from "../redux/slices/campersSlice"
function CatalogPage() {
  const searchEmpty = useSelector(state => state.campers.searchEmpty)
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  return (
    <div className={styles.catalogPage}>
      <div className={styles.filterContainer}>
        <FilterForm />
      </div>

      {searchEmpty ? (
        <div className={styles.noResults}>
          <p>Couldn't find any results</p>
        </div>
      ) : (
        <Catalog />
      )}
    </div>
  )
}

export default CatalogPage
