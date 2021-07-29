import { Fragment } from "react"
import './DatosMeteo.css'
import styled from "styled-components"
import GraficosDemo from "./GraficosDemo"


const H2Viento = styled.h2`
    text-align: center;
    font-size: 55px;
    font-family: Lato;
    `


export const DatosMeteo = ({datosMeteo, rotulo, rotuloGrafico, datosMeteoGraf}) => {

   
      if(!datosMeteo.LATEST_DATA) return null;
   // const {TWS, TWS_GUST, TWD} = datosMeteocna.LATEST_DATA

    // PUNTOS CARDINALES PARA DIRECCION DEL VIENTO
    var degToCard = function(deg){
        if (deg>11.25 && deg<=33.75){
          return "NNE";
        }else if (deg>33.75 && deg<=56.25){
          return "NE";
        }else if (deg>56.25 && deg<=78.75){
          return "ENE";
        }else if (deg>78.75 && deg<=101.25){
          return "E";
        }else if (deg>101.25 && deg<=123.75){
          return "ESE";
        }else if (deg>123.75 && deg<=146.25){
          return "SE";
        }else if (deg>146.25 && deg<=168.75){
          return "SSE";
        }else if (deg>168.75 && deg<=191.25){
          return "S";
        }else if (deg>191.25 && deg<=213.75){
          return "SSW";
        }else if (deg>213.75 && deg<=236.25){
          return "SW";
        }else if (deg>236.25 && deg<=258.75){
          return "WSW";
        }else if (deg>258.75 && deg<=281.25){
          return "W";
        }else if (deg>281.25 && deg<=303.75){
          return "WNW";
        }else if (deg>303.75 && deg<=326.25){
          return "NW";
        }else if (deg>326.25 && deg<=348.75){
          return "NNW";
        }else{
          return "N"; 
        }
      }
      
    return ( 
        <Fragment >
        <div className='container mt-3'>
            {/* <div className="h3 text-center bg-info rounded"> {rotulo} </div> */}
                <div className="row row-cols-1 row-cols-md-2 g-4 d-flex">
                    <div className='col'>
                        <div className='card' style={{height: '255px'}}>
                           
                              <div className='card-body'>
                                {/* <h5 className="card-title bg-info rounded">{rotulo}</h5>   */}
                                    {/* <h5 className="card-title bg-info rounded">Condiciones de Viento</h5>   */}
                                        <div className='col-12 align-self-end'>  
                                              <h2 className="mt-5"> </h2>                                   
                                            <div className='card bg-info'>   
                                                <H2Viento> {datosMeteo.LATEST_DATA.TWS} kn</H2Viento>
                                                <h4>Racha: {datosMeteo.LATEST_DATA.TWS_GUST} kn</h4>
                                                <h4>Dirección: {datosMeteo.LATEST_DATA.TWD}º  {degToCard (datosMeteo.LATEST_DATA.TWD)}</h4>                            
                                            </div>  
                                        </div> 
                                             
                                  
                                </div>
                                          
                           
                            
                        </div>
                    </div>

                    <div className='col'>
                        <div className='card card-block h-100 rounded' style={{height: '255px'}}>
                            <div className='card-body'>
                            {/* <h5 className="card-title bg-info rounded">{rotuloGrafico}</h5>                                   */}
                                <div className='container'>         
                                    <div className='card-body text-center'>   
                                        <GraficosDemo 
                                        datosMeteoGraf = {datosMeteoGraf}/>                            
                                    </div>       
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
        

        </Fragment>
        
     );
}
 
