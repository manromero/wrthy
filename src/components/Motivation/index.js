import React from "react";
import logros from "../../assets/logros.png";
import friend1 from "../../assets/friend1.png";
import friend2 from "../../assets/friend2.png";
import { Row, Col } from "reactstrap";

const Motivation = () => {
  return (
    <Row style={{ width: "100%", margin: 0 }} className="mt-4">
      <Col md="2" sm={{ size: 12, order: 1 }} xs={{ size: 12, order: 2 }} style={{ padding: 20 }}>
        <img src={logros} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
      </Col>
      <Col md="2" sm={{ size: 12, order: 2 }} xs={{ size: 12, order: 3 }} style={{ padding: 20 }}>
        <img src={friend1} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
      </Col>
      <Col md="2" sm={{ size: 12, order: 3 }} xs={{ size: 12, order: 4 }} style={{ padding: 20 }}>
        <img src={friend2} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
      </Col>
      <Col md="6" sm={{ size: 12, order: 4 }} xs={{ size: 12, order: 1 }} style={{ paddingLeft: 50, marginTop: 20, paddingRight: 50 }} className="pb-4 justify-content-md-center">
        <h2 className="Body-title mb-5 text-center pt-5">¡Motivación!</h2>
        <p className="Body-description mt-5 mb-5 text-center">Superate a ti mismo rompiendo todos nuestros logros y siendo el mejor entre tus amigos.</p>
      </Col>
    </Row>
  );
};

export default Motivation;
