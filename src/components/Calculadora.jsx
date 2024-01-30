import { useState } from 'react';
import { data } from './data';

import './calculadora.css'

const Calculadora = () => {
    const [valor, setValor] = useState('');
    const [sena, setSena] = useState('');
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handlerValor = (e) => {
        const manejarValor = parseFloat(e.target.value);
        if (!isNaN(manejarValor)) {
            setValor(manejarValor);
        }
    };

    const handlerSena = (e) => {
        const manejarSena = parseFloat(e.target.value);
        if (!isNaN(manejarSena)) {
            setSena(manejarSena);
        }
    };

    const handleSelectChange = (e) => {
        const opcionId = parseInt(e.target.value);
        setOpcionSeleccionada(data.find((opcion) => opcion.id === opcionId));
    };

    const formatoNumero = (numero) => {
        return numero.toLocaleString('es-ES');
    };

    const resultadoResta = valor - sena;

    return (
        <>
            {/* Titulo */}
            <div className='title-app'>
                <p>Calculadora Tarjetas</p>
                <img src="https://ofertas.yuhmak.com.ar/images/Yuhmak_Marca-BLANCO.svg" alt="" />
            </div>
            {/* Inputs */}
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <input className='input-valores' type="text" value={valor} onChange={handlerValor} placeholder='INGRESAR MONTO' />
                    </div>
                    <div class="col">
                        <input className='input-valores' type="text" value={sena} onChange={handlerSena} placeholder='INGRESAR ADELANTO' />
                    </div>
                    <div class="col">
                        <label className='label-resultado'>Valor a Financiar: ${formatoNumero(resultadoResta)}</label>
                    </div>
                    <div class="col">
                        <div className="container_select">
                            <select className='select-cuotas' name="" id="" onChange={handleSelectChange}>
                                <option value="">Selecciona</option>
                                {data.map((opcion) => (
                                    <option key={opcion.id} value={opcion.id}>
                                        {opcion.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Lista de resultados */}
            <div class="contenedor-principal container text-center">
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <div class="container-fluid contenedor">
                            <div className="card card-info">
                                {opcionSeleccionada && (
                                    <div className="resultados">
                                        <ul className='list-group list-group-flush'>
                                            <li className='card-title title-card'>{`${opcionSeleccionada.name}`}</li>
                                            {opcionSeleccionada.cuotas.map((cuota) => (
                                                <li className='list-group-item text-informacion' key={cuota.plazo}>
                                                {`Cuotas ${cuota.plazo}: $${formatoNumero(resultadoResta * cuota.financiacion)}`}<br />
                                                {`Saldo necesario: $${formatoNumero(resultadoResta * cuota.financiacion * cuota.plazo)}`}
                                              </li>
                                              
                                            ))}
                                            <li className='card-title'><br /></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>


        </>
    );
};

export default Calculadora;