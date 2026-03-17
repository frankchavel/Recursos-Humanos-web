
export default function AgregarEmpleado() {

  const[empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: 0
  })

  const{nombre, departamento, sueldo} = empleado

  const onInputChange = (e) => {
    setEmpleado({...empleado, [e.target.name]: e.target.value})
  }

  return (
    <div classNameName="container">
      <div classNameName="container text-center" style={{ margin: "30px" }}>
        <h3>Agregar Empleado</h3>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" required
          value={nombre} onChange={(e)=> onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">Departamento</label>
          <input type="text" className="form-control" id="departamento" name="departamento"/>
        </div>
        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">Sueldo</label>
          <input type="number" step="any" className="form-control" id="sueldo" name="sueldo"/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm me-3">Agregar</button>
          <a href="/" className="btn btn-danger btn-sm">Regresar</a>
        </div>
      </form>
    </div>
  )
}
