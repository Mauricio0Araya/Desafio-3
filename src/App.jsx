import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BaseColaboradores } from './database/BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';

function App() {
  const [alert, setAlert] = useState({ msg: "", color: "", })
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [search,setSearh] = useState("")

  const handleChange = (e) => {
    setSearh(e.target.value);

  }

  const filteredColaboradores = colaboradores.filter((c) =>{
    if(
      c.nombre.toLowerCase().includes(search.toLowerCase())||
      c.correo.toLowerCase().includes(search.toLowerCase())||
      c.edad.toLowerCase().includes(search.toLowerCase())||
      c.cargo.toLowerCase().includes(search.toLowerCase())||
      c.telefono.toLowerCase().includes(search.toLowerCase())
    ){
      return true;
    }
    return false;
  });

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = {
      ...nuevoColaborador,
      id: colaboradores.length + 1,
    }
    setColaboradores([...colaboradores,colaboradorConId]);
  }

  return (
    <>
    <div className="appBg">
      <div className="appDiv">
    <h1>Lista de colaboradores</h1>
     <Buscador onChange={handleChange} search={search}/>
      <Listado colaboradores={filteredColaboradores} />
      <Formulario onSubmit ={handleSubmit} setAlert={setAlert} />
      {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
    </div>
    </div>
    </>
  )
}

export default App
