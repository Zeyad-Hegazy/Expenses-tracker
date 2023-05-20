import React from "react";

import ChartBar from "./ChartBar";

import styles from "./StyleChart/Chart.module.css";

const Chart = (props) => {
	const allVluesInArr = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMaxmium = Math.max(...allVluesInArr);

	return (
		<div className={styles.chart}>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaxmium}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
