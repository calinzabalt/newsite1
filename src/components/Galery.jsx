import React, { Component } from 'react';
import './Galery.css'

class Galery extends Component {
    render() {
      return (
        <div className="container">
             <div className="container gallery-container">
               <h1 className="text-center">Galerie Produse</h1>
                    <div className="tz-gallery">
                     <div className="row mb-3">
                      <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img8.jpg">
                            <img src="/imagini/img8.jpg" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>
                     
                    <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img2.png">
                            <img src="/imagini/img2.png" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>
                     
                    <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img3.png">
                            <img src="/imagini/img3.png" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>
                </div>
                  <div className="row"> 
                    <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img4.jpg">
                            <img src="/imagini/img4.jpg" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>
                     
                    <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img5.jpg">
                            <img src="/imagini/img5.jpg" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>
                     
                    <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img6.jpg">
                            <img src="/imagini/img6.jpg" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img12.jpg">
                            <img src="/imagini/img12.jpg" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img13.jpg">
                            <img src="/imagini/img13.jpg" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>

                                         
                     <div className="col-md-4">
                        <div className="card">
                            <a className="lightbox" href="/imagini/img7.jpg">
                            <img src="/imagini/img7.jpg" alt="Park" className="card-img-top"/>
                            </a>
                        </div>
                    </div>
                    
                                       
                </div>
            </div>
          
        </div>
         
        </div>
      );
    }
  }
  
  
  export default Galery;