import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({result}) => {

    //extraer los valores
    const {name, main} = result;

    //evitar que se recargue solo
    if(!name) return null;
    
    //grados Kelvin
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de  {name} es:</h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> {/*simbolo de grado centigrados*/} &#x2103;</span>
                </p>
                <p> Temperatura Maxima: 
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> {/*simbolo de grado centigrados*/} &#x2103;</span>
                </p>
                <p> Temperatura Minima: 
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> {/*simbolo de grado centigrados*/} &#x2103;</span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    result: PropTypes.object.isRequired
}

export default Clima;