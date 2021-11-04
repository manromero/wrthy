import React from "react";
import detail from "../../assets/detail.png";
import feedback1 from "../../assets/feedback1.png";
import feedback2 from "../../assets/feedback2.png";
import { Row, Col } from "reactstrap";

const EDetail = () => {
  return (
    <Row id="eDetail" style={{ width: "100%", margin: 0, backgroundColor: "#201f1f", color: "white" }} className="mt-4">
      <Col md="6" sm="12" xs="12" style={{ paddingLeft: 50, marginTop: 20, paddingRight: 50 }} className="pb-4 justify-content-md-center">
        <h2 className="Body-title mb-5 text-center pt-5">¡Mejora contínua!</h2>
        <p className="Body-description mt-5 mb-5 text-center">Aprende a realizar los ejercicios correctamente, evita lesiones, y sácale el mejor partido al ejercicio.</p>
        <p className="Body-description mt-5 mb-5 text-center">El coach cuenta con tu opinión para ofrecerte los ejercicios que más se ajustan a ti</p>
      </Col>
      <Col md="2" sm="12" xs="12" style={{ padding: 20, border: "3px", borderColor: "white" }}>
        <img src={detail} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%", border: "3px", borderColor: "white", borderStyle: "solid" }} />
      </Col>
      <Col md="2" sm="12" xs="12" style={{ padding: 20 }}>
        <img src={feedback1} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%", border: "3px", borderColor: "white", borderStyle: "solid" }} />
      </Col>
      <Col md="2" sm="12" xs="12" style={{ padding: 20 }}>
        <img src={feedback2} alt="Ejercicio" width="700" style={{ objectFit: "cover", height: "100%", width: "100%", border: "3px", borderColor: "white", borderStyle: "solid" }} />
      </Col>
    </Row>
  );
};

export default EDetail;
