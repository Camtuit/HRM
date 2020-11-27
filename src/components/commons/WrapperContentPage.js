import React from 'react';
import { useSelector } from 'react-redux';
import constanst from '../../constants/htmlConstants';
import { deviceSizeFixed } from '../../constants/deviceSize';

function WrapperContentPage({ children }) {
  const { toggledSideBar, screenWidth } = useSelector((state) => {
    return {
      toggledSideBar: state.App.toggledSideBar,
      screenWidth: state.App.screenWidth,
    };
  });
  const isLaptop = window.innerWidth >= deviceSizeFixed.laptop;
  const {
    WIDTH_SIDE_BAR: { FULL, SHORT },
  } = constanst;
  const style = {
    width: `calc(100% - ${toggledSideBar && isLaptop ? FULL : SHORT})`,
  };
  return (
    <div className="wrapper-content" style={style}>
      {children}
    </div>
  );
}

export default WrapperContentPage;
