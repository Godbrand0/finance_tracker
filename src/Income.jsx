import React, { useState } from "react";

export default function Income({ setIncome }) {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome(parseFloat(amount));
    setAmount("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Enter Income</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter income"
          required
        />
        <button type="submit">Set Income</button>
      </form>
    </div>
  );
}
