import styles from "./landing.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={styles.container}>
        <div className={styles.container_hero}>
                <span className={styles.container_hero_bg}></span>
                <div className={styles.container_hero_content}>
                  <h6 className={styles.container_hero_content_lasttitle}>Welcome</h6>
                  <h1 className={styles.container_hero_content_title}>kite institute of profesional studies</h1>
                  <p className={styles.container_hero_content_subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                  <div className={styles.container_hero_content_btn}>
                    <Link href="#" className={styles.container_hero_content_btn_link}>Join Us</Link>
                    <Link href="/about" className={styles.container_hero_content_btn_link}>Learn More</Link>
                  </div>
                </div>
        </div>
    </div>
  );
}
