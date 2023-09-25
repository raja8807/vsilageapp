const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const { default: CustomSection } = require("../home/section/section");

import { Col, Image, Row } from "react-bootstrap";
import styles from "./about.module.scss";

const AboutScreen = () => {
  return (
    <CustomContainer>
      <CustomSection heading="About Us">
        <div className={styles.about_screen}>
          <div className={styles.top}>
            <h2>
            Welcome to Vilathikulam Farmers Producer Company Limited
            </h2>
            <h4> Empowering Agriculture with Quality Corn Silage: Vilathikulam
              Farmers Producer Company Limited</h4>
            <p>
              At Vilathikulam Farmers Producer Company Limited, we are dedicated
              to revolutionizing the agricultural landscape with our expertise
              in premium corn silage bale production and sales. With a strong
              commitment to quality, sustainability, and the prosperity of our
              farming community, we have carved a distinct niche in the
              agricultural sector.
            </p>
          </div>

          <br />
          <br />
          <Row className={styles.row}>
            <Col md={5}>
              <Image src="/images/about/1.jpg" alt="silage_1" fluid />
            </Col>
            <Col>
              <div>
                <h4>
                  <h4>Empowering Farmers, Enhancing Livestock</h4>
                </h4>
                <p>
                  At the heart of our company is our unwavering commitment to
                  the farming community and the livestock industry. We work
                  closely with local farmers, offering them a fair platform to
                  sell their corn harvest, which we transform into
                  nutrient-packed silage bales. By empowering farmers and
                  providing a valuable source of income, we contribute to the
                  economic growth and sustainability of the agricultural sector.
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row className={styles.row}>
            <Col>
              <div>
                <h4>
                  <h4>Boosting Livestock Health and Farm Profitability</h4>
                </h4>
                <p>
                  Our premium corn silage bales are more than just feed; they
                  are a key factor in enhancing livestock health and farm
                  profitability. With the superior nutritional value of our
                  silage, livestock experience improved milk yield, better
                  overall health, and increased farm profitability. We
                  understand the critical role that nutrition plays in livestock
                  farming, and our bales are designed to meet these needs
                  effectively.
                </p>
                <br />
              </div>
            </Col>
            <Col md={5}>
              <Image src="/images/about/2.jpg" alt="silage_1" fluid />
            </Col>
          </Row>
          <br />
          <br />
          <Row className={styles.row}>
            <Col md={5}>
              <Image src="/images/about/3.jpg" alt="silage_1" fluid />
            </Col>
            <Col>
              <div>
                <h4>
                  <h4>Sustainable Practices for a Greener Future</h4>
                </h4>
                <p>
                  Sustainability is not just a buzzword for us; it is a way of
                  life. We implement eco-friendly practices throughout our
                  operations, from responsible corn cultivation to efficient
                  packaging and distribution of our silage bales. Our commitment
                  to sustainability extends to every aspect of our business,
                  leaving a positive impact on both the environment and the
                  farming community.
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row className={styles.row}>
            <Col>
              <div>
                <h4>
                  <h4>Our Vision: Setting New Standards</h4>
                </h4>
                <p>
                  Our vision is simple yet profound: to be a driving force in
                  transforming traditional farming practices through innovation
                  and quality. We aim to set new standards in the corn silage
                  industry, promoting optimal animal nourishment, boosting farm
                  profitability, and contributing to the overall growth of
                  livestock farming.
                </p>
                <br />
              </div>
            </Col>
            <Col md={5}>
              <Image src="/images/about/4.jpg" alt="silage_1" fluid />
            </Col>
          </Row>
          <br />
          <div className={styles.top}>
            {/* <h2>
              Empowering Agriculture with Quality Corn Silage: Vilathikulam
              Farmers Producer Company Limited
            </h2> */}
            <h4>Join Us on this Journey</h4>
            <p>
              We invite you to join us on this transformative journey in
              agriculture. Whether you are a farmer looking to collaborate or a
              customer seeking top-quality corn silage bales that significantly
              impact livestock farming, Vilathikulam Farmers Producer Company
              Limited is your trusted partner.
            </p>
            <br />
            <p>
              Thank you for choosing us. Together, we are shaping a future where
              agriculture thrives, livestock flourish, and farmers prosper.
            </p>
          </div>
        </div>
      </CustomSection>
    </CustomContainer>
  );
};

export default AboutScreen;