import React from "react";

const SidebarList = ({ isOpen, ToggleSidebar }) => {
  return (
    <>
      {" "}
      <div className={`sidebar ${isOpen == true ? "active" : ""} bg-dark`}>
        <div className="sd-header">
          <h4 className="mb-0 text-light">Sidebar Header</h4>
          <div className="btn" onClick={ToggleSidebar}>
            <i className="fa fa-times text-light"></i>
          </div>
        </div>
        <div className="sd-body">
          <ul>
            <li>
              <a className="sd-link">Menu Item 1</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 2</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 3</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 4</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 5</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 6</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 7</a>
            </li>
            <li>
              <a className="sd-link">Menu Item 8</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen == true ? "active" : ""} `}
        onClick={ToggleSidebar}
      ></div>
    </>
  );
};

export default SidebarList;
