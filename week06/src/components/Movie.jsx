import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  return (
    <Container>
      <Title>무비차트</Title>

      <SearchInput
        type="text"
        placeholder="영화 제목을 검색하세요"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <Poster src={movie.poster} alt={movie.title} />

            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <Rating>⭐ {movie.rating}</Rating>
              <Genre>{movie.genre}</Genre>
              <Description>{movie.description}</Description>
            </MovieInfo>
          </MovieCard>
        ))}
      </MovieGrid>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 40px;
  background-color: #ffffff;
  color: #111;
`;

const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 12px 16px;
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #ff7a2f;
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

const MovieCard = styled.div`
  overflow: hidden;
  border-radius: 16px;
  background-color: #1f1f1f;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
`;

const Poster = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
`;

const MovieInfo = styled.div`
  padding: 16px;
`;

const MovieTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

const Rating = styled.p`
  margin-bottom: 8px;
  color: #ffd166;
  font-size: 15px;
`;

const Genre = styled.p`
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: #ff7a2f;
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

const Description = styled.p`
  color: #cccccc;
  font-size: 14px;
  line-height: 1.5;
`;

export default Movie;
