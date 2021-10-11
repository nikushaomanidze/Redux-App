
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const initialState = { teamList: [] };

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        teamList: state.teamList.concat({
          id: Math.random(),
          title: action.payload,
        }),
      };
    case REMOVE_TODO:
      return {
        ...state,
        teamList: state.teamList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default TodoReducer;
