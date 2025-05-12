import { useState } from "react"
import Gallery from "./Gallery"
import styles from '../styles/CamperDetail.module.css'
import map from '../assets/map.svg'
import Feature from "./Feature"
import ReviewSection from "./ReviewSection"

const CamperDetail = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features") // 'features' ya da 'reviews'

  const formatPrice = (price) => price.toFixed(2)

  return (
    <div className={styles.camperDetailContainer}>
      <div className={styles.detailHeader}>
        <p className={styles.camperName}>{camper.name}</p>
        <div className={styles.camperMeta}>
          <div className={styles.camperRating}>
            <p className={styles.star}>★
              <span>{camper.rating} ({camper.reviews?.length || 0} Reviews)</span>
            </p>
            <p className={styles.camperLocation}>
              <span>
                <img src={map} alt="map-icon" className={styles.mapIcon}/></span>{camper.location}
            </p>
          </div>
        </div>
        <span className={styles.priceValue}>${formatPrice(camper.price)}</span>
      </div>

      <Gallery images={camper.gallery} />
      <div className={styles.detailMain}>
          <section className={styles.descriptionSection}>
            <p className={styles.descriptionText}>{camper.description}</p>
          </section>
        </div>

      <div className={styles.tabButtons}>
        <button 
          onClick={() => setActiveTab("features")} 
          className={activeTab === "features" ? styles.activeTab : ""}
        >
          Features
        </button>
        <button 
          onClick={() => setActiveTab("reviews")} 
          className={activeTab === "reviews" ? styles.activeTab : ""}
        >
          Reviews
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "features" && <Feature camper={camper} />}
        {activeTab === "reviews" && <ReviewSection reviews={camper.reviews} camperId={camper.id} price={camper.price} />}
      </div>
    </div>
  )
}

export default CamperDetail
