This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Simple Weather APP using the API `Open Weather`
Feautures: <br />
* Calling `Open Weather API`: <br />
Example of Calling `Open Weather API`: <br />
```js
const consultarAPI = async () => {
   const appId = APIKEY;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
   const response = await fetch(url);
   const result = await response.json();
}
```
* Form Validation <br />
* Error Control <br />
* React Conditional Rendering <br />
Example of `React Conditional Rendering`: <br />
```js
 let componenteClima;
  if(error){
    componenteClima = <Error mensaje="No hay resultados" />
  }else{
    componenteClima =  <Clima 
                        result={result}
                        />
  }
  ```
  
