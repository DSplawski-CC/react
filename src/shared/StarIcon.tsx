import styles from './StarIcon.module.css';

interface StarIconProps {
  size: number;
}

export default function StarIcon({ size }: StarIconProps) {
  const defaultSize = 14;
  const validSize = size > 0 ? size : defaultSize;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.starIcon}
      fill="currentColor"
      viewBox="0 0 20 20"
      width={validSize}
      height={validSize}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 0 0-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.286-3.967a1 1 0 0 0-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 0 0 .95-.69l1.286-3.967z"/>
    </svg>
  )
}