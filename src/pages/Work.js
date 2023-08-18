import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
   <>
    <Container className='hero'>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <hr />
        <ul>
          <li>
            <h4>Project 1</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Project 2</h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
          <li>
            <h4>Project 3 </h4>
            <p>Tech Stack: HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col className='d-flex justify-content-center align-items-center'>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:300}}>
            <Image src="https://assets.materialup.com/uploads/45d51692-9342-450e-a594-f1b32cbf43a3/preview.png" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 1</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:300}}>
            <Image src="https://i.pinimg.com/originals/4d/38/33/4d3833a4d22fb6021363318caa6f235f.png" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 2</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:300}}>
            <Image src="https://cdn.dribbble.com/users/10236199/screenshots/19546049/media/74e857c89e48575eaf0c7fec0aa84f6c.png?compress=1&resize=1200x900&vertical=top" className="w-100 h-100 object-cover bg-dark"/>
           </div>
          <Carousel.Caption>
            <h3>Project 3</h3>    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
   </>
  );
};

export default Work;
