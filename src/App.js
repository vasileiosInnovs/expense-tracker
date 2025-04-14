import './App.css';
import Table from './Table';
import AddExpense from './AddExpense';
import { useState } from 'react';

function App() {
  const [rows, setRows] = useState([
    {expense: "iPhone", description: "phone", category: "tech", amount: "133100", date: "03-02-2015"},
    {expense: "farm", description: "a piece of land", category: "real estate", amount: "1500000", date: "03-02-2015"}
  ])

  function handleSubmit(newRows){
    setRows([...rows, newRows])
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
        <Table rows={rows}/>
      </section>
      </main>
    </div>
  );
} 

export default App;
