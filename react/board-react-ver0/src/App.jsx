import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) setPosts(JSON.parse(saved));
  }, [])

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts])

  const addPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }])
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const updatePost = (id, updatePost) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, ...updatePost } : p))
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