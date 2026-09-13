import { useState } from "react";
import { useUpdateUser } from "../hooks/useUpdateUser";

function UpdateUserForm({ userId }) {
  const [username, setUsername] = useState("");

  const { mutate, isPending } = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      userId,
      username,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>개인정보 수정</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="새 username"
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "수정 중..." : "수정"}
      </button>
    </form>
  );
}

export default UpdateUserForm;
