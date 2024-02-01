import { Card, Button, Col } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

const CardNoticia = ({noticia}) => {
    console.log(noticia.title);
  return (
    <Col md="4" lg="3" className="mb-3">
      <Card className="d-flex flex-column h-100">
        <Card.Img variant="top" className="img-fluid" src={noticia.image_url}/>
        <Card.Body className="d-flex flex-column">
        <Badge bg="info" className="mb-2">{noticia.country[0]}</Badge>
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Text className="flex-grow-1">
            {noticia.description}
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
