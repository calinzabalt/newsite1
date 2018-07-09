import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from 'reactstrap';

const Footer = (props) => {
  return (
    <div className="Container">
    
    <footer>
      <Container>
       <Row>
       <Col sm="4"> 
       <div className="center">
       <h5>Suntem si pe retelele de socializare:</h5>
    <SocialIcon network="linkedin" color="#0077B5" style={{margin: 3}} url="https://www.linkedin.com/in/cozma-viorel-calin-947658145/" />
    <SocialIcon network="facebook" color="#3B5998" style={{margin: 3}} url="https://web.facebook.com/calinviorel.cozma" />
    <SocialIcon network="instagram" color="#cd486b" style={{margin: 3}} url="https://www.instagram.com/?hl=en" />
    <SocialIcon network="twitter" color="#ff5a01" style={{margin: 3}} url="https://twitter.com/?lang=en"/>
    
    </div>
        </Col>
             
      <Col sm="4">   
      <div className="copy">      
    <div className="footer-copyright text-center py-3">© 2018 Copyright
    </div>
    </div>
    </Col>

    <Col sm="4">         
    <div className="Contact">
    <h5><a href="/Contact">Contact: <br />0757343438</a></h5>
    </div>
    </Col>
      </Row> 
      </Container>
      </footer>
  
  </div>
  );
};

export default Footer;