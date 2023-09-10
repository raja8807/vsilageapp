import { Col, Image, Row } from "react-bootstrap";

import styles from "./our-team.module.scss";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import { useRouter } from "next/router";

const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
const { default: CustomSection } = require("../section/section");

const OurTeam = () => {

  const router = useRouter()

  return <div className={styles.our_team}>
  <CustomContainer>
    <CustomSection heading="Our Team">
      <br />
      <h4>Meet Our Team</h4>
      <p>
        At VSilage, our success is driven by a passionate and dedicated team
        of individuals who share a common goal – to provide top-quality silage
        solutions to farmers worldwide. With years of experience, expertise,
        and a deep commitment to innovation, our team is at the heart of our
        mission to revolutionize the silage industry. Get to know the faces
        behind VSilage:
      </p>
      <Row className={styles.team_body}>
        <Col md={6}>
          <div className={styles.team_card}>
            <Image src="/images/team/1.jpeg" alt="team_1" fluid />
            <h5>Mohan Ram</h5>
            <small>Managing director</small>
            {/* <p>
              Madhav is the CEO & MD of Cornext. He holds an MBA from
              Australia with expertise in sales, strategy formulation &
              management. He has over 5 years experience only in Agritech &
              Dairy apart from his decade experience in other sectors.
            </p> */}
          </div>
        </Col>
        {/* <Col md={4}>
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
        </Col> */}
        <Col md={6}>
          <div className={styles.team_card}>
            <Image src="/images/team/2.jpeg" alt="team_1" fluid />
            <h5>Satheesh Kumar</h5>
            <small>CEO</small>
            {/* <p>
              Madhav is the CEO & MD of Cornext. He holds an MBA from
              Australia with expertise in sales, strategy formulation &
              management. He has over 5 years experience only in Agritech &
              Dairy apart from his decade experience in other sectors.
            </p> */}
          </div>
        </Col>
      </Row>
      <br />
      <h4>Join Our Team</h4>
      <p>
        Are you passionate about agriculture and silage preservation? We are
        always on the lookout for talented individuals who share our vision.
        If you are interested in joining our team at VSilage, check out our
        Careers page for opportunities to grow with us.
        <br />
        <br />
        At VSilage, we are not just a team; we are a family united by a common
        purpose – to empower farmers with the best silage solutions. Meet us
        in person or connect with us online. Together, we are sowing the seeds
        of a brighter agricultural future.
      </p>
      <br/>
      <CustomButton clickHandler={()=>{
        router.replace('/careers')
      }}>Sumbit Your Resume</CustomButton>
      <br/>
      <br/>
    </CustomSection>
  </CustomContainer>
</div>
};

export default OurTeam;
