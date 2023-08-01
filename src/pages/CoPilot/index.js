/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

import { DatePicker, Carousel } from "antd";
import { useMediaQuery } from "react-responsive";

import { Icon } from "@iconify/react";
import SyncOutlineIcon from "@iconify-icons/material-symbols/sync-outline";
import EyeIcon from "@iconify-icons/streamline/interface-edit-view-eye-eyeball-open-view";
import ArrowRightIcon from "@iconify-icons/mdi/arrow-right-thin";
import DateIcon from "@iconify-icons/fontisto/date";
import { UserOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import SummaryCard from "../../components/common/SummaryCard";
import CustomerDetailDrawer from "../../components/common/CustomerDetailDrawer";
import CustomerDataBox from "../../components/common/CustomerDataBox";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllCutomerData,
  getCustomerData,
  getSummaryData,
} from "../../redux/actions/co-pliot";
import { setNotification } from "../../redux/actions/notification";

import "./style.scss";

const CoPilot = () => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 769 });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    name: "",
    time: "",
    persona: "",
    power: "",
    last_purchase: "",
    txn_id: "",
  });

  const {
    summaryData,
    customers,
    customer,
    loadingCustomer,
    loadingCustomers,
    loadingSummaryData,
  } = useSelector((state) => state.coPilot);

  const dispatch = useDispatch();

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  useEffect(() => {
    dispatch(getSummaryData());
    dispatch(getAllCutomerData());
  }, [dispatch]);

  return (
    <div
      className={`copilot${isMobile ? " mobile" : ""}${
        isTablet ? " tablet" : ""
      }`}
    >
      <CustomerDetailDrawer
        isOpen={isDrawerOpen}
        onClose={onClose}
        customer={customer}
        isMobile={isMobile}
        isLoading={loadingCustomer}
      />
      <div className="copilot-header">
        <h1 className="copilot-header-title">co-pilot</h1>
      </div>
      <div className="copilot-content">
        <Spin spinning={loadingSummaryData}>
          {isMobile ? (
            <div className="copilot-content-sliderBox">
              <Carousel autoplay waitForAnimate={true}>
                {summaryData.map((summary, idx) => (
                  <SummaryCard
                    title={summary.title}
                    value={summary.value}
                    linkCaption={summary.linkCaption}
                    icon={summary.icon}
                    iconBkColor={summary.iconBkColor}
                    isMobile={isMobile}
                    isTablet={isTablet}
                    key={idx}
                  />
                ))}
              </Carousel>
            </div>
          ) : (
            <div className="copilot-content-summaries">
              {summaryData.map((summary, idx) => (
                <SummaryCard
                  title={summary.title}
                  value={summary.value}
                  linkCaption={summary.linkCaption}
                  icon={summary.icon}
                  iconBkColor={summary.iconBkColor}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  key={idx}
                />
              ))}
            </div>
          )}
        </Spin>
        <div className="copilot-content-body">
          <div className="copilot-content-body-header">
            <h2 className="copilot-content-body-header-title">Check-ins</h2>
            <div className="copilot-content-body-header-tools">
              <DatePicker
                placeholder="Select dates"
                suffixIcon={<Icon icon={DateIcon} />}
                onChange={onDateChange}
                className="copilot-content-body-header-tools-calendar"
              />
              <button className="copilot-content-body-header-tools-syncBtn">
                <Icon className="sync-icon" icon={SyncOutlineIcon} />
                Sync
              </button>
            </div>
          </div>
          <div className="copilot-content-body-content">
            {customers.length &&
              customers.map((customer, idx) => (
                <CustomerDataBox
                  customer={customer}
                  onClick={() => {
                    setIsDrawerOpen(true);
                    // setSelectedItem(customer);
                    dispatch(getCustomerData(customer.id));
                  }}
                  isMobile={isMobile}
                  key={idx}
                />
              ))}
            <Spin spinning={loadingCustomers}>
              <table className="check-in-table">
                <thead>
                  <tr>
                    <th>TIME</th>
                    <th>NAME</th>
                    <th>PERSONA</th>
                    <th>POWER</th>
                    <th>LAST PURCHASE</th>
                    <th>TXN ID</th>
                    <th>ID</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {customers.length &&
                    customers.map((data, idx) => (
                      <tr key={idx}>
                        <td>{data.time}</td>
                        <td>
                          <p className="user-name">
                            <UserOutlined className="user-icon" />
                            {data.name}
                          </p>
                        </td>
                        <td>
                          <p
                            className={`persona ${data.persona
                              .toLowerCase()
                              .split(" ")
                              .map((word) => {
                                return word.replace(/-/g, " ");
                              })
                              .join("-")}`}
                          >
                            {data.persona}
                          </p>
                        </td>
                        <td>{data.power}</td>
                        <td>{data.last_purchase}</td>
                        <td>{data.txn_id}</td>
                        <td>
                          <Icon
                            className="view-icon"
                            icon={EyeIcon}
                            onClick={() => {
                              setIsDrawerOpen(true);
                              dispatch(getCustomerData(data.id));
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Spin>
          </div>
          <div className="copilot-content-body-bottom">
            <a href="#">
              View all <Icon icon={ArrowRightIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoPilot;
