import * as S from "../styles/Tving.styled";

function CategoryButton({ label, active = false }) {
  return <S.CategoryButton $active={active}>{label}</S.CategoryButton>;
}

export default CategoryButton;
