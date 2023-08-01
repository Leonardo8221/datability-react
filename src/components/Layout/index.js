/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import SideBar from "./SideBar"

import "./style.scss"
const Layout = () => {
 
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = useCallback(() => setShowSidebar(value => !value));

  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 })
  const isMobile = useMediaQuery({ maxWidth: 769 });

  return (
    <div
      className={`layout${
        isMobile ? " mobile" : ""
      }${isTablet ? " tablet" : ""}`}
    >
      <div className="layout-main">
        <SideBar onClick={toggleSidebar} showSidebar={showSidebar}/>
        <div className={`layout-main-body ${showSidebar && "expended"}`}>
          <Header onClick={toggleSidebar} />
          <div className="layout-main-body-content">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
