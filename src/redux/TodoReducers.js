const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddTodo":
      return [...state, { title: action.title, id: action.id }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
