import styles from "./custom_button.module.scss";

const CustomButton = (props) => {
  const { children, type, clickHandler = () => {} } = props;

  return (
    <button
      type={type || "button"}
      className={styles.custom_button}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default CustomButton;
