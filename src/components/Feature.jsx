import styles from '../styles/Feature.module.css'
import ReservationForm from "./ReservationForm"

const Feature = ({ camper }) => {
  // span ile gösterilecek özellikler
  const renderSpanFeature = (label, value) => (
    <>
      <span className={styles.featureLabel}>{label}</span>
      <span className={styles.featureValue}>{value}</span>
    </>
  )

  // p ile gösterilecek özellikler (Vehicle Details)
  const renderBlockFeature = (label, value) => (
    <p className={styles.featureBlock}>
      <span className={styles.featureLabel}>{label}</span>:{" "}
      <span className={styles.featureValue}>{value}</span>
    </p>
  )

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresGrid}>

        {/* Left side: span features */}
        <div className={styles.featuresColumn}>
          <div className={styles.featuresList}>
            {renderSpanFeature("Transmission", camper.transmission)}
            {renderSpanFeature("Engine", camper.engine)}
            {renderSpanFeature("AC", camper.AC)}
            {renderSpanFeature("Bathroom", camper.bathroom)}
            {renderSpanFeature("Kitchen", camper.kitchen)}
            {renderSpanFeature("Radio", camper.radio)}
          </div>
        </div>

        {/* Right side: vehicle details in <p> blocks */}
        <div className={styles.featuresColumn}>
          <h3 className={styles.featuresSubtitle}>Vehicle Details</h3>
          <div className={styles.featuresListAlt}>
            {renderBlockFeature("Body Type", camper.form)}
            {renderBlockFeature("Length", camper.length)}
            {renderBlockFeature("Width", camper.width)}
            {renderBlockFeature("Height", camper.height)}
            {renderBlockFeature("Tank Capacity", camper.tank)}
            {renderBlockFeature("Fuel Consumption", camper.consumption)}
          </div>
        </div>

        {/* Reservation Form */}
        <ReservationForm />
      </div>
    </section>
  )
}

export default Feature
