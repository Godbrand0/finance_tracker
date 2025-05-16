import React, { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ amount, category, note, id: Date.now() });

    setAmount("");
    setCategory("");
    setNote("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(target.value)}
          placeholder="Note (optional)"
        />
        <button type="submit">Add Expenses</button>
      </form>
    </div>
  );
}
