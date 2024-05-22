import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { buildActiveClass } from "../../helpers/buildActiveClass";
const AuthNav = () => {

  return (
    <nav className={s.nav}>
      <NavLink  className={({isActive})=>buildActiveClass(isActive, `${s.active}`)} to="/login">
       Login
      </NavLink>
      <NavLink className={({ isActive }) => buildActiveClass(isActive, `${s.active }`)} to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;
