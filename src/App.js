import './App.css';
import Nav from './Components/Nav';
import Todo from './Components/to-do/Todo';
import { dummyData } from './Data/dummyData';


function App() {
  return (
    <div className="App">
      <Nav />
      <Todo data={dummyData} />
    </div>
  );
}

export default App;
