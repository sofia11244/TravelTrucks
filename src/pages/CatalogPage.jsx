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
const searchEmpty = useSelector(state => state.campers.searchEmpty);


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
        
        <div className={styles.filterContainer}> {/* just filten div */}
          <FilterForm />
        </div>

        <div className={styles.campersContainer}> {/* just card div */}
          {loading && items.length === 0 ? (
            <div className={styles.loadingContainer}>
              <ClipLoader className={styles.loadingIcon} color="#000000" size={50} />
            </div>
            ) : searchEmpty ? (
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
                      <div className={styles.loadingContainer}>
                        <ClipLoader className={styles.loadingIcon} color="#000000" size={50} />
                      </div>
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
