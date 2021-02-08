import React, { useState } from 'react';
import './ContactForm.css';

import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from 'react-redux';

import { phonebookOperations } from './../../redux/phonebook';
import { Button } from 'react-bootstrap';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = ({ onFindName, onAddContact }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!name || !number) {
      toast.error('Name or phone filed is empty.', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    console.log(onFindName(name));

    if (onFindName(name).length !== 0) {
      toast.warn(name + ' is already in contacts.', {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    onAddContact(state);

    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  return (
    <>
      <form className="phonebook" onSubmit={handleSubmit}>
        <label htmlFor="name_1">Name</label>
        <br />
        <input
          type="text"
          name="name"
          id="name_1"
          value={name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phone_1">Number</label>
        <br />
        <input
          type="tel"
          name="number"
          id="phone_1"
          value={number}
          onChange={handleChange}
        />
        <br />
        <br />
        {/* <button type="submit">Add contact</button>
         */}
        <Button
          variant="primary"
          type="submit"
          style={{ margin: 'auto', display: 'block' }}
        >
          Add contact
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

ContactForm.defaultProps = {
  onAddContact: () => {},
  onFindName: () => {},
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
  onFindName: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onAddContact: credential =>
    dispatch(phonebookOperations.addContact(credential)),
  onFindName: name => dispatch(phonebookOperations.onFindName(name)),
});
export default connect(null, mapDispatchToProps)(ContactForm);
