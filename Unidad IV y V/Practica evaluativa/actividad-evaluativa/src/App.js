/* 
  INSTITUTO TECNOLÓGICO DE TIJUANA
  PROGRAMACIÓN WEB
  NO CONTROL: 23211004
  ALUMNO: ERICK ROBERTO CORRALES QUINTERO
*/

import './App.css';
import css from './css.png'
import tierra from './earth.jpg'
import erick from './erick.JPG'
import js from './js.png'
import node from './node.jpg'
import react from './react.png'
import { useState } from 'react'

function App() {
  // Declaracion de variables
  const [ numero1, setNumero1 ] = useState('')
  const [ numero2, setNumero2 ] = useState('')
  const [ resultado, setResultado ] = useState('0')

  function eventoSuma() {
    // Validacion para los TXT y Proceso
    if (numero1 === '' || numero2 === '')
      alert('Debes escribir números en los cuadros de texto')
    else
      alert(`Los números que escribiste son: ${numero1} y ${numero2}`)

    // Parseo de variables
    const num1 = parseFloat(numero1)
    const num2 = parseFloat(numero2)

    // Salida de datos
    setResultado(num1 + num2)
    return
  }

  function limpiarCampos() {
    setNumero1(' ')
    setNumero2(' ')
    setResultado('0')
    document.getElementById('txtn1').value = ''
    document.getElementById('txtn2').value = ''
  }

  return (
    <div className="Aplicacion">
      <div className='contenedor-tabla'>
        <table className='tabla'>
          <tbody>
            <tr>
                <td><strong>Carrera:</strong> Ingeniería en Sistemas Computacionales</td>
                <td><strong>Materia:</strong> Programacion Web</td>
            </tr>
            <tr>
                <td><strong>Horario:</strong> 18 - 19</td>
                <td><strong>Laboratorio:</strong> 91L6</td>
            </tr>
            <tr>
                <td><strong>Alumno</strong>: Erick Corrales</td>
                <td><strong>Docente:</strong> José Jonathan Pérez Castro</td>
            </tr>
            <tr>
                <td><strong>Actividad:</strong> Práctica Evaluativa</td>
                <td><strong>Fecha de elaboracion:</strong> 1 de diciembre de 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className='contenedor-imagen'>
        <img src={css} alt='Logo CSS' className='imagen' />
        <img src={tierra} alt='Tierra desde el espacio' className='imagen' />
        <img src={erick} alt='Erick Corrales' className='imagen' />
        <img src={js} alt='Logo JS' className='imagen' />
        <img src={node} alt='Logo Node' className='imagen' />
        <img src={react} alt='Logo React' className='imagen' />
      </div>

      <div className='contenedor-formulario'>
        <h1>Sumar dos números</h1>
        <form className='formulario'>
          <label htmlFor='lbln1' className='etiqueta'>Introduce un número: </label>
          <input type='text' id='txtn1' className='txt' onChange={e => setNumero1(e.target.value)} /><br /><br />
          <label htmlFor='lbln2' className='etiqueta'>Introduce otro número: </label>
          <input type='text' id='txtn2' className='txt' onChange={e => setNumero2(e.target.value)} /><br /><br />
          <label htmlFor='lblResultado' className='etiqueta'>El resultado de la suma es: </label>
          <input type='text' id='txt-resultado' className='txt'value={resultado} readOnly/><br /><br /><br />
          <div className='contenedor-boton'>
            <button type='button' className='btn' onClick={eventoSuma}>Ejecutar</button><br /><br />
            <button type='button' className='btn' onClick={limpiarCampos}>Limpiar</button><br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
