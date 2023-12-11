function Todo({ item, completeTodo, deleteTodo, dispatch }) {
  // add dispatch to prop destruct
  return (
    <li style={{ listStyle: "none" }}>
      <input
        type="checkbox"
        checked={item.completed}
        // onChange={() => completeTodo(item.id)}
        // change to >
        onChange={() => dispatch({type: 'COMPLETE_TODO', payload: item.id })}
      />
      {item.text}
      {/* <button onClick={() => deleteTodo(item.id)}>x</button> */}
      {/* change to > */}
      <button onClick={() => dispatch({type: 'DELETE_TODO', payload: item.id})}>x</button>
    </li>
  );
}

export default Todo;
