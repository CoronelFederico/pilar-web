import { Action } from "@remix-run/router";

//Constants
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_PAGE_NAME = "SET_PAGE_NAME";
const FILTER_COMPLETE = "FILTER_COMPLETE";

// state inicial
const stateInitial = {
  pageTitle: "TODO",
  todo: [],
};

// selectores
export const appSelector = {
  todo: (state) => state.todo,
  pageTitle: (state) => state.pageTitle,
};

// reducer
export const appReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              completed: action.payload.completed,
            };
          }
          return t;
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((t) => t.id !== action.id),
      };
    default:
      return state;

    case FILTER_COMPLETE:
      return {
        ...state,
        todo: state.todo.filter((t) => t.id.completed='true'),
      };

    case SET_PAGE_NAME:
      return {
        ...state,
        pageTitle: action.title,
      };
  }
};

// actions
export const appActions = {
  setPageTitle: (title) => ({
    type: SET_PAGE_NAME,
    title,
  }),
  addTodo: (payload) => ({
    type: ADD_TODO,
    payload,
  }),
  setCompletedTodo: (payload) => ({
    type: COMPLETE_TODO,
    payload,
  }),
  deleteTodo: (id) => ({
    type: DELETE_TODO,
    id,
  }),
  filterComplete: (id) => ({
    type: FILTER_COMPLETE,
    id,
  }),
};
