import { useState } from "react";

function Lists({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLowerCase);
    });
  });
  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {contacts.map((contact, i) => (
          <li key={i}>{contact.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lists;
