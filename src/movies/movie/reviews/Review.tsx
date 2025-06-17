import styles from './Review.module.css';
import StarIcon from '../../../shared/StarIcon.tsx';
import type { ReviewDto } from '../../../types.ts';


interface ReviewProps {
  review: ReviewDto;
}

export default function Review({ review }: ReviewProps) {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewTopInfo}>
        <span>{ new Date(review.createdAt).toDateString() }</span>
        <span className={styles.reviewRating}>
          <StarIcon className={styles.ratingIcon} />
          <span className={styles.ratingText}>{ review.rating } / 10</span>
        </span>
      </div>

      <h3 className={styles.reviewTitle}>{ review.title }</h3>

      <p className={styles.reviewContent}>{ review.content }</p>

      <div className={styles.reviewAuthor}>
        { review.author.name }
      </div>
    </div>
  )
}