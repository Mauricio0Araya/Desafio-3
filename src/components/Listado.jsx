import Table from 'react-bootstrap/Table';

const Listado = ({ colaboradores }) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((c) => (

          <tr key={c.id}>
            <th>{c.nombre}</th>
            <th>{c.correo}</th>
            <th>{c.edad}</th>
            <th>{c.cargo}</th>
            <th>{c.telefono}</th>
          </tr>

        ))}
      </tbody>
    </Table>
  );

}
export default Listado;