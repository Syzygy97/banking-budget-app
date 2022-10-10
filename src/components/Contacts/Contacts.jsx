import React from "react";
import "./Contacts.css";
import avatar3 from "../../assets/Avatars/avatar3.png";

export default function Contacts() {
  return (
    <>
      <div className="contacts-label">
        <h2 className="contacts">Contacts</h2>
        <h2 className="contacts-number">5</h2>
      </div>
      <div className="contacts-scroller">
        <div className="media-element">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="media-element">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="media-element">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="media-element">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="media-element">
          <img src={avatar3} alt="avatar" />
        </div>
      </div>
    </>
  );
}
