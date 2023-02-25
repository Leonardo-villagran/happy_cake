import image_pastel from "../assets/img/pastel_01.png";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
      <p>El lugar de los pasteles felices</p>
      <img className="imagen_pastel" src={image_pastel} alt={'foto'}/>
      <h4>Imagen 1. Vista <span className="fw-bold">Home</span></h4>
      <h4>Fuente: Desafío Latam</h4>
    </Container>
  );
};
export default Home;