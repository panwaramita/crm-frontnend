import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./addTicketFrom.style.css";

function AddTicketForm({
  handleOnSubmit,
  handleChange,
  frmData,
  frmDataError,
}) {
  return (
    <div className='jumbo bg-light'>
      <h1 className='text-info text-center'> Add New Ticket</h1>
      <hr />
      <Form autoComplete='off' onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className='mt-1'>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='input'
              name='subject'
              placeholder='Enter Subject'
              onChange={handleChange}
              value={frmData.subject}
              required
            ></Form.Control>
            <Form.Text className='text-danger'>
              {!frmDataError.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group className='mt-1' as={Row}>
          <Form.Label column sm={3}>
            Issue Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type='date'
              name='issueDate'
              value={frmData.issueDate}
              onChange={handleChange}
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className='mt-1'>
          <Form.Label column sm={3}>
            Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as='textarea'
              name='details'
              rows='5'
              value={frmData.details}
              onChange={handleChange}
              required
            ></Form.Control>
          </Col>
        </Form.Group>
        <Button type='submit' variant='info' block='true' className='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default AddTicketForm;
