import React from 'react'
import ContactCard from './ContactCard';

const ContectList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const returnContectList = props.contacts.map((contact) => {
        return <ContactCard contact ={contact} clickHandler={deleteContactHandler} key={contact.id} />
    });
    
    return <div className="ui celled list">{returnContectList}</div>
};

export default ContectList
