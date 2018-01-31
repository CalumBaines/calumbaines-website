import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import WorkReducer from './caseStudy_reducer';
import AssetsReducer from './assets_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  work: WorkReducer,
  assets: AssetsReducer
});
export default rootReducer;
