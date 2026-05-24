// src/App.jsx
import styled from "styled-components";
import CategoryNav from "./components/CategoryNav";
import CardList from "./components/CardList";
// 1. 상단에서 쿠로미 이미지를 직접 불러옵니다!
import kuromiImg from "./assets/kuromi.png";

const AppContainer = styled.div`
  background-color: #ebf0f9;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  /* 하드코딩으로 이미지 넣기 */
  background-image: url(${kuromiImg});
  background-size: cover;
  background-position: center;
`;

const InfoBox = styled.div`
  flex: 1;
  background-color: #e2e5fc;
  border-radius: 20px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 15px;
  font-weight: 700;
  color: #000000;
`;

const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: 800;
  color: #1a1a1a;
  margin-top: 10px;
  margin-bottom: -5px;
`;

const ArchiveBox = styled.div`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        {/* 상단 프로필 구역 */}
        <ProfileSection>
          {/* 위에서 정의한 쿠로미 배경 프로필 이미지 컴포넌트 */}
          <ProfileImage />
          <InfoBox>
            <div>Name : 박서현</div>
            <div>Age : 23</div>
            <div>Role : SMWU LIKELION 14th 🦁</div>
          </InfoBox>
        </ProfileSection>

        {/* 중간 타이틀 */}
        <MainTitle>SEOHYUN'S ARCHIVE 📂</MainTitle>

        {/* 하단 카드 전용 박스 */}
        <ArchiveBox>
          <CategoryNav />
          <CardList />
        </ArchiveBox>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
