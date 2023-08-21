import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ onSubmit, setAlert }) => {
  const [colaborador, setColaborador] = useState({

    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  // recorrido
  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value,
    })
  }
  // validacion
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
      setAlert({
        msg: "Complete todos los campos",
        color: "danger",
      }
      )
      return;
    }
    setAlert({
      msg: "Colaborador agregado con exito",
      color: "success",
    }
    )

    onSubmit(colaborador)
    setColaborador(
      {
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "", 
      }
    )
  }

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="texto"
          placeholder="Nombre colaborador"
          onChange={handleChange}
          name="nombre"
          value={colaborador.nombre} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="texto"
          placeholder="Correo colaborador"
          onChange={handleChange}
          name="correo"
          value={colaborador.correo} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="texto"
          placeholder="Edad colaborador"
          onChange={handleChange}
          name="edad"
          value={colaborador.edad} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="texto"
          placeholder="Cargo colaborador"
          onChange={handleChange}
          name="cargo"
          value={colaborador.cargo} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="texto"
          placeholder="Telefono colaborador"
          onChange={handleChange}
          name="telefono"
          value={colaborador.telefono} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar colaborador
      </Button>
    </Form>
  );

}
export default Formulario;