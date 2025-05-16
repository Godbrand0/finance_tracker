import React from "react";

export default function Balance({ income, totalExpenses, balance }) {
  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
}
