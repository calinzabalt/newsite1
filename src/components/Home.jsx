import React, { Component } from 'react';
import './Home.css';
import Omg from './Carousel';
import Example from './Cards/Card';
import AfterCards from './Jumbotron/Jumbotron';

class Home extends Component {
    render() {
      return (
        <div>
        <Omg />  
        <Example /> 
        <AfterCards /> 
        </div>
      /*Omg=Carousel
        Example=Cards
        AfterCards=Jumbotron
      */
      );
    }
  }
  
  export default Home;