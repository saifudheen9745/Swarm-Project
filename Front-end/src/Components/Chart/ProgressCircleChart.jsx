/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import classNames from "classnames";
import Chart from "chart.js/auto";

const ProgressCircleChart = ({ percentage }) => {
  const chartRef = React.useRef(null);
  
  const options = {
    cutout: "60%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  const data = {
    labels: ["Progress"],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#10B981",'rgba(0, 0, 0, 0.12)'],
        borderWidth: 0,
        hoverOffset: 0,
      },
    ],
  };

  React.useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "doughnut",
        data,
        options,
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [data, options]);

  const chartClasses = classNames("relative","h-72","w-72");
  const chartLabelClasses = classNames("text-xl", "font-bold", "dark:text-gray-100",'text-slate-900');

  return (
    <div className={chartClasses} >
      <canvas ref={chartRef} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className={chartLabelClasses}>{percentage}%</div>
          <div className="text-sm text-gray-500 ">Completed</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircleChart;