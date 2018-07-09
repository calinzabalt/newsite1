import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import './Card.css';  
import { Container, Row, Col } from 'reactstrap';

  const Example = (props) => {
    return (
      <div>
<Container>          
  <Row>        
    <Col sm="4">
        <Card>
          <CardImg top width="100%" src="/imagini/img13.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <a href="/Galery"><Button color="success">Galerie</Button></a>
          </CardBody>
        </Card>
        
        </Col> 

        <Col sm="4">
        <Card>
          <CardImg top width="100%" src="/imagini/img6.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <a href="/Galery"><Button color="info">Galerie</Button></a>
          </CardBody>
        </Card>
        </Col> 

        <Col sm="4">
        <Card>
          <CardImg top width="100%" src="/imagini/img7.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <a href="/Galery"><Button color="danger">Galerie</Button></a>
          </CardBody>
        </Card>
        </Col> 
    </Row>  
</Container>      
      </div>
      
    );
  };
  
  export default Example;