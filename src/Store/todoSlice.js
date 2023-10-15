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
        todos: [...state.todos, { activity: action.payload, status: true }],
      };
    case "removeTodo": //need to change status to false targetting specific id upon click // dispatch - have to add smtng
      return {
        ...state,
        todos: [
          ...state.todos.filter((todos) => todos !== action.payload),
          { id: action.payload, status: false },
        ],
      };
    default:
      return initialState;
  }
};

export default todoSlice;
