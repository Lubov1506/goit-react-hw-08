import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}

export default App;
