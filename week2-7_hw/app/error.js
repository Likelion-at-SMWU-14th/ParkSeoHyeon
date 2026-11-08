"use client";

export default function ErrorPage({ reset }) {
  return (
    <section className="dashboard feedback" role="alert">
      <h1>가계부를 불러오지 못했어요.</h1>
      <p>잠시 후 다시 시도해주세요.</p>
      <button className="action-button" onClick={() => reset()}>다시 시도</button>
    </section>
  );
}
