import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, setConsulta}) => {

    // state de error
    const [error, setError] = useState(false)

    //extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    //funcion que guarda en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //submit form
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        //pasarlo al componente principal
        setConsulta(true);
    }
    

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudads">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">Selecciona un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="DO">República Dominicana</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
            <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
     );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    setConsulta: PropTypes.func.isRequired
}
 
export default Formulario;