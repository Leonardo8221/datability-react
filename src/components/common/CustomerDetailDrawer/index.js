import { Drawer, Spin } from "antd";
import { Icon } from "@iconify/react";
import ArrowBackIcon from "@iconify-icons/ic/outline-arrow-forward";
import MailIcon from "@iconify-icons/ic/mail-outline";
import PhoneIcon from "@iconify-icons/bx/bxs-phone";
import MasterCardIcon from "../../../assets/img/icons/icons8-mastercard-logo-48.svg";
import "./style.scss";

const CustomerDetailDrawer = (props) => {
  const { isOpen, onClose, customer, isMobile, isLoading } = props;
  return (
    <Drawer
      placement="right"
      size="large"
      onClose={onClose}
      open={isOpen}
      headerStyle={{ display: "none" }}
      bodyStyle={{ padding: 0 }}
      width={`${isMobile ? "100%" : 768}`}
    >
      <Spin spinning={isLoading}>
        <div className={`drawer ${isMobile ? "mobile" : ""}`}>
          <div className="drawer-header">
            <p className="drawer-header-close" onClick={onClose}>
              <Icon icon={ArrowBackIcon} />
            </p>
            <div className="drawer-header-state">
              <p className="drawer-header-state-status">
                <span className="drawer-header-state-status-badge online"></span>
                {customer?.status === "online" && "Onsite now"}
              </p>
              <p className="drawer-header-state-checkDate">
                Check-in-time |{" "}
                <span className="drawer-header-state-checkDate-date">
                  {customer?.time}
                </span>
              </p>
            </div>
          </div>
          <div className="drawer-content">
            <div className="drawer-content-avatar">
              {customer?.name
                ?.split(" ")
                .map((word) => word.charAt(0))
                .join("")}
            </div>
            <div className="drawer-content-detail">
              <div className="drawer-content-detail-commonInfo">
                <p className="drawer-content-detail-commonInfo-name">
                  {customer?.name}
                </p>
                <p className="drawer-content-detail-commonInfo-email">
                  <Icon icon={MailIcon} />
                  {customer?.email}
                </p>
                <p className="drawer-content-detail-commonInfo-phonenumber">
                  <Icon icon={PhoneIcon} /> {customer?.phone}
                </p>
                <p className="drawer-content-detail-commonInfo-cardType">
                  <img src={MasterCardIcon} alt="mastercard icon" />{" "}
                  {customer?.master_card}
                </p>
              </div>
              <div className="drawer-content-detail-second">
                <div className="drawer-content-detail-second-persona">
                  Persona
                  <p
                    className={`drawer-content-detail-second-persona-label persona ${customer?.persona
                      ?.toLowerCase()
                      .split(" ")
                      .map((word) => {
                        return word.replace(/-/g, " ");
                      })
                      .join("-")}`}
                  >
                    {customer?.persona}
                  </p>
                </div>
                <div className="drawer-content-detail-second-ltv">
                  LTV
                  <p className="drawer-content-detail-second-ltv-label">
                    {customer?.ltv}
                  </p>
                </div>
                <div className="drawer-content-detail-second-power">
                  Power
                  <p className="drawer-content-detail-second-power-label">
                    {customer?.power}
                  </p>
                </div>
              </div>
              <div className="drawer-content-detail-preferences">
                <h1 className="drawer-content-detail-preferences-title">
                  Preferences
                </h1>
                {customer?.preferences?.map((item, idx) => (
                  <p
                    className="drawer-content-detail-preferences-preference"
                    key={idx}
                  >
                    <img
                      className="drawer-content-detail-preferences-preference-icon"
                      src={item.icon}
                      alt="grid icon"
                    />
                    {item.preference}
                  </p>
                ))}
              </div>
              <div className="drawer-content-detail-purchase">
                <h1 className="drawer-content-detail-purchase-title">
                  Last Purchase
                </h1>
                <p className="drawer-content-detail-purchase-info">
                  {customer?.last_purchase}
                  <span className="drawer-content-detail-purchase-info-txnID">
                    TXN ID {customer?.txn_id}
                  </span>
                </p>
              </div>
              <div className="drawer-content-detail-recommendations">
                <h1 className="drawer-content-detail-recommendations-title">
                  Recommendations
                </h1>
                <div className="drawer-content-detail-recommendations-cards">
                  {customer?.recomendations?.map((item, idx) => (
                    <div
                      className="drawer-content-detail-recommendations-cards-card"
                      key={idx}
                    >
                      <img
                        className="drawer-content-detail-recommendations-cards-card-image"
                        src={item.image}
                        alt="card-img"
                      />
                      <div className="drawer-content-detail-recommendations-cards-card-inform">
                        <p className="drawer-content-detail-recommendations-cards-card-inform-title">
                          {item.recommendation}
                        </p>
                        <p className="drawer-content-detail-recommendations-cards-card-inform-price">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </Drawer>
  );
};

export default CustomerDetailDrawer;
