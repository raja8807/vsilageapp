import { useState } from "react";
import styles from "./login_box.module.scss";

const LoginBox = (props) => {
  const { setCurrentUserEmail, setSession } = props;

  const handleSubmit = (e) => {
    sessionStorage.setItem("currentUserEmail", e.target[0].value);
    setCurrentUserEmail(e.target[0].value);
  };

  const handleAdminLogin = () => {
    setSession("x");
  };

  const [adminLogin, setAdminLogin] = useState(false);

  return (
    <div className={styles.login_box}>
      {!adminLogin ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <input type="email" placeholder="Your Email.." required />
          <input type="submit" value="Start Chat" />
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdminLogin();
          }}
        >
          <input type="email" placeholder="Your Email.." required />
          <input type="password" placeholder="Password.." required />
          <input type="submit" value="Login & Start Chat" />
        </form>
      )}
      <p
        onClick={() => {
          setAdminLogin((prev) => !prev);
        }}
      >
        {adminLogin ? "Not Admin?" : "Admin Login?"}
      </p>
    </div>
  );
};

export default LoginBox;
