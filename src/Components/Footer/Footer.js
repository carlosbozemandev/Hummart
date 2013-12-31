import React from "react";
import style from "./Footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FaArrowRight, FaHome, FaEnvelope,FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import playStoreImg from "../../assets/images/playstore.png"
import appStoreImg from "../../assets/images/app_store.png"


const Footer = () => {
  return (
    <>
      <div className={style.mainContainer}>
        <Container>
          <Row>
            <Col md={3}>
              <div className={style.firstContainer}>
                <h2>Hummart</h2>
                <div>
                  <ul>
                    <li>
                      <FaHome /> <a href="">Home</a>
                    </li>
                    <li>
                      <FaArrowRight /> <a href="">About Us</a>
                    </li>
                    <li>
                      <FaArrowRight /> <a href="">Careers</a>
                    </li>
                    <li>
                      <FaArrowRight /> <a href="">Sell on Hummart</a>
                    </li>
                    <li>
                      <FaArrowRight /> <a href="">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className={style.secondContainer}>
                <h2>Help</h2>
                <div>
                  <ul>
                    <li>
                      <AiOutlineCaretRight /> <a href="">FAQ's</a>
                    </li>
                    <li>
                      <AiOutlineCaretRight /> <a href="">How To Order</a>
                    </li>
                    <li>
                      <AiOutlineCaretRight /> <a href="">How To Pay</a>
                    </li>
                    <li>
                      <AiOutlineCaretRight /> <a href="">Return</a>
                    </li>
                    <li>
                      <AiOutlineCaretRight /> <a href="">Delivery Time</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className={style.thirdContainer}>
                <h2>Contact Us</h2>
                <div>
                  <ul>
                    <li>
                      <FaMapMarkerAlt /> <a href="https://goo.gl/maps/vt9gXEHHmUrxfViu9" target="_blank" rel="noreferrer">Dehli, India</a>
                    </li>
                    <li>
                      <FaEnvelope /> <a href="mailto:muhammadameenh1@gmail.com">Hum Mart Mail</a>
                    </li>
                    <li>
                      <FaPhoneAlt /> <a href="tel:790078601">790078601</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className={style.fourthContainer}>
                <h2>Mobile App</h2>
                <div>
                  <ul>
                    <li>
                      <img src={appStoreImg} alt="" />
                    </li>
                    <li>
                    <img src={playStoreImg} alt="" />
                    </li>

                    
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
