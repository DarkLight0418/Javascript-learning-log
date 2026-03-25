import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from './../list/CommentList';
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json"

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
const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`

/*
  postViewPage 컴포넌트에서는 먼저 프롭스로 전달받은 글의 ID를 이용해서 전체 데이터에서 해당되는 글을 찾습니다. 
  그리고 찾은 글의 제목,내용,댓글을 랜더링하게 되고 그 아래에는 TextInput 컴포넌트와 Button 컴포넌트를 이용해 댓글을 작성할 수 있도록 ui를 제공했습니다.
*/

function PostViewPage(props) {
  const navigate = useNavigate()
  const { postId } = useParams()


  const post = data.find((item) => {
    return item.id == postId
  })

  const [comment, setComment] = useState("")

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => {
            navigate("/")
          }}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={40}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value)
          }}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            navigate("/")
          }}
        />
      </Container>
    </Wrapper>
  )
}

export default PostViewPage