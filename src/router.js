import React from  'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import Search from './Components/Search/Search';

export default(
  <Switch>
    <Route component = { Auth } path = "/auth" />
    <Route component = { Dashboard } path = "/" exact />
    <Route component = { Profile } path = "/profile" />
    <Route component = { Search } path = "/search" />
  </Switch>
)
