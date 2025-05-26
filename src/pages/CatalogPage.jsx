import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import FilterForm from "../components/filters/FiltersForm"
import Catalog from "../components/Catalog"
import styles from '../styles/CatalogPage.module.css'
import { fetchCampers, incrementPage } from "../redux/slices/campersSlice"
import { ClipLoader } from "react-spinners"

function CatalogPage() {
  const dispatch = useDispatch()
  const { searchEmpty, loading, items, page, total } = useSelector(state => state.campers)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  const displayedItems = items.slice(0, page * 6)
  const hasMoreItems = total ? displayedItems.length < total : false

  const handleLoadMore = () => {
    dispatch(incrementPage())
    dispatch(fetchCampers())
  }

  return (
  <div className={styles.catalogPage}>
    <div className={styles.catalog}>
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

    {!searchEmpty && hasMoreItems && (
      <div className={styles.loadMoreContainer}>
        <button
          className={styles.loadMoreBtn}
          onClick={handleLoadMore}
          disabled={loading}
        >
          {loading ? (
            <ClipLoader className={styles.loadingIcon} color="#000000" size={30} />
          ) : (
            "Load More"
          )}
        </button>
      </div>
    )}
  </div>
)

}

export default CatalogPage
