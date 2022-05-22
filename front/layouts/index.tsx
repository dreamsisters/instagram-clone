import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const SignIn = loadable(() => import('@pages/SignIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/sign_in" />
    </Route>
    <Route path="/sign_in" component={SignIn} />
    <Route path="/sign_up" component={SignUp} />
  </Switch>
);

export default App;
