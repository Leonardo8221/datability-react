/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from "@iconify/react";
import iChecked from "@iconify-icons/mdi/check-bold";
import iPlusCircle from "@iconify-icons/material-symbols/add-circle";
import iTimes from "@iconify-icons/ic/outline-close";
import { useMediaQuery } from "react-responsive";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { useEffect } from "react";
import { getConnectionData } from "../../redux/actions/connection";

const Connections = () => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1025 });
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const dispatch = useDispatch();
  const { connections, isLoading } = useSelector((state) => state.connections);

  useEffect(() => {
    dispatch(getConnectionData());
  }, []);
  return (
    <div
      className={`connections${isMobile ? " mobile" : ""}${
        isTablet ? " tablet" : ""
      }`}
    >
      <div className="connections-header">
        <h1 className="connections-header-title">
          Connections<br></br>
        </h1>
        <button className="connections-header-addBtn">
          <Icon icon={iPlusCircle} />
          Add connection
        </button>
      </div>
      <p className="connections-subtitle">
        Sync your back-office and technology stack with DataBillity in a few
        easy steps.
      </p>
      <div className="connections-main">
        {connections.length ? (
          connections.map((connect, idx) => (
            <div className="connectionBox" key={idx}>
              <h1 className="connectionBox-title">
                {connect.integration_name}
              </h1>
              <div className="connectionBox-controls">
                <button className={`connectBtn ${connect.integration_name}Btn`}>
                  {connect.integration_button}
                </button>
                {connect.connected ? (
                  <p className="connected-label text-success">
                    <Icon
                      icon={iChecked}
                      className="connected-label-icon text-success"
                    />
                    Connected
                  </p>
                ) : (
                  <p className="connected-label text-error">
                    <Icon
                      icon={iTimes}
                      className="connected-label-icon text-danger"
                    />
                    Not Connected
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <Spin size="large" />
        )}
      </div>
    </div>
  );
};

export default Connections;
