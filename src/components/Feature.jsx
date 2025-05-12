// components/Feature.jsx
import styles from '../styles/CamperDetailPage.module.css'
import ReservationForm from "./ReservationForm"

const Feature = ({ camper }) => {
  const renderFeatureItem = (label, value) => (
    <div className={styles.featureItem}>
      <span className={styles.featureLabel}>{label}</span>
      <span className={styles.featureValue}>{value}</span>
    </div>
  )

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.sectionTitle}>Features</h2>

      <div className={styles.featuresGrid}>
        <div className={styles.featuresColumn}>
          <h3 className={styles.featuresSubtitle}>Basic Features</h3>
          <div className={styles.featuresList}>
            {renderFeatureItem("", camper.transmission)}
            {renderFeatureItem("", camper.engine)}
            {renderFeatureItem("AC", camper.AC)}
            {renderFeatureItem("Bathroom", camper.bathroom)}
            {renderFeatureItem("Kitchen", camper.kitchen)}
            {renderFeatureItem("Radio", camper.radio)}
          </div>
        </div>

        <div className={styles.featuresColumn}>
          <h3 className={styles.featuresSubtitle}>Vehicle Details</h3>
          <div className={styles.featuresList}>
            {renderFeatureItem("Body Type", camper.form)}
            {renderFeatureItem("Length", camper.length)}
            {renderFeatureItem("Width", camper.width)}
            {renderFeatureItem("Height", camper.height)}
            {renderFeatureItem("Tank Capacity", camper.tank)}
            {renderFeatureItem("Fuel Consumption", camper.consumption)}
          </div>
        </div>
          <ReservationForm  />

      </div>
    </section>
  )
}

export default Feature
