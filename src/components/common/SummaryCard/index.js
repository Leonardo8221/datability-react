/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from "@iconify/react";
import arrwoRightIcon from "@iconify-icons/mdi/arrow-right-thin";
import "./style.scss";
const SummaryCard = (props) => {
  const { title, value, linkCaption, icon, iconBkColor, isMobile, isTablet } =
    props;
  return (
    <div
      className={`summaryCard${isMobile ? " mobile" : ""}${
        isTablet ? " tablet" : ""
      }`}
    >
      <div className="summaryCard-info">
        <div className="summaryCard-info-detail">
          <h3 className="summaryCard-info-detail-title">{title}</h3>
          <p className="summaryCard-info-detail-value">{value}</p>
        </div>
        <div
          className="summaryCard-info-icon"
          style={{ "--icon-bk-color": iconBkColor }}
        >
          <img src={icon} alt="icon" />
        </div>
      </div>
      <a href="#" className="summaryCard-viewLink">
        {linkCaption} <Icon className="arrow-icon" icon={arrwoRightIcon} />
      </a>
    </div>
  );
};

export default SummaryCard;
