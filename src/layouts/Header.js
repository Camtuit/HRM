import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { withRouter} from 'react-router-dom';
import { toggleSideBar } from '../actions/utilsAction';
import constanst from '../constants/htmlConstants';
import ReactLogo from '../assets/images/nal_logo.svg';

import { Menu, Dropdown, Icon,Button } from 'antd';


function Header() {
  const [name,setName] = useState('Phạm Thị Cẩm Tú');
  const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(false);
  const [checkLogin,setcheckLogin] = useState('Logout');
  const toggledSideBar = useSelector((state) => state.toggledSideBar);
  const dispatch = useDispatch();
  const {
    WIDTH_SIDE_BAR: { FULL, SHORT },
  } = constanst;
  const styleLogo = {
    width: toggledSideBar ? FULL : SHORT,
  };
  const styleWrapperLogo = {
    width: `transform: translateX(${toggledSideBar ? 0 : `-110%`}px)`,
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSideBar());
    
  };

  return (
    <header className="header">
      <div className="nav_logo" style={styleLogo}>
        <Link to="/">
          <div className="wrapper-logo" style={styleWrapperLogo}>
            <ReactLogo className="logo" alt="Logo" />
            {toggledSideBar && (
              <span>
                <b>NAL</b>Hrm
              </span>
            )}
          </div>
        </Link>
      </div>
      <div className="nav nav-bar">
        <div
          className="sidebar-toggle"
          onClick={handleToggleSidebar}
          data-toggle="push-menu"
          role="button">
          <i className="fas fa-bars" />
        </div>
        <div className="dropdown user-menu"  onClick={()=> setIsProfileBoxOpen(!isProfileBoxOpen)}>
          <Avatar style={{border :isProfileBoxOpen? ' #0483f7 solid 2px' : 'none' }}
            alt="Avatar"
            size="large"
            src="https://www.flaticon.com/premium-icon/icons/svg/2202/2202112.svg"
          />
          <i className="fas fa-sort-down" >
          </i>
          
        </div>
        <div className="dropdown-list-menu" style={{display: isProfileBoxOpen? 'block' : 'none'}}  >
              <Menu>
                <Menu.Item key="0">
                 Hi {name}
                </Menu.Item>
                <Menu.Item key="1">
                  <Link   to = '/profile-detail/:id'>My Profile</Link>
                </Menu.Item>
                <Menu.Item key="2"><a href='/request-devices'>Request Device</a>
                </Menu.Item>
                <Menu.Item key="3"  > 
                <Link  to = '/login'  className= "check-login-logout">Logout</Link>
                </Menu.Item>
            </Menu>
            </div>
      
      </div>
    </header>
  );
}

export default withRouter(Header) ;
