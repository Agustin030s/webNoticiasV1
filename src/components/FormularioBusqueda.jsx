import { Form, Row, Col } from "react-bootstrap";

const FormularioBusqueda = () => {
  return (
    <section className="my-4">
      <Row>
        <Col md="4">
          <p className="lead text-center">Busca por Categoria: </p>
        </Col>
        <Col md="8">
          <Form.Select aria-label="Seleccione una categoria">
            <option>Seleccione una opción: </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
    </section>
  );
};

export default FormularioBusqueda;
