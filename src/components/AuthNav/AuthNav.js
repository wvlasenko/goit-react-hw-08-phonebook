import { NavLink } from 'react-router-dom';
import routes from './../../routes';

export default function AuthNav() {
  return (
    <>
      <NavLink
        exact
        to={routes.register}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Register
      </NavLink>
      <NavLink
        to={routes.login}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Login
      </NavLink>
    </>
  );
}
