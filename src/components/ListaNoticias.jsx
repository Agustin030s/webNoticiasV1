import { Row } from "react-bootstrap";
import CardNoticia from "./CardNoticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <Row>
      {noticias.map((not, index) => (
        <CardNoticia key={index} noticia={not}></CardNoticia>
      ))}
    </Row>
  );
};

export default ListaNoticias;
