import logo from './logo.svg';
import './App.css';
import AddExpense from './AddExpense';

function App() {
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
      
    </div>
  );
} 

export default App;
