import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

function Home() {
  return <div>Home</div>;
}

function Todo() {
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchTodo() {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const json = await response.json();
        setTodo(json);
      } catch (error) {
        console.error("Fetch error:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTodo();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading the todo</div>;

  return (
    <div>
      <h2>Todo:</h2>
      {todo ? <div>title: {todo.title}</div> : <div>Todo not found</div>}
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo/1">Todo with ID: 1</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="todo/:id" element={<Todo />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
