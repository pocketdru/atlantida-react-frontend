import React from "react";
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

function Testimonials() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <section className="testimonials">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/img-4.png"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <img className="img-fluid mt-5" src="images/testimonials/Images.png" alt="icon"></img>
                                <p className="caption">
                                <span className="quote">&ldquo;</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
                                    Etiam iaculis, nibh a lobortis egestas, est urna sodales
                                    <span className="quote">&rdquo;</span>

                                </p>
                                <p className="name">Alexandr Podvalny</p>
                                <p className="free">Free-PSD-Template.com Company</p>

                                
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/img-3.png"
                                alt="Second slide"
                            />
                    
                            <Carousel.Caption>
                            <img className="img-fluid mt-5" src="images/testimonials/Images.png" alt="icon"></img>

                            <p className="caption">
                            <span className="quote">&ldquo;</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
                                Etiam iaculis, nibh a lobortis egestas, est urna sodales
                                <span className="quote">&rdquo;</span>
                            </p>
                                <p className="caption name">Alexandr Podvalny</p>
                                <p className="caption free">Free-PSD-Template.com Company</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="images/testimonials/Image2.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                            <img className="img-fluid mt-5" src="images/testimonials/Images.png" alt="icon"></img>

                            <p className="caption">
                            <span className="quote">&ldquo;</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. 
                            Etiam iaculis, nibh a lobortis egestas, est urna sodales
                            <span className="quote">&rdquo;</span>
                            </p>
                            <p className="caption name">Alexandr Podvalny</p>
                            <p className="caption free">Free-PSD-Template.com Company</p>

                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;