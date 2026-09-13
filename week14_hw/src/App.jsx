import MyPage from "./components/MyPage";
import SignUpForm from "./components/SignUpForm";
import UpdateUserForm from "./components/UpdateUserForm";
import DeleteUserButton from "./components/DeleteUserButton";

function App() {
  const userId = 1;

  return (
    <main>
      <h1>TanStack Query 과제</h1>

      <SignUpForm />

      <hr />

      <MyPage userId={userId} />
      <UpdateUserForm userId={userId} />
      <DeleteUserButton userId={userId} />
    </main>
  );
}

export default App;
