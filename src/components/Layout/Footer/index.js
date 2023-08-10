import { useMediaQuery } from "react-responsive";

import FooterLogoImg from "../../../assets/img/logo-footer.svg";
import "./style.scss";

const Footer = () => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const year = new Date().getFullYear();
  return (
    <div
      className={`footer${isMobile ? " mobile" : ""}${
        isTablet ? " tablet" : ""
      }`}
    >
      <div className="footer-left">
        <img className="footer-logo" src={FooterLogoImg} alt="Footer Logo" />
        <p>End User Licensing Agreement</p>
        <p>Product Privacy Policy</p>
      </div>
      <div className="footer-right">
        <p>
          @{year}, DataBillity, INC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
