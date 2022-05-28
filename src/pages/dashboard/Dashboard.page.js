import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TiecketTable from "../../components/ticketTable/TiecketTable.comp";
import tickets from "../../assets/data/dummy-data.json";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb.comp";
function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComponent page='Dashboard' />
        </Col>
        <Col className='text-center mt-5 mb-2'>
          <Button
            variant='info'
            style={{ padding: "10px 30px", fontSize: "2rem" }}
          >
            Add New Tickets
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className='text-center mb-2'>
          <div>Total Tickets :50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className='mt-2'>Recently Added Tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className='recent-ticket'>
          <TiecketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
