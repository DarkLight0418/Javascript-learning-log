import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BoardForm from "./components/BoardForm";
import BoardItem from "./components/BoardItem";
import BoardList from "./components/BoardList";
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const BASE_URL = "http://localhost:8080/api/posts";

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error(err))
  }, [])

  /*
  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) setPosts(JSON.parse(saved));
  }, [])

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts])
*/
  const addPost = (newPost) => {
    // setPosts([...posts, { id: Date.now(), ...newPost }])
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => setPosts([...posts, data]))
  }

  const deletePost = (id) => {
    fetch(`${BASE_URL}/${id}`, { method: "DELETE" }).then(() =>
      setPosts(posts.filter((p) => p.id !== id)))
    // setPosts(posts.filter((post) => post.id !== id))
  }

  const updatePost = (id, updatePost) => {
    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatePost),
    })
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          // posts.map((p) => (p.id === id ? { ...p, ...updatePost } : p))
          posts.map((p) => (p.id === id ? data : p)))
      )
  }

  return (
    <div className="App">
      <h1>게시판</h1>
      <BoardForm onAdd={addPost} />
      <BoardList posts={posts} onDelete={deletePost} onUpdate={updatePost} />
    </div>
  )
}
export default App