import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCampers, incrementPage } from "../redux/slices/campersSlice"
import CamperCard from "../components/CamperCard"
import FilterForm from "../components/filters/FiltersForm"
import { ClipLoader } from "react-spinners" // Importing the spinner
import styles from '../styles/CatalogPage.module.css'; // Import your CSS module

function CatalogPage() {
  const dispatch = useDispatch()
  const { items, total, loading, page } = useSelector((state) => state.campers)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  const handleLoadMore = () => {
    dispatch(incrementPage())
    dispatch(fetchCampers())
  }

  const displayedItems = items.slice(0, page * 6)
  const hasMoreItems = displayedItems.length < total

  return (
    <div className={styles.catalogPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Catalog</h1>

        <FilterForm />

        {loading && items.length === 0 ? (
          <div className={styles.loadingContainer}>
            <ClipLoader className={styles.loadingIcon} color="#007bff" size={50} />
          </div>
        ) : items.length === 0 ? (
          <div className={styles.noResults}>
            <p>Couldn't find any results</p>
          </div>
        ) : (
          <>
            <div className={styles.campersGrid}>
              {displayedItems.map((camper) => (
                <CamperCard key={camper.id} camper={camper} />
              ))}
            </div>

            {hasMoreItems && (
              <div className={styles.loadMoreContainer}>
                <button className={styles.loadMoreBtn} onClick={handleLoadMore} disabled={loading}>
                  {loading ? (
                    <>
                      <ClipLoader className={styles.loadingIcon} color="#007bff" size={20} />
                    </>
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default CatalogPage
