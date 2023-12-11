export default function reducer(state, action) {
  // action is what is being passed by dispatch(...)
  // type is like saying "of the options available, which one do you want to do"
  // each case or type is function to change state
    switch(action.type) {
      case 'ADD_TODO':
        let item = {
          text: action.payload, // action.payload.input2 grabbing more than 1 payload var 
          completed: false,
          id: crypto.randomUUID() 
        };
        let newTodos = [...state, item];
        return newTodos

      case 'DELETE_TODO':
        // let filteredTodo = todos.filter((item) => item.id !== id);
        let filteredTodo = state.filter((item) => item.id !== action.payload);
        // setTodos(filteredTodo); is now return state
        return filteredTodo

      case 'COMPLETE_TODO':
        // let newTodos = todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item );
        let completeTodo = state.map((item) => item.id === action.payload ? { ...item, completed: !item.completed } : item );
        // setTodos(newTodos);
        return completeTodo

      default: 
        return state
    }
}