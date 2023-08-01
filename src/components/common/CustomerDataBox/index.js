import { Icon } from "@iconify/react";
import UserIcon from "@iconify-icons/majesticons/user-line";
import ExpandIcon from "@iconify-icons/ci/expand";
import "./style.scss";

const CustomerDataBox = (props) => {
  const { customer, onClick, isMobile } = props;
  return (
    <div className={`customerDataBox${isMobile?" mobile": ""}`}>
      <div className="customerDataBox-inform">
        <div className="customerDataBox-inform-item">
          <p className="customerDataBox-inform-item-caption">Name</p>
          <p className="customerDataBox-inform-item-value">{customer.name}</p>
        </div>
        <div className="customerDataBox-inform-item">
          <p className="customerDataBox-inform-item-caption">Time</p>
          <p className="customerDataBox-inform-item-value">{customer.time}</p>
        </div>
        <div className="customerDataBox-inform-item">
          <p className="customerDataBox-inform-item-caption">Persona</p>
          <p
            className={`customerDataBox-inform-item-value persona ${customer.persona
              .toLowerCase()
              .split(" ")
              .map((word) => {
                return word.replace(/-/g, " ");
              })
              .join("-")}`}
          >
            {customer.persona}
          </p>
        </div>
        <div className="customerDataBox-inform-item">
          <p className="customerDataBox-inform-item-caption">Power</p>
          <p className="customerDataBox-inform-item-value">{customer.power}</p>
        </div>
      </div>

      <p className="customerDataBox-expand" onClick={onClick}>
        <Icon icon={ExpandIcon} />
      </p>
    </div>
  );
};

export default CustomerDataBox;
