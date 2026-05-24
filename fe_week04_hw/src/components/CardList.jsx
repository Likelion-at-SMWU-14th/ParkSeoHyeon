// src/components/CardList.jsx
import styled from "styled-components";
import hanroroImg from "../assets/hanroro.png";
import akmuImg from "../assets/akmu.png";
import blackskirtsImg from "../assets/blackskirts.png";

const SONG_DATA = [
  { id: 1, title: "0+0", artist: "한로로", isHeart: false },
  { id: 2, title: "소문의 낙원", artist: "AKMU", isHeart: false },
  { id: 3, title: "Our own summer", artist: "검정치마", isHeart: true },
];

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BaseImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  margin-bottom: 12px;
  background-size: cover;
  background-position: center;
`;

const HanroroImage = styled(BaseImage)`
  background-image: url(${hanroroImg});
`;

const AkmuImage = styled(BaseImage)`
  background-image: url(${akmuImg});
`;

const BlackSkirtsImage = styled(BaseImage)`
  background-image: url(${blackskirtsImg});
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 4px;
  color: #000000;
`;

const ArtistName = styled.div`
  font-size: 13px;
  color: #718096;
`;

const HeartIcon = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-top: 2px;
`;

function CardList() {
  return (
    <GridContainer>
      {/* ─── 1번째 카드: 한로로 ─── */}
      <Card>
        <HanroroImage />
        <CardFooter>
          <TextGroup>
            <CardTitle>{SONG_DATA[0].title}</CardTitle>
            <ArtistName>{SONG_DATA[0].artist}</ArtistName>
          </TextGroup>

          {SONG_DATA[0].isHeart ? <HeartIcon>❤️</HeartIcon> : null}
        </CardFooter>
      </Card>

      {/* ─── 2번째 카드: AKMU ─── */}
      <Card>
        <AkmuImage />
        <CardFooter>
          <TextGroup>
            <CardTitle>{SONG_DATA[1].title}</CardTitle>
            <ArtistName>{SONG_DATA[1].artist}</ArtistName>
          </TextGroup>
          {SONG_DATA[1].isHeart ? <HeartIcon>❤️</HeartIcon> : null}
        </CardFooter>
      </Card>

      {/* ─── 3번째 카드: 검정치마  ─── */}
      <Card>
        <BlackSkirtsImage />
        <CardFooter>
          <TextGroup>
            <CardTitle>{SONG_DATA[2].title}</CardTitle>
            <ArtistName>{SONG_DATA[2].artist}</ArtistName>
          </TextGroup>
          {SONG_DATA[2].isHeart ? <HeartIcon>❤️</HeartIcon> : null}
        </CardFooter>
      </Card>
    </GridContainer>
  );
}

export default CardList;
