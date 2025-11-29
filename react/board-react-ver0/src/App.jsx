import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BoardForm from "./components/BoardForm";
import BoardItem from "./components/BoardItem";
import BoardList from "./components/BoardList";
import LoginForm from "./components/LoginForm";
import './App.css'
import { Button } from "@mui/material";

function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const BASE_URL = "http://localhost:8080/api/posts"

  useEffect(() => {
    const savedUser = sessionStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogin = (email, password) => {
    // NOTE: 지금은 백엔드 연동 전, 프론트 단에서 임시 로그인 구현
    // 나중에 Spring Boot 로그인 API로 바꿀 수 있음
    if (email === "test@test.com" && password === "0000") {
      const userObj = { email, name: "테스트유저" }
      sessionStorage.setItem("user", JSON.stringify(userObj))
      setUser(userObj)
      alert("로그인 성공")
    } else {
      alert("이메일 또는 비밀번호가 올바르지 않습니다.")
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user")
    setUser(null)
  }

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
      {!user ? (
        < LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <h2>{user.name}님 환영합니다 </h2>
          <Button onClick={handleLogout} style={{ marginBotton: "20px" }}>
            로그아웃
          </Button>

          <h1>게시판</h1>
          <BoardForm onAdd={addPost} />
          <BoardList posts={posts} onDelete={deletePost} onUpdate={updatePost} />
        </>
      )}
    </div>
  )
}
export default App