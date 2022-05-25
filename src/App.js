// Styling
import './App.css';
// Components
import AddTodo from './Components/AddTodo/AddTodo';
import Todo from './Components/to-do/Todo';
// Data
import { dummyData } from './Data/dummyData';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todo data={dummyData} />
    </div>
  );
}

export default App;
