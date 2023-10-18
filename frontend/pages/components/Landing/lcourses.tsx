import styles from "./landing.module.css";
import Link from 'next/link';

export default function CoursesSection() {
  return (
    <div className={styles.container}>
        <div className={styles.container_sections}>
          <h1 className={styles.container_sections_title}>
            Courses
          </h1>
          <p className={styles.container_sections_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia est suscipit tempore numquam recusandae fugit, earum minus. Earum id exercitationem minus vel eveniet? Repudiandae tempore quibusdam sit delectus ipsam assumenda!
          </p>
        </div>
        <div className={styles.container_sections_button}>
          <Link href="/courses">Learn More</Link>
        </div>
    </div>
  );
}
