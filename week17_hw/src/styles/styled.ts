import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; background: white; color: #24212a; font-family: 'Segoe UI', 'Malgun Gothic', sans-serif; -webkit-font-smoothing: antialiased; }
  button, input, select { font: inherit; }
  button, select { cursor: pointer; }
  a { color: inherit; }
  :focus-visible { outline: 3px solid #9879e5; outline-offset: 4px; }
  ::selection { background: #ebe2fc; }
`;
export const Page = styled.div`min-height: 100vh;`;
export const Header = styled.header`height: 76px; border-bottom: 1px solid #eeedf1; padding: 0 max(24px, calc((100vw - 1040px) / 2)); display: flex; align-items: center; justify-content: space-between; gap: 18px; @media(max-width:600px) { height: 64px; padding: 0 20px; }`;
export const Brand = styled.div`display: flex; align-items: center; gap: 9px; font-size: 18px; font-weight: 700; letter-spacing: -.6px;`;
export const BrandMark = styled.span`color: #7951c8; font-size: 29px; font-weight: 750; letter-spacing: -2px;`;
export const HeaderNote = styled.span`color: #847e8e; font-size: 12px; @media(max-width:420px) { display: none; }`;
export const Main = styled.main`max-width: 1088px; margin: auto; padding: 48px 24px 64px; @media(max-width:600px) { padding: 30px 20px 40px; }`;
export const Heading = styled.div`margin-bottom: 28px;`;
export const Eyebrow = styled.p`color: #7951c8; font-size: 12px; font-weight: 650; margin: 0 0 12px;`;
export const Title = styled.h1`font-size: clamp(27px,3vw,34px); letter-spacing: -1.4px; line-height: 1.35; margin: 0; font-weight: 700;`;
export const Intro = styled.p`font-size: 14px; color: #817a8a; margin: 13px 0 0; line-height: 1.8; @media(max-width:600px) { font-size: 13px; }`;
export const SearchBox = styled.div`display: flex; align-items: center; gap: 12px; border: 1px solid #e5e1ec; background: #faf9fc; border-radius: 10px; height: 52px; padding: 0 18px; &:focus-within { border-color: #9879e5; box-shadow: 0 0 0 3px #f2ecfc; }`;
export const SearchIcon = styled.span`width: 20px; height: 20px; flex-shrink: 0; color: #8b7c9d; svg { width: 100%; height: 100%; }`;
export const Input = styled.input`flex: 1; min-width: 0; height: 100%; border: none; background: transparent; outline: none; color: #332c3d; font-size: 14px; &::placeholder { color: #918999; } &:focus-visible { outline: none; }`;
export const Filters = styled.div`display: flex; align-items: center; gap: 14px; flex-wrap: wrap; padding: 18px 0 26px; border-bottom: 1px solid #e9e6ef; @media(max-width:600px) { gap: 12px; }`;
export const SelectGroup = styled.div`display: flex; align-items: center; gap: 6px; border: 1px solid #e8e5ee; border-radius: 7px; padding: 0 10px; height: 38px;`;
export const FieldLabel = styled.label`color: #88808f; font-size: 12px; white-space: nowrap;`;
export const Select = styled.select`border: 0; background: white; color: #383140; font-size: 12px; padding: 6px 0; max-width: 110px;`;
export const CheckLabel = styled.label`display: flex; align-items: center; gap: 7px; font-size: 12px; color: #645c6e; cursor: pointer; input { accent-color: #7951c8; width: 15px; height: 15px; margin: 0; cursor: pointer; }`;
export const ResetButton = styled.button`border: 0; background: transparent; color: #7951c8; font-size: 12px; padding: 8px 0; margin-left: auto; &:hover { text-decoration: underline; }`;
export const Results = styled.section`margin-top: 26px;`;
export const ResultsHeader = styled.div`display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 16px;`;
export const ResultsTitle = styled.h2`display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 650; margin: 0;`;
export const Count = styled.span`color: #7951c8; font-size: 14px;`;
export const ResultsHint = styled.span`color: #958c9d; font-size: 11px;`;
export const CardList = styled.div`display: grid; gap: 12px;`;
export const Card = styled.article`display: flex; align-items: center; gap: 24px; padding: 24px 28px; border: 1px solid #e9e5ef; border-radius: 10px; background: white; transition: border-color .18s, background .18s; &:hover { border-color: #cbb8ed; background: #fdfcfe; } @media(max-width:600px) { padding: 20px 18px; gap: 0; flex-wrap: wrap; align-items: start; }`;
export const CardNumber = styled.span`font-size: 13px; color: #b4a9c1; font-variant-numeric: tabular-nums; align-self: start; padding-top: 4px; @media(max-width:600px) { display: none; }`;
export const CardBody = styled.div`flex: 1; min-width: 0; @media(max-width:600px) { flex-basis: 100%; }`;
export const Location = styled.p`margin: 0 0 6px; font-size: 11px; color: #7951c8; font-weight: 550;`;
export const CardTitle = styled.h3`margin: 0; font-size: 19px; letter-spacing: -.7px; line-height: 1.5; @media(max-width:600px) { font-size: 18px; }`;
export const Address = styled.p`font-size: 12px; color: #8a8193; margin: 7px 0 14px; line-height: 1.7;`;
export const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 6px;`;
export const Tag = styled.span<{ $accent?: boolean }>`font-size: 11px; padding: 5px 8px; border-radius: 5px; color: ${({ $accent }) => $accent ? '#7951c8' : '#7c7386'}; background: ${({ $accent }) => $accent ? '#f0e9fc' : '#f5f4f7'};`;
export const CardActions = styled.div`min-width: 110px; display: flex; flex-direction: column; align-items: end; gap: 16px; @media(max-width:600px) { width: 100%; margin-top: 20px; padding-top: 16px; border-top: 1px solid #f0edf5; flex-direction: row; justify-content: space-between; align-items: center; }`;
export const Price = styled.div`font-size: 19px; font-weight: 650; letter-spacing: -.4px; small { display: block; margin-bottom: 5px; font-size: 10px; color: #92879e; font-weight: 400; letter-spacing: 0; } span { font-size: 12px; font-weight: 400; margin-left: 3px; }`;
export const MapLink = styled.a`display: inline-flex; align-items: center; gap: 15px; text-decoration: none; color: #7951c8; background: #f4effc; padding: 10px 13px; border-radius: 7px; font-size: 12px; &:hover { background: #eae0fa; }`;
export const EmptyState = styled.div`text-align: center; padding: 60px 20px; color: #83798f; border: 1px dashed #dfd6ea; border-radius: 10px; h3 { color: #42364f; font-size: 17px; } p { font-size: 13px; }`;
export const Footer = styled.footer`max-width: 1040px; margin: auto; padding: 22px 0 32px; border-top: 1px solid #eeebf3; display: flex; justify-content: space-between; gap: 20px; font-size: 11px; color: #998fa4; @media(max-width:1088px) { margin: 0 24px; } @media(max-width:600px) { margin: 0 20px; flex-wrap: wrap; }`;
