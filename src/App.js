import SignIn from "./components/Sign-In/SignIn";
import SignUpPage from "./pages/Sign-Up-Page/SignUpPage";

import NavBar from "./components/NavBar/NavBar";
import TitlePage from "./components/TitlePage/TitlePage";
import SignIn from "./components/Sign-In/SignIn";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="main-page">
        <TitlePage></TitlePage>
        <SignIn></SignIn>
      </div>
    </div>
  );
}

export default App;
