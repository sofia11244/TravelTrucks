import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCamperById, clearCurrentCamper } from "../redux/slices/campersSlice"
import CamperDetail from "../components/CamperDetail"
// import Feature from "../components/Feature"
// import ReviewSection from "../components/ReviewSection"
import styles from '../styles/CamperDetailPage.module.css'
import { ClipLoader } from 'react-spinners'

function CamperDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentCamper, loading, error } = useSelector((state) => state.campers)

  useEffect(() => {
    dispatch(fetchCamperById(id))

    return () => {
      dispatch(clearCurrentCamper())
    }
  }, [dispatch, id])

  if (loading) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.loadingContainer}>
            <ClipLoader className={styles.loadingIcon} />
            <p>Loading camper details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.errorContainer}>
            <p>An error occurred while loading camper details.</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  if (!currentCamper) {
    return (
      <div className={styles.detailPage}>
        <div className={styles.container}>
          <div className={styles.notFoundContainer}>
            <p>Camper not found.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.detailPage}>
      <div className={styles.container}>
        <CamperDetail camper={currentCamper} />
        {/* <Feature camper={currentCamper} />
        <ReviewSection reviews={currentCamper.reviews} /> */}
      </div>
    </div>
  )
}

export default CamperDetailPage
