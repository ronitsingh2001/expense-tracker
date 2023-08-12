import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((data, index) => (
        <ChartBar
          value={data.value}
          maxValue={totalMax}
          label={data.label}
          key={index}
        />
      ))}
    </div>
  );
}

export default Chart;
