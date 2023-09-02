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
  Linkedin,
  List,
  TelephoneFill,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import Link from "next/link";
import HeaderDrawer from "./header-drawer/header-drawer";
import { useRouter } from "next/router";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window) {
        setScrolled(window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      id: "home",
      name: "Home",
      href: "/",
    },
    {
      id: "about",
      name: "About",
      href: "/about",
    },
    {
      id: "silage",
      name: "Silage",
      href: "/silage",
    },

    {
      id: "gallery",
      name: "Gallery",
      href: "/gallery",
    },
    {
      id: "careers",
      name: "Careers",
      href: "/careers",
    },
    {
      id: "contact",
      name: "Contact",
      href: "/contact",
    },
    {
      id: "login",
      name: "Login",
      href: "/login",
    },
  ];

  const router = useRouter();

  // console.log();

  return (
    <>
      <header className={`${styles.header} ${scrolled && styles.scrolled}`}>
        <div className={styles.lg_top}>
          <p>Call Us: 1800 121 7677 </p>
          <p> Business Hours: 09:00 - 18:00</p>
        </div>
        <div className={styles.left}>
          <Image src="/images/logo/logo.png" fluid alt="logo" />
          <section className={styles.logo_text}>
            <h1>
              <b>VILATHIKULAM</b>
            </h1>
            <p>Farmers Producer Company.</p>
          </section>
          <div
            onClick={() => {
              setShowDrawer(true);
            }}
          >
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
                  <Linkedin />
                </div>
                <div>
                  <Twitter />
                </div>
                <div>
                  <Youtube />
                </div>
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
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className={
                  router?.pathname === link?.href
                    ? styles.active
                    : styles.inactive
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <HeaderDrawer
        show={showDrawer}
        setShow={setShowDrawer}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
