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

