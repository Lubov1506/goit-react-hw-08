import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import { buildActiveClass } from "../../helpers/buildActiveClass";
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav className={s.nav}>
          <NavLink className={({isActive})=>buildActiveClass(isActive, `${s.active}`)} to="/">
            Home
          </NavLink>
          <NavLink className={({isActive})=>buildActiveClass(isActive, `${s.active}`)} to="/contacts">
            Contacts
          </NavLink>
        </nav>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
