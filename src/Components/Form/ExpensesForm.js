import React, { useState, useRef } from "react";

import styles from "./StyleForm/ExpensesForm.module.css";

const ExpensesForm = (props) => {
	const title = useRef();
	const amount = useRef();
	const date = useRef();

	const [formValidity, setFormValidity] = useState(true);

	const classForValidity = `${styles["new-expense__control"]} ${
		!formValidity ? styles.isValid : ""
	}`;

	const submitHandler = (e) => {
		e.preventDefault();

		if (
			title.current.value === "" ||
			amount.current.value === "" ||
			date.current.value === ""
		) {
			setFormValidity(false);
			return;
		}

		setFormValidity(true);

		const expenses = {
			title: title.current.value,
			amount: +amount.current.value,
			date: new Date(date.current.value),
		};

		props.onSubmitExpense(expenses);

		title.current.value = amount.current.value = date.current.value = "";
	};

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className={styles["new-expense__controls"]}>
					<div className={classForValidity}>
						<label>Tilte</label>
						<input type="text" ref={title} />
					</div>
					<div className={classForValidity}>
						<label>Amount</label>
						<input type="number" min="0.01" step="0.01" ref={amount} />
					</div>
					<div className={classForValidity}>
						<label>Date</label>
						<input type="date" min="2019-01-01" max="2023-12-31" ref={date} />
					</div>
				</div>
				<div className={styles["new-expense__actions"]}>
					<button onClick={props.onCancel}>Cancel</button>
					<button type="submit">Add Expense</button>
				</div>
			</form>
		</div>
	);
};

export default ExpensesForm;
