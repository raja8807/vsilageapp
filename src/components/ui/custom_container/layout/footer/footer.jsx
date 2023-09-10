import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "../../custom_container";
import styles from "./footer.module.scss";
import Link from "next/link";
import {
  EnvelopeAtFill,
  Facebook,
  Instagram,
  PinMap,
  Telephone,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";

const Footer = () => {
  const navLinks = [
    {
      id: "home",
      name: "Home",
      href: "/",
    },
    {
      id: "about",
      name: "About Us",
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
      name: "Contact Us",
      href: "/contact",
    },
    // {
    //   id: "login",
    //   name: "Login",
    //   href: "/",
    // },
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
                <p>+91 74833 77777</p>
              </div>
              <div>
                <Whatsapp />
                <p>+91 90429 36647</p>
              </div>
              <div>
                <EnvelopeAtFill />
                <p>admin@vsilage.com</p>
              </div>
              <div className={styles.address}>
                <PinMap />
                <div>
                  <p>1017R/1A, Kamaraj Nagar,</p>
                  <p>Court opposite,</p>
                  <p>Tirunelveli - 627002.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CustomContainer>

      <CustomContainer className={styles.bottom}>
        <div>
          <p>We Are Social</p>
          <SocialMedia />
        </div>
      </CustomContainer>
    </div>
  );
};

export default Footer;
