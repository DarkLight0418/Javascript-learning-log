import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from './../list/PostList';
import Button from './../ui/Button';
import data from "../../data.json"

// Button 컴포넌트 -> 글 작성하기, 페이지 이동 / PostList 컴포넌트 -> 글 목록 표시

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`
// useNavigate hook -> 페이지 이동

function MainPage(props) {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Container>
        <Button
          title="글작성하기"
          onClick={() => {
            navigate("/post-write")
          }}
        />
      </Container>
    </Wrapper>
  )
}

export default MainPage