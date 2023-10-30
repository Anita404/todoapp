const defaultValues = [
  { id: 1, activity: "Jog around and find out", status: true },
  { id: 2, activity: "Feed spiteful cat", status: true },
  { id: 3, activity: "Learn frontend w/Frontend God", status: true },
  { id: 4, activity: "Figure out life", status: true },
];

const initialState = {
  todos: defaultValues,
  activeTodos: defaultValues,
  completedTodos: [],

  all: true,
  completed: false,
  active: false,
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
        activeTodos: [
          ...state.activeTodos,
          {
            activity: action.payload,
            status: true,
            id: state.activeTodos.length + 1,
          },
        ],
      };
    case "toggleTodo": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id == action.payload) {
          return {
            ...todo,
            status: !todo.status,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos,
        activeTodos: newTodos.filter((todo) => todo.status),
        completedTodos: newTodos.filter((todo) => !todo.status),
      };
    }
    case "toggleActive": {
      return {
        ...state,
        active: true,
        completed: false,
        all: false,
      };
    }
    case "toggleCompleted": {
      return {
        ...state,
        completed: true,
        active: false,
        all: false,
      };
    }
    case "toggleAll": {
      return {
        ...state,
        all: true,
        completed: false,
        active: false,
      };
    }
    case "clearCompleted": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.status),
        completedTodos: [],
      };
    }
    default:
      return initialState;
  }
};

export default todoSlice;
