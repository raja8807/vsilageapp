import AboutUs from "./about_us/about_us";

const { default: Banner } = require("./banner/banner");

const HomeScreen = () => {
  return (
    <>
      <Banner />
      {
        process.env.NEXT_PUBLIC_MONGO_URI
      }
      <AboutUs />
    </>
  );
};

export default HomeScreen;
