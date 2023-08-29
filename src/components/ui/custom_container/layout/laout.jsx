import Header from "./header/header";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <p>footer</p>
    </div>
  );
};

export default Layout;
