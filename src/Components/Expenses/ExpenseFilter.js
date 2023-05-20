import React from "react";

import styles from "./styleComponents/ExpensesFilter.module.css";

const ExpensesFilter = (props) => {
	const pickYearHandler = (e) => {
		props.onSelectYear(e.target.value);
	};

	return (
		<div className={styles["expenses-filter"]}>
			<div className={styles["expenses-filter__control"]}>
				<label>Filter by year</label>
				<select value={props.selected} onChange={pickYearHandler}>
					<option value="All">All</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
