import { Col, Image, Row } from "react-bootstrap";

import styles from "./our-team.module.scss";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const { default: CustomSection } = require("../section/section");

const OurTeam = () => (
  <div className={styles.our_team}>
    <CustomContainer>
      <CustomSection heading="Our Team">
        <Row className={styles.team_body}>
          <Col md={4}>
            <div className={styles.team_card}>
              <Image src="/images/team/1.jpg" alt="team_1" fluid />
              <h5>Madhav Kshatriya</h5>
              <small>Founder, Managing Director & CEO</small>
              <p>
                Madhav is the CEO & MD of Cornext. He holds an MBA from
                Australia with expertise in sales, strategy formulation &
                management. He has over 5 years experience only in Agritech &
                Dairy apart from his decade experience in other sectors.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.team_card}>
              <Image src="/images/team/1.jpg" alt="team_1" fluid />
              <h5>Madhav Kshatriya</h5>
              <small>Founder, Managing Director & CEO</small>
              <p>
                Madhav is the CEO & MD of Cornext. He holds an MBA from
                Australia with expertise in sales, strategy formulation &
                management. He has over 5 years experience only in Agritech &
                Dairy apart from his decade experience in other sectors.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.team_card}>
              <Image src="/images/team/1.jpg" alt="team_1" fluid />
              <h5>Madhav Kshatriya</h5>
              <small>Founder, Managing Director & CEO</small>
              <p>
                Madhav is the CEO & MD of Cornext. He holds an MBA from
                Australia with expertise in sales, strategy formulation &
                management. He has over 5 years experience only in Agritech &
                Dairy apart from his decade experience in other sectors.
              </p>
            </div>
          </Col>
        </Row>
      </CustomSection>
    </CustomContainer>
  </div>
);

export default OurTeam;
