import logo from './logo.svg';
import './App.css';
import Table from './Table';
import AddExpense from './AddExpense';
import { useState } from 'react';

function App() {
  const [rows, setRow] = useState([
    {expense: "iPhone", description: "phone", category: "tech", amount: "133,100", date: "03/02/2015"},
    {expense: "farm", description: "a piece of land", category: "real estate", amount: "1,500,000", date: "03/02/2015"},
    {expense: "trip", description: "trip out", category: "vacation", amount: "2,000,000", date: "03/02/2015"}
  ])
  
  return (
    <div className="App">
      <header >
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and life. Record,
          categorise and analyse your spending
        </p>
      </header>
      <section>
        <AddExpense />
      </section>
      <section>
        <Table rows={rows}/>
      </section>
    </div>
  );
} 

export default App;
