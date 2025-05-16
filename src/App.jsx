import React, { useEffect, useState } from "react";
import Income from "./Income";
import Balance from "./Balance";
import ExpenseForm from "./ExpenseForm";
import Filter from "./Filter";
import ExpenseList from "./ExpenseList";

export default function App() {
  const [income, setIncome] = useState(() => {
    const storedIncome = localStorage.getItem("income");
    return storedIncome ? JSON.parse(storedIncome) : 0;
  });

  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const [filterCategory, setFilterCategory] = useState(() => {
    const storedFilterCategory = localStorage.getItem("filterCategory");
    return storedFilterCategory ? storedFilterCategory : "All";
  });

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem("filterCategory", filterCategory);
  }, [filterCategory]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter((e) => e.category === filterCategory);

  const totalExpenses = expenses.reduce(
    (sum, e) => sum + parseFloat(e.amount),
    0
  );
  const balance = income - totalExpenses;
  return (
    <div>
      <h1>Personal finance tracker</h1>
      <Income setIncome={setIncome} />
      <Balance
        balance={balance}
        totalExpenses={totalExpenses}
        income={income}
      />
      <ExpenseForm addExpense={addExpense} />
      <Filter setFilterCategory={setFilterCategory} selected={filterCategory} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}
