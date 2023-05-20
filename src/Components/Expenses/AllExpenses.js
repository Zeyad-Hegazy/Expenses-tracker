import React, { useState } from "react";

import Card from "../Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpensesList";

import styles from "./styleComponents/AllExpenses.module.css";

const AllExpenses = (props) => {
	const [year, setYear] = useState("All");

	const filterYear = (yearPicked) => {
		setYear(yearPicked);
	};

	const filterdExpenses = props.data.filter((expense) => {
		if (year === "All") return props.data;
		else return expense.date.getFullYear() === +year;
	});

	return (
		<Card className={styles.expenses}>
			<ExpensesFilter selected={year} onSelectYear={filterYear} />
			<ExpenseChart expenses={filterdExpenses} />
			<ExpensesList data={filterdExpenses} />
		</Card>
	);
};

export default AllExpenses;
