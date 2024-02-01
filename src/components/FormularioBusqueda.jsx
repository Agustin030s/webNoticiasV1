import { Form, Row, Col } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const FormularioBusqueda = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [mostrarNoticias, setMostrarNoticias] = useState(false);
  const [datos, setDatos] = useState(null)

  useEffect(() => {
    consultarApi(categoriaSeleccionada);
  }, [categoriaSeleccionada]);

  const consultarApi = async (categoria) => {
    if (categoria !== "") {
      setMostrarNoticias(false);
      try {
        const respuesta = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_373290c922e29facae718dda453793435585d&category=${categoria}`
        );
        const datos = await respuesta.json();
        setDatos(datos.results);
        setMostrarNoticias(true);
      } catch (error) {
        console.log("Error al realizar la solicitud:", error);
        setDatos([]);
      }
    }
  };

  const mostrarComponente = mostrarNoticias ? (
    <ListaNoticias className="my-3" noticias={datos}></ListaNoticias>
  ) : (
    <p className="text-center py-4 lead">
      Seleccione una categoria para ver las noticias
    </p>
  );

  const handleChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
  };

  return (
    <>
      <section className="my-4">
        <Row>
          <Col md="4">
            <p className="lead text-center">Busca por Categoria: </p>
          </Col>
          <Col md="8">
            <Form.Select
              aria-label="Seleccione una categoria"
              onChange={handleChange}
              value={categoriaSeleccionada}
            >
              <option>Seleccione una opción: </option>
              <option value="business">business</option>
              <option value="crime">crime</option>
              <option value="domestic">domestic</option>
              <option value="education">education</option>
              <option value="entertainment">entertainment</option>
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
      {mostrarComponente}
    </>
  );
};

export default FormularioBusqueda;
