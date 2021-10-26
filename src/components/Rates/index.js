import React, { useState } from "react";
import { Row, Col, Modal, Button, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./style.scss";

const Rates = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Row id="rates" style={{ width: "100%", margin: 0, backgroundColor: "#201f1f", color: "white", paddingBottom: 30 }} className="mt-4 justify-content-around">
        <Col md="12" sm="12" xs="12" style={{ paddingLeft: 50, marginTop: 20, paddingRight: 50 }} className="pb-4 justify-content-md-center">
          <h2 className="Body-title mb-5 text-center pt-5">¡Tarifas ajustadas a ti!</h2>
          <p className="Body-description mt-5 mb-5 text-center">Disfruta de un mes gratis de prueba para poner a prueba tu coach inteligente y elige la tarifa que más se ajuste a ti</p>
        </Col>
        <Col md="3" sm="12" xs="12" className="gold-rate pb-4 text-center" onClick={toggleModal}>
          <p className="fs-1 pt-5">Plan Gold</p>
          <p className="fs-4">Planes personalizados</p>
          <p className="fs-2">4,99 €/mes</p>
        </Col>
        <Col md="3" sm="12" xs="12" className="platinium-rate pb-4 text-center" onClick={toggleModal}>
          <p className="fs-1 pt-5">Plan Platino</p>
          <p className="fs-4">Planes personalizados</p>
          <p className="fs-4">Acceso a ranking amigos</p>
          <p className="fs-2">5,99 €/mes</p>
        </Col>
        <Col md="3" sm="12" xs="12" className="diamont-rate pb-4 text-center" onClick={toggleModal}>
          <p className="fs-1 pt-5">Plan Diamante</p>
          <p className="fs-4">Planes personalizados</p>
          <p className="fs-4">Acceso a ranking amigos</p>
          <p className="fs-4">Logros personales</p>
          <p className="fs-2">7,99 €/mes</p>
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
    </>
  );
};

export default Rates;
