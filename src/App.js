import './App.css';
import './components/Expenses.css'

import ExpenseItem from './components/ExpenseItem';


function App(props) 
{
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title: "Old book",
      price: 30.99
    },
    { 
      date: new Date(2023, 1, 13),
      title: 'New book',
      price: 35.99
    }
  ]

  return (
    <div className='App'>
      <div class="expenses">
          <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
          <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
      </div>
    </div>
  )
}

export default App;
