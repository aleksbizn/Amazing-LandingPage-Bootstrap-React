import "./Aboutpage.css";

import { images } from "../constants";
import {
  HomeModernIcon,
  AcademicCapIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

import React from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

const About = () => {
  const { about } = images;

  return (
    <Container fluid>
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
        <Col md={6} className="text-end">
          {/* <h2 className="mb-4">About Me</h2> */}
          <p className="mb-5">
            Manya Kulak is an artist, illustrator, character desinger.
            <br /> She loves to create things playful and funny.
            <br /> To get in contact, please email
            <br />
            manyakulakart@gmail.com
          </p>
          <h3 className="mb-3">selected clients:</h3>
          <p className="mb-5">
            Yandex, Mail.ru, Esquire Russia, The Blueprint,
            <br /> Aloha, Veam, Perspectum, Scoop, Polle
          </p>
          <h3 className="mb-3">contacts:</h3>
          <ListGroup className="border-0">
            <ListGroup.Item className="border-0">
              Email: manyakulakart@gmail.com
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
            instagramm: manyakulakart
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
            linkedin: manyakulakart
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
