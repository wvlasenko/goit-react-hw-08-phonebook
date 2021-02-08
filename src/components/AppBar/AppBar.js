import Navigation from './../Navigation';
import AuthNav from './../AuthNav';
import UserMenu from './../UserMenu';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { authSelectors } from './../../redux/auth';

function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      {/*<Navbar.Brand href="/">Phonebook</Navbar.Brand>*/}
      <Nav className="mr-auto">
        <Navigation />
      </Nav>
      <Nav>{isAuthenticated ? <UserMenu /> : <AuthNav />}</Nav>
    </Navbar>
  );
}

export default AppBar;
