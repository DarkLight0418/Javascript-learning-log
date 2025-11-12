import { useState } from "react";

function BoardItem({ post, index, onDelete, onUpdate }) {

  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({
    title: post.title,
    content: post.content,
  })

  const handleSave = () => {
    onUpdate(post.id, edited)
    setIsEditing(false)
  }

  return (
    <tr>
      <td>{index}</td>
      <td>
        {isEditing ? (
          <input
            value={edited.title}
            onChange={(e) =>
              setEdited({ ...edited, title: e.target.value })
            }
          />
        ) : (
          post.title
        )}
      </td>
      <td>
        {isEditing ? (
          <textarea
            value={edited.content}
            onChange={(e) =>
              setEdited({ ...edited, content: e.target.value })
            }
          ></textarea>
        ) : (
          post.content
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>수정</button>
            <button onClick={() => onDelete(post.id)}>삭제</button>
          </>
        )}
      </td>
    </tr>
  )
}

export default BoardItem