import styles from '../styles/Feature.module.css';
import ReservationForm from "./ReservationForm";

// İkonlar
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

const featureIcons = {
  transmission: automatic,
  engine: petrol,
  AC: ac,
  bathroom: bathroom,
  kitchen: kitchen,
  TV: tv,
  radio: radio,
  refrigerator: refrigerator,
  microwave: microwave,
  water: water,
};

const Feature = ({ camper }) => {
const renderSpanFeature = (value, icon) => (
  <div className={styles.featureBadge}>
    <img src={icon} alt={`${value} icon`} className={styles.featureIcon} />
    <span className={styles.featureText}>{value}</span>
  </div>
);


  const renderBlockFeature = (label, value) => (
    <p className={styles.featureBlock} key={label}>
      <span className={styles.featureLabel}>{label}</span>:{" "}
      <span className={styles.featureValue}>{value}</span>
    </p>
  );

  // Özellikler listesi
  const spanFeatures = [
    { key: 'transmission', label: 'Transmission' },
    { key: 'engine', label: 'Engine' },
    { key: 'AC', label: 'AC' },
    { key: 'bathroom', label: 'Bathroom' },
    { key: 'kitchen', label: 'Kitchen' },
    { key: 'TV', label: 'TV' },
    { key: 'radio', label: 'Radio' },
    { key: 'refrigerator', label: 'Refrigerator' },
    { key: 'microwave', label: 'Microwave' },
    { key: 'water', label: 'Water Supply' },
  ];

  const blockFeatures = [
    { label: "Body Type", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank Capacity", value: camper.tank },
    { label: "Fuel Consumption", value: camper.consumption },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresGrid}>
        <div className={styles.featuresColumn}>
          <h3 className={styles.featuresSubtitle}>Features</h3>
          <div className={styles.featuresList}>
            {spanFeatures.map(({ key, label }) =>
              camper[key] ? renderSpanFeature(label, camper[key], featureIcons[key]) : null
            )}
          </div>
        </div>

        <div className={styles.featuresColumn}>
          <h3 className={styles.featuresSubtitle}>Vehicle Details</h3>
          <div className={styles.featuresListAlt}>
            {blockFeatures.map(({ label, value }) => renderBlockFeature(label, value))}
          </div>
        </div>
      </div>

      <ReservationForm />
    </section>
  );
};

export default Feature;
