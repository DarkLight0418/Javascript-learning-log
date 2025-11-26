import BoardItem from "./BoardItem";

/**
 * BoardList 컴포넌트
 * - 게시글 목록을 테이블 형태로 렌더링
 * - 부모(App 등)에서 posts 배열을 전달받아 리스트 출력
 * - 각 게시글 Row는 BoardItem 컴포넌트로 분리(단일 책임 원칙)
 * - 삭제, 수정 기능 역시 부모에서 전달받은 콜백(onDelete, onUpdate)을 그대로 넘겨줌
 */
function BoardList({ posts, onDelete, onUpdate }) {

  // ✦ 게시글이 비어 있을 경우: 리스트 대신 안내 문구 출력
  if (posts.length === 0) return <p>게시글이 없습니다 ㅜㅜ</p>;

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
        {/**
          * posts 배열을 순회하며 BoardItem 컴포넌트를 생성
          * 
          * 구조:
          * posts = [
          *   { id: 1, title: "...", content: "..." },
          *   ...
          * ]
          *
          * map()으로 각 객체를 BoardItem에 전달해 Row 구성
          * index + 1 → 화면상 번호는 1부터 시작하도록 처리
          * key={p.id} → React가 각 Row를 구분하기 위해 필요
          */}
        {posts.map((p, index) => (
          <BoardItem
            key={p.id}         // React 렌더링 최적화를 위한 고유값
            post={p}           // 현재 게시글 데이터
            index={index + 1}  // 화면에 표시할 번호
            onDelete={onDelete} // 부모에서 전달받은 삭제 콜백 함수
            onUpdate={onUpdate} // 부모에서 전달받은 수정 콜백 함수
          />
        ))}
      </tbody>
    </table>
  );
}

export default BoardList;
