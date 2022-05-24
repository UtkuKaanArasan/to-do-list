import './App.css';
import Nav from './Components/Nav';
import Todo from './Components/to-do/Todo';

const dummyData = [
  {
    id: 1,
    title: "Something to do",
    done: false
  },
  {
    id: 2,
    title: "Something to do 2",
    done: true
  },
]

function App() {
  return (
    <div className="App">
      <Nav />
      <Todo data={dummyData} />
    </div>
  );
}

export default App;
