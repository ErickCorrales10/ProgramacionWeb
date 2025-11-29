import './App.css';
import erick from './erick.JPG';
import react from './react.png'
import js from './js.png'
import node from './node.jpg'
import css from './css.png'

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
                <img src={react} className='imagen' alt='Logo React'/>
                <img src={js} className='imagen' alt='Logo JavaScript'/>
                <img src={erick} className='imagen' alt='tierra'/>
                <img src={node} className='imagen' alt='Logo Node.js'/>
                <img src={css} className='imagen' alt='Logo CSS'/>
            </div>
        </div>
    );
}

export default App;
