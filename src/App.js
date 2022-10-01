import "./App.css";
import SignUpPage from "./pages/Sign-Up-Page/SignUpPage";
import TitlePage from "./pages/TitlePage/TitlePage";
import SignIn from "./components/Sign-In/SignIn";
import Dashboard from "./pages/Dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/Not-Found-Page/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
