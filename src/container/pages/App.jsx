import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';
import {DashboardAdmin, GroupAdmin, MenusAdmin, MenuDetail, UsersAdmin} from './admin';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={DashboardAdmin} />
            <Route path="/login" component={Login} />
            <Route path="/group" component={GroupAdmin} />
            <Route exact path="/menus" component={MenusAdmin} />
            <Route path="/menus/:id" component={MenuDetail} />
            <Route path="/users" component={UsersAdmin} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;