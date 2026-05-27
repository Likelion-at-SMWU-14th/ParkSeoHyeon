import styled from "styled-components";

export const AppContainer = styled.div`
  background-color: #ebf0f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const ArchiveBox = styled.div`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 32px;
  width: 100%;
  max-width: 900px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
