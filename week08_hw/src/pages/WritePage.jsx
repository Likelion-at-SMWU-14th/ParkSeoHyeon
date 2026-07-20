import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const WritePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    setLoading(true);
    setError(false);

    axios
      .get(`${baseURL}/entries/${id}/`)
      .then((res) => {
        setAuthor(res.data.author);
        setComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const submitComment = () => {
    if (!author.trim() || !comment.trim()) {
      alert("이름과 내용을 모두 입력해주세요.");
      return;
    }

    setLoading(true);
    setError(false);

    const request = id
      ? axios.put(`${baseURL}/entries/${id}/`, { author, comment })
      : axios.post(`${baseURL}/entries/`, { author, comment });

    request
      .then(() => {
        alert(id ? "게시글이 수정되었어요." : "게시글 작성이 완료되었어요!!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Message>{id ? "게시글 수정 페이지 로딩중" : "게시글 작성중"}</Message>
    );
  }

  return (
    <WritePageWrapper>
      <CommentForm
        author={author}
        comment={comment}
        setAuthor={setAuthor}
        setComment={setComment}
      />
      {error && (
        <Message>
          {id ? "게시글 수정에 실패했습니다." : "게시글 작성에 실패했습니다."}
        </Message>
      )}
      <ButtonWrapper>
        <Button
          text={id ? "수정하기" : "작성하기"}
          onBtnClick={submitComment}
          disabled={loading}
        />
        <Button
          text="취소"
          onBtnClick={() => navigate(-1)}
          disabled={loading}
        />
      </ButtonWrapper>
    </WritePageWrapper>
  );
};

export default WritePage;

const WritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 4.2rem 3.88rem;
  background-color: var(--bg-light);
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const Message = styled.p`
  margin: 0;
  color: var(--text-brown);
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;
