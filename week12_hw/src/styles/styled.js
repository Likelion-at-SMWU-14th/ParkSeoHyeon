import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #fff7dc 0%, #fffdf5 45%, #f4f8ff 100%);
  padding: 50px 24px;
  color: #3f4352;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0 0 45px;
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  color: #3b5ba9;
  letter-spacing: -1px;

  &::after {
    content: " ✨";
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const Section = styled.section`
  margin-bottom: 55px;
  padding: 28px;
  background-color: rgba(255, 255, 255, 0.78);
  border: 2px solid #eef0f7;
  border-radius: 28px;
  box-shadow: 0 10px 30px rgba(70, 84, 130, 0.08);
`;

export const SectionTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 25px;
  font-weight: 800;
  color: #545b78;

  &::before {
    content: "✦";
    margin-right: 9px;
    color: #ffb7c5;
  }
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 20px;
`;

export const PokemonCardBox = styled.div`
  padding: 20px 16px;

  background: linear-gradient(180deg, #ffffff 0%, #fffaf2 100%);

  border: 2px solid #f0e8df;
  border-radius: 22px;

  text-align: center;

  box-shadow: 0 7px 18px rgba(94, 92, 120, 0.08);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: #ffd4a8;

    box-shadow: 0 12px 24px rgba(94, 92, 120, 0.13);
  }
`;

export const PokemonImage = styled.img`
  width: 125px;
  height: 125px;
  object-fit: contain;

  transition: transform 0.2s ease;

  ${PokemonCardBox}:hover & {
    transform: scale(1.08);
  }
`;

export const PokemonName = styled.p`
  margin: 10px 0 16px;

  color: #42475a;
  font-size: 17px;
  font-weight: 700;

  text-transform: capitalize;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const AddButton = styled.button`
  border: none;
  border-radius: 12px;

  padding: 10px 14px;

  background-color: #ffcf5c;
  color: #594916;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  box-shadow: 0 4px 0 #e8ae32;

  transition:
    transform 0.1s ease,
    background-color 0.2s ease;

  &:hover {
    background-color: #ffd975;
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #e8ae32;
  }
`;

export const FavoriteButton = styled.button`
  width: 42px;

  border: none;
  border-radius: 12px;

  background-color: #ffe8ed;

  font-size: 18px;

  cursor: pointer;

  box-shadow: 0 4px 0 #f4c8d1;

  transition:
    transform 0.1s ease,
    background-color 0.2s ease;

  &:hover {
    background-color: #ffd8e1;
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #f4c8d1;
  }
`;

export const RemoveButton = styled.button`
  border: none;
  border-radius: 12px;

  padding: 9px 13px;

  background-color: #e9efff;
  color: #53669d;

  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background-color: #dce5ff;
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const EmptyMessage = styled.p`
  margin: 0;

  padding: 28px;

  background-color: #fafbff;

  border: 2px dashed #d9deee;
  border-radius: 18px;

  color: #9298aa;
  font-size: 14px;
  text-align: center;
`;
