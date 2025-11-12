import { useState } from "react";

function BoardForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", content: "" })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    onAdd(form);
    setForm({ title: "", content: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="제목"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="내용"
        value={form.content}
        onChange={handleChange}
      ></textarea>
      <button type="submit">등록</button>
    </form>
  )
}

export default BoardForm