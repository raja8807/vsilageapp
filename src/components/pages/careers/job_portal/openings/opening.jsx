import {
  Briefcase,
  Cassette,
  ClockHistory,
  CurrencyRupee,
  GeoAlt,
  Mortarboard,
} from "react-bootstrap-icons";
import styles from "./opening.module.scss";
import { Col, Row } from "react-bootstrap";

const JobOpening = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.opening}>
      <h6>{data.role}</h6>

      <Row>
        {data.experience && (
          <Col className={styles.box} xs={12} md={3}>
            <Briefcase />
            {data.experience}
          </Col>
        )}
        <Col className={styles.box} xs={12} md={3}>
          <CurrencyRupee />
          10k - 20k
        </Col>
        {data.locations && (
          <Col className={styles.box}>
            <GeoAlt />
            <p>{data.locations}</p>
          </Col>
        )}
      </Row>
      <Row>
        <Col className={styles.box} xs={12} md={6}>
          <Mortarboard />
          <p>{data.education}</p>
        </Col>
        <Col className={styles.box} xs={12} md={6}>
          <ClockHistory />
          {data.employmentType}
        </Col>
      </Row>

      <small>
        {data.skills.map((skill) => {
          return <>
            &nbsp;
            &nbsp;
            <span className={styles.dot}>&bull;</span>
            &nbsp;
            <span>{skill}</span>
          </>;
        })}
     
      </small>

      <p className={styles.short_desc}>
        {
            data.description
        }
      </p>
    </div>
  );
};

export default JobOpening;
