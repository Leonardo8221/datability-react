import React from "react";
import "./style.scss";
import { Space, Spin } from "antd";
const Spinner = () => (
  <Space className="spinner-container" size="large">
    <Spin className="spinner" size="large" />
  </Space>
);
export default Spinner;
