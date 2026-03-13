import React from "react";
import styled from "styled-components";

// 댓글 리스트 아이템

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
  `

const ContentText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
`

/*
  CommentListItem 컴포넌트는 프롭스로 커멘트 객체 하나만 사용한다.
  comment 객체는 사용자가 작성한 댓글 내용이 들어있다.
  이를 스타일드 컴포넌트를 통해 만든 contentText라는 컴포넌트를 이용해서 화면에 표시한다.
  글은 클릭이 가능했지만, 댓글은 별도의 클릭기능이 없기 때문에 온클릭이벤트를 따로 처리해주지 않았습니다
*/

function CommentListItem(props) {
  const { comment } = props

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  )
}

export default CommentListItem