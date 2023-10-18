import styles from "./landing.module.css";
import Map from "../maps/maps";
import Link from 'next/link';

export default function LocationSection() {
  return (
    <div className={styles.container}>
        <div className={styles.container_sections}>
          <h1 className={styles.container_sections_title}>
            Location
          </h1>
          <p className={styles.container_sections_text} >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor architecto voluptatem accusamus assumenda necessitatibus consequatur voluptates ipsam cumque ipsa aperiam maxime incidunt, modi officia iure, aut excepturi iusto atque libero?
          </p>
          <div className={styles.container_sections_map} id="map">
            <Map center={[51.505, -0.09]} zoom={13} />
          </div>
          <div className={styles.container_sections_button}>
              <Link href="/location">Learn More</Link>
          </div>
        </div>
    </div>
  );
}