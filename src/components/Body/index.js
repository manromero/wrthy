import React, { useState } from "react";
import "./style.css";
import mujer_abdominal from "../../assets/mujer_abdominal.jpg";
import { Row, Col, Modal, Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Body = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <div className="Body">
      <Row style={{ width: "100%", margin: 0 }}>
        <Col md="7" sm="12" xs="12" style={{ paddingLeft: 20, marginTop: 20, paddingRight: 20 }} className="pb-4">
          <h2 className="Body-title mb-5">Wrthy, tu coach inteligente</h2>
          <p className="Body-description mt-5 mb-5">Alcanza tus objetivos físicos con nuestro coach inteligente</p>
          <p className="Body-description mt-5 mb-5">Ya disponible en las principales plataformas. Descargatela la App y comienza a entrenar</p>
          <Row className="justify-content-around">
            <Col md="4" sm="12" xs="12">
              <button className="Body-button mt-4 mr-5" onClick={toggleModal}>
                Google Play
              </button>
            </Col>
            <Col md="4" sm="12" xs="12">
              <button className="Body-button mt-4" onClick={toggleModal}>
                Play Store
              </button>
            </Col>
          </Row>
        </Col>
        <Col md="5" sm="12" xs="12" style={{ padding: 0 }}>
          <img src={mujer_abdominal} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>Atención!</ModalHeader>
        <ModalBody>Arrancamos en breve. Gracias por su paciencia.</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Body;
