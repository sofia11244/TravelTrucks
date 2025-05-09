"use client"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCamperById, clearCurrentCamper } from "../redux/slices/campersSlice"
import Gallery from "../components/Gallery"
import ReviewSection from "../components/ReviewSection"
import ReservationForm from "../components/ReservationForm"
import { Loader, Check, X } from "lucide-react"
import styles from '../styles/CamperDetailPage.module.css' // Import your CSS module

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
            <Loader className={styles.loadingIcon} />
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

  const formatPrice = (price) => {
    return price.toFixed(2)
  }

  const renderFeatureItem = (label, value) => (
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>{label}</span>
      <span className={styles.featureValue}>
        {typeof value === "boolean" ? (
          value ? (
            <Check className={`${styles.featureIcon} ${styles.available}`} />
          ) : (
            <X className={`${styles.featureIcon} ${styles.unavailable}`} />
          )
        ) : (
          value
        )}
      </span>
    </div>
  )

  return (
    <div className={styles.detailPage}>
      <div className={styles.container}>
        <div className={styles.detailHeader}>
          <h1 className={styles.camperName}>{currentCamper.name}</h1>
          <div className={styles.camperMeta}>
            <div className={styles.camperRating}>
              <span className={styles.star}>★</span>
              <span>{currentCamper.rating}</span>
            </div>
            <div className={styles.camperLocation}>{currentCamper.location}</div>
          </div>
        </div>

        <Gallery images={currentCamper.gallery} />

        <div className={styles.detailContent}>
          <div className={styles.detailMain}>
            <section className={styles.descriptionSection}>
              <h2 className={styles.sectionTitle}>Description</h2>
              <p className={styles.descriptionText}>{currentCamper.description}</p>
            </section>

            <section className={styles.featuresSection}>
              <h2 className={styles.sectionTitle}>Features</h2>

              <div className={styles.featuresGrid}>
                <div className={styles.featuresColumn}>
                  <h3 className={styles.featuresSubtitle}>Basic Features</h3>
                  <div className={styles.featuresList}>
                    {renderFeatureItem("Transmission", currentCamper.transmission)}
                    {renderFeatureItem("Engine", currentCamper.engine)}
                    {renderFeatureItem("AC", currentCamper.AC)}
                    {renderFeatureItem("Bathroom", currentCamper.bathroom)}
                    {renderFeatureItem("Kitchen", currentCamper.kitchen)}
                  </div>
                </div>

                <div className={styles.featuresColumn}>
                  <h3 className={styles.featuresSubtitle}>Extra Features</h3>
                  <div className={styles.featuresList}>
                    {renderFeatureItem("TV", currentCamper.TV)}
                    {renderFeatureItem("Radio", currentCamper.radio)}
                    {renderFeatureItem("Refrigerator", currentCamper.refrigerator)}
                    {renderFeatureItem("Microwave", currentCamper.microwave)}
                    {renderFeatureItem("Gas", currentCamper.gas)}
                    {renderFeatureItem("Water", currentCamper.water)}
                  </div>
                </div>

                <div className={styles.featuresColumn}>
                  <h3 className={styles.featuresSubtitle}>Details</h3>
                  <div className={styles.featuresList}>
                    {renderFeatureItem("Body Type", currentCamper.form)}
                    {renderFeatureItem("Length", currentCamper.length)}
                    {renderFeatureItem("Width", currentCamper.width)}
                    {renderFeatureItem("Height", currentCamper.height)}
                    {renderFeatureItem("Tank Capacity", currentCamper.tank)}
                    {renderFeatureItem("Fuel Consumption", currentCamper.consumption)}
                  </div>
                </div>
              </div>
            </section>

            <ReviewSection reviews={currentCamper.reviews} />
          </div>

          <div className={styles.detailSidebar}>
            <div className={styles.priceCard}>
              <div className={styles.priceHeader}>
                <span className={styles.priceValue}>${formatPrice(currentCamper.price)}</span>
                <span className={styles.pricePeriod}>/day</span>
              </div>
            </div>

            <ReservationForm camperId={currentCamper.id} price={currentCamper.price} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CamperDetailPage
