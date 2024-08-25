import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", username: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", username: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", username: "Eden Clements", number: "645-17-79" },
    { id: "id-4", username: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const addContact = (values) => {
    const newContact = {
      id: nanoid(),
      username: values.name,
      number: values.number,
    };
    setContacts([...contacts, newContact]);
  };

  const handleChangeFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox searchTerm={searchTerm} setSearchTerm={handleChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;