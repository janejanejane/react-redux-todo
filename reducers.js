import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// };

function todos( state = [], action ) {
  switch ( action.type ) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if( index === action.index ) {
          return Object.assign({}, todo, {
            completed: true
          });
        }
        return todo
      });
    default:
      return state;
  }
}

function visibilityFilter( state = SHOW_ALL, action ) {
  switch( action.type ) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// function todoApp( state = initialState, action ) {
//   return {
//     visibilityFilter: visibilityFilter( state.visibilityFilter, action ),
//     todos: todos( state.todos, action )
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
