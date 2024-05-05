import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [curTodo, setCurTodo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const addTodo = async () => {
    const updatedtodolist = [...toDoList, curTodo];
    setToDoList(updatedtodolist);
    setCurTodo('');
    console.log(updatedtodolist, toDoList);
  };

  const removeTodo = async (id) => {
    console.log(id);
    const updatedtodolist = [...toDoList];
    updatedtodolist.splice(id, 1);
    setToDoList(updatedtodolist);
    setCurTodo('');
    console.log(updatedtodolist, toDoList);
  };

  return (
    <div>
      <input
        type="text"
        value={curTodo}
        onChange={(e) => {
          setCurTodo(e.target.value);
        }}
        placeholder={'Enter ToDo Item'}
      />
      <button onClick={() => addTodo()}>✔</button>
      <div>
        {toDoList.map((todo, index) => (
          <div>
            <li key={index}>{todo}</li>
            <button onClick={() => removeTodo(index)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
