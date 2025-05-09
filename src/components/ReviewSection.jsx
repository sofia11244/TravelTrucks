import styles from './ReviewSection.module.css'

function ReviewSection({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className={styles.noReviews}>No reviews yet.</p>
  }

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.title}>Customer Reviews</h2>
      <ul className={styles.reviewList}>
        {reviews.map((review, index) => (
          <li key={index} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              <strong className={styles.reviewer}>{review.reviewer}</strong>
              <span className={styles.rating}>★ {review.rating}</span>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ReviewSection
