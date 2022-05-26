// Styling
import { useState } from 'react';
import './App.css';
// Components
import AddTodo from './Components/AddTodo/AddTodo';
import Todo from './Components/to-do/Todo';
// Data
import { dummyData } from './Data/dummyData';

function App() {

  const [dataArray, setDataArray] = useState([])

  function newDataHandler(data) {
    setDataArray((prevArray) => {
      return [...prevArray, data]
    })
  }

  return (
    <div className="App">
      <AddTodo newData={newDataHandler} />
      <Todo data={dataArray} />
    </div>
  );
}

export default App;
