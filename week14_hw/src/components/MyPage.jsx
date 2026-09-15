import { useMyPage } from "../hooks/useMyPage";

function MyPage({ userId }) {
  const { data } = useMyPage(userId);

  return (
    <section>
      <h2>마이페이지</h2>
      <p>ID: {data?.id}</p>
      <p>Username: {data?.username}</p>
    </section>
  );
}

export default MyPage;
