import React ,{useState} from 'react';
import './App.css';
import List from './components/List';
import Data from './components/Data';

function App() {
  const [people , setPeople] = useState(Data)
  return (
    <main className="App">
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people ={people} />
        < button onClick={() => setPeople([])}> Clear all</button>
      </section>
    </main>
  );
}

export default App;
