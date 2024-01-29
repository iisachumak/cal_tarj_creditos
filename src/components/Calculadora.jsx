import { useState } from 'react';
import { data } from './data';

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
            {/* Inputs */}
            <div className="cointer_input">
                <input type="text" value={valor} onChange={handlerValor} />
                <input type="text" value={sena} onChange={handlerSena} />
                <p>Valor a Financiar: ${formatoNumero(resultadoResta)}</p>
            </div>
            {/* Container */}
            <div className="container_select">
                <select name="" id="" onChange={handleSelectChange}>
                    <option value="">Selecciona</option>
                    {data.map((opcion) => (
                        <option key={opcion.id} value={opcion.id}>
                            {opcion.name}
                        </option>
                    ))}
                </select>
            </div>
            {/* Lista de resultados */}
            {opcionSeleccionada && (
                <div className="resultados">
                    <ul>
                        <li>{`${opcionSeleccionada.name}:`}</li>
                        <ul>
                            {opcionSeleccionada.cuotas.map((cuota) => (
                                <li key={cuota.plazo}>{`Cuotas ${cuota.plazo}: $${formatoNumero(resultadoResta * cuota.financiacion)} - Saldo necesario: $${formatoNumero(resultadoResta * cuota.financiacion * cuota.plazo)}`}</li>
                            ))}
                        </ul>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Calculadora;