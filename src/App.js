import "./App.css";
import SignUpPage from "./pages/Sign-Up-Page/SignUpPage";
import TitlePage from "./pages/TitlePage/TitlePage";
import SignIn from "./components/Sign-In/SignIn";
import Dashboard from "./pages/Dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/Not-Found-Page/NotFoundPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<TitlePage setUser={setUser} />} />
        {/* <Route path="/signIn" element={<SignIn />} /> */}
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/dashboard/*" element={<Dashboard user={user} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
