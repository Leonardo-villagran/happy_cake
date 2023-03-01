import { useState } from "react"
import Alert from 'react-bootstrap/Alert';

export default function Navigation() {

  //Definición de estados

  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  //Función para capturar los datos desde el input de descripción
  const capturaDescripcion = (e) => {
    setDescripcion(e.target.value)
  }
  //Función para capturar los datos desde el input de email
  const capturarEmail = (e) => {
    setEmail(e.target.value)
  }

  //Función para activar el botón para el caso que los dos inputs tengan datos. 
  const activarBoton = () => {
    if (email !== "" && descripcion !== "") {
      return (
        <div className="d-block align-items-center">
          <button className="btn btn-danger m-3 ">Enviar</button>
        </div>
      )
    }
    else {
      return (
        <div className="d-block align-items-center">
          <button className="btn btn-danger m-3 text-center" disabled>Desactivado</button>
        </div>
      )

    }
  }

  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault()

    //En caso de que el email y la descripción estén vacíos no almacenar
    if (email === "" || descripcion === "") {
  
      setMostrar(true)
      setAlertType("danger");
      setAlertMessage("No dejar espacios en blanco.");
      //Limpiar los input de datos ya procesados.
      setDescripcion("");
      setEmail("");
      return false;
    }
    else {

      setMostrar(true)
      setAlertType("primary");
      setAlertMessage("Datos ingresados correctamente.");
      //Limpiar los input de datos ya procesados.
      setDescripcion("");
      setEmail("");
      return true;
    }
  }


  return (
    <div className="w-100">
    <Alert className='m-2' show={mostrar} variant={alertType}>
                {alertMessage}
    </Alert>

    <form onSubmit={enviarFormulario}>
      <label htmlFor="nombre" className="labelColaborador form-control-lg">Correo:</label>
      <input name="email" id="email" className="form-control" value={descripcion} onChange={capturaDescripcion} placeholder="Ingrese correo " />
      <label htmlFor="email" className="labelColaborador form-control-lg">Descripción:</label>
      <input name="nombre" id="nombre" className="form-control" value={email} onChange={capturarEmail} placeholder="Ingrese descripción" />
      {activarBoton()}

    </form>
    </div>
  );
}
