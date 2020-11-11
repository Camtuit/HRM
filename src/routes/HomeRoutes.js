import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';
// User
import UserRoutes from './UserRoutes';
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
        {/* Users */}
        <Route path="/users" component={UserRoutes} />
        <Route path="/user" component={UserRegist} />
        {/* Holiday */}
        <Route path="/holidays" component={HolidayList} />
        <Route path="/holiday" component={HolidayRegist} />
        {/* Skill */}
        <Route path="/skills" component={SkillList} />
        <Route path="/skill" component={SkillRegist} />
        {/* Day Off */}
        <Route path="/dayoffs" component={DayOffList} />
        <Route path="/dayoff" component={DayOffRegist} />
        {/* Request Device */}
        <Route path="/request-devices" component={RequestDeviceRoutes} />
        <Route path="/request-device" component={RequestDeviceRegister} />
        {/* Device */}
        <Route path="/devices" component={DeviceRoute} />
        <Route path="/device" component={() => {}} />
        {/* Home page */}
        <Route path="/" component={UserList} />
      </Switch>
      <SideBar />
    </>
  );
}
