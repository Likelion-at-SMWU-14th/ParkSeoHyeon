import { useState } from 'react';
import CafeCard from './components/CafeCard';
import data from '../db.json';
import * as S from './styles/styled';

// 화면 확인용 로컬 데이터. 다음 단계에서 Axios 조회로 교체합니다.
function App() {
  const [search, setSearch] = useState('');
  const [area, setArea] = useState('');
  const [outlet, setOutlet] = useState('');
  const [noise, setNoise] = useState('');
  const [largeTable, setLargeTable] = useState(false);
  const [wifi, setWifi] = useState(false);
  const cafes = data.cafes.filter((cafe) =>
    `${cafe.name} ${cafe.area} ${cafe.address}`.toLowerCase().includes(search.trim().toLowerCase())
    && (!area || cafe.area === area) && (!outlet || cafe.outlet === outlet)
    && (!noise || cafe.noise === noise) && (!largeTable || cafe.hasLargeTable) && (!wifi || cafe.wifi),
  );
  function resetFilters() {
    setSearch(''); setArea(''); setOutlet(''); setNoise(''); setLargeTable(false); setWifi(false);
  }
  return (
    <S.Page>
      <S.Header><S.Brand><S.BrandMark aria-hidden="true">c.</S.BrandMark> cafe & focus</S.Brand><S.HeaderNote>서울의 공부 공간</S.HeaderNote></S.Header>
      <S.Main>
        <S.Heading><S.Eyebrow>카페 모음</S.Eyebrow><S.Title>공부하기 좋은 카페</S.Title><S.Intro>지역과 공부 환경을 비교하고, 마음에 드는 곳을 찾아보세요.</S.Intro></S.Heading>
        <S.SearchBox><S.SearchIcon aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></svg></S.SearchIcon><S.Input aria-label="카페 이름 또는 지역 검색" placeholder="카페 이름 또는 지역 검색" value={search} onChange={(event) => setSearch(event.target.value)} /></S.SearchBox>
        <S.Filters aria-label="카페 필터">
          <S.SelectGroup><S.FieldLabel htmlFor="area">지역</S.FieldLabel><S.Select id="area" value={area} onChange={(event) => setArea(event.target.value)}><option value="">전체</option>{[...new Set(data.cafes.map((cafe) => cafe.area))].map((value) => <option key={value}>{value}</option>)}</S.Select></S.SelectGroup>
          <S.SelectGroup><S.FieldLabel htmlFor="outlet">콘센트</S.FieldLabel><S.Select id="outlet" value={outlet} onChange={(event) => setOutlet(event.target.value)}><option value="">전체</option><option>많음</option><option>적음</option><option>없음</option></S.Select></S.SelectGroup>
          <S.SelectGroup><S.FieldLabel htmlFor="noise">소음</S.FieldLabel><S.Select id="noise" value={noise} onChange={(event) => setNoise(event.target.value)}><option value="">전체</option><option>조용함</option><option>보통</option><option>시끄러움</option></S.Select></S.SelectGroup>
          <S.CheckLabel><input type="checkbox" checked={wifi} onChange={(event) => setWifi(event.target.checked)} /> 와이파이</S.CheckLabel>
          <S.CheckLabel><input type="checkbox" checked={largeTable} onChange={(event) => setLargeTable(event.target.checked)} /> 큰 테이블</S.CheckLabel>
          <S.ResetButton type="button" onClick={resetFilters}>초기화</S.ResetButton>
        </S.Filters>
        <S.Results aria-labelledby="cafes-title">
          <S.ResultsHeader><S.ResultsTitle id="cafes-title">카페 목록 <S.Count>{cafes.length}</S.Count></S.ResultsTitle><S.ResultsHint>아메리카노 가격 기준</S.ResultsHint></S.ResultsHeader>
          <S.CardList>{cafes.map((cafe, index) => <CafeCard key={cafe.id} cafe={cafe} index={index} />)}</S.CardList>
          {cafes.length === 0 && <S.EmptyState><h3>조건에 맞는 카페가 없어요</h3><p>검색어나 필터를 바꿔보세요.</p><S.ResetButton type="button" onClick={resetFilters}>필터 초기화</S.ResetButton></S.EmptyState>}
        </S.Results>
      </S.Main>
      <S.Footer><span>cafe & focus</span><span>매장 정보와 가격은 달라질 수 있어요.</span></S.Footer>
    </S.Page>
  );
}
export default App;
