import React from "react";
import { Carousel } from "react-bootstrap";
import img11 from "../assets/images/img11.jpg";
import bg from "../assets/images/bg-testimonial.jpg";
import Art from "../assets/images/Artboard 000-8.png";
import Container from "react-bootstrap/Container";

const Sponsors = () => {
  return (
    <section id="sponsor" className="block sponsor-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Partners</h2>
        </div>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={img11} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Art} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bg} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Sponsors;
