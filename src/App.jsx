import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Titulo from "./components/Titulo";

function App() {
  return (
    <Container className="my-5">
      <Titulo></Titulo>
    </Container>
  );
}

export default App;
