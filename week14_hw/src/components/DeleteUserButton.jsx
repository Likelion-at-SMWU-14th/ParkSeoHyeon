import { useDeleteUser } from "../hooks/useDeleteUser";

function DeleteUserButton({ userId }) {
  const { mutate, isPending } = useDeleteUser();

  const handleDelete = () => {
    mutate(userId);
  };

  return (
    <button onClick={handleDelete} disabled={isPending}>
      {isPending ? "탈퇴 중..." : "회원 탈퇴"}
    </button>
  );
}

export default DeleteUserButton;
