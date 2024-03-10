// import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 1. To-do list 생성
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList((current) => {
      return [
        ...current,
        {
          id: new Date().getTime(),
          isCompleted: false,
          value: inputValue,
        },
      ];
    });

    setInputValue("")
  };

  // 2. Complete
  const handleCompleteClick = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList[index].isCompleted = true;
      return newList;
    });
  };

  // 3. remove
  const handleRemoveClick = (index) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <div>
      <ol id="todo-list">
        {todoList.map((item, index) => (
          <li className={item.isCompleted === true ? "completed" : ""}>
            <span>{item.value}</span>
            <button onClick={() => handleCompleteClick(index)}>complete</button>
            <button onClick={() => handleRemoveClick(index)}>delete</button>
          </li>
        ))}
      </ol>
      <form id="create" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default App;
