import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';
// User
import UserList from '../pages/User/UserList';
import UserRegist from '../pages/User/UserRegist';
// Holiday
import HolidayList from '../pages/Holiday/HolidayList';
import HolidayRegist from '../pages/Holiday/HolidayRegist';
// Skill List
import SkillList from '../pages/Skill/SkillList';
import SkillRegist from '../pages/Skill/SkillRegist';
// Day Off
import DayOffList from '../pages/DayOff/DayOffList';
import DayOffRegist from '../pages/DayOff/DayOffRegist';
// Request Device
import RequestDeviceRegister from '../pages/RequestDevice/RequestDeviceRegister';
import RequestDeviceRoutes from './RequestDeviceRoutes';
// Device
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
        <Route exact path="/skills" component={SkillList} />
        <Route exact path="/skill" component={SkillRegist} />
        {/* Day Off */}
        <Route exact path="/dayoffs" component={DayOffList} />
        <Route exact path="/dayoff" component={DayOffRegist} />
        {/* Request Device */}
        <Route path="/request-devices" component={RequestDeviceRoutes} />
        <Route path="/request-device" component={RequestDeviceRegister} />
        {/* Device */}
        <Route path="/devices" component={DeviceRoute} />
        <Route path="/device" component={() => {}} />
      </Switch>
      <SideBar />
    </>
  );
}
