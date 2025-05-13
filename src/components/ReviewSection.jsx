import styles from './ReviewSection.module.css';
import ReservationForm from "./ReservationForm";

function ReviewSection({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className={styles.noReviews}>No reviews yet.</p>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <span className={styles.stars}>
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={`full-${i}`} className={`${styles.star} ${styles.full}`}>★</span>
        ))}
        {Array.from({ length: emptyStars }, (_, i) => (
          <span key={`empty-${i}`} className={`${styles.star} ${styles.empty}`}>★</span>
        ))}
      </span>
    );
  };

  return (
    <section className={styles.featureReservationContainer}>
      <div className={styles.featuresSection}>
        <ul className={styles.reviewList}>
          {reviews.map((review, index) => (
            <li key={index} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewerIcon}>
                  {review.reviewer_name.charAt(0).toUpperCase()}
                </div>
                <div className={styles.reviewerInfo}>
                  <strong className={styles.reviewer}>{review.reviewer_name}</strong>
                  {renderStars(review.reviewer_rating)}
                </div>
              </div>
              <p className={styles.comment}>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.reservationForm}>
        <ReservationForm />
      </div>
    </section>
  );
}

export default ReviewSection;
