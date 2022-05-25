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

  async function newDataHandler(data) {
    console.log(data);
    // I can manage pass the state upwards and when i console log it logs correct but i cant render it
  }

  return (
    <div className="App">
      <AddTodo newData={newDataHandler} />
      <Todo data={dataArray} />
    </div>
  );
}

export default App;
