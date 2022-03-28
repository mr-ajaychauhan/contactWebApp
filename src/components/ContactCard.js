import React from "react";
import { Link } from "react-router-dom";
import image from "../images/avatar.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={image} alt="img" />
      <div className="content">
        <Link to={`/contact/$(id)`}>     {/*main error are occured here solve not find  */}
        <div className="header">{name}</div>
        <div>{email}</div>
        </Link>
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
