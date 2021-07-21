import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import Heading from './Heading';
import Container from './Container';

class Phponebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      id: shortid.generate(),
      number,
    };

    const errorName = this.state.contacts.filter(
      contact => contact.name === name,
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

    const normalazedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter),
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

export default Phponebook;