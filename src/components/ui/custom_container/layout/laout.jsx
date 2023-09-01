import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
