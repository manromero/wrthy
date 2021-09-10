import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import "./style.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myyllvew");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log("state", state);

  if (state.succeeded) {
    return (
      <Row className="mt-3 w-100">
        <Col style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: 900, fontSize: 55 }}>Gracias por apuntarte! nos vemos pronto!! 👋</h1>
        </Col>
      </Row>
    );
  }
  return (
    <>
      <Row className="mt-3 w-100" id="contact-form">
        <Col style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: 900, fontSize: 55 }}>Apúntate 👋</h1>
        </Col>
      </Row>
      {state.errors && state.errors.length > 0 && (
        <Row className="w-100" id="contact-form">
          <Col style={{ textAlign: "center", color: "red" }}>
            No se ha podido enviar el formulario. Es posible que contenga errores
          </Col>
        </Row>
      )}
      <Row className="w-100 mb-4" style={{ paddingLeft: 20 }}>
        <Col md={{ size: 8, offset: 2 }}>
          <Form onSubmit={handleSubmit} className="mt-3">
            <FormGroup row>
              <Label sm="2" htmlFor="name">
                Nombre
              </Label>
              <Col sm="10">
                <Input
                  id="name"
                  type="text"
                  name="name"
                  className="mt-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <ValidationError prefix="name" field="name" errors={state.errors} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm="2" htmlFor="email">
                Email
              </Label>
              <Col sm="10">
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="mt-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </Col>
            </FormGroup>
            <FormGroup row className="mt-2">
              <Label sm="2" htmlFor="email">
                Mensaje
              </Label>
              <Col sm="10">
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  sm="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Col>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </FormGroup>
            <Button
              type="submit"
              outline
              color="secondary"
              className="mt-3 submit-button"
              style={{ float: "right" }}
              disabled={state.submitting}
            >
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;
