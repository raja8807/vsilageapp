const { Offcanvas } = require("react-bootstrap");
import AdminLoginBox from "./login_box/login_box";
import styles from "./login_drawer.module.scss";

const LoginDrawer = (props) => {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>Login</Offcanvas.Header>
      <Offcanvas.Body className={styles.login_drawer_body}>
        <AdminLoginBox/>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default LoginDrawer;
