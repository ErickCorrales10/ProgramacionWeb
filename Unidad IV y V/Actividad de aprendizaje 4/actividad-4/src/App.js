import './App.css';
import tierra from './earth.jpg';

function App() {
    return (
        <div className="Aplicacion">
            <div className='contenedor-tabla'>
                <table className='tabla'>
                    <tr>
                        <td><strong>Carrera:</strong> Ingenieria en Sistemas Computacionales</td>
                        <td><strong>Materia:</strong> Programacion Web</td>
                    </tr>
                    <tr>
                        <td><strong>Horario:</strong> 18 - 19</td>
                        <td><strong>Laboratorio:</strong> 91L6</td>
                    </tr>
                    <tr>
                        <td><strong>Alumno</strong>: Erick Corrales</td>
                        <td><strong>Docente:</strong> Jose Jonathan Perez Castro</td>
                    </tr>
                    <tr>
                        <td><strong>Actividad:</strong> Actividad de aprendizaje 3</td>
                        <td><strong>Fecha de elaboracion:</strong> 25 de noviembre de 2025</td>
                    </tr>
                </table>
            </div>
            <div className='contenedor-imagen'>
                <img src={tierra} className='imagen' alt='Camp Nou'/>
            </div>
        </div>
    );
}

export default App;
