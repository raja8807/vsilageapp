import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./gallery.module.scss";
import CustomSection from "../home/section/section";
import { Col, Row, Spinner } from "react-bootstrap";
import GalleryImage from "./image/image";
import { useEffect, useState } from "react";

const GalleryScreen = () => {
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

  const [images, setImages] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchImages = async () => {
      const data = await fetch("api/image").then((res) => res.json());
      setImages(data);
      setIsLoading(false);
    };
    fetchImages();
  }, []);

  return (
    <div className={styles.gallery_screen}>
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
