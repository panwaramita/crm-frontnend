import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb.comp";
import { Search } from "../../components/search/Search.comp";
import TiecketTable from "../../components/ticketTable/TiecketTable.comp";
import tickets from "../../assets/data/dummy-data.json";

export const TicketListing = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const handleOnChange = (e) => {
    setName(e.target.value);
    let value = tickets.filter((ele) =>
      ele.subject.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(data);
    setData(value);
  };
  useEffect(() => {}, [name]);
  return (
    <Container className='mt-3'>
      <Row>
        <Col>
          <BreadcrumbComponent page='Ticket Listing'></BreadcrumbComponent>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button varient='info'>Add New Ticket</Button>
        </Col>
        <Col className='text-right'>
          <Search handleOnChange={handleOnChange} str={name} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className='text-right'>
          {name.length ? (
            <TiecketTable tickets={data} />
          ) : (
            <TiecketTable tickets={tickets} />
          )}
        </Col>
      </Row>
    </Container>
  );
};
