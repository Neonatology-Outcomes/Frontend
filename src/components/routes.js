import {
    BrowserRouter as Router,
    Switch,
    Route,
 } from 'react-router-dom';
 
import Home from './Home';


  const Routes = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/posts" exact component={Posts} />
        <Route path="/tags" exact component={Tags} /> */}
        {/* <Route component={NotFound} /> */}
        {/* <Route path="another_route" exact component={AnotherComponent} /> */}
      </Switch>
    </Router>
  );
  
export default Routes;