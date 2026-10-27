import type { CafeSummary } from '../types/cafe';
import * as S from '../styles/styled';
interface CafeCardProps {
  cafe: CafeSummary;
  index: number;
}
export default function CafeCard({ cafe, index }: CafeCardProps) {
  return (
    <S.Card>
      <S.CardNumber aria-hidden="true">{String(index + 1).padStart(2, '0')}</S.CardNumber>
      <S.CardBody>
        <S.Location>{cafe.area}</S.Location>
        <S.CardTitle>{cafe.name}</S.CardTitle>
        <S.Address>{cafe.address}</S.Address>
        <S.Tags><S.Tag $accent={cafe.noise === '조용함'}>{cafe.noise ?? '소음 미확인'}</S.Tag><S.Tag>콘센트 {cafe.outlet ?? '미확인'}</S.Tag>{cafe.wifi && <S.Tag>와이파이</S.Tag>}{cafe.hasLargeTable && <S.Tag>큰 테이블</S.Tag>}</S.Tags>
      </S.CardBody>
      <S.CardActions>
        <S.Price><small>아메리카노</small>{cafe.coffeePrice.toLocaleString('ko-KR')}<span>원</span></S.Price>
        <S.MapLink href={cafe.naverMapUrl} target="_blank" rel="noopener noreferrer" aria-label={`${cafe.name} 네이버 지도 새 창에서 보기`}>지도 보기 <span aria-hidden="true">↗</span></S.MapLink>
      </S.CardActions>
    </S.Card>
  );
}
