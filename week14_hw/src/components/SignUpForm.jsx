import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate({
      username,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "가입 중..." : "회원가입"}
      </button>
    </form>
  );
}

export default SignUpForm;
