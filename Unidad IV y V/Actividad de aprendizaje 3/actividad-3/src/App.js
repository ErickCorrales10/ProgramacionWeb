import './App.css';
import campNou from './camp-nou.jpg';

function App() {
    return (
        <div className="Aplicacion">
            <div className='contenedor-tabla'>
                <table className='tabla'>
                    <tr>
                        <td>Carrera: Ingenieria en Sistemas Computacionales</td>
                        <td>Materia: Programacion Web</td>
                    </tr>
                    <tr>
                        <td>Horario: 18 - 19</td>
                        <td>Laboratorio: 91L6</td>
                    </tr>
                    <tr>
                        <td>Alumno: Erick Corrales</td>
                        <td>Docente: Jose Jonathan Perez Castro</td>
                    </tr>
                    <tr>
                        <td>Actividad: Actividad de aprendizaje 3</td>
                        <td>Fecha de elaboracion: 25 de noviembre de 2025</td>
                    </tr>
                </table>
            </div>
            <div className='contenedor-imagen'>
                <img src={campNou} className='imagen' alt='Camp Nou'/>
            </div>
        </div>
    );
}

export default App;
