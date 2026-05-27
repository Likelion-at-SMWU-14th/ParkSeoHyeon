import styled from "styled-components";
import kuromiImg from "../assets/kuromi.png";

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${kuromiImg});
  background-size: cover;
  background-position: center;
`;

const InfoBox = styled.div`
  background-color: #e2e5fc;
  border-radius: 20px;
  padding: 20px;
  font-weight: 700;
`;

function Profile() {
  return (
    <ProfileSection>
      <ProfileImage />
      <InfoBox>
        <div>Name : 박서현</div>
        <div>Age : 23</div>
        <div>Role : SMWU LIKELION 14th 🦁</div>
      </InfoBox>
    </ProfileSection>
  );
}

export default Profile;
