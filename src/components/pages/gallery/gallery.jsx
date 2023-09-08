import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./gallery.module.scss";
import CustomSection from "../home/section/section";
import { Col, Row, Spinner } from "react-bootstrap";
import GalleryImage from "./image/image";
import { useEffect, useState } from "react";

const GalleryScreen = ({data}) => {


  return (
    <div className={styles.gallery_screen}>
{/* <p>
data : {JSON.stringify(data)}
</p> */}
      <CustomContainer>
        <CustomSection heading="Our Gallery">
          {data && data?.length > 0 && (
            <Row>
              {data.map((image) => {
                return <GalleryImage key={image.id} imageData={image} />;
              })}
            </Row>
          )}
          {data?.length === 0 && (
            <div className={styles.loading}>
              <p>No Images</p>
            </div>
          )}
       
        </CustomSection>
      </CustomContainer>
    </div>
  );
};

export default GalleryScreen;


