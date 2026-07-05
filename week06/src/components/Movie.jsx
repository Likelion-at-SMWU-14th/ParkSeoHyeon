import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function Movie() {
  const [movies, setMovies] = useState([]);

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
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const MovieCard = styled.div`
  overflow: hidden;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  padding: 16px;
`;

const MovieTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 20px;
`;

const Rating = styled.p`
  margin: 6px 0;
  font-weight: bold;
`;

const Genre = styled.p`
  margin: 6px 0;
  color: #666666;
`;

const Description = styled.p`
  margin: 10px 0 0;
  line-height: 1.5;
  color: #444444;
`;

export default Movie;
