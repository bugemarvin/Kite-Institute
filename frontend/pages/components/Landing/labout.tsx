import styles from "./landing.module.css";
import {Card, CardBody} from "@nextui-org/react";
import Link from 'next/link';

export default function AboutSection() {
  return (
    <div className={styles.container} id="abouts">
        <div className={styles.container_sections}>
          <h1 className={styles.container_sections_title}>
            About Us
          </h1>
          <p className={styles.container_sections_text}>
            {`Kite Institute of Professional studies is not just a place of learning. it's a place of growth, discovery, and personal development. We invite you to join our community of scholars and embrace a future filled with knowledge and opportunity. At Kite Institute of Professional studies, your educational journey is the first step toward a brighter tomorrow.`}
          </p>
          <div className={styles.container_sections_cards}>
          <Card>
            <CardBody className={styles.container_sections_card}>
              <h2 className={styles.container_sections_cards_header} >Our Mission</h2>
              <p className={styles.container_sections_cards_text}>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className={styles.container_sections_card}>
              <h2 className={styles.container_sections_cards_header} >Our Mission</h2>
              <p className={styles.container_sections_cards_text}>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className={styles.container_sections_card}>
              <h2 className={styles.container_sections_cards_header} >Our Mission</h2>
              <p className={styles.container_sections_cards_text}>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className={styles.container_sections_card}>
              <h2 className={styles.container_sections_cards_header} >Our Mission</h2>
              <p className={styles.container_sections_cards_text}>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className={styles.container_sections_card}>
              <h2 className={styles.container_sections_cards_header} >Our Mission</h2>
              <p className={styles.container_sections_cards_text}>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className={styles.container_sections_card}>
              <h2 className={styles.container_sections_cards_header} >Our Mission</h2>
              <p className={styles.container_sections_cards_text}>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
          </Card>
          </div>
          <div className={styles.container_sections_button}>
            <Link href="/about">Learn More</Link>
          </div>
        </div>
    </div>
  );
}