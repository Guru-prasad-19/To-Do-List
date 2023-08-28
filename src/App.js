import './App.css';
import { useState } from 'react';

function App() {
  const [todo,setTodo] =useState([]);
  const [input,setInput] =useState('');
  const addTodo = ()=>{
    setTodo([...todo,input]);
    setInput('');
  }
  const valueChange=(e)=>{
    console.log(e.target.value);
    setInput(e.target.value);
  }
  return (
    <div>
      <div className='todo'>
        <h3>TODO</h3>
        <form>
          <div className='division'>
            <input onChange={valueChange}></input>
            <button type='submit' disabled={!input} onClick={addTodo}>Add</button>
          </div>
        </form>
      </div>
      <div className='list'>
          {todo.map((val)=>{
            return <ul>👉{val}</ul>
          })}
      </div>
    </div>
  );
}

export default App;
