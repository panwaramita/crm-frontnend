import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.style.css";
// import PropTypes from "prop-Types";

function LoginFrom({
  handleChange,
  email,
  password,
  handleOnSubmit,
  formSwitcher,
}) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Client Login</h1>
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
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Enter Password'
                value={password}
                onChange={handleChange}
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
          <a href='#!' onClick={() => formSwitcher("reset")}>
            Forgot Passowrd?
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginFrom;

// LoginFrom.PropTypes = {
//   handleChange: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };
