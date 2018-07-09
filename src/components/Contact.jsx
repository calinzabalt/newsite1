import React, { Component } from 'react';
import './Contact.css'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Contact extends Component {
    render() {
      return (
        
<div className="call">
         
<Container>          
  <Row>        
    <Col sm="6" md={{ size: 4, offset: 1 }}>
        <Card>
          <CardImg top width="100%" src="./imagini/contact/phone.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <a href="/"><Button color="success">Acasa</Button></a>
          </CardBody>
        </Card>
        
        </Col> 

        

        <Col sm="6" md={{ size: 4, offset: 2 }}>
        <Card>
          <CardImg top width="100%" src="/imagini/contact/mail.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <a href="/"><Button color="danger">Acasa</Button></a>
          </CardBody>
        </Card>
        </Col> 
    </Row>  
</Container>   
</div>
      );
    }
  }
  
  export default Contact;