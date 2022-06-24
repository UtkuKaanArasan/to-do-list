// Components
import AddTodo from './Components/AddTodo/AddTodo';
import Todo from './Components/to-do/Todo';
// Styling
import './App.css';
//Hooks
import { useState } from 'react';
// Data
//import { dummyData } from './Data/dummyData';

function App() {

  const [dataArray, setDataArray] = useState([])

  function newDataHandler(data) {
    setDataArray((prevArray) => {
      return [...prevArray, data]
    })
  }

  function removeHandler(data) {
    setDataArray(
      dataArray.filter((item) => {
        return data !== item.id
      })
    )
  }

  return (
    <div className="App">
      <AddTodo newData={newDataHandler} />
      <Todo remove={removeHandler} data={dataArray} />
    </div>
  );
}

export default App;
