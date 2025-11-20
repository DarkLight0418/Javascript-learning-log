import { Link } from "react-router-dom"

function NotFound() {
  return (<>
    <h2>Not Found</h2>
    <p>
      페이지를 찾을 수 없습니다 ㅜㅜ(잘못된 URL 예상)
      <br /><br /><br />
      <Link to="/list">목록</Link>
    </p>
  </>)
}

export default NotFound