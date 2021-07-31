import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contactsPhone, onClick }) => {
  return (
    <ul className={s.list}>
      {contactsPhone.map(({ name, id, number }) => {
        return (
          <li className={s.item} key={id}>
            {name}: {number}
            <button className={s.btn} type="button" onClick={() => onClick(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contactsPhone: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contacts;
