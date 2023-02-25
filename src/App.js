import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";

function App() {

  //Definición de constantes de títulos 
  const nombreFooter = "@Leonardo-Villagrán" ;
  const emailFooter ="mailto:leonardovillagran@yahoo.com";
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/happy_cake" element={<Home />} />
          <Route path="/happy_cake/Contacto" element={<Contacto />} />
          <Route path="/happy_cake/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <div className='p-2 text-center'>
                    <a href={emailFooter}><Badge bg="secondary p-2">{nombreFooter}</Badge></a>
      </div>
    </div>

  );
}

export default App;
