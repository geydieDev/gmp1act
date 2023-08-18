import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center' >
        <Row className='hero gap-5'>
          <Col className='d-flex justify-content-center align-items-center'>
            <Image src='image1.png' className='w-100 h-100 bg-black'style={{minWidth:250,minHeight:250}} rounded fluid/>
          </Col>
          <Col>
            <h1 className='display-1 fw-bold'>Gheydie Maramba</h1>
            <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
            <hr />
            <p>
              A 20 year's old BSIT Student in PHINMA University of Pangasinan who loves music,coffee and programming.
            </p>
            <div className='d-flex align-items-center gap-2'>
              <Link to='/work'>
                <Button className='btn-lg' variant='dark'>View Work</Button>
              </Link>
              <SocialLinks />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
