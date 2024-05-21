import { Link } from "react-router-dom";
import s from "./AuthNav.module.css";
const AuthNav = () => {

  return (
    <nav className={s.nav}>
      <Link  to="/login">
       Login
      </Link>
      <Link to="/register">
        Register
      </Link>
    </nav>
  );
};

export default AuthNav;
