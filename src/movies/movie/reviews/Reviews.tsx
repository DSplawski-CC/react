import Review from './Review.tsx';


export interface ReviewsProps {
  reviews: ReviewDto[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const reviewComponents = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return reviewComponents;
}
