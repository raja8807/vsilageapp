const { Col, Image } = require("react-bootstrap");

import { Eye } from "react-bootstrap-icons";
import styles from "./image.module.scss";
import Link from "next/link";

const GalleryImage = (props) => {
  const { imageData } = props;

  return (
    <Col xs={12} md={6} lg={4} className={styles.gallery_image}>
      <Link href={imageData.src} className={styles.eye} target="_blank">
        <Eye />
      </Link>
      <Image src={imageData.src} alt="img" fluid />
    </Col>
  );
};

export default GalleryImage;
