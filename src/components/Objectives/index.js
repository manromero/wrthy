import React from "react";
import about_you from "../../assets/about_you.png";
import objetive from "../../assets/objetive.png";
import main from "../../assets/main.png";
import { Row, Col } from "reactstrap";

const Objectives = () => {
  return (
    <Row id="objectives" style={{ width: "100%", margin: 0 }} className="mt-4">
      <Col md="2" sm={{ size: 12, order: 1 }} xs={{ size: 12, order: 2 }} style={{ padding: 20 }}>
        <img src={about_you} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
      </Col>
      <Col md="2" sm={{ size: 12, order: 2 }} xs={{ size: 12, order: 3 }} style={{ padding: 20 }}>
        <img src={objetive} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
      </Col>
      <Col md="2" sm={{ size: 12, order: 3 }} xs={{ size: 12, order: 4 }} style={{ padding: 20 }}>
        <img src={main} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
      </Col>
      <Col md="6" sm={{ size: 12, order: 4 }} xs={{ size: 12, order: 1 }} style={{ paddingLeft: 50, marginTop: 20, paddingRight: 50 }} className="pb-4 justify-content-md-center">
        <h2 className="Body-title mb-5 text-center pt-5">¡Miramos por ti!</h2>
        <p className="Body-description mt-5 mb-5 text-center">Gracias a nuestro coach inteligente obtendrás entrenamientos personalizados 100% adaptados a ti, a tus características, tiempo, objetivos y mucho más.</p>
      </Col>
    </Row>
  );
};

export default Objectives;
