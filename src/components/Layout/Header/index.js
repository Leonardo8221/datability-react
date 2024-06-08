import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Space } from "antd";
import {
  BellFilled,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import LogoMobile from "../../../assets/img/logo_mobile.svg";

import "./style.scss";
import { logout } from "../../../redux/actions/auth";
const Header = (props) => {
  const [isNewNotification, setIsNewNotification] = useState(true);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 769 });

  useEffect(() => {
    function handleOutsideClick(event) {
      if (isUserDropdownOpen && !dropdownRef.current.contains(event.target))
        setIsUserDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isUserDropdownOpen]);

  return (
    <>
      {isMobile ? (
        <div className="header mobile">
          <div className="header-toggle" onClick={props.onClick}>
            <MenuOutlined />
          </div>
          <div className="header-logo">
            <img src={LogoMobile} alt="Logo" />
          </div>
          <div className="header-user">
            <Space>
              <Badge dot={isNewNotification} offset={[-3, 3]}>
                <p
                  className="header-user-info"
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                >
                  jg
                </p>
              </Badge>
            </Space>
            <div
              className="header-user-dropdown"
              style={{
                display: `${isUserDropdownOpen ? "flex" : "none"}`,
              }}
              ref={dropdownRef}
            >
              <p className="header-user-dropdown-item">
                <BellFilled /> Notification
              </p>
              <p
                className="header-user-dropdown-item"
                onClick={() => dispatch(logout())}
              >
                <LogoutOutlined /> Logout
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={`header${isTablet ? " tablet" : ""}`}>
          <div className="header-toggle" onClick={props.onClick}>
            <MenuOutlined />
          </div>
          <div className="header-contorls">
            <form className="header-contorls-serachForm">
              <input type="hidden" name="serachKey" />
              <input type="text" name="search" placeholder="Search" />
              <SearchOutlined className="search-icon" />
            </form>

            <ul className="header-contorls-list">
              <li className="header-contorls-list-loginUserName">jg</li>
              <li className="header-contorls-list-notification">
                <Badge dot={isNewNotification} offset={[-3, 3]}>
                  <BellFilled className="header-contorls-list-notification-icon" />
                </Badge>
              </li>
              <li className="header-contorls-list-logout">
                <p onClick={() => dispatch(logout())}>
                  <LogoutOutlined className="header-contorls-list-logout-icon" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
