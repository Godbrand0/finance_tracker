import React from "react";

export default function Filter({ setFilterCategory }) {
  const categories = ["All", "Food", "Transport", "Bills", "Shopping", "Other"];
  return (
    <div>
      <h3>Filter by Category</h3>
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
