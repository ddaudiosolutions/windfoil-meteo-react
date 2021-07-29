import { Fragment } from "react"

const DatosMeteo = ({datosMeteo}) => {
    return ( 
        <Fragment>
            {/* <h2>hola {obtenerMeteo}</h2> */}

            {/* {console.log(obtenerMeteo.datosVientocmpsap.TWS)} */}

        <h2>Desde Datos Mteo</h2>
        <h3>VIENTO: {datosMeteo.TWS} kt</h3>
        <h3>RACHA: {datosMeteo.TWS_GUST} kt</h3>
        <h3>DIRECCION VIENTO: {datosMeteo.TWD}</h3>

        </Fragment>
        
     );
}
 
export default DatosMeteo;