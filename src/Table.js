import React, { useState, useMemo } from "react";
import './Table.css'

function Table({ rows }) {
  const [searchTerm, setSearchTerm] = useState("");

  const rowsWithId = useMemo(() => {
    return rows.map((row) => ({
      ...row,
      id: crypto.randomUUID(),
    }));
  }, [rows]);

  const filteredRows = rowsWithId.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search expenses..."
        className="form-input search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table-container custom-table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row) => (
            <tr key={row.id}>
              <td>{row.expense}</td>
              <td>{row.description}</td>
              <td>{row.category}</td>
              <td>{row.amount}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
