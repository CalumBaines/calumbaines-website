import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsShow from './components/posts_show';
import About from './components/about';
import Work from './components/work';
import Journal from './components/journal';
import CaseStudy from './components/case_study';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path ="posts/:slug" component={PostsShow} />
    <Route path ="work" component={Work} >
      <Route path ="work/:slug" component={CaseStudy} />      
    </Route>
    <Route path ="journal" component={Journal} />
    <Route path ="about" component={About} />
  </Route>
);

