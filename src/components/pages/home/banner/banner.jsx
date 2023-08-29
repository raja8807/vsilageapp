import { Carousel, Image } from "react-bootstrap";
import styles from "./banner.module.scss";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/1.jpg" fluid />
          <Carousel.Caption className={styles.caption}>
            <h1>
              The free global information resource to help you produce top
              quality silage
            </h1>
            <CustomButton>Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/2.jpg" fluid />
          <Carousel.Caption className={styles.caption}>
            <h1>
              The free global information resource to help you produce top
              quality silage
            </h1>
            <CustomButton>Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
