import styled from "styled-components";
import hanroroImg from "../assets/hanroro.png";

const Card = styled.div`
  background-color: #e4f1e1;
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
  background-image: url(${hanroroImg});
  background-size: cover;
  background-position: center;
`;

function HanroroCard() {
  return (
    <Card>
      <CardImage />
      <div>
        <h3>0+0</h3>
        <p>한로로</p>
      </div>
    </Card>
  );
}

export default HanroroCard;
