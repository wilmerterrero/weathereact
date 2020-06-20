import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  //state del form
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  // state de consulta API
  const [consulta, setConsulta] = useState(false);

  //resultado de la consulta a la API
  const [result, setResult] = useState({});

  //state de error
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if(consulta){
        const appId = '18e44b3444c0bb8293d7a6feddf338eb';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        //pasando data al state principal
        setResult(result);
        //para proximas consultas
        setConsulta(false);

        //catch de errores
        if(result.cod === '404'){
          setError(true);
        } else{
          setError(false);
        }
      }
    }
    consultarAPI();

    /* QUITAR ERROR DE DEPENDENCIAS  */
    // eslint-disable-next-line
  }, [consulta]);

  //carga condicional de componentes
  let componenteClima;
  if(error){
    componenteClima = <Error mensaje="No hay resultados" />
  }else{
    componenteClima =  <Clima 
                        result={result}
                        />
  }

  return (
    <Fragment>
      <Header 
        titulo='Weather React App'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m6 s12">
              {componenteClima}
            </div>
          </div>       
        </div>
      </div>
    </Fragment>
  );
}

export default App;
