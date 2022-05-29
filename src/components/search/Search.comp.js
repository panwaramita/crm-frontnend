import React from "react";
import { Form, Row, Col } from "react-bootstrap";
export const Search = ({ handleOnChange, str }) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Form.Label column ms='2'>
          Search:
        </Form.Label>
        <Col ms='10'>
          <Form.Control
            name='searchStr'
            value={str}
            onChange={handleOnChange}
            placeholder='Search...'
          ></Form.Control>
        </Col>
      </Form.Group>
    </Form>
  );
};
