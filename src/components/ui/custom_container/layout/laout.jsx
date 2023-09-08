import WhatsappButton from "@/components/whatsapp_button/whatsapp_button.jsx";
import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <WhatsappButton />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
