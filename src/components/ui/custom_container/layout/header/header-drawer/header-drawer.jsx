import Link from "next/link";

const { Offcanvas } = require("react-bootstrap");

import styles from "./header-drawer.module.scss";
import { useRouter } from "next/router";
import SocialMedia from "@/components/social_media/social_media";

const HeaderDrawer = (props) => {
  const { show, setShow,  navLinks } = props;
  const handleClose = () => setShow(false);

  const router = useRouter();

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton></Offcanvas.Header>

      <Offcanvas.Body className={styles.body}>
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={
              router?.pathname === link?.href ? styles.active : styles.inactive
            }
            onClick={()=>{
              if(link.onClick){
                link.onClick()
              }
            }}
          >
            {link.name}
          </Link>
        ))}
        <SocialMedia black/>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
