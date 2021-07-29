import { useState, useEffect } from "react";
import { Fragment } from "react";
import "./App.css";

import { DatosMeteo } from "./components/DatosMeteo";


function App() {
  //const [datosMeteoClubs, setDatosMeteoClubs] = useState([])
  //const datosMeteo = []
  const [datosMeteocmsap, setDatosVientocmsap] = useState({});
  const [datosVientocna, setDatosVientocna] = useState({});
  //const [datosGraficoArenal, setDatosGraficoArenal] = useState({})

  const urlcmsap =
    "https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cmsap/?period=latesthour";
  const urlcnarenal =
    "https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cnarenal/?period=latesthour";

  //METEO CAN PASTILLA

  const obtenerMeteocmsap = async () => {
    const api = await fetch(urlcmsap);
    const datosMeteo = await api.json();
    setDatosVientocmsap(datosMeteo);

    setTimeout(() => {
      obtenerMeteocmsap();
    }, 100000);
  };

  // METEO CLUB NAUTICO ARENAL

  const obtenerMeteocna = async () => {
    const api2 = await fetch(urlcnarenal);
    const datosMeteo2 = await api2.json();
    setDatosVientocna(datosMeteo2);
    setTimeout(() => {
      obtenerMeteocna();
    }, 100000);
    //console.log(datosMeteo)
  };

  useEffect(() => {
    obtenerMeteocmsap();
    obtenerMeteocna();
    // meteoGrafArenal()
  }, []);

  let rotuloscmsap = "METEO WIND FOIL ON-LINE CMSAP";
  let rotuloscna = "METEO WIND FOIL ON-LINE CNA";

  let grafioCMSAP = "VIENTO ÚLTIMA HORA CMSAP";
  let grafioCNA = "VIENTO ÚLTIMA HORA CNA";

  return (
    <Fragment>
       <div className="h3 text-center bg-info rounded mt-5"> METEO WIND FOIL CMSAP </div>
        <DatosMeteo
          datosMeteo={datosMeteocmsap}          
          rotulo={rotuloscmsap}          
          rotuloGrafico = {grafioCMSAP}
          datosMeteoGraf = {datosMeteocmsap}
        />
      <div className="h3 text-center bg-warning rounded mt-5"> METEO WIND FOIL CNA </div>
        <DatosMeteo        
          datosMeteo={datosVientocna}          
          rotulo={rotuloscna}
          rotuloGrafico = {grafioCNA}
          datosMeteoGraf = {datosVientocna}
        />

        
    </Fragment>
  );
}

export default App;
