import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from './../../redux/auth';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function LoginView({ onLogin, error }) {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const { email, password } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onLogin(state);
    setState(INITIAL_STATE);
  };

  return (
    <Form className="formInput" onSubmit={handleSubmit}>
      <h3 style={{ textAlign: 'center' }}>Login</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      {error && (
        <div style={{ textAlign: 'center', color: 'red' }}>Ошибка логина</div>
      )}
      <Button
        variant="primary"
        type="submit"
        style={{ margin: 'auto', display: 'block' }}
      >
        Some In
      </Button>
    </Form>
  );
}

const mapStateToProps = state => ({
  error: authSelectors.getError(state),
});

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
