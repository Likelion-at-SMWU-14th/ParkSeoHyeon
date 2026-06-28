import * as S from "./styles/Tving.styled";
import CategoryButton from "./components/CategoryButton";
import RankingDramaCard from "./components/RankingDramaCard";
import {
  categories,
  rankingDramaData,
  romanceDramaData,
} from "./data/dramaData";
import DramaCard from "./components/DramaCard";

function App() {
  return (
    <S.Page>
      <S.Header>
        <S.Logo>TVING</S.Logo>

        <S.Nav>
          <S.NavItem $active>드라마</S.NavItem>
          <S.NavItem>예능</S.NavItem>
          <S.NavItem>영화</S.NavItem>
          <S.NavItem>스포츠</S.NavItem>
          <S.NavItem>애니</S.NavItem>
          <S.NavItem>뉴스</S.NavItem>
          <S.NavItem>라이브</S.NavItem>
          <S.NavItem>숏츠</S.NavItem>
        </S.Nav>

        <S.HeaderIconArea>
          <S.SearchIcon>⌕</S.SearchIcon>

          <S.ProfileImage src="/images/profile.jpg" alt="프로필 아이콘" />
        </S.HeaderIconArea>
      </S.Header>

      <S.CategoryList>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            active={category === "전체"}
          />
        ))}
      </S.CategoryList>

      <S.Main>
        <S.SectionTitle>실시간 인기 드라마</S.SectionTitle>

        <S.RankingList>
          {rankingDramaData.map((drama) => (
            <RankingDramaCard
              key={drama.rank}
              rank={drama.rank}
              title={drama.title}
              image={drama.image}
              badge={drama.badge}
              variant={drama.variant}
            />
          ))}
        </S.RankingList>

        <S.AdBanner>
          <S.AdLeft>
            <S.AdSmallText>금연을 위한 새로운 선택</S.AdSmallText>
            <S.AdMainText>
              습관 대신 치료를 돕는
              <br />
              니코레트
            </S.AdMainText>
          </S.AdLeft>
        </S.AdBanner>

        <S.RomanceSection>
          <S.SectionTitle>로맨스 드라마</S.SectionTitle>

          <S.DramaList>
            {romanceDramaData.map((drama) => (
              <DramaCard
                key={drama.title}
                title={drama.title}
                image={drama.image}
                badge={drama.badge}
                variant={drama.variant}
              />
            ))}
          </S.DramaList>
        </S.RomanceSection>
      </S.Main>
    </S.Page>
  );
}

export default App;
