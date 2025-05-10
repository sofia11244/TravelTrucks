import { Link } from "react-router-dom"
import {  useSelector } from "react-redux"
import styles from '../styles/CamperCard.module.css'; 

function CamperCard({ camper }) {
  const favorites = useSelector((state) => state.favorites.items)
  const isFavorite = favorites.includes(camper.id)

  const handleToggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const formatPrice = (price) => {
    return price.toFixed(2)
  }

  return (
    <div className={styles.camperCard}>
      <div className={styles.camperCardImage}>
        <img src={camper.gallery[0].thumb || "/placeholder.svg"} alt={camper.name} />
        <button
          className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ""}`}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
        </button>
      </div>

      <div className={styles.camperCardContent}>
        <div className={styles.camperCardHeader}>
          <h3 className={styles.camperName}>{camper.name}</h3>
          <div className={styles.camperRating}>
            <span className={styles.star}>★</span>
            <span>{camper.rating}</span>
          </div>
        </div>

        <p className={styles.camperLocation}>{camper.location}</p>

        <div className={styles.camperFeatures}>
          {camper.AC && <span className={styles.feature}>Air Conditioning</span>}
          {camper.bathroom && <span className={styles.feature}>Bathroom</span>}
          {camper.kitchen && <span className={styles.feature}>Kitchen</span>}
        </div>

        <div className={styles.camperCardFooter}>
          <div className={styles.camperPrice}>
            <span className={styles.priceValue}>${formatPrice(camper.price)}</span>
            <span className={styles.pricePeriod}>/day</span>
          </div>

          <Link to={`/catalog/${camper.id}`} className={styles.showMoreBtn} target="_blank" rel="noopener noreferrer">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CamperCard
