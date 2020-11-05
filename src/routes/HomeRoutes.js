import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';
import UserList from '../pages/UserList';
import UserRegist from '../pages/UserRegist';
import HolidayList from '../pages/HolidayList';
import SkillList from '../pages/SkillList';
import SkillRegist from '../pages/SkillRegist';
import HolidayRegist from '../pages/HolidayRegist';
import DeviceDetail from '../pages/DeviceDetail';

import AuthenticatedGuard from '../guards/AuthenticatedGuard';

export default function HomeRoutes() {
  return (
    <>
      <Header />
      <Switch>
        <AuthenticatedGuard exact path="/" component={UserList} />
        <Route exact path="/users" component={UserList} />
        <Route exact path="/userregist" component={UserRegist} />
        <Route exact path="/holiday" component={HolidayList} />
        <Route exact path="/skillregist" component={SkillRegist} />
        <Route exact path="/skills" component={SkillList} />
        <Route exact path="/holidayregist" component={HolidayRegist} />
        <Route exact path="/devices" component={DeviceDetail} />
      </Switch>
      <SideBar />
    </>
  );
}
