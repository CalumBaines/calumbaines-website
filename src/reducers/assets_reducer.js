import { FETCH_ASSET } from '../actions/index';
const EMPTY_ARRAY = []

export default function(state = EMPTY_ARRAY, action) {
  switch(action.type) {
  case FETCH_ASSET:
    return [ ...state, action.payload.data];
  default:
    return state;
  }
}


// import { FETCH_POSTS, FETCH_POST } from '../actions/index';

// const INITIAL_STATE = { all: [], post: null };

// export default function(state = INITIAL_STATE, action) {
//   switch(action.type) {
//   case FETCH_POSTS:
//     return { ...state, all: action.payload.data.items };
//   case FETCH_POST:
//     return { ...state, post: action.payload.data };
//   default:
//     return state;
//   }
// }