import React from 'react'
import { Carousel } from 'react-bootstrap'


const BootCarousel = () => {
    return (
    <div>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/karenp/image/upload/v1645038465/productos/modelo1_oqlyzv.png"
            alt="First slide"
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/karenp/image/upload/v1645038465/productos/modelo2_fccqms.png"
            alt="Second slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/karenp/image/upload/v1645038465/productos/modelo3_cok7ct.png"
            alt="Third slide"
            />

            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            </div>
    )
}

export default BootCarousel
