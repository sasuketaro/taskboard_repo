import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addTask() {
    const text = inputValue.trim();
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setInputValue('');
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask();
  }

  return (
    <div className="app">
      <h1 className="app-title">タスクボード</h1>

      <div className="input-area">
        <input
          type="text"
          className="task-input"
          placeholder="タスクを入力..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="add-button" onClick={addTask}>追加</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              className="task-checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className="task-text">{task.text}</span>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>削除</button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty-message">タスクがありません。追加してみましょう！</p>
      )}
    </div>
  );
}

export default App;
