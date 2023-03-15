import {
    BrowserRouter as Router,
    Switch,
    Route,
 } from 'react-router-dom';

import Home from './pages/Home';
import Rules from './pages/Rules';


  const Routes = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rules" exact component={Rules} />
        {/* <Route path="/posts" exact component={Posts} />
        <Route path="/tags" exact component={Tags} /> */}
        {/* <Route component={NotFound} /> */}
        {/* <Route path="another_route" exact component={AnotherComponent} /> */}
      </Switch>
    </Router>
  );
  
export default Routes;