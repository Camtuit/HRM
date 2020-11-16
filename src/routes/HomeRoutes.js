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
// Profile
import ProfileRoutes from './ProfileRoutes';
import PrivateRoute from '../components/commons/PrivateRoute';

export default function HomeRoutes() {
  return (
    <>
      <Header />
      <Switch>
        {/* Users */}
        <PrivateRoute path="/users" component={UserRoutes} />
        <PrivateRoute path="/user" component={UserRegist} />
        {/* Holiday */}
        <PrivateRoute path="/holidays" component={HolidayList} />
        {/* Skill */}
        <PrivateRoute path="/skills" component={SkillList} />
        <PrivateRoute path="/skill" component={SkillRegist} />
        {/* Day Off */}
        <PrivateRoute path="/dayoffs" component={DayOffList} />
        <PrivateRoute path="/dayoff" component={DayOffRegist} />
        {/* Request Device */}
        <PrivateRoute path="/request-devices" component={RequestDeviceRoutes} />
        <PrivateRoute
          path="/request-device"
          component={RequestDeviceRegister}
        />
        {/* Device */}
        <Route path="/devices" component={DeviceRoute} />
        <PrivateRoute path="/device" component={() => {}} />
        {/* Home page */}
        <Route path="/profile" component={ProfileRoutes} />
        <PrivateRoute path="/" component={UserList} />
      </Switch>
      <SideBar />
    </>
  );
}
