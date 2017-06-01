import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogIndex from './BlogIndex.js';
import BlogEntry from './BlogEntry.js';

class Blog extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/website/blog' component={BlogIndex} />
          <Route path='/website/blog' component={BlogEntry} />
        </Switch>
      </div>
    )
  }
}

export default Blog;
