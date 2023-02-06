import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';


const App = () => {

  const dispatch = useDispatch();
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const handleAddContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch({ type: 'ADD', payload: newContact });
  };

  const handleRemoveContact = (contactId) => {
    dispatch({ type: 'REMOVE', payload: contactId});
  };

  const handleChangeFilter = (event) => {
    dispatch({ type: 'FILTER', payload: event.target.value });
  };

  const handleFilterContacts = () => {
    console.log(contacts);
    return contacts.filter(contact => contact.name.toLowerCase().includes(filtered));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2>Contacts</h2>
      <div>All contacts: {contacts.length}</div>
      <Filter value={filtered} onChange={handleChangeFilter} />
      <ContactList
        contacts={handleFilterContacts()}
        onRemoveContact={handleRemoveContact}
      />
    </>
  );
}

export default App;