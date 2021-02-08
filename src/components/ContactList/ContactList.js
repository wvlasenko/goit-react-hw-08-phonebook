import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import {
  phonebookOperations,
  phonebookSelectors,
} from './../../redux/phonebook';

const ContactList = ({ loading, contacts, fetchContacts, removeContactId }) => {
  //
  useEffect(() => {
    console.log(fetchContacts());
  }, [fetchContacts]);

  return (
    <>
      {loading && <h3>Loading</h3>}

      {contacts.length != 0 && (
        <>
          <br />
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Humber</th>
                <th width="10%"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(({ id, name, number }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{number}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        removeContactId(id);
                      }}
                    >
                      Delete
                    </Button>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

ContactList.defaultProps = {
  contacts: [],
  removeContactId: () => {},
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContactId: PropTypes.func,
};

const mapStateToProps = state => ({
  loading: phonebookSelectors.getLoading(state),
  contacts: phonebookSelectors.getFilterContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContact()),
  removeContactId: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
