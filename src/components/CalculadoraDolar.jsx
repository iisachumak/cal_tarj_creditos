import React, { useState, useEffect } from 'react';

import './calculadora.css'


const ConvertidorDolar = () => {
  const [dolarValue, setDolarValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    //API
    fetch("https://dolarapi.com/v1/dolares/blue")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setDolarValue(data.venta);
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const calcularResultado = () => {
    if (dolarValue && inputValue) {
      const resultadoCalculado = parseFloat(dolarValue) * parseFloat(inputValue);
      setResultado(resultadoCalculado);
    }
  };

  return (
    <div>
      {/* Contenedor */}
      <div class="container text-center">
        <div class="row">
          <div class="col">
          </div>
          <div class="col">
            <label className='fs-4 m-2'>
              Ingrese el valor en dólares:
              <input className='input-valores'  type="number" value={inputValue} onChange={handleInputChange} />
            </label>
            <button className='btn btn-success' onClick={calcularResultado}>Calcular</button>

            {resultado && (
              <p className='card fs-4 m-2'>
                El valor en Pesos es: {resultado}
              </p>
            )}
          </div>
          <div class="col">
          </div>
        </div>
      </div>
      {/* - - - */}

    </div>
  );
};

export default ConvertidorDolar;
