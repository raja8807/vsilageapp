import ContactForm from "./contact_form/contact_form";
import ContactInfo from "./contact_info/contact_info";

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
