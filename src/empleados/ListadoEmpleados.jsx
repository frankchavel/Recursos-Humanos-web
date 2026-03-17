import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";


export default function ListadoEmpleados() {
    //definir la url base del backend para consumir el servicio rest
    const urlBase = "http://localhost:8080/api/empleado"

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        try{
            const resultado = await axios.get(urlBase);
            console.log("Resultado de cargar empleados");
            console.log(resultado.data);
            setEmpleados(resultado.data);

        }
        catch(error){
            console.error("Error al cargar empleados: ", error);
        }
    };
    return (
        <div className="container">
            <div className="container text-center" style={{margin:"20px"}}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>

            <table className="table table-striped table-hover align-middle">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        //recorrer el arreglo de empleado y mostrar cada empleado en una fila de la tabla
                        empleados.map((empleado) => (
                            <tr key={empleado.idEmpleado}>
                                <th scope="row">{empleado.idEmpleado}</th>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.departamento}</td>
                                <td><NumericFormat value={empleado.sueldo}
                                 displayType={'text'}
                                  thousandSeparator=',' prefix={'$'}
                                   decimalScale={2} fixedDecimalScale/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
