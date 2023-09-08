import { Carousel, Image } from "react-bootstrap";
import styles from "./banner.module.scss";
import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className={styles.banner}>
      <Carousel>
        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/1.jpg" fluid alt="img_banner" />
          <Carousel.Caption className={styles.caption}>
            <h1>VSilage</h1>
            <p>
              VIFPRO Silage Bales are made using world-class technology to
              ensure best quality chopping and compaction
            </p>

            <CustomButton
              clickHandler={() => {
                router.replace("/contact");
              }}
            >
              Contact Us
            </CustomButton>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/2.jpg" fluid alt="img_banner" />
          <Carousel.Caption className={styles.caption}>
            <h1>VSilage</h1>
            <p>
              .Top quality cattle feed to ensure high yield & good quality milk
              throughout the year
            </p>

            <CustomButton
              clickHandler={() => {
                router.replace("/contact");
              }}
            >Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/3.jpg" fluid alt="img_banner" />
          <Carousel.Caption className={styles.caption}>
            <h1>VSilage</h1>
            <p>Highly Nutritious feed for cows,goat,& sheep</p>

            <CustomButton
              clickHandler={() => {
                router.replace("/contact");
              }}
            >Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.item}>
          <div className={styles.overlay} />
          <Image src="/images/banner/2.jpg" fluid alt="img_banner" />
          <Carousel.Caption className={styles.caption}>
            <h1>VSilage</h1>
            <p>
              Highly nutritious cattle feed with more than 12 months shelf-life
            </p>

            <CustomButton
              clickHandler={() => {
                router.replace("/contact");
              }}
            >Contact Us</CustomButton>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
