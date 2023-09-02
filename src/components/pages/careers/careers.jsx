import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./career.module.scss";
import CustomSection from "../home/section/section";
import UploadApllication from "./uplaod_application/uplaod_application";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";

const CareersScreen = () => {
  const [currentPdf, setCurrentPdf] = useState();

  return (
    <div className={styles.careers_screen}>
      <CustomContainer>
        <CustomSection heading="Careers">
          <p>
            Discover rewarding careers in the silage industry. Join our team to
            cultivate innovation, promote sustainability, and feed the world.
            Explore opportunities in farming, equipment, research, and more.
            Join us today!
          </p>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <UploadApllication setCurrentPdf={setCurrentPdf} />
            </Col>

            <Col xs={12} md={6}>
              {currentPdf && (
                <iframe
                  src={currentPdf}
                  height="400px"
                  //   height="a"
                  width="100%"
                  // style="width:718px; height:700px"
                  // frameborder="0"
                ></iframe>
              )}
            </Col>
          </Row>
        </CustomSection>
      </CustomContainer>
    </div>
  );
};

export default CareersScreen;
