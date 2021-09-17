import Nav from './Nav';

const Layout = ({ children, navigation }) => (
  <>
    <Nav navigation={navigation} />
    {children}
  </>
);

export default Layout;
