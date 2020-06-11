import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'



function ContentCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{height: 400}}>
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true} interval={3000} slide={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/img1.jfif")}
            alt="First slide"
            style={{height: 430, borderRadius:4}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/img2.jfif")}
            alt="Second slide"
            style={{height: 430, borderRadius:4}}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/img3.jfif")}
            alt="Third slide"
            style={{height: 430, borderRadius:4}}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/img4.jfif")}
            alt="Third slide"
            style={{height: 430, borderRadius:4}}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/img5.jfif")}
            alt="Third slide"
            style={{height: 430, borderRadius:4}}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}



export default ContentCarousel;