import "./App.css";
import SignUpPage from "./pages/Sign-Up-Page/SignUpPage";
import TitlePage from "./pages/TitlePage/TitlePage";
import SignIn from "./components/Sign-In/SignIn";
import Dashboard from "./pages/Dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/Not-Found-Page/NotFoundPage";
import { useState } from "react";
import AdminSignIn from "./components/Admin-Sign-In/AdminSignIn";
import AdminPage from "./pages/Admin-Page/AdminPage";

function App() {
  const [user, setUser] = useState(null);
  // const [adminList, setAdminList] = useState([]);
  return (
    <>
      <Routes>
        {/* <Route path="/signIn" element={<SignIn />} /> */}
        <Route path="/" element={<TitlePage setUser={setUser} />} />
        <Route path="/adminSignIn" element={<AdminSignIn />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/dashboard/*" element={<Dashboard user={user} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
