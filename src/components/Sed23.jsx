import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Sed from "../assets/images/sed2023banner.jpeg";

const Sed23 = () => {
  return (
    <section id="sed23" className="block sed23-block">
      <a id="sed_23"></a>
      <Container fluid>
        <div className="title-holder">
          <h2>Sustainable Energy Days 2023</h2>
          <div className="subtitle">Attend the SED 2023 event</div>
        </div>
        <div className="imgdiv">
          <Image className="sed23banner" alt="sed-banner" src={Sed} />
        </div>
        <div className="context">
          <p className="sedcontext">
            Building upon the success of the first edition of Sustainable Energy
            Days, with great joy and pride, we move forward on the mission to
            organize the most captivating sustainable energy technology event in
            Africa for the year 2023.
          </p>{" "}
          <p>
            {" "}
            Our theme for #SED2023 - ‘Leading the Energy Transformation’ is
            pivotal in this era of global energy crises and growing concerns on
            the effects of climate change. We cannot pretend that we are not
            feeling the effects in our lives. More than 500 million people in
            Africa still do not have access to electricity and more than 4
            million people die annually from air pollution which can be traced
            to indoor cooking with coal, wood and emissions from fossil energy
            generation. Majority of those who bear the brunt of the effects of
            climate change are children, women, the physically challenged and
            elderly people. We need to work together now more than ever to
            address the bottlenecks which hinder progress on delivering
            sustainable development in Africa.
          </p>{" "}
          <p>
            Sustainable Energy is a powerful tool to address climate change
            while boosting economic and social prosperity. On this note, we are
            firm in our resolve to drive the adoption of sustainable energy
            technologies in Africa because we know that our people will benefit
            greatly from it. Join us for a sustainable energy transformation in
            Africa now!.
          </p>{" "}
          <p>This year, our focus will be in these critical areas;</p>{" "}
          <ul>
            <li>
              Clean Cooking Forum: Financing Enterprise Development for Clean
              Cooking in Africa.
            </li>
            <li>
              Artificial Intelligence Forum: Energy Transformation in the Age of
              Artificial Intelligence.
            </li>{" "}
            <li>
              Solar Investment Forum: Accelerating investments in solar energy
              for Nigeria and Africa.
            </li>
          </ul>
        </div>
        <div className="title-holder">
          <a id="register"></a>
          <h2>Secure your spot Today.</h2>
        </div>
        <Form className="register-form">
          <Row>
            <Col sm={5}>
              <Form.Control type="text" placeholder="First Name" required />
            </Col>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Last Name" required />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <Form.Control type="email" placeholder="Email" required />
            </Col>
            <Col sm={5}>
              <Form.Control type="tel" placeholder="Phone Number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Address" required />
            </Col>
            <Col sm={5}>
              <Form.Control type="text" placeholder="City" required />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <Form.Control type="text" placeholder="Country" required />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Register</Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default Sed23;
