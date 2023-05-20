import React, { useState } from "react";

import ExpensesForm from "./ExpensesForm";

import styles from "./StyleForm/NewExpenses.module.css";

const NewExpenses = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const objExpenseHandler = (expenseObject) => {
		const expense = {
			...expenseObject,
			id: Math.random().toFixed(2),
		};

		props.onSendExpense(expense);

		setIsEditing(false);
	};

	const addExpenseHandler = () => {
		setIsEditing(true);
	};

	const cancelAddExpense = () => {
		setIsEditing(false);
	};

	return (
		<div className={styles["new-expense"]}>
			{!isEditing && <button onClick={addExpenseHandler}>Add Expense</button>}
			{isEditing && (
				<ExpensesForm
					onSubmitExpense={objExpenseHandler}
					onCancel={cancelAddExpense}
				/>
			)}
		</div>
	);
};

export default NewExpenses;
