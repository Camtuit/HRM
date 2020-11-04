import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import HolidayRegistInput from "../components/HolidayRegistInput";
import SideBar from "../components/SideBar";
import "../css/HolidayRegist.css";

function HolidayRegist() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen
  );

  return (
    <>
      <Header />
      <SideBar />
      <div
        style={{ marginLeft: isSideBarOpen ? "230px" : "56px" }}
        className="holiday-registration-content"
      >
        <HolidayRegistInput />
      </div>
    </>
  );
}

export default HolidayRegist;
