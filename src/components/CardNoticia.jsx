import { Card, Button, Col } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

const CardNoticia = () => {
  return (
    <Col md="4" lg="3">
      <Card>
        <Card.Img variant="top" className="img-fluid" src="./"/>
        <Card.Body>
        <Badge bg="info" className="mb-2">Estados unidos</Badge>
          <Card.Title>Asesino en Serie</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" className="w-100">Ver noticia completa</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardNoticia;
