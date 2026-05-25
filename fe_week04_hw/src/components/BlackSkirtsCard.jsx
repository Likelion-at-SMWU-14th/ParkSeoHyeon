import styled from "styled-components";
import blackSkirtsImg from "../assets/blackskirts.png";

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
  background-image: url(${blackSkirtsImg});
  background-size: cover;
  background-position: center;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function BlackSkirtsCard() {
  const isHeart = true;
  return (
    <Card>
      <CardImage />
      <CardFooter>
        <div>
          <h3>Our own summer</h3>
          <p>검정치마</p>
        </div>
        <span>{isHeart ? "❤️" : null}</span>
      </CardFooter>
    </Card>
  );
}

export default BlackSkirtsCard;
