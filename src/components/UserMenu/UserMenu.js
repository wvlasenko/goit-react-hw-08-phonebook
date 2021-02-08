import { Button } from 'react-bootstrap';

import styles from './UserMenu.module.css';
import avatar from './../../images/avatar.png';

import { connect } from 'react-redux';
import { authSelectors, authOperations } from './../../redux/auth';

function UserMenu({ getName, onLogout }) {
  return (
    <div className={styles.flex}>
      <img src={avatar} className={styles.avatar}></img>
      <b>Welcome, {getName}</b>
      <Button variant="primary" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({
  getName: authSelectors.getAuthUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
