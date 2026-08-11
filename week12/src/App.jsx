import { useState } from "react";
import TodoItem from "./components/TodoItem";
import useTodoStore from "./store/store";
import * as S from "./styles/styled";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useTodoStore((s) => S.todos);
  const addTodo = useTodoStore((s) => S.addTodo);

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    addTodo(newTodo);
    setNewTodo("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };
  return (
    <>
      <S.GlobalStyle />
      <S.page>
        <S.Card>
          <S.H1>투두리스트</S.H1>

          <form onSubmit={handleSubmit}>
            <S.Row>
              <S.TextInput
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="할일을 추가해봐"
              />
            </S.Row>
          </form>
          <S.List>
            {todos.length === 0 ? (
              <S.Empty>할 일이 없어요. 빨리 추가해봅시다! </S.Empty>
            ) : (
              todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
          </S.List>
        </S.Card>
      </S.page>
    </>
  );
}

export default App;
