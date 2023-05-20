import React from "react";

import styles from "./styleComponents/ExpensesList.module.css";

import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
	if (props.data.length === 0)
		return (
			<h2 className={styles["expenses-list__fallback"]}>Found No Expenses</h2>
		);

	return (
		<ul className={styles["expenses-list"]}>
			{props.data.map((_, i) => (
				<ExpenseItem
					key={props.data[i].id}
					date={props.data[i].date}
					title={props.data[i].title}
					amount={props.data[i].amount}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
