import { Carousel, Image } from "react-bootstrap";
import styles from "./banner.module.scss";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";

const Banner = () => {
  return (
    <div className={styles.banner}>
       <Carousel >
        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/1.jpg" fluid alt="img_banner"/>
          <Carousel.Caption className={styles.caption}>
            <h1>VSilage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat?</p>
            
            <CustomButton>Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/2.jpg" fluid alt="img_banner"/>
          <Carousel.Caption className={styles.caption}>
            <h1>VSilage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat?</p>
            

            <CustomButton>Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/3.jpg" fluid alt="img_banner"/>
          <Carousel.Caption className={styles.caption}>
            <h1>VSilage</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fugiat?</p>
            

            <CustomButton>Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
