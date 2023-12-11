import Todo from "./Todo";

function TodoList({ todos, listType, completeTodo, deleteTodo, dispatch }) {
  // add dispatch to prop destruct
  let filteredTodos = todos.filter((item) => {
    if (listType === "all") {
      return true;
    } else if (listType === "complete") {
      if (item.completed === true) {
        return true;
      }
    } else {
      if (item.completed === false) {
        return true;
      }
    }
    return false;
  });

  return (
    <ul>
      {filteredTodos.map((item) => (
        <Todo
          key={item.id}
          item={item}
          // completeTodo={completeTodo} // with dispatcher we can actually delete this
          // deleteTodo={deleteTodo} // with dispatcher we can actually delete this
          dispatch={dispatch} // since we have dispatcher available we can pass it as props
        />
      ))}
    </ul>
  );
}

export default TodoList;
