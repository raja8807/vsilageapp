const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");
import styles from "./section.module.scss";

const CustomSection = (props) => {
  const { children, heading } = props;

  return (
    <section className={styles.section}>
      {heading && <h1>About Us</h1>}
      <CustomContainer>{children}</CustomContainer>
    </section>
  );
};

export default CustomSection;
