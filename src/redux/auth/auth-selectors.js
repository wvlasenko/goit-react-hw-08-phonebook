import { connect } from 'react-redux';

const getIsAuthenticated = state => Boolean(state.auth.token);
const getAuthUserName = state => state.auth.user.name;
const getError = state => state.auth.error;
const authLoading = state => state.auth.loading;

export default {
  getIsAuthenticated,
  getAuthUserName,
  getError,
  authLoading,
};
