import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Titulo from "./components/Titulo";
import FormularioBusqueda from "./components/FormularioBusqueda";

function App() {
  return (
    <Container className="my-5">
      <Titulo></Titulo>
      <FormularioBusqueda></FormularioBusqueda>
    </Container>
  );
}

export default App;
