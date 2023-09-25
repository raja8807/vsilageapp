import ContactForm from "./contact_form/contact_form";
import ContactInfo from "./contact_info/contact_info";

import styles from "./contact.module.scss";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const { default: CustomSection } = require("../home/section/section");
const { Row, Col } = require("react-bootstrap");

const ContactScreen = () => {
  return (
    <div>
      <CustomContainer>
        <CustomSection heading="Contact Us">
          <Row>
          <Col md={6} lg={4}>
              <div className={styles.contact_box}>
                <h5>Tirunelveli</h5>
                <p>
                  1017R/1A, Kamaraj Nagar,
                  <br />
                  Court opposite,
                  <br />
                  Tirunelveli - 627002.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className={styles.contact_box}>
                <h5>Chennai</h5>
                <p>
                  Shop No.204, Food Grain Market,
                  <br />
                  Koyambedu, Chennai-600107
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className={styles.contact_box}>
                <h5>Kallakurichi</h5>
                <p>
                  Kachirapalayam main road,
                  <br />
                  K.Chellampattu, Chinnasalem,
                  <br /> Kallakurichi-606207
                </p>
              </div>
            </Col>
          
          </Row>
          <br/>
          <Row>
            <Col xs={12} lg={4}>
              <ContactInfo />
            </Col>
            <Col xs={12} lg={8}>
              <ContactForm />
            </Col>
          </Row>
        </CustomSection>
      </CustomContainer>
    </div>
  );
};

export default ContactScreen;
