import React from "react";
import "./TitlePage.css";

const TitlePage = () => {
  return (

    <div className="title-page-div" >
      <h1 className="title-page">Banking made easy and</h1>
      <h1 className="title-page1">hassle-free!</h1>
      <p className="title-page2">
        Making your life easier. Transact everyday with ease by
        <p>managing your money with Paybill App.</p>
      </p>
      <button className="download-btn">
        Download App{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="download-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default TitlePage;
