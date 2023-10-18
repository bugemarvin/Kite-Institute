import styles from "./landing.module.css";
import Link from 'next/link';

export default function ContactSection() {
  return (
    <div className={styles.container}>
        <div className={styles.container_sections}>
                <h1 className={styles.container_sections_title}>
                  Contact Us
                </h1>
                <p className={styles.container_sections_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae explicabo eos natus dicta aperiam voluptatibus fuga tempora. Tempora quo saepe, ipsum obcaecati nihil, porro quae, quia quas ut iure voluptates?
                </p>
                <div className={styles.container_sections_button}>
                  <Link href="/contact">Learn More</Link>
                </div>
        </div>
    </div>
  );
}