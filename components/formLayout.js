import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./layout";


const FormLayout = () => {

  return (
    <section className="form-layout">
      <Layout>
        <Container>
          <Row>
            <Col lg={6}><Col>
            <Col lg={6}>
              <PatioForm />
            <Col>
          </Row>
        </Container>
      </Layout>
    </section>
  );
}

export default FormLayout;
