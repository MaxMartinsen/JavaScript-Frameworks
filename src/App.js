import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css'

function Home() {
  return <div>Home</div>;
}

function Post() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Better error handling
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error); // Adjusted for clarity and best practices
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading the post</div>; // More informative error message
  }

  return (
    <div>
      <div>userId: {data.userId}</div>
      <div>id: {data.id}</div>
      <div>title: {data.title}</div>
      <div>body: {data.body}</div>
    </div>
  );
}


function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post/1">Post with ID: 1</Link>
        </li>
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
          <Route path="post/:id" element={<Post />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;