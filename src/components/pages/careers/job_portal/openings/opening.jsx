import {
  Briefcase,
  Cassette,
  ClockHistory,
  CurrencyRupee,
  GeoAlt,
  Mortarboard,
  X,
} from "react-bootstrap-icons";
import styles from "./opening.module.scss";
import { Col, Row } from "react-bootstrap";
import { useRef } from "react";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";

const JobOpening = ({
  data,
  expnadedOpening,
  setexpnadedOpening,
  setApplicantData,
}) => {
  const isExpanded = data?.id === expnadedOpening;

  return (
    <>
      <div
        className={`${styles.opening} ${isExpanded && styles.expanded}`}
        onClick={() => {
          if (expnadedOpening !== data.id) {
            setexpnadedOpening(data.id);
          }
        }}
      >
        <div className={styles.top}>
          <h6>{data.role}</h6>
          {isExpanded && (
            <X
              onClick={() => {
                setApplicantData((prev) => ({ ...prev, role: "Any" }));
                setexpnadedOpening(null);
              }}
            />
          )}
        </div>
        <Row>
          {data.experience && (
            <Col className={styles.box} xs={12} md={isExpanded ? 12 : 3}>
              <Briefcase />
              <p className={isExpanded ? styles.expanded : ""}>
                {data.experience}
              </p>
            </Col>
          )}
          {
            data.salary && <Col className={styles.box} xs={12} md={isExpanded ? 12 : 3}>
            <CurrencyRupee />
            <p className={isExpanded ? styles.expanded : ""}>10k - 20k</p>
          </Col>
          }
          {data.locations && (
            <Col className={styles.box}>
              <GeoAlt />
              <p className={isExpanded ? styles.expanded : ""}>
                {data.locations}
              </p>
            </Col>
          )}
        </Row>
        <Row>
          <Col className={styles.box} xs={12} md={isExpanded ? 12 : 6}>
            <Mortarboard />
            <p className={isExpanded ? styles.expanded : ""}>
              {data.education}
            </p>
          </Col>
          <Col className={styles.box} xs={12} md={isExpanded ? 12 : 6}>
            <ClockHistory />
            <p className={isExpanded ? styles.expanded : ""}>
              {data.employmentType}
            </p>
          </Col>
        </Row>

        <small className={isExpanded ? styles.expanded : ""}>
          {data?.skills?.map((skill) => {
            return (
              <>
                &nbsp; &nbsp;
                <span className={styles.dot}>&bull;</span>
                &nbsp;
                <span>{skill}</span>
              </>
            );
          })}
        </small>

        <p className={`${styles.short_desc} ${isExpanded && styles.expanded}`}>
          {data.description}
        </p>
        {isExpanded && (
          <>
            <p className={styles.desc}>
              <span style={{ fontWeight: "600" }}>Department :</span>{" "}
              {data.department}
            </p>
            {data.gender && (
              <>
                <p className={styles.desc}>
                  <span style={{ fontWeight: "600" }}>Gender :</span>{" "}
                  {data.gender}
                </p>
              </>
            )}
            {data.desiredCandidate && (
              <>
                <h6 style={{ marginTop: "10px" }}>
                  Desired Candidate Profile:
                </h6>
                <p className={styles.desc}>{data.desiredCandidate}</p>
              </>
            )}
            {data.responsiblities && (
              <>
                <h6 style={{ marginTop: "10px" }}>Responsiblities:</h6>
                {data.responsiblities.type === "paragraph" && (
                  <>
                    {data.responsiblities.points.map((point, i) => (
                      <p key={i} className={styles.desc}>
                        {point}
                      </p>
                    ))}
                  </>
                )}
                {data.responsiblities.type === "list" && (
                  <>
                    {data.responsiblities.points.map((point) => (
                      <>
                        <p className={styles.desc}>{point.head}</p>
                        <ul>
                          {point.items.map((item, i) => {
                            return (
                              <li key={i}>
                                <p className={styles.desc}>{item}</p>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ))}
                  </>
                )}
              </>
            )}
            {data.mandatorySkill && (
              <>
                <h6 style={{ marginTop: "10px" }}>Mandatory skill :</h6>
                <p className={styles.desc}>{data.mandatorySkill}</p>
              </>
            )}
            <br />
            <CustomButton
              clickHandler={() => {
                setApplicantData((prev) => ({ ...prev, role: data.role }));
                if (window) {
                  const uploadResume =
                    window.document.getElementById("uploadResume");
                  uploadResume.scrollIntoView();
                  uploadResume.classList.add("glow");
                  setTimeout(() => {
                    uploadResume.classList.remove("glow");
                  }, 5000);
                  //   window.scrollTo({
                  //     top: 0,
                  //     left: "0",
                  //     behavior: "smooth",
                  //   });
                }
              }}
            >
              Apply Now
            </CustomButton>
          </>
        )}
      </div>
    </>
  );
};

export default JobOpening;
