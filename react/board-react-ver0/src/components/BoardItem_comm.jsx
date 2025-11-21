import { useState } from "react";
import { Button } from "@mui/material";

/**
 * BoardItem 컴포넌트
 * - 개별 게시글(Row)을 렌더링
 * - 수정/삭제 기능을 담당
 * - 부모 컴포넌트로부터 post, onDelete, onUpdate 콜백을 전달받음
 */
function BoardItem({ post, index, onDelete, onUpdate }) {

  // ✦ 현재 행이 "수정 모드"인지 여부
  const [isEditing, setIsEditing] = useState(false);

  // ✦ 수정 중인 임시 데이터 상태
  const [edited, setEdited] = useState({
    title: post.title,
    content: post.content,
  });

  /**
   * 저장 버튼 클릭 시 호출되는 함수
   * - 부모의 onUpdate(post.id, 수정데이터) 호출
   * - 수정 모드를 종료
   */
  const handleSave = () => {
    onUpdate(post.id, edited);   // 부모에게 업데이트 요청
    setIsEditing(false);         // 수정 모드 비활성화
  };

  return (
    <tr>
      {/* 게시글 번호 */}
      <td>{index}</td>

      {/* 제목 영역 */}
      <td>
        {isEditing ? (
          // 수정 중일 때: input으로 바꿔서 실시간 입력값 반영
          <input
            value={edited.title}
            onChange={(e) =>
              setEdited({ ...edited, title: e.target.value })
            }
          />
        ) : (
          // 일반 모드일 때: 그냥 출력
          post.title
        )}
      </td>

      {/* 내용 영역 */}
      <td>
        {isEditing ? (
          // 수정 중일 때: textarea로 변경
          <textarea
            value={edited.content}
            onChange={(e) =>
              setEdited({ ...edited, content: e.target.value })
            }
          ></textarea>
        ) : (
          // 일반 모드: 텍스트 출력
          post.content
        )}
      </td>

      {/* 수정 / 삭제 버튼 영역 */}
      <td>
        {isEditing ? (
          // 수정 모드일 때: "저장 / 취소" 버튼 노출
          <>
            <button onClick={handleSave}>저장</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
          </>
        ) : (
          // 일반 모드일 때: "수정 / 삭제" 버튼 노출
          <>
            <Button variant="text" onClick={() => setIsEditing(true)}>
              수정
            </Button>
            <Button variant="outlined" onClick={() => onDelete(post.id)}>
              삭제
            </Button>
          </>
        )}
      </td>
    </tr>
  );
}

export default BoardItem;
