import './App.css';

import ExpenseItem from './components/ExpenseItem';


function App(props) 
{
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title: "",
      price: 30.99
    },
    { 
      date: new Date(2023, 1, 13),
      title: 'Newer book',
      price: 31.99
    }
  ]

  return (
    <div className='App'>
      <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expenses[1]}></ExpenseItem>
    </div>
  )
}

export default App;
