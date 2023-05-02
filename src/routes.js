import {
    HashRouter as Router,
    Route,
 } from 'react-router-dom';

import Home from './pages/Home';
import Rules from './pages/Rules';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';


  const Routes = () => (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/rules" exact component={Rules} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forgotpassword" exact component={ForgotPassword} />
        {/* <Route path="/posts" exact component={Posts} />
        <Route path="/tags" exact component={Tags} /> */}
        {/* <Route component={NotFound} /> */}
        {/* <Route path="another_route" exact component={AnotherComponent} /> */}
    </Router>
  );
  
export default Routes;