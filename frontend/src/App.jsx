import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/todos";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API);
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (e) => {
    e?.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post(API, { title });
      setTitle("");
      await fetchTodos();
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await axios.put(`${API}/${id}`, { completed: !completed });
      await fetchTodos();
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

  const deleteTodo = async (id, e) => {
    e.stopPropagation();
    try {
      await axios.delete(`${API}/${id}`);
      await fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo(e);
    }
  };

  return (
    <div className="app-container">
      <div className="container">
        <header className="header">
          <h1>TaskMaster</h1>
          <p>Organize your tasks with ease</p>
        </header>

        <div className="todo-card">
          <form onSubmit={addTodo} className="todo-form">
            <div className="form-group">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What needs to be done?"
                className="todo-input"
                autoFocus
              />
              <button
                type="submit"
                disabled={!title.trim()}
                className="add-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add
              </button>
            </div>
          </form>

          {isLoading ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <p className="loading-text">Loading tasks...</p>
            </div>
          ) : todos.length === 0 ? (
            <div className="empty-container">
              <svg xmlns="http://www.w3.org/2000/svg" className="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <h3 className="empty-title">No tasks yet</h3>
              <p className="empty-subtitle">Add a task to get started</p>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li
                  key={todo._id}
                  className="todo-item"
                  onClick={() => toggleTodo(todo._id, todo.completed)}
                >
                  <div className="todo-content">
                    <div className={`checkbox ${todo.completed ? 'checked' : ''}`}>
                      {todo.completed && (
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`todo-title ${todo.completed ? 'completed' : ''}`}>
                      {todo.title}
                    </span>
                  </div>
                  <button
                    onClick={(e) => deleteTodo(todo._id, e)}
                    className="delete-button"
                    aria-label="Delete task"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {todos.length > 0 && (
            <div className="todo-footer">
              {todos.filter(t => t.completed).length} of {todos.length} tasks completed
            </div>
          )}
        </div>

        <footer className="app-footer">
          <p>Click to mark as complete • Created with React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
