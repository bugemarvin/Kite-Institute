import styles from "./courses.module.css";

export default function HeroSection() {
  return (
    <div className={styles.container}>
        <div className={styles.container_hero}>
                <span className={styles.container_hero_bg}></span>
                <span className={styles.container_hero_contact}>Courses</span>
        </div>
    </div>
  );
}
