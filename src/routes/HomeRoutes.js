import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';
import UserList from '../pages/UserList';
import UserRegist from '../pages/UserRegist';
import HolidayList from '../pages/HolidayList';
import SkillList from '../pages/SkillList';
import SkillRegist from '../pages/SkillRegist';
import HolidayRegist from '../pages/HolidayRegist';
import DeviceDetail from '../pages/DeviceDetail';
import RequestListDevice from '../pages/RequestListDevice';

import DayOffList from '../pages/DayOffList';
import DayOffRegist from '../pages/DayOffRegist';
import RequestDetail from '../pages/RequestDetail';
import DeviceRoute from './DeviceRoutes';

export default function HomeRoutes() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={UserList} />
        {/* Users */}
        <Route exact path="/users" component={UserList} />
        <Route exact path="/user" component={UserRegist} />
        {/* Holiday */}
        <Route exact path="/holidays" component={HolidayList} />
        <Route exact path="/holiday" component={HolidayRegist} />
        {/* Skill */}
        <Route exact path="/skill" component={SkillRegist} />
        <Route exact path="/skills" component={SkillList} />
        {/* Day Off */}
        <Route exact path="/dayoff" component={DayOffRegist} />
        <Route exact path="/dayoffs" component={DayOffList} />
        {/* Request Device */}
        <Route exact path="/request-device" component={RequestListDevice} />
        <Route
          exact
          path="/request-device/:id/detail"
          component={RequestDetail}
        />
        {/* Device */}
        <Route path="/devices" component={DeviceRoute} />
      </Switch>
      <SideBar />
    </>
  );
}
