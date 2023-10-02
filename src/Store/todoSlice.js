const initialState = {
  todos: [
    { activity: "Jog around and find out" },
    { activity: "Feed spiteful cat" },
    { activity: "Learn frontend w/Frontend God" },
    { activity: "Figure out life" },
  ],
};

const todoSlice = (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, { activity: action.payload }],
      };

    default:
      return initialState;
  }
};

export default todoSlice;
