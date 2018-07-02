import React, { Component } from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';


class Home extends Component {
    render() {
      return (
        <div>
        <Carousel>
        <Carousel.Item>
          <img alt="900x500" src="/imagini/img1.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src="/imagini/img2.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="900x500" src="/imagini/img3.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


</div>
      
      );
    }
  }
  
  export default Home;