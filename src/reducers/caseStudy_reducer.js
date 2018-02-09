import { FETCH_CASESTUDIES, FETCH_CASESTUDY } from '../actions/index';

const INITIAL_STATE = { all: [], caseStudy: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_CASESTUDIES:
    return { ...state, all: action.payload.data.items };
  case FETCH_CASESTUDY:
    return { ...state, caseStudy: action.payload.data };
  default:
    return state;
  }
}
