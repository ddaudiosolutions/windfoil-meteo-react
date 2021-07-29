import { Fragment } from "react";
import { Line } from "react-chartjs-2";
import "./GraficosDemo.css";

const GraficosDemo = ({ datosMeteoGraf, rotuloGrafico }) => {
  var colors = [
    "#007bff",
    "#0097fc",
    "#333333",
    "#c3e6cb",
    "#dc3545",
    "#ed872d",
  ];
  if (!datosMeteoGraf) return null;

  const dataSetTWS = [];
  const minutos = [];

  for (let i = 0; i < datosMeteoGraf.length; i++) {
    dataSetTWS.push(datosMeteoGraf.TWS[i]);
  }
  console.log(dataSetTWS);

  for (let i = 0; i < datosMeteoGraf.length; i++) {
    minutos.push(new Date(datosMeteoGraf.TIME[i]).toTimeString().slice(0, 5));
  }

  return (
    <Fragment>
      <Line
        data={{
          labels: minutos,
          datasets: [
            {
              borderWidth: 0,
              label: "Intensidad Última Hora",
              data: dataSetTWS,
              backgroundColor: "transparent",
              borderColor: colors[1],
              pointStyle: "dash",
            },
          ],
        }}
        height={250}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 3,
                },
              },
            ],
          },
        }}
      />
    </Fragment>
  );
};

export default GraficosDemo;
