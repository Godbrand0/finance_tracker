import React from "react";

export default function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      {(expenses.length === 0) & <p>No expenses yet.</p>}
      {expenses.map((e) => (
        <div key={e.id}>
          <strong>${e.amount}</strong> - {e.category}({e.note})
        </div>
      ))}
    </div>
  );
}
