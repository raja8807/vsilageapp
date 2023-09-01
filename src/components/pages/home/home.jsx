import AboutUs from "./about_us/about_us";
import OurTeam from "./our-team/our-team";

const { default: Banner } = require("./banner/banner");

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurTeam/>
    </>
  );
};

export default HomeScreen;
