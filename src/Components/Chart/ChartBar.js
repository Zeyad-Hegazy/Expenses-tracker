import React from "react";

import styles from "./StyleChart/ChartBar.module.css";

const ChartBar = (props) => {
	let fillHeight = "0%";

	if (props.maxValue > 0) {
		fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
	}
	return (
		<div className={styles["chart-bar"]}>
			<div className={styles["chart-bar__inner"]}>
				<div
					className={styles["chart-bar__fill"]}
					style={{ height: fillHeight }}
				></div>
			</div>
			<div className={styles["chart-bar__label"]}>{props.label}</div>
		</div>
	);
};

export default ChartBar;
