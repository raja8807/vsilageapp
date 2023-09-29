import { useState } from "react";
import styles from "./job_portal.module.scss";
import JobOpening from "./openings/opening";
// import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import { Col, Row } from "react-bootstrap";
import CustomSection from "../../home/section/section";

const JobPortal = ({openings,setApplicantData}) => {
  

  const [expnadedOpening, setexpnadedOpening] = useState(null);


  return (
    <CustomSection heading='Job Openings'>
        <br/>
        <div className={styles.job_portal}>
      {/* <h4>Openings</h4> */}
      <div className={styles.openings}>
        <Row>
          {openings.map((opening, i) => {
            // if (i < max) {
            if (expnadedOpening === null) {
              return (
                <Col key={opening.id} xs={12} md={6}>
                  <JobOpening
                    data={opening}
                    setexpnadedOpening={setexpnadedOpening}
                    expnadedOpening={expnadedOpening}
                  />
                </Col>
              );
            } else {
              if ((i + 1).toString() === expnadedOpening) {
                return (
                  <Col key={opening.id} xs={12}>
                    <JobOpening
                      data={opening}
                      setexpnadedOpening={setexpnadedOpening}
                      expnadedOpening={expnadedOpening}
                      setApplicantData={setApplicantData}
                    
                    />
                  </Col>
                );
              }
            }
            // }
          })}
        </Row>
      </div>
    </div>
    </CustomSection>
  );
};

export default JobPortal;
