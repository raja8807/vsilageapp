import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./about_us.module.scss";
import { Col, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.overlay} />
      <CustomContainer>
        <Row>
          <Col className={styles.left} md={6}>
            <h2>About Us</h2>
            <p>
              <b>Vsilage</b> is a highly innovative company with a single goal
              to promote Baled Silage as a solution for fodder crisis in India.
              The company is involved in supplying of Silage Bales to dairy
              farmers, Co-operatives, Animal Husbandry/Government and is into
              manufacturing & selling of Silage Baling Machines along with
              supply of necessary consumables.
            </p>
            <CustomButton>Know More</CustomButton>
          </Col>
          <Col md={6} className={styles.right}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ObKA4joLTjY?si=i0z3TMDWYI_9cyw0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </CustomContainer>
    </div>
  );
};

export default AboutUs;
