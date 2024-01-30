import "./Aboutpage.css";

import { images } from '../constants';
import { HomeModernIcon, AcademicCapIcon, PhoneIcon } from "@heroicons/react/24/solid";

import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

const About = () => {
  const { about } = images;

  return (
    <Container fluid className="p-5 about-container">
      <Row className="g-4">
        <Col md={6}>
          <Image
            src={about}
            alt="Your photo"
            className="border "
            width="100%"
            rounded 
            // height="600px"
            // height="auto"
          />
          <Row className="g-4 mt-3 d-flex align-items-center justify-content-center">
            <Col md={2} sm={3} xs={3}>
              <HomeModernIcon className="icon-sm" />
            </Col>
            <Col md={2} sm={3} xs={3}>
              <AcademicCapIcon className="icon-sm" />
            </Col>
            <Col md={2} sm={3} xs={3}>
              <PhoneIcon className="icon-sm" />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <h2 className="mb-4">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
            ligula vitae nisi tincidunt dapibus. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
            amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
            ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
          <h3 className="mb-3">Skills</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eget ligula vitae nisi tincidunt dapibus. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
          </p>
          <h3 className="mb-3">Contact Me</h3>
          <ListGroup className="mb-5">
            <ListGroup.Item>Email: youremail@example.com</ListGroup.Item>
            <ListGroup.Item>Phone: (123) 456-7890</ListGroup.Item>
            <ListGroup.Item>Address: 123 Main St, Anytown, USA</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default About;