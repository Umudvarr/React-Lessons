import { useState, useEffect } from "react";

import './style.css'

import Lists from "./Lists";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Əli",
      phone_number: "123456789",
    },
    {
      fullName: "Vəli",
      phone_number: "121314",
    },
    {
      fullName: "Pirvəli",
      phone_number: "252627",
    },

  ]);

  useEffect(() => {}, [contacts]);
  return (
    <div id="container">
        <h1>Contacts</h1>
      <Lists contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
