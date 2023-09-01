import Link from "next/link";

const { Offcanvas } = require("react-bootstrap");

import styles from './header-drawer.module.scss'

const HeaderDrawer = (props) => {
  const { show, setShow, children, navLinks } = props;
  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton></Offcanvas.Header>

      <Offcanvas.Body className={styles.body}>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.id}>
            {link.name}
          </Link>
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;
