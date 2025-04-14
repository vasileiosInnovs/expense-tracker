import './App.css';
import Table from './Table';
import AddExpense from './AddExpense';
import { useState } from 'react';

function App() {
  const [rows, setRows] = useState([
    {expense: "iPhone", description: "phone", category: "tech", amount: "133100", date: "03-02-2015", id: "400i4"},
    {expense: "farm", description: "a piece of land", category: "real estate", amount: "1500000", date: "03-02-2015", id: "93905"}
  ])

  function handleSubmit(newRow){
    setRows([...rows, { ...newRow, id: crypto.randomUUID() }])
  }

  function handleDeleteRow(targetId) {
    setRows(rows.filter((row) => row.id !== targetId));
  }
  
  
  return (
    <div className="App">
      <header className='app-header'>
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and life. Record,
          categorise and analyse your spending
        </p>
      </header>
      <main className='main-content'>
      <section className='form-section'>
        <AddExpense 
          onSubmit={handleSubmit}
        />
      </section>
      <section className='table-section'>
        <Table 
          rows={rows}
          deleteRow={handleDeleteRow}
        />
      </section>
      </main>
    </div>
  );
} 

export default App;
