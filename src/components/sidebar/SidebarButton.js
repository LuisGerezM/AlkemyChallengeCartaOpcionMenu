import React, { useState } from "react";
import SidebarList from "./SidebarList";

const SidebarButton = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <div className="btn btn-dark" onClick={ToggleSidebar}>
        <i className="fa fa-bars"></i>
      </div>
      <SidebarList isOpen={isOpen} ToggleSidebar={ToggleSidebar} />
    </>
  );
};

export default SidebarButton;
