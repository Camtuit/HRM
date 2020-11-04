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

import AuthenticatedGuard from '../guards/AuthenticatedGuard';
import DayOffList from '../pages/DayOffList';

export default function HomeRoutes() {
  return (
    <>
      <Header />
      <Switch>
        <AuthenticatedGuard exact path="/" component={UserList} />
        <Route path="/users" component={UserList} />
        <Route path="/userregist" component={UserRegist} />
        <Route path="/holiday" component={HolidayList} />
        <Route path="/skillregist" component={SkillRegist} />
        <Route path="/skills" component={SkillList} />
        <Route path="/holidayregist" component={HolidayRegist} />
        <Route path="/dayoffs" component={DayOffList} />
      </Switch>
      <SideBar />
    </>
  );
}
