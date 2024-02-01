import { Row } from "react-bootstrap";
import CardNoticia from "./CardNoticia";

const ListaNoticias = () => {
  return (
    <Row>
      <CardNoticia></CardNoticia>
      <CardNoticia></CardNoticia>
      <CardNoticia></CardNoticia>
      <CardNoticia></CardNoticia>
    </Row>
  );
};

export default ListaNoticias;
