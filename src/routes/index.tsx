import React from 'react';
import { Switch, Route } from 'react-router-dom';
import pagLogin from '../pages/login';
import pagResg from '../pages/register';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={pagLogin} />
    <Route path="/registro" component={pagResg} />
  </Switch>
);

export default Routes;
