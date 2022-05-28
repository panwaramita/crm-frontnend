import React from "react";
import { Table } from "react-bootstrap";
function TiecketTable({ tickets }) {
  return (
    <Table striped bordered hover className=''>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {!tickets.length ? (
          tickets.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.id}</td>
              <td>{ele.status}</td>
              <td>{ele.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='4' className='text-center'>
              No ticket
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TiecketTable;
