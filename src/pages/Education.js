import React from 'react';
import {Accordion, Container} from 'react-bootstrap';


const Education = () => {
  return (
    <>
      <Container className='hero'>
        <h2 className='display-1 fw-bold text-center'>My Education</h2>
        <p className='text-center'>These are my academic qualifications:</p>
        <hr/>
        <Container className='p-5'>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>School 1 | Year 2015</Accordion.Header>
          <Accordion.Body>
            School description
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>School 2 | Year 2019</Accordion.Header>
          <Accordion.Body>
            School description
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>School 3 | Current</Accordion.Header>
          <Accordion.Body>
            School description
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </Container>
      </Container>
    </>
  );
};

export default Education;
