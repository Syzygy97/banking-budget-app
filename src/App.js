import "./App.css";
import SignUpPage from "./pages/Sign-Up-Page/SignUpPage";
import TitlePage from "./pages/TitlePage/TitlePage";
import Dashboard from "./pages/Dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/Not-Found-Page/NotFoundPage";
import AdminSignIn from "./components/Admin-Sign-In/AdminSignIn";
import AdminPage from "./pages/Admin-Page/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/adminSignIn" element={<AdminSignIn />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
