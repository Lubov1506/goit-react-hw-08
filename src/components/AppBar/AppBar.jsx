import { NavLink } from "react-router-dom";
import s from './AppBar.module.css'
const AppBar = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink>Home</NavLink>
      </nav>
    </div>
  );
};

export default AppBar;
