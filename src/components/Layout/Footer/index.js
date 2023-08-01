import { useMediaQuery } from "react-responsive";

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
      <p className="footer-copyright">
        @{year}, DataBillity, LLC. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
