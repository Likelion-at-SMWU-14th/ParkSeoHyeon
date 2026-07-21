import Comment from "./Comment";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`${baseURL}/entries/`)
      .then((res) => {
        setComments([...res.data].reverse());
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Message>게시글을 불러오는 중입니다...</Message>;
  }

  if (error) {
    return <Message>게시글을 불러오지 못했습니다. 다시 시도해주세요.</Message>;
  }

  if (comments.length === 0) {
    return <Message>아직 등록된 게시글이 없습니다.</Message>;
  }

  return (
    <CommentWrapper>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </CommentWrapper>
  );
};

export default CommentList;

const CommentWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 2rem 3.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem 1.75rem;
`;

const Message = styled.p`
  margin: 0;
  padding: 3rem 3.5rem;
  color: var(--text-brown);
  font-size: 1.25rem;
  font-weight: 600;
`;
