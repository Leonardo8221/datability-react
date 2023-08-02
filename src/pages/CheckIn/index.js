/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Layout/Footer";
import CheckInLogo from "../../assets/img/check-in-logo.svg";

import "./style.scss";
import { Col, Form, Input, Row, Spin } from "antd";

const CheckIn = () => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 769 });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // <Spin tip="Signing..." size="large">
    <div className="checkIn">
      <div
        className={`checkIn-main${isMobile ? " mobile" : ""}${
          isTablet ? " tablet" : ""
        }`}
      >
        <div className="checkIn-main-left">
          <div className="checkIn-main-left-header">
            <div className="checkIn-main-left-header-logo">
              <img src={CheckInLogo} alt="Logo" />
            </div>
            <h1 className="checkIn-main-left-header-title">Check in</h1>
            <p className="checkIn-main-left-header-subtitle">
              Please enter your information below
            </p>
          </div>
          <div className="checkIn-main-left-main">
            <Form className="checkIn-form" onSubmit={handleSubmit}>
              <Row gutter={[24, 0]}>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <div className="input-group">
                    <label className="form-label" htmlFor="firstname">
                      First name
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="firstname"
                      required
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </Col>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <div className="input-group">
                    <label className="form-label" htmlFor="lastname">
                      Last name
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="lastname"
                      required
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="input-group">
                    <label className="form-label" htmlFor="phone">
                      Phone number
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="phone"
                      required
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="input-group">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      required
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={24}>
                  <div className="input-checkbox">
                    <input
                      type="checkbox"
                      id="acceptterm"
                      name="acceptterm"
                      required
                    />
                    <label
                      className="input-checkbox-label"
                      htmlFor="acceptterm"
                    >
                      Accept{" "}
                      <a href="#" id="acceptterm">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="input-checkbox">
                    <input type="checkbox" id="agree" name="agree" required />
                    <label className="input-checkbox-label" htmlFor="agree">
                      Agree to share data with partners for improved{" "}
                      <a className="">
                        customer experience and personalized offers.
                      </a>
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <button type="submit" className="checkInBtn">
                    Check-in
                  </button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <div className="checkIn-main-right">
          <div className="checkIn-main-right-overide"></div>
        </div>
      </div>
      <Footer />
    </div>
    // </Spin>
  );
};

export default CheckIn;

//  Your username is Kata1 and temporary password is 8ENr6fD?.
