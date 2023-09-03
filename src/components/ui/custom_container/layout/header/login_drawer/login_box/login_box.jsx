const { useState } = require("react");

import { signIn } from "next-auth/react";
import styles from "./login_box.module.scss";

const AdminLoginBox = () => {
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

  return <div className={`${styles.login_box} ${error && styles.error}`}>
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
          setError(false);
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
          setError(false);
          setFormData((prev) => ({ ...prev, password: e.target.value }));
        }}
        disabled={isLoading}
      />

      <input
        type="submit"
        disabled={isLoading}
        value={isLoading ? "Loading.." : "Login"}
        name="submit"
      />
    </form>
  </div>;
};

export default AdminLoginBox;
