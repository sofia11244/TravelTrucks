import styles from "./Gallery.module.css"

function Gallery({ images }) {
  if (!images || images.length === 0) {
    return <p className={styles.emptyMessage}>No images available.</p>
  }

  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image?.thumb || image?.original || "/placeholder.svg"}
          alt={`Camper view ${index + 1}`}
          className={styles.galleryImage}
        />
      ))}
    </div>
  )
}

export default Gallery
