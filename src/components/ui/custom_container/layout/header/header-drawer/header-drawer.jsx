import Link from "next/link";

const { Offcanvas } = require("react-bootstrap");

import styles from "./header-drawer.module.scss";
import { useRouter } from "next/router";

const HeaderDrawer = (props) => {
  const { show, setShow, children, navLinks } = props;
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
          >
            {link.name}
          </Link>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
