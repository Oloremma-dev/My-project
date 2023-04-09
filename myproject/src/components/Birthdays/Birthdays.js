import React ,{useState} from 'react';
import './Birthdays.css';
import List from './List';
import Data from './Data';
import {  FaChevronRight } from "react-icons/fa";

function Birthdays() {
  const [people , setPeople] = useState(Data)
  return (
    <main className="App">
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people ={people} />
        < button onClick={() => setPeople([])}><FaChevronRight /> Clear all</button>
      </section>
    </main>
  );
}

export default Birthdays;
