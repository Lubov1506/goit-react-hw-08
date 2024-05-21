import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';


const PrivateRoute = ({ component: Component, to = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing)
  return !isLoggedIn && !isRefreshing ? <Navigate to={to} /> : Component;
};

export default PrivateRoute;
