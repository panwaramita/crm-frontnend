import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import PropTypes from "prop-Types";

function PasswordReset({ handleChange, email, handleOnSubmit, formSwitcher }) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Passowrd</h1>
          <hr />
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter Email'
                onChange={handleChange}
                value={email}
                required
              ></Form.Control>
            </Form.Group>
            <Button type='submit' className='submit'>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <a href='#!' onClick={() => formSwitcher("login")}>
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default PasswordReset;

// LoginFrom.PropTypes = {
//   handleChange: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };
