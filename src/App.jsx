import Calculadora from './components/Calculadora';
import ConvertidorDolar from './components/CalculadoraDolar';

import './App.css';


function App() {

  return (
    <>
      {/* Titulo */}
      <div className='title-app'>
        <p>Calculadora Tarjetas</p>
        <img src="https://ofertas.yuhmak.com.ar/images/Yuhmak_Marca-BLANCO.svg" alt="" />
      </div>
      <Calculadora />
      <br />
      <Calculadora />
    </>
  );
}

export default App;
