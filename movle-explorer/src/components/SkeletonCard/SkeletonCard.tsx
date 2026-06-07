import styles from "./SkeletonCard.module.css";

export function SkeletonCard() {
  return (
    <article className={styles.card}>
      <div className={styles.poster} />

      <div className={styles.content}>
        <div className={styles.title} />
        <div className={styles.meta} />
        <div className={styles.text} />
        <div className={styles.text} />
        <div className={styles.textShort} />
      </div>
    </article>
  );
}
