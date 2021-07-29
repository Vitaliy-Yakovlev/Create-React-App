import React, { Component } from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Heading from './Heading';
import Container from './Container';
import useLocalStorage from '../../Hooks/useLocalStorage';

// export default function Phonebook() {
//   const [contacts, setContacts] = useLocalStorage('contact');
//   const [filter, setFilter] = useState('');

//   const addContact = ({ name, number }) => {
//     const contact = {
//       name,
//       id: shortid.generate(),
//       number,
//     };

//     const errorName = contacts.filter(
//       contact => contact.name.toLowerCase() === name.toLowerCase(),
//     );

//     if (errorName.length) {
//       alert(`${name} is already in contacts`);
//     } else {
//       setContacts([contact, ...contacts]);
//     }
//   };

//   const filterChange = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const filterContact = () => {
//     // const normalizedFilter = filter.toLowerCase();
//     // return setContacts(
//     //   filter(contact => contact.name.toLowerCase().includes(normalizedFilter)),
//     // );
//   };

//   const deleteContact = contactId => {
//     setContacts(contact => contact.filter(contact => contact.id !== contactId));
//   };

//   return (
//     <>
//       <Container>
//         <Heading text="Phonebook" />
//         <Form onSubmit={addContact} />
//         <Heading text="Contacts" />
//         <Filter value={filter} onChangeFilter={filterChange} />
//         <Contacts contacts={filterContact()} onClick={deleteContact} />
//       </Container>
//     </>
//   );
// }

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const passedContacts = JSON.parse(contacts);

    if (passedContacts) {
      this.setState({ contacts: passedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      // console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      name,
      id: shortid.generate(),
      number,
    };

    const errorName = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (errorName.length) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Container>
          <Heading text="Phonebook" />

          <Form onSubmit={this.addContact} />

          <Heading text="Contacts" />

          <Filter value={filter} onChangeFilter={this.filterChange} />

          <Contacts
            contacts={this.filterContact()}
            onClick={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}

export default Phonebook;
