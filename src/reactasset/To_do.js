import React, { useState } from 'react';

function To_do() {
  // State for holding all the tasks
  const [todos, setTodos] = useState([]); // array of objects
  // State for getting the data from the input field
  const [newTodo, setNewTodo] = useState(''); // string

  function Addtodo() {
    if (newTodo.trim() !== "") {
      const newTodos = [...todos, { todo: newTodo.trim() }]; // .trim() removes extra spaces ... is spread operator
      setTodos(newTodos);
      setNewTodo('');
      console.log(newTodos);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      Addtodo();
    }
  };

  return (
    <center>
      <div className='container'>
        <h1 className='text-center display-3'>Enter your task</h1>
        <input
          type='text'
          placeholder='Enter your task...'
          className='form-control'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <br />
        <button className='btn btn-primary' onClick={Addtodo}>Save Task</button>
        <hr />
        <table className='table'>
          <thead>
            <tr>
              <th>All Tasks</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((tod, index) => (
              <tr key={index}>
                <td>{tod.todo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
}

export default To_do;