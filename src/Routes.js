import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './components/Form/index';
import CustomerInfo from './Pages/CustomerInfo/index';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Form} />
      <Route path="/customerinfo" component={CustomerInfo} />
    </Switch>
  );
}

export default Routes;
