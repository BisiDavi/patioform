import React from "react";
import { logo, baumlerLogo } from "../src/imports";
import { Container, Row, Col } from "react-bootstrap";

const style = {
  header: {
    display: "flex",
    justifyContent: "space-around"
  },
  img: {
    width: "100px",
    height: "50px"
  }
};

const Header = () => {
  return (
    <Container className="Header d-flex" fluid>
      <Row style={style.header}>
        <Col lg={6} xs={4} className="float-left">
          <img
            style={style.img}
            className="logo float-left"
            alt="logo"
            src={logo}
          />
        </Col>
        <Col xs={4} lg={6}>
          <img
            style={style.img}
            className="logo-approval float-right"
            alt="logo"
            src={baumlerLogo}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
