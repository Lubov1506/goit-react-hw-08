import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeLink = ({ isActive }) => {
    return clsx(isActive && s.active);
  };
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav className={s.nav}>
          <NavLink className={activeLink} to="/">
            Home
          </NavLink>
          <NavLink className={activeLink} to="/contacts">
            Contacts
          </NavLink>
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
