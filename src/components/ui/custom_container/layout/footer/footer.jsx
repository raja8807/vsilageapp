import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "../../custom_container";
import styles from "./footer.module.scss";
import Link from "next/link";
import { EnvelopeAtFill, Facebook, Instagram, PinMap, Telephone, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  const navLinks = [
    {
      id: "home",
      name: "Home",
      href: "/",
    },
    {
      id: "about",
      name: "About",
      href: "/",
    },
    {
      id: "silage",
      name: "Silage",
      href: "/",
    },

    {
      id: "gallery",
      name: "Gallery",
      href: "/",
    },
    {
      id: "contact",
      name: "Contact",
      href: "/",
    },
    {
      id: "login",
      name: "Login",
      href: "/",
    },
  ];

  return (
    <div className={styles.footer}>
      <CustomContainer className={styles.top}>
        <Row>
          <Col xs={12} md={4}>
            <div className={styles.brand}>
              <Image src="/images/logo/logo.png" alt="logo" fluid />
              <p>
                An award-winning AgriTech Startup focused on building a fodder
                ecosystem to help the Indian dairy farmer with sustained supply
                of green fodder Nutrition.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className={styles.links}>
              <div className={styles.strip} />
              <h5>Quick Links</h5>
              {navLinks.map((link) => (
                <Link key={link.id} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className={styles.contact}>
              <div className={styles.strip} />
              <h5>Contact Us</h5>
              <div>
                <Telephone />
                <p>+91 98765 43210</p>
              </div>
              <div>
                <EnvelopeAtFill />
                <p>admin@vsilage.com</p>
              </div>
              <div className={styles.address}>
                <PinMap />
                <div >
                  <p>Address Line 1,</p>
                  <p>Address Line 2,</p>
                  <p>Address Line 3,</p>
                  <p>Address Line 4.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CustomContainer>

      <CustomContainer className={styles.bottom}>
        <div>
            <p>We Are Social</p>
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
              </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Footer;
