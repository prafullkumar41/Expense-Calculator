import React, { useState } from 'react';
import './App.css';
import UpperBlock from './components/upperBlock';
import LowerBlock from './components/lowerBlock';

function App() {
  const [total, setTotal] = useState(0)
  const [inputVal, setInputVal] = useState('')
  const [transaction, setTransaction] = useState([])


  const handleClick = (type, value) => {
    if (value) {
      if (type === 'Add') {
        setTotal(total + parseInt(value))
      } else {
        setTotal(total - parseInt(value))
      }
      let date = new Date().toLocaleString()
      setTransaction(old => [...old,{date,value, type}] );
      setInputVal('')
    }
  }


  return (
    <div className="App">
      <div className="App-header">
        <h1>Expense Calculator</h1>
      </div>
      <div className="block">
      <h2>Balance : <span className='total'>{total}</span> </h2>
        <UpperBlock clickButton={handleClick} setInputVal={setInputVal} inputVal={inputVal} />
      </div>
      {
      transaction.length > 0 &&
      <div className="lower-block">
        <LowerBlock transaction={transaction} />
      </div>
      }
    </div>
  );
}

export default App;
