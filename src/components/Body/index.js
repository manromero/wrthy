import React from "react";
import "./style.css";
import mujer_abdominal from "../../assets/mujer_abdominal.jpg";
import { Row, Col } from "reactstrap";

const Body = () => {
  return (
    <div className="Body">
      <Row style={{ width: "100%", margin: 0 }}>
        <Col md="7" sm="12" xs="12" style={{ paddingLeft: 20, marginTop: 20 }} className="pb-4">
          <h2 className="Body-title">Wrthy, tu coach inteligente</h2>
          <p className="Body-description">
            Se el primero en alcanzar tus objetivos físicos con nuestro coach inteligente
          </p>
          <button
            className="Body-button"
            onClick={() => {
              document.getElementById("contact-form")?.scrollIntoView();
            }}
          >
            Apúntate!
          </button>
        </Col>
        <Col md="5" sm="12" xs="12" style={{ padding: 0 }}>
          <img
            src={mujer_abdominal}
            alt="Ejercicio"
            width="700"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Body;
