const {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Whatsapp,
} = require("react-bootstrap-icons");

import Link from "next/link";
import styles from "./social_media.module.scss";

const SocialMedia = ({ black }) => {
  const links = [
    {
      id: "facebook",
      icon: <Facebook />,
      href: "https://www.facebook.com/profile.php?id=61550820090901&mibextid=9R9pXO",
    },
    {
      id: "insta",
      icon: <Instagram />,
      href: "https://instagram.com/vifprosilage?igshid=MzRlODBiNWFlZA==",
    },
    {
      id: "youtube",
      icon: <Youtube />,
      href: "https://www.youtube.com/@VIFPROsilage",
    },
    {
      id: "in",
      icon: <Whatsapp />,
      href: "https://wa.link/fix4k7",
    },
    {
      id: "twitter",
      icon: <Twitter />,
      href: "https://www.facebook.com/profile.php?id=61550820090901&mibextid=9R9pXO",
    },
  ];

  return (
    <div className={styles.social}>
      {links.map((link) => (
        <Link key={link.id} href={link.href} target="_blank">
          <div className={black ? styles.black : styles.div}>{link.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
