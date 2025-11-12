// ✅ HTML 문서가 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {

    // [1] teacher.jsp 페이지에서 subject(과목명) 값을 data 속성으로 가져옴
    // 예: <div id="teacher" data-subject="MATH"></div> 라면 teacherJSP = "MATH"
    const teacherJSP = document.getElementById("teacher").dataset.subject;

    // [2] 서버로 보낼 파라미터 객체 생성 (폼 데이터 형식)
    // fetch의 body로 전달될 URLSearchParams는 application/x-www-form-urlencoded 형식에 적합
    const params = new URLSearchParams();
    params.append("subject", teacherJSP);

    // [3] 서버에 과목별 선생님 목록 요청
    // URL 예시: /api/teachers/subject/MATH
    // POST 방식으로 과목명을 전달 (본문 body에 포함)
    fetch(`/api/teachers/subject/${teacherJSP}`, {
        method: "POST", // 데이터 전송 방식
        headers: { "Content-Type": "application/x-www-form-urlencoded" }, // 요청 헤더 지정
        body: params // 본문(body)에 파라미터 전송
    })
        // [4] 서버 응답을 JSON 형태로 변환
        .then(res => res.json())

        // [5] JSON 변환 완료 후 실제 데이터 처리
        .then(json => {
            console.log("📦 서버 응답:", json); // 전체 응답 로그
            console.log("👩‍🏫 선생님 수:", json.data?.length); // 받은 선생님 수 출력
            renderSubjectTeachers(json.data); // 렌더링 함수 호출
        })

        // [6] 요청 실패 시 콘솔에 에러 출력
        .catch(err => console.log("관련 선생님 정보 불러오기 실패 : ", err));


    // ==========================================================
    // ✅ [함수] renderSubjectTeachers()
    // 서버에서 받은 'teachers' 배열 데이터를 화면에 동적으로 렌더링
    // ==========================================================
    function renderSubjectTeachers(teachers) {
        // [1] teacher-list-title 클래스를 가진 제목 요소 선택
        const titles = document.querySelector(".teacher-list-title");

        // [2] 제목 다음에 오는 div 요소(컨테이너)를 선택
        // ex) <h3 class="teacher-list-title">영어</h3> 바로 다음 <div>를 선택
        let container = titles?.nextElementSibling;

        // [3] 컨테이너가 존재하지 않으면 오류 메시지 출력 후 종료
        if (!container) {
            console.error("과목별 선생님 조회 중 문제 발생");
            return;
        }

        // [4] 기존 목록 초기화 (중복 방지)
        container.innerHTML = "";

        // [5] 선생님 데이터가 없을 경우 안내 문구 출력
        if (!teachers || teachers.length === 0) {
            container.innerHTML = `<p class="no-lecture">해당 과목의 선생님이 존재하지 않습니다.</p>`;
            return;
        }

        // [6] 선생님 배열을 순회하며 DOM 요소를 하나씩 생성
        teachers.forEach((teacher) => {
            // 각 선생님에 대한 div 생성
            const item = document.createElement("div");
            item.classList.add("recent-lecture-item"); // 스타일 적용용 클래스 추가

            // [7] innerHTML로 카드 구조 생성
            // 기본 이미지 + 이름 + 설명 + 평점 표시
            item.innerHTML = `
                <img src="/img/png/sample1.png" alt="강의이미지">
                <div class="lecture-info">
                  <p class="lecture-title">${teacher.nickname}</p> <!-- 선생님 닉네임 -->
                  <p class="lecture-info-text">${teacher.description || "소개가 없습니다."}</p> <!-- 자기소개 -->
                  <p class="lecture-info-text">⭐${teacher.averageRating ?? "0.0"}</p> <!-- 평균 평점 -->
                </div>
            `;

            // [8] 완성된 item을 컨테이너에 추가
            container.appendChild(item);
        })
    }
});
