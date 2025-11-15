import BoardItem from "./BoardItem";

function BoardList({ posts, onDelete, onUpdate }) {
  if (posts.length === 0) return <p>게시글이 없습니다...</p>

  return (
    <table border="1" style={{ width: "100%", marginTop: "1rem" }}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((p, index) => (
          <BoardItem
            key={p.id}
            post={p}
            index={index + 1}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </tbody>
    </table>
  )
}

export default BoardList