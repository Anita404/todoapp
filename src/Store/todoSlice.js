const initialState = {
  todos: [
    { id: 1, activity: "Jog around and find out", status: true },
    { id: 2, activity: "Feed spiteful cat", status: true },
    { id: 3, activity: "Learn frontend w/Frontend God", status: true },
    { id: 4, activity: "Figure out life", status: true },
  ],
};

const todoSlice = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            activity: action.payload,
            status: true,
            id: state.todos.length + 1,
          },
        ],
      };
    case "toggleTodo": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id == action.payload) {
            return {
              ...todo,
              status: !todo.status,
            };
          }
          return todo;
        }),
      };
    }
    default:
      return initialState;
  }
};

export default todoSlice;
