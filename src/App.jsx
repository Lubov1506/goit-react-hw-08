import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { refreshUserThunk } from "./redux/auth/operations";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
   useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? <p>Refresh ...</p> : 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} to="/login" />}
          />
        </Route>
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} to="/contacts" />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegistrationPage />} to="/contacts" />
          }
          />
          <Route path='*' element={ <NotFoundPage/>} />
        </Routes>
      }
    </>
  );
}

export default App;
