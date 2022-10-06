import React, { useState, useEffect } from "react";
import "./Expense.css";

function Expense() {
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [particular, setParticular] = useState("");

  useEffect(() => {
    if (localStorage.getItem("expenses")) {
      const storedList = JSON.parse(localStorage.getItem("expenses"));
      setExpenses(storedList);
    }
  }, []);

  const addExpense = () => {
    if (expense) {
      const newExpense = {
        id: new Date().getTime().toString(),
        amount: expense,
        title: particular,
      };
      setExpenses([...expenses, newExpense]);
      localStorage.setItem(
        "expenses",
        JSON.stringify([...expenses, newExpense])
      );
      setExpense("");
      setParticular("");
    }
    console.log(expenses);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(expense, particular);
  };

  const handleDelete = (expense) => {
    const deleted = expenses.filter((t) => t.id !== expense.id);
    setExpenses(deleted);
    localStorage.setItem("expenses", JSON.stringify(deleted));
  };

  return (
    <div className="expense-container">
      <form onSubmit={onSubmit} className="form-container">
        <h2>EXPENSE</h2>
        <label>
          Amount:
          <input
            id="expense"
            name="expense"
            type="number"
            value={expense}
            className="user-input"
            onChange={(e) => setExpense(e.target.value)}
          />
        </label>
        <label>
          Particular:
          <input
            id="particular"
            name="particular"
            type="text"
            value={particular}
            className="user-input"
            onChange={(e) => setParticular(e.target.value)}
          />
        </label>
        <div className="user-input-button-container">
          <button className="add-btn" onClick={addExpense}>
            Add expense
          </button>
        </div>
      </form>
      <div className="user-expense-header">
        <h2>Cost</h2>
        <h2>Particular</h2>
        <h2></h2>
      </div>
      <div className="expense-list">
        {expenses.map((expense) => (
          <React.Fragment key={expense.id}>
            <div className="user-expense-container">
              <h2 className="user-expense-amount">₱{expense.amount}.00</h2>
              <h2 className="user-expense-amount">{expense.title}</h2>
              <div className="user-expense-delete-container">
                <button
                  className="user-expense-delete"
                  onClick={() => handleDelete(expense)}
                >
                  delete
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Expense;
