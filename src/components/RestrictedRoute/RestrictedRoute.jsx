import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "reduxStore/auth/selectors";

const RestrictedRoute = ({ component: Component, to = '/' }) => {
    const isloggedIn = useSelector(selectIsLoggedIn)
  return isloggedIn ? <Navigate to={to}/> : Component;
};

export default RestrictedRoute;
