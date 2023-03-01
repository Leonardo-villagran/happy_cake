//Importación de librerías necesarias para la implementación
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importación del menú
import Navbar from "./components/Navbar";

// importación de las vistas de cada parte de la web
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import Footer from "./views/Footer";


function App() {

  //Generación de las distintas rutas a través del Browser Router y la raíz es /happy_cake para facilitar el deploy en carpeta. 
  return (
    <div className="App">
      <BrowserRouter basename='/happy_cake'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
