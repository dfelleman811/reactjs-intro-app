import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const valueArray = props.dataPoints.map(d => d.value);
    const maxValue = Math.max(...valueArray)
    console.log(`maxvalue: ${maxValue}`)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
