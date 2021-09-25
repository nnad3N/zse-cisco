import Nav from '../organisms/Nav/Nav';

const Layout = ({ children, navigation }) => {
  return (
    <>
      <Nav navigation={navigation} />
      {children}
    </>
  );
};

export default Layout;
