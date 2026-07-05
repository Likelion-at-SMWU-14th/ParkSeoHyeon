import * as S from "../styles/Tving.styled";

function RankingDramaCard({ rank, title, image, badge, variant = "basic" }) {
  return (
    <S.RankingCard>
      <S.RankNumber>{rank}</S.RankNumber>

      <S.PosterWrapper>
        {badge && <S.Badge $variant={variant}>{badge}</S.Badge>}

        <S.RankingPoster src={image} alt={title} />
      </S.PosterWrapper>
    </S.RankingCard>
  );
}

export default RankingDramaCard;
