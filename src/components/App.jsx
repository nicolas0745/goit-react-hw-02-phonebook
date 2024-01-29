import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css';
let savedContacts = [];
let haveWords = false;
let firstSubmit = true;
let firstDelete = true;
let fisrtSearch = true;
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filteredSearch = string => {
    if (!haveWords) {
      savedContacts = this.state.contacts;
    }
    haveWords = true;
    const filteredList = savedContacts.filter(c =>
      c.name.toLocaleLowerCase().includes(string)
    );
    if (string.trim() === '') {
      haveWords = false;
      this.setState({ contacts: savedContacts });
      return;
    }
    this.setState({ contacts: filteredList });
  };

  handleSubmit = e => {
    e.preventDefault();
    let exist = false;
    if (firstSubmit) {
      savedContacts = this.state.contacts;
      firstSubmit = false;
    }
    const list = savedContacts;
    const contact = {
      id: nanoid(),
      name: e.currentTarget.elements[0].value,
      number: e.currentTarget.elements[1].value,
    };
    list.forEach(e => {
      if (e.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()) {
        exist = true;
        return;
      }
    });
    if (exist) {
      alert(contact.name + 'is already in contacts');
      return;
    }
    list.push(contact);
    this.setState({ contacts: list });
    e.currentTarget.reset();
  };

  handleChange = e => {
    if (fisrtSearch) savedContacts = this.state.contacts;
    fisrtSearch = false;
    firstDelete = false;
    const filterBind = this.filteredSearch.bind(this);
    const valueImput = e.currentTarget.value.trim();
    this.setState({ filter: valueImput }, () => {
      filterBind(this.state.filter);
    });
  };

  handleClick = e => {
    if (firstDelete) savedContacts = this.state.contacts;
    firstDelete = false;
    const idToCompare = e.currentTarget.id;
    const index = savedContacts.findIndex(e => e.id === idToCompare);
    savedContacts.splice(index, 1);
    if (haveWords) {
      this.filteredSearch(this.state.filter);
      return;
    }
    this.setState({ contacts: savedContacts });
  };

  render() {
    return (
      <div className={css.div_container}>
        <h1>Phonebook</h1>
        <ContactForm
          onHandlesubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
        />

        <h2>Contacts</h2>
        <Filter onHandleChange={this.handleChange} />
        <ContactList
          list={this.state.contacts}
          onHandleClick={this.handleClick}
        />
      </div>
    );
  }
}

export { App };
