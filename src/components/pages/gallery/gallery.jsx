import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./gallery.module.scss";
import CustomSection from "../home/section/section";
import { Col, Row, Spinner } from "react-bootstrap";
import GalleryImage from "./image/image";
import { useEffect, useState } from "react";

const GalleryScreen = ({data}) => {
  const imagesTemp = [
    {
      id: "1",
      src: "/images/banner/1.jpg",
    },
    {
      id: "2",
      src: "/images/banner/2.jpg",
    },
    {
      id: "3",
      src: "/images/banner/3.jpg",
    },
  ];

  const [images, setImages] = useState(data);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.gallery_screen}>
<p>
data : {JSON.stringify(data)}
</p>
      <CustomContainer>
        <CustomSection heading="Our Gallery">
          {images && images?.length > 0 && (
            <Row>
              {images.map((image) => {
                return <GalleryImage key={image.id} imageData={image} />;
              })}
            </Row>
          )}
          {images?.length === 0 && (
            <div className={styles.loading}>
              <p>No Images</p>
            </div>
          )}
          {isLoading && (
            <div className={styles.loading}>
              <Spinner />
            </div>
          )}
        </CustomSection>
      </CustomContainer>
    </div>
  );
};

export default GalleryScreen;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`api/image`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
