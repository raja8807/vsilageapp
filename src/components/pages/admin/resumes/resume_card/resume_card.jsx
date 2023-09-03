const { Col } = require("react-bootstrap");
import Link from "next/link";
import styles from "./resume_card.module.scss";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";

const ResumeCard = (props) => {
  const { data } = props;
  return (
    <Col xs={12} md={6} lg={4} className={styles.resume_card}>
      <div>
        <div className={styles.top}>
          <p>
            <b>App No.</b> : {data.applicationId}
          </p>
          <p>
            <b>Name</b> : {data.name}
          </p>
          <p>
            <b>Email</b> : {data.email}
          </p>
          <p>
            <b>Phone</b> : {data.phone}
          </p>
        </div>
        <div>
          <Link href={data.url} download target="_blank">
            <CustomButton>DownLoad</CustomButton>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ResumeCard;
