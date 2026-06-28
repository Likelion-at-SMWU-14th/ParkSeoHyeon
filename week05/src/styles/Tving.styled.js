import styled from "styled-components";

export const CategoryButton = styled.button`
  flex-shrink: 0;
  padding: 1rem 2.8rem;
  border: 1px solid ${({ $active }) => ($active ? "#ffffff" : "#4a4a4a")};
  border-radius: 999px;
  background-color: ${({ $active }) => ($active ? "#ffffff" : "#252525")};
  color: ${({ $active }) => ($active ? "#111111" : "#e7e7e7")};
  font-size: 1rem;
  font-weight: 600;
`;

export const RankingCard = styled.article`
  display: flex;
  align-items: flex-end;
  gap: 0.8rem;
  flex-shrink: 0;
`;

export const RankNumber = styled.span`
  color: #ffffff;
  font-size: 7rem;
  font-style: italic;
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.7rem;
`;

export const PosterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 13.5rem;
  height: 19.5rem;
  border-radius: 0.3rem;
  background-color: #2b2b2b;
`;

export const RankingPoster = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Badge = styled.span`
  position: absolute;
  top: 0.55rem;
  left: 0.55rem;
  z-index: 1;
  padding: 0.35rem 0.45rem;
  border-radius: 0.25rem;
  background-color: ${({ $variant }) =>
    $variant === "pink" ? "#ee4d68" : "#ef3340"};
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 800;
`;

export const Page = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #000;
  color: #fff;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1.6rem 4rem;
  border-bottom: 1px solid #151515;
`;

export const Logo = styled.h1`
  margin: 0;
  color: #ef3340;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.12rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: 1;
`;

export const NavItem = styled.span`
  color: ${({ $active }) => ($active ? "#ffffff" : "#9b9b9b")};
  font-size: 1rem;
  font-weight: ${({ $active }) => ($active ? "700" : "500")};
`;

export const HeaderIconArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
`;

export const SearchIcon = styled.span`
  font-size: 2rem;
  line-height: 1;
`;

export const ProfileIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #ef3340;
  color: #000;
  font-size: 0.7rem;
`;

export const CategoryList = styled.section`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding: 2.5rem 4rem 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Main = styled.main`
  padding: 2rem 4rem 5rem;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 1.5rem;
  font-size: 1.7rem;
`;

export const RankingList = styled.section`
  display: flex;
  gap: 2.3rem;
  overflow-x: auto;
  padding: 1rem 0 2.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AdBanner = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 60rem;
  height: 10rem;
  margin: 0 0 3.5rem;
  padding: 0 4rem;
  overflow: hidden;
  border-radius: 0.4rem;
  background: linear-gradient(90deg, #d7f9fb 0%, #b9e9ed 100%);
`;

export const AdLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const AdSmallText = styled.p`
  margin: 0;
  color: #4c8a6a;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const AdMainText = styled.p`
  margin: 0;
  color: #197249;
  font-size: 1.65rem;
  font-weight: 900;
  line-height: 1.3;
`;

export const AdRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AdCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 50%;
  background-color: #f7fbfb;
  color: #3f9d78;
  font-size: 1.2rem;
  font-weight: 900;
  box-shadow: 0 0.4rem 0.8rem rgba(45, 118, 92, 0.15);
`;

export const AdProductText = styled.span`
  color: #2f9c72;
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.05rem;
`;

export const DramaCard = styled.article`
  flex-shrink: 0;
`;

export const DramaPosterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 13.5rem;
  height: 19.5rem;
  border-radius: 0.3rem;
  background-color: #2b2b2b;
`;

export const DramaPoster = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RomanceSection = styled.section`
  margin-top: 1rem;
`;

export const DramaList = styled.section`
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding: 0.5rem 0 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
