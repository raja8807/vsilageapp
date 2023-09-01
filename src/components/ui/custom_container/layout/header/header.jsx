// import { Image } from "react-bootstrap";
// import CustomContainer from "../../custom_container";
import { Image } from "react-bootstrap";
import styles from "./header.module.scss";
// import Link from "next/link";
// import { EnvelopeAtFill, TelephoneFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import {
  ClockFill,
  Facebook,
  Instagram,
  List,
  TelephoneFill,
  Youtube,
} from "react-bootstrap-icons";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setScrolled(window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled && styles.scrolled}`}>
      <div className={styles.lg_top}>
        <p>Call Us: 1800 121 7677 
          &nbsp; 
          &nbsp; 
          &nbsp;
          &nbsp;
           Business Hours: 09:00 - 18:00</p>
      </div>
      <div className={styles.left}>
        <Image src="/images/logo/logo.png" fluid alt="logo" />
        <div>
          <List />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.r_top}>
          <div className={styles.over} />
          <div className={styles.content}>
            <div className={styles.social}>
              <div>
                <Facebook />
              </div>
              <div>
                <Instagram />
              </div>
              <div>
                <Youtube />
              </div>
              {/* <div>
                <Instagram />
              </div> */}
            </div>

            <hr />
            <div className={styles.contact}>
              <TelephoneFill />
              <div>
                <h5>CALL US</h5>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <hr />
            <div className={styles.contact}>
              <ClockFill />
              <div>
                <h5>BUSINESS HOURS</h5>
                <p>Always Open</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.r_bottom}>
          <Link href="#" className={styles.active}>
            Home
          </Link>
          <Link href="#">About</Link>
          <Link href="#">Silage</Link>
          <Link href="#">Gallery</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
