import { useState } from "react";
import { Icon } from "@iconify/react";
import dataline from "@iconify-icons/majesticons/data-line";
import usersFill from "@iconify-icons/ph/users-fill";
import settings from "@iconify-icons/material-symbols/settings";
import reportsBox from "@iconify-icons/mdi/report-box";
import outLineClose from "@iconify-icons/ic/outline-close";
import { useMediaQuery } from "react-responsive";

import LogoDesktop from "../../../assets/img/logo-desktop.svg";
import LogoExpended from "../../../assets/img/logo-closed.svg";
import { Link, useLocation } from "react-router-dom";

import "./style.scss";

const SideBar = (props) => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 769 });

  const location = useLocation();
  const [menus, setMenus] = useState([
    {
      icon: usersFill,
      router: "/co-pilot",
      title: "co-pilot",
    },
    {
      icon: dataline,
      router: "/connections",
      title: "connections",
    },

    {
      icon: reportsBox,
      router: "/reports",
      title: "reports",
    },
    {
      icon: settings,
      router: "/settings",
      title: "settings",
    },
  ]);

  return (
    <>
      <aside
        className={`sidebar${props.showSidebar ? " open" : ""}${
          isMobile ? " mobile" : ""
        }${isTablet ? " tablet" : ""}`}
      >
        <div className="sidebar-logo">
          {props.showSidebar && !isMobile && (
            <img src={LogoExpended} alt="Desktop Logo" />
          )}
          {!props.showSidebar && !isMobile && (
            <img src={LogoDesktop} alt="Desktop Logo" />
          )}
          {props.showSidebar && isMobile && (
            <img src={LogoDesktop} alt="Desktop Logo" />
          )}
        </div>
        <ul className="sidebar-list">
          {menus.map((item, idx) => (
            <li key={idx}>
              <Link
                to={`/${item.title}`}
                className={`sidebar-list-item${
                  location.pathname === item.router ? " active" : ""
                }`}
              >
                <Icon className="sidebar-list-item-icon" icon={item.icon} />

                <p className="sidebar-list-item-caption">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {isMobile && (
        <div
          className={`mobile-sidebar-close${!props.showSidebar ? " show" : ""}`}
        >
          <p
            className="mobile-sidebar-close-btn"
            onClick={props.onClick}
          >
            <Icon icon={outLineClose} />
          </p>
        </div>
      )}
    </>
  );
};

export default SideBar;
