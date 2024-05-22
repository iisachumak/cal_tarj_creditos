import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copy from 'copy-to-clipboard';
import { data } from './data';

import './calculadora.css'

const Calculadora = () => {
    const [valor, setValor] = useState('');
    const [sena, setSena] = useState('');
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

    const handlerValor = (e) => {
        const inputText = e.target.value;

        const manejarValor = inputText.lastIndexOf(',') !== inputText.length - 2
            ? parseFloat(inputText.replace(',', '.'))
            : inputText;

        setValor(manejarValor);
    };

    const handlerSena = (e) => {
        const inputText = e.target.value;

        const manejarSena = inputText.lastIndexOf(',') !== inputText.length - 1
            ? parseInt(inputText.replace(',', '.'))
            : inputText;

        setSena(manejarSena);
    };

    const handleSelectChange = (e) => {
        const opcionId = parseInt(e.target.value);
        setOpcionSeleccionada(data.find((opcion) => opcion.id === opcionId));
    };

    const formatoNumero = (numero) => {
        return numero.toLocaleString('es-ES');
    };

    let resultadoResta = valor - sena;
    

    const handleCopyToClipboard = (text) => {
        copy(text);
        toast.success('Texto copiado al portapapeles');
    };

    return (
        <>
            {/* Inputs */}
            <div class="contenedor-input container text-center">
                <div class="row">
                    <div class="col">
                        <input className='input-valores' type="number" value={valor} onChange={handlerValor} placeholder='INGRESAR MONTO' />
                        <input className='input-valores' type="number" value={sena} onChange={handlerSena} placeholder='INGRESAR ADELANTO' />
                    </div>
                    <div class="col ">
                        <label className='label-resultado'>Valor a Financiar: ${formatoNumero(resultadoResta)}</label>
                    </div>
                    <div class="col ">
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
                    <div class="col ">
                    </div>
                    <div class="col ">
                        <div class="container-fluid contenedor">
                            <div className="card card-info">
                                {opcionSeleccionada && (
                                    <div className="resultados">
                                        <ul className='list-group list-group-flush'>
                                            <li className='card-title title-card'>{`${opcionSeleccionada.name}`}</li>
                                            {opcionSeleccionada.cuotas.map((cuota) => (
                                                <li className='list-group-item text-informacion' key={cuota.plazo}>
                                                    {`Cuotas ${cuota.plazo}: $${Math.round(resultadoResta * cuota.financiacion).toLocaleString()}`}<br />
                                                    {`Saldo necesario: $${Math.round(resultadoResta * cuota.financiacion * cuota.plazo).toLocaleString()}`}
                                                    <br />
                                                    <button className='btn btn-success mt-1' onClick={() =>
                                                        handleCopyToClipboard(`Cuotas ${cuota.plazo}: $${Math.round(resultadoResta * cuota.financiacion).toLocaleString()}Margen necesario: $${formatoNumero(resultadoResta * cuota.financiacion * cuota.plazo)}`)
                                                    }>
                                                        Copiar
                                                    </button>
                                                </li>
                                            ))}
                                            <li className='card-title'><br /></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Calculadora;