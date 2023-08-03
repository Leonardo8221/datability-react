/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Layout/Footer";
import CheckInLogo from "../../assets/img/check-in-logo.svg";

import "./style.scss";
import { Col, Form, Input, Row, Spin } from "antd";
import { createCheckIn } from "../../redux/actions/check-in";

const CheckIn = () => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    acceptedTerms: false,
    allowedShareData: false,
  });

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    acceptedTerms,
    allowedShareData,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onCheckBoxesChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCheckIn(formData));
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      acceptedTerms: false,
      allowedShareData: false,
    });
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
            <form className="checkIn-form" onSubmit={handleSubmit}>
              <Row gutter={[24, 0]}>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <div className="input-group">
                    <label className="form-label" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="firstName"
                      value={firstName}
                      onChange={onChange}
                      required
                    />
                  </div>
                </Col>
                <Col xl={12} md={12} sm={24} xs={24}>
                  <div className="input-group">
                    <label className="form-label" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="lastName"
                      value={lastName}
                      onChange={onChange}
                      required
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="input-group">
                    <label className="form-label" htmlFor="phoneNumber">
                      Phone number
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="phoneNumber"
                      value={phoneNumber}
                      onChange={onChange}
                      required
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
                      value={email}
                      onChange={onChange}
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
                      id="acceptedTerms"
                      name="acceptedTerms"
                      checked={acceptedTerms}
                      onChange={onCheckBoxesChange}
                      required
                    />
                    <label
                      className="input-checkbox-label"
                      htmlFor="acceptedTerms"
                    >
                      Accept{" "}
                      <a href="#" id="acceptedTerms">
                        terms and conditions
                      </a>
                    </label>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="input-checkbox">
                    <input
                      type="checkbox"
                      id="allowedShareData"
                      name="allowedShareData"
                      checked={allowedShareData}
                      onChange={onCheckBoxesChange}
                    />
                    <label
                      className="input-checkbox-label"
                      htmlFor="allowedShareData"
                    >
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
            </form>
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
