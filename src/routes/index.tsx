import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PagLogin from '../pages/login';
import PagResg from '../pages/register';
import Dashboard from '../pages/dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={PagLogin} />
    <Route path="/registro" component={PagResg} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
