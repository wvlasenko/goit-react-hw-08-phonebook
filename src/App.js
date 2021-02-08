import AppBar from './components/AppBar';
import { Switch } from 'react-router-dom';
import routes from './routes';
import { Suspense, lazy, useEffect } from 'react';
import Loading from './components/Loading';
import { Col, Row, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const NotFound = lazy(() => import('./views/NotFound'));

function App({ getCurrentUser }) {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <AppBar />

          <section>
            <Suspense fallback={<Loading />}>
              <Switch>
                <PublicRoute exact path={routes.home} component={HomeView} />
                <PrivateRoute
                  path={routes.contacts}
                  component={ContactsView}
                  redirectTo={routes.login}
                />
                <PublicRoute
                  path={routes.register}
                  component={RegisterView}
                  restricted
                  redirectTo={routes.contacts}
                />
                <PublicRoute
                  path={routes.login}
                  component={LoginView}
                  restricted
                  redirectTo={routes.contacts}
                />
                <PublicRoute component={NotFound} />
              </Switch>
            </Suspense>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = {
  getCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
