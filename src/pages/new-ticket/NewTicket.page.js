import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddTicketForm from "../../components/addTicketForm/AddTicketForm.comp";
import BreadcrumbComponent from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";

const initalFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initalFormDataError = {
  subject: "",
  issueDate: "",
  detail: "",
};

function NewTicket() {
  const [frmData, setFrmData] = useState(initalFormData);
  const [frmDataError, setFrmDataError] = useState(initalFormDataError);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFrmDataError(initalFormDataError);
    const isValid = await shortText(frmData.subject);
    console.log(isValid);
    if (!isValid) {
      setFrmDataError({
        ...frmDataError,
        subject: isValid,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
    console.log(frmData);
  };

  useEffect(() => {}, [frmData]);

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <BreadcrumbComponent page='New Ticket'></BreadcrumbComponent>
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnSubmit={handleOnSubmit}
            handleChange={handleChange}
            frmData={frmData}
            frmDataError={frmDataError}
          />{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default NewTicket;
