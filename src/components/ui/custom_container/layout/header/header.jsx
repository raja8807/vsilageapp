import { Image } from "react-bootstrap";
import CustomContainer from "../../custom_container";
import styles from "./header.module.scss";
import Link from "next/link";
import { EnvelopeAtFill, TelephoneFill } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

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
      <CustomContainer>
        <div className={styles.top_wrapper}>
          <Image src="/images/vsilage_logo.png" alt="vsilage_logo" fluid />
          <div className={styles.right}>
            <div>
              <EnvelopeAtFill />
              <p>abcdevfi@gmail.com</p>
            </div>
            <span>|</span>
            <div>
              <TelephoneFill />
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
      </CustomContainer>
      <nav>
        <Link href="#" className={styles.active}>
          Home
        </Link>
        {/* <Link href="#">Home</Link> */}
        <Link href="#">About</Link>
        {/* <Link href="#">Home</Link> */}
        <Link href="#">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
