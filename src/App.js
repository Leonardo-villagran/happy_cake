import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import Footer from "./views/Footer";


function App() {

  //Definición de constantes de títulos 
  //<BrowserRouter basename='/happy_cake'>

  
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
