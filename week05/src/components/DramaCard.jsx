import * as S from "../styles/Tving.styled";

function DramaCard({ title, image, badge, variant = "basic" }) {
  return (
    <S.DramaCard>
      <S.DramaPosterWrapper>
        {badge && <S.Badge $variant={variant}>{badge}</S.Badge>}

        <S.DramaPoster src={image} alt={title} />
      </S.DramaPosterWrapper>
    </S.DramaCard>
  );
}

export default DramaCard;
