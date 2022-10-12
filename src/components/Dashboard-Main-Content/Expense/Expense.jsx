import React, { useState } from "react";
import "./Expense.css";
import trash from "../../../assets/trash.png";
import edit from "../../../assets/edit.png";
import check from "../../../assets/check.png";

function Expense() {
  const [expense, setExpense] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [particular, setParticular] = useState("");
  const [editing, setEditing] = useState(-1);
  const [editAmount, setEditAmount] = useState("");
  const [editTitle, setEditTitle] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("expenses")) {
  //     const storedList = JSON.parse(localStorage.getItem("expenses"));
  //     setExpenses(storedList);
  //   }
  // }, []);

  const userExpenses = JSON.parse(localStorage.getItem("expenses"));

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
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = (expense) => {
    const deleted = expenses.filter((t) => t.id !== expense.id);
    setExpenses(deleted);
    localStorage.setItem("expenses", JSON.stringify(deleted));
  };

  const handleEdit = (expense) => {
    setEditing(expense.id);
    setEditAmount(expense.amount);
    setEditTitle(expense.title);
  };

  const handleUpdate = (expense) => {
    const updatedList = userExpenses.map((xpn) => {
      if (xpn.id === expense.id) {
        return { ...xpn, amount: editAmount, title: editTitle };
      }
      return xpn;
    });
    setExpenses(updatedList);
    setEditing(-1);
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
            min="0"
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
              <div className="user-expense-amount">
                {editing === expense.id ? (
                  <input
                    className="input-edit"
                    type="text"
                    value={editAmount}
                    min="0"
                    onChange={(e) => setEditAmount(e.target.value)}
                  />
                ) : (
                  <p className="input-result">₱{expense.amount}</p>
                )}
              </div>
              <div className="user-expense-amount">
                {editing === expense.id ? (
                  <input
                    className="input-edit"
                    type="text"
                    // defaultValue={expense.title}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                ) : (
                  <p className="input-result">{expense.title}</p>
                )}
              </div>
              <div className="user-expense-delete-container">
                <div className="user-expense-buttons">
                  <button className="user-expense-edit">
                    {editing === expense.id ? (
                      <img
                        className="check-logo"
                        src={check}
                        alt="check logo"
                        onClick={() => handleUpdate(expense)}
                      />
                    ) : (
                      <img
                        className="edit-logo"
                        src={edit}
                        alt="pencil logo"
                        onClick={() => handleEdit(expense)}
                      />
                    )}
                  </button>
                  <button
                    className="user-expense-delete"
                    onClick={() => handleDelete(expense)}
                  >
                    <img src={trash} className="trash-logo" alt="trash logo" />
                  </button>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Expense;
