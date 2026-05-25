import styled from "styled-components";
import akmuImg from "../assets/akmu.png";

const Card = styled.div`
  background-color: #ebf3e8;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  background-image: url(${akmuImg});
  background-size: cover;
  background-position: center;
`;

function AkmuCard() {
  return (
    <Card>
      <CardImage />
      <div>
        <h3>소문의 낙원</h3>
        <p>AKMU</p>
      </div>
    </Card>
  );
}

export default AkmuCard;
