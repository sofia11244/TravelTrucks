import { Icons } from 'react-toastify'
import styles from '../styles/Feature.module.css'
import ReservationForm from "./ReservationForm"
import automatic from '../assets/diagram.svg';
import ac from '../assets/wind.svg';
import bathroom from '../assets/ph_shower.svg';
import kitchen from '../assets/cup-hot.svg';
import tv from '../assets/tv.svg';
import radio from '../assets/ui-radios.svg';
import refrigerator from '../assets/fridge.svg';
import microwave from '../assets/microwave.svg';
import petrol from '../assets/gas.svg';
import water from '../assets/water.svg';

const Feature = ({ camper }) => {
  // İkonlu özellik badge'i
  const renderSpanFeature = (label, value, icon) => (
    <div className={styles.featureBadge}>
      <img src={icon} alt={`${label} icon`} className={styles.featureIcon} />
      <span className={styles.featureLabel}>{label}</span>
      <span className={styles.featureText}>{value}</span>
    </div>
  );
const formatCamelCase = (text) => {
  return text
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase'e boşluk ekler
    .replace(/^./, str => str.toUpperCase()); // ilk harfi büyük yapar
};

  // Araç detayları
  const renderBlockFeature = (label, value) => (
    <p className={styles.featureBlock}>
      <span className={styles.featureLabel}>{label}</span>{" "}
      <span className={styles.featureValue}>{value}</span>
    </p>
  );

  return (
    <section className={styles.featureReservationContainer}> 
      <div className={styles.featuresSection}>
         <div className={styles.featuresGrid}>

        {/* Sol: Features */}
        <div className={styles.featuresColumn}>
          <div className={styles.featuresList}>
            {renderSpanFeature("", camper.transmission, automatic)}
            {renderSpanFeature("", camper.engine, petrol)}
            {renderSpanFeature("AC", camper.AC, ac)}
            {renderSpanFeature("Bathroom", camper.bathroom, bathroom)}
            {renderSpanFeature("Kitchen", camper.kitchen, kitchen)}
            {renderSpanFeature("Radio", camper.radio, radio)}
            {renderSpanFeature("Refrigerator", camper.refrigerator, refrigerator)}
            {renderSpanFeature("Microwave", camper.microwave, microwave)}
            {renderSpanFeature("Water Supply", camper.water, water)}
            {renderSpanFeature("TV", camper.TV, tv)}
          </div>
        </div>

        {/* Sağ: Araç detayları */}
        <div className={styles.featuresColumn}>
          <h3 className={styles.featuresSubtitle}>Vehicle Details</h3>
          <div className={styles.featuresListAlt}>
            {renderBlockFeature("Form", formatCamelCase(camper.form))}
            {renderBlockFeature("Length", formatCamelCase(camper.length))}

            
            {renderBlockFeature("Width", camper.width)}
            {renderBlockFeature("Height", camper.height)}
            {renderBlockFeature("Tank", camper.tank)}
            {renderBlockFeature("Consumption", camper.consumption)}
          </div>
        </div>
      </div>
      </div>
     

      <div className={styles.reservationForm}>
        {/* Rezervasyon Formu */}
      <ReservationForm />
      </div>
    </section>
  );
};

export default Feature;