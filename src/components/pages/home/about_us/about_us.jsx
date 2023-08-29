import { Col, Image, Row } from "react-bootstrap";
import CustomSection from "../section/section";
import styles from "./about_us.module.scss";

const AboutUs = () => {
  return (
    <CustomSection heading="About Us">
      <div className={styles.about}>
        <p>
          PromaizeTM Baled Corn Silage/Maize Silage by Punjab Silage Private
          Limited - Most Trusted Corn Silage Manufacturer in India. We offer the
          highest quality Corn Silage in compact bales for cows.
        </p>
        <br />
        <br />
        <Row>
          <Col>
            <h2>Our Mission</h2>
            <p>
              To help Indian Dairy Farmers achieve higher efficiency and
              productivity of their farms by providing high quality products and
              services.
            </p>
          </Col>
          <Col>
            <Image src="/images/about/corn1.jpg" alt="about_1" fluid />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <Image src="/images/about/corn1.jpg" alt="about_1" fluid />
          </Col>
          <Col>
            <h2>Our Vision</h2>
            <p>
              To supply highest quality corn silage all over India that is
              nutritious and free from toxins. It is our ambition to help dairy
              farmers reduce their overall feeding cost and increase their
              income in a sustainable manner.
            </p>
          </Col>
        </Row>
        <br />
        
          <p>
            Feeding high energy corn silage will increase milk of cows and other
            dairy animals. We offer corn silage at the best price all year
            round. Call now for home delivery of corn silage in Punjab, Haryana,
            Rajasthan, Gujarat MP, UP etc.
          </p>
       
      </div>
    </CustomSection>
  );
};

export default AboutUs;
