import { useState } from "react";
import styles from "./login_box.module.scss";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

const LoginBox = (props) => {
  const { setCurrentUserEmail } = props;

  const handleSubmit = (e) => {
    sessionStorage.setItem("currentUserEmail", e.target[0].value);
    setCurrentUserEmail(e.target[0].value);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdminLogin = async () => {
    //  try{
    setIsLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
      // callbackUrl:'#'
    });

    if (res.status === 401) {
      setError(true);
    }
    setIsLoading(false);
  };

  const [adminLogin, setAdminLogin] = useState(false);

  return (
    <div className={`${styles.login_box} ${error && styles.error}`}>
      {!adminLogin ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <input
            type="email"
            placeholder="Your Email.."
            required
            name="email"
          />
          <input type="submit" value="Start Chat" name="submit" />
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdminLogin();
          }}
          className={styles.adminForm}
        >
          <input
            type="email"
            placeholder="Your Email.."
            required
            name="email"
            value={formData.email}
            onChange={(e) => {
              setError(false)
              setFormData((prev) => ({ ...prev, email: e.target.value }));
            }}
            disabled={isLoading}
          />
          <input
            type="password"
            placeholder="Password.."
            required
            value={formData.password}
            onChange={(e) => {
              setError(false)
              setFormData((prev) => ({ ...prev, password: e.target.value }));
            }}
            disabled={isLoading}
          />

          <input
            type="submit"
            disabled={isLoading}
            value={isLoading ? "Loading.." : "Login & Start Chat"}
            name="submit"
          />
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
