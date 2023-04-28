import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const maxVal = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={maxVal}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
