import styles from "./about.module.css";

export default function HeroSection() {
  return (
    <div className={styles.container}>
        <div className={styles.container_hero}>
                <span className={styles.container_hero_bg}></span>
                <span className={styles.container_hero_contact}>About Us</span>
        </div>
    </div>
  );
}
