import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Rules from './pages/Rules';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ToDoPage from './pages/ToDo';
import ForgotPassword from './pages/ForgotPassword';
import NurseDashboard from './pages/NurseDashboard';
import Assessment from './pages/Assessment';
import ComplianceDashboard from './pages/ComplianceDashboard';

function Routes() {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/rules" exact component={Rules} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/todo" exact component={ToDoPage} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/nurse-dashboard" exact component={NurseDashboard} />
      <Route path="/assessment/:uhid" exact component={Assessment} />
      <Route path="/compliance-dashboard" exact component={ComplianceDashboard} />
    </Router>
  );
}

export default Routes;
