import AboutUs from "./about_us/about_us";

const { default: Banner } = require("./banner/banner");

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <AboutUs />
    </>
  );
};

export default HomeScreen;
