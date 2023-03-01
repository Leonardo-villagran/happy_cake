import { Container } from "react-bootstrap";
import Contact from "../components/Contact";

//Vista de datos de contacto
const Contacto = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Cuéntanos. ¿En qué te podemos ayudar?</h1>
      <Contact />
    </Container>
  );
};
export default Contacto;
