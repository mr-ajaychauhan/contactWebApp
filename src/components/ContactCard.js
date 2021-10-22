import React from "react";
import image from "../images/avatar.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={image} alt="img" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", paddingLeft: "500px" }}
        onClick={() => {
          props.clickHandler(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
