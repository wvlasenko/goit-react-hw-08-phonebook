import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './../../components/ContactForm';
import ContactList from './../../components/ContactList';
import Filter from './../../components/Filter';

export default function ContactsView() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={3}>
            <h2>Phonebook</h2>
            <ContactForm />
          </Col>
          <Col sm={9}>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
}
