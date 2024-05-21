import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import clsx from "clsx";
import { logoutThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
const AppBar = () => {
  const dispatch = useDispatch();
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
        <button onClick={() => dispatch(logoutThunk())}>Logout</button>
      </div>
    </header>
  );
};

export default AppBar;
