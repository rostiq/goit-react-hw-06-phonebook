import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('localContacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('localContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ( name, number ) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const handleRemoveContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
    setFilter('');
  };

  const handleChangeFilter = (event) => {
    setFilter(event.target.value)
  };

  const handleFilterContacts = () => {
    const filterToLowerCase = filter.toLowerCase()

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
        <h2>Contacts</h2>
        <div>All contacts: {contacts.length}</div>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList
          contacts={handleFilterContacts()}
          onRemoveContact={handleRemoveContact}
        />
      </>
  );
}

export default App;