// src/components/CategoryNav.jsx
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.active ? "#E2E5FC" : "#ffffff"}; /* 노래 탭만 활성화 색상 */
  border: 1px solid #e2e8f0;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);

  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.active ? "#000000" : "#4A5568")};
`;

function CategoryNav() {
  return (
    <NavContainer>
      <NavButton>🎬 영화</NavButton>
      <NavButton active>🎵 노래</NavButton>
      <NavButton>📚 책</NavButton>
      <NavButton>☕ 카페</NavButton>
      <NavButton>✈️ 여행</NavButton>
    </NavContainer>
  );
}

export default CategoryNav;
