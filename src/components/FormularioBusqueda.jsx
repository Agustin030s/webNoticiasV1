import { Form, Row, Col } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect } from "react";

const FormularioBusqueda = () => {

  // useEffect(() =>{
  //   consultarApi();
  // }, [])

  // const consultarApi = async () =>{
  //   try {
  //     const respuesta = await fetch('https://newsdata.io/api/1/news?apikey=pub_373290c922e29facae718dda453793435585d&category=science');
  //     const datos = await respuesta.json();
  //     const noticias = JSON.parse(datos) || [];
  //     console.log(datos);
  //     console.log(noticias);
  //   } catch (error) {
  //     alert("Hubo un error intente más tarde", error);
  //   }
  // }

  return (
    <>
      <section className="my-4">
        <Row>
          <Col md="4">
            <p className="lead text-center">Busca por Categoria: </p>
          </Col>
          <Col md="8">
            <Form.Select aria-label="Seleccione una categoria">
              <option>Seleccione una opción: </option>
              <option value="business">business</option>
              <option value="crime">crime</option>
              <option value="domestic">domestic</option>
              <option value="education">education</option>
              <option value="entertaiment">entertaiment</option>
              <option value="environment">environment</option>
              <option value="food">food</option>
              <option value="health">health</option>
              <option value="lifestyle">lifestyle</option>
              <option value="politics">politics</option>
              <option value="science">science</option>
              <option value="sports">sports</option>
              <option value="technology">technology</option>
              <option value="top">top</option>
              <option value="tourism">tourism</option>
              <option value="world">world</option>
              <option value="other">other</option>
            </Form.Select>
          </Col>
        </Row>
      </section>
      <ListaNoticias className="my-3"></ListaNoticias>
    </>
  );
};

export default FormularioBusqueda;
