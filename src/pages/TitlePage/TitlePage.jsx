import React from "react";
import "./TitlePage.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SignIn from "../../components/Sign-In/SignIn";
import AdminSignIn from "../../components/Admin-Sign-In/AdminSignIn";

const TitlePage = ({ setUser }) => {
  return (
    <>
      <NavBar />
      <div className="main-page">
        <div className="title-page-div">
          <h1 className="title-page">Banking made easy and</h1>
          <h1 className="title-page1">hassle-free!</h1>
          <p className="title-page2">
            Making your life easier. Transact everyday with ease by
            <br />
            managing your money with Paybill App.
          </p>
          <button className="download-btn">
            Download App{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="download-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
        <SignIn setUser={setUser} />
        {/* <div>
          <Routes>
            <Route>
              <Route index element={<SignIn setUser={setUser} />} />
              <Route path="/" element={<AdminSignIn />} />
            </Route>
          </Routes>
        </div> */}
      </div>
    </>
  );
};

export default TitlePage;
