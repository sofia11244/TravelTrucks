import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from '../styles/CamperCard.module.css'; 
import automaticTransmission from '../assets/diagram.svg';
import ac from '../assets/wind.svg';
import bathroom from '../assets/ph_shower.svg';
import kitchen from '../assets/cup-hot.svg';
import tv from '../assets/tv.svg';
import radio from '../assets/ui-radios.svg';
import refrigerator from '../assets/fridge.svg';
import microwave from '../assets/microwave.svg';
import gas from '../assets/gas.svg';
import water from '../assets/water.svg';
import heart from '../assets/heart.svg';
import map  from '../assets/map.svg';

import activeHeart from '../assets/active-heart.svg';

import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoritesSlice'; 

function CamperCard({ camper }) {
  const favorites = useSelector((state) => state.favorites.items)
  const isFavorite = favorites.includes(camper.id)
  const dispatch = useDispatch();

const handleToggleFavorite = (e) => {
  e.preventDefault();
  e.stopPropagation();
  dispatch(toggleFavorite(camper.id));
}

const formatLocation = (location) => {
  const [country, city] = location.split(',').map(s => s.trim());
  return `${city}, ${country}`;
};


  const formatPrice = (price) => {
    return price.toFixed(2)
  }

  // Dinamik özelliklerin listelenmesi
  const featureIcons = {
    'automaticTransmission': automaticTransmission,

    'AC': ac, 
    'bathroom': bathroom, 
    'kitchen': kitchen, 
    'TV': tv, 
    'radio': radio, 
    'refrigerator': refrigerator, 
    'microwave': microwave, 
    'gas': gas, 
    'water': water,
  };

  return (
    <div className={styles.camperCardContainer}>
      <div className={styles.camperCard}>
        <div className={styles.camperCardImage}>
          <img src={camper.gallery[0].thumb || "/placeholder.svg"} alt={camper.name} />
        </div>

        <div className={styles.camperCardContent}>
          <div className={styles.camperCardHeader}>
            <div className={styles.camperCardHeaderContent}>
              <h3 className={styles.camperName}>{camper.name}</h3>

              <div className={styles.camperPriceAndFavorite}>
                <span className={styles.priceValue}>${formatPrice(camper.price)}</span>
                <img
                  src={isFavorite ? activeHeart : heart}
                  alt="Favorite"
                  className={styles.favoriteBtn}
                  onClick={handleToggleFavorite}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                />
              </div>
            </div>
            <div className={styles.camperRating}>
              <div className={styles.rating}>
                <span className={styles.star}>★</span>
              <span>{camper.rating} ({camper.reviews?.length || 0} Reviews)</span>
              </div>
             <div>
               <span className={styles.camperLocation}>
  <img src={map} alt="Location" className={styles.locationIcon} />
  {formatLocation(camper.location)}
</span>

             </div>
            </div>
               <p className={styles.camperDescription}>{camper.description}</p>


          </div>


          
          <div className={styles.camperFeatures}>
            {Object.keys(featureIcons).map((feature) => {
              if (feature === 'automaticTransmission' && camper.transmission === 'automatic') {
                return (
                  <span key={feature} className={styles.feature}>
                    <img src={featureIcons[feature]} alt="Automatic Transmission" className={styles.featureIcon} />
                    Automatic
                  </span>
                );
              }
              return camper[feature] ? (
                <span key={feature} className={styles.feature}>
                  <img src={featureIcons[feature]} alt={feature} className={styles.featureIcon} />
                  {feature}
                </span>
              ) : null;
            })}
          </div>

          <div className={styles.camperCardFooter}>
            

            <Link to={`/catalog/${camper.id}`} className={styles.showMoreBtn} target="_blank" rel="noopener noreferrer">
              Show more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CamperCard;
