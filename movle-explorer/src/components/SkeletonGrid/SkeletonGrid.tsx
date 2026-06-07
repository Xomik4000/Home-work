import { SkeletonCard } from "../SkeletonCard/SkeletonCard";
import styles from "./SkeletonGrid.module.css";

const SKELETON_ITEMS = 8;

export function SkeletonGrid() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: SKELETON_ITEMS }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
