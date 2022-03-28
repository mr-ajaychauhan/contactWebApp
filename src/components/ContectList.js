import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContectList = (props) => {
        
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const returnContectList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="main">
      <h2 style={{marginTop:"40px"}}>Contact list</h2>
      <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>

      <div className="ui celled list">{returnContectList}</div>
    </div>
  );
};

export default ContectList;
