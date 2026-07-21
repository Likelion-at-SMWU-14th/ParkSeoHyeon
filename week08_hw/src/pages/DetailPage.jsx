import Button from "../components/Button";
import styled from "styled-components";
import DetailComment from "../components/DetailComment";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`${baseURL}/entries/${id}/`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  const deleteComment = () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    setIsDeleting(true);
    setDeleteError(false);

    axios
      .delete(`${baseURL}/entries/${id}/`)
      .then(() => {
        alert("게시글이 삭제되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setDeleteError(true);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  if (loading) {
    return <Message>게시글을 불러오는 중입니다...</Message>;
  }

  if (error) {
    return <Message>게시글을 불러오지 못했습니다. 다시 시도해주세요.</Message>;
  }

  if (!detail) {
    return <Message>게시글이 존재하지 않습니다.</Message>;
  }

  return (
    <DetailPageWrapper>
      <DetailComment detail={detail} />
      {deleteError && (
        <Message>게시글 삭제에 실패했습니다. 다시 시도해주세요.</Message>
      )}
      <ButtonWrapper>
        <Button
          text="수정하기"
          onBtnClick={() => navigate(`/edit/${id}`)}
          disabled={isDeleting}
        />
        <Button
          text={isDeleting ? "삭제 중..." : "삭제하기"}
          onBtnClick={deleteComment}
          disabled={isDeleting}
        />
      </ButtonWrapper>
    </DetailPageWrapper>
  );
};

export default DetailPage;

const DetailPageWrapper = styled.div`
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
  padding: 3rem;
  color: var(--text-brown);
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;
